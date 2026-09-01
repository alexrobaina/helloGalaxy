import { NextRequest, NextResponse } from 'next/server';
import { rateLimitMiddleware } from '@/app/api/chat/rateLimitMiddleware';
import { saveLead, type Lead } from '@/lib/leads';

export const runtime = 'nodejs';

const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
const clean = (v: unknown, max: number) =>
  typeof v === 'string' ? v.trim().slice(0, max) : '';

/**
 * Every failure carries a stable `code` alongside the English `error`, so the
 * client can show the message in the visitor's own language instead of
 * echoing a hardcoded English string.
 */
const fail = (code: string, error: string, status: number) =>
  NextResponse.json({ ok: false, code, error }, { status });

export async function POST(req: NextRequest) {
  // Its own bucket, and a window sized for a contact form rather than a chat
  // playground: nobody legitimately sends 5 enquiries a minute, but a visitor
  // who mistypes their email twice must not be locked out.
  const limited = await rateLimitMiddleware(req, {
    name: 'leads',
    limit: 8,
    windowMs: 10 * 60_000,
  });
  if (limited) return limited;

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return fail('invalid_json', 'Invalid JSON', 400);
  }

  // Honeypot: real users never fill this hidden field. Pretend success.
  if (clean(body.company, 100)) {
    console.warn('[leads] Honeypot triggered, lead discarded.');
    return NextResponse.json({ ok: true });
  }

  const name = clean(body.name, 120);
  const email = clean(body.email, 200);
  if (!name || !email || !isEmail(email)) {
    return fail('invalid_fields', 'A valid name and email are required.', 422);
  }

  const lead: Lead = {
    name,
    email,
    business: clean(body.business, 160) || undefined,
    trade: clean(body.trade, 60) || undefined,
    phone: clean(body.phone, 40) || undefined,
    message: clean(body.message, 2000) || undefined,
    source: clean(body.source, 80) || 'websites',
  };

  const result = await saveLead(lead);
  if (!result.stored) {
    // Distinguish "nothing is wired up" from "a configured sink just failed" —
    // the second is an outage we must be able to spot in the logs.
    const misconfigured = result.sinks.db === 'skipped' && result.sinks.email === 'skipped';
    return fail(
      misconfigured ? 'not_configured' : 'delivery_failed',
      misconfigured
        ? 'Lead delivery is not configured yet.'
        : 'We could not record your message. Please try again or contact us directly.',
      503
    );
  }
  return NextResponse.json({ ok: true });
}
