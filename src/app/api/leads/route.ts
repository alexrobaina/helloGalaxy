import { NextRequest, NextResponse } from 'next/server';
import { rateLimitMiddleware } from '@/app/api/chat/rateLimitMiddleware';
import { saveLead, type Lead } from '@/lib/leads';

export const runtime = 'nodejs';

const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
const clean = (v: unknown, max: number) =>
  typeof v === 'string' ? v.trim().slice(0, max) : '';

export async function POST(req: NextRequest) {
  const limited = await rateLimitMiddleware(req);
  if (limited) return limited;

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid JSON' }, { status: 400 });
  }

  // Honeypot: real users never fill this hidden field. Pretend success.
  if (clean(body.company, 100)) {
    return NextResponse.json({ ok: true });
  }

  const name = clean(body.name, 120);
  const email = clean(body.email, 200);
  if (!name || !email || !isEmail(email)) {
    return NextResponse.json(
      { ok: false, error: 'A valid name and email are required.' },
      { status: 422 }
    );
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
    return NextResponse.json(
      { ok: false, error: 'Lead delivery is not configured yet.' },
      { status: 503 }
    );
  }
  return NextResponse.json({ ok: true });
}
