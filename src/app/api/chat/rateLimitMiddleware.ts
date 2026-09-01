// Simple in-memory rate limiter for Next.js API routes.
import { NextRequest, NextResponse } from 'next/server';

export interface RateLimitOptions {
  /**
   * Namespace for the bucket. Routes that pass different names get
   * independent budgets — without this, playing with the AI chat consumed the
   * contact form's allowance, and the form started answering 429.
   */
  name: string;
  /** Max requests per window. */
  limit: number;
  /** Window length in milliseconds. */
  windowMs: number;
}

const DEFAULTS: RateLimitOptions = { name: 'default', limit: 5, windowMs: 60_000 };

const rateLimitMap = new Map<string, number[]>(); // Map<`${name}:${ip}`, timestamps[]>

function cleanOld(arr: number[], windowMs: number) {
  const now = Date.now();
  return arr.filter((ts) => now - ts < windowMs);
}

function getIP(req: NextRequest): string {
  const forwardedFor = req.headers.get('x-forwarded-for');
  if (forwardedFor) return forwardedFor.split(',')[0].trim();
  return req.headers.get('x-real-ip')?.trim() || 'unknown';
}

/** Drop buckets that are entirely outside their window, so the map cannot grow forever. */
function evictStale(windowMs: number) {
  const now = Date.now();
  for (const [key, times] of rateLimitMap) {
    if (times.every((ts) => now - ts >= windowMs)) rateLimitMap.delete(key);
  }
}

export async function rateLimitMiddleware(
  req: NextRequest,
  options: Partial<RateLimitOptions> = {}
): Promise<NextResponse | null> {
  const { name, limit, windowMs } = { ...DEFAULTS, ...options };
  const key = `${name}:${getIP(req)}`;

  if (rateLimitMap.size > 500) evictStale(windowMs);

  const recent = cleanOld(rateLimitMap.get(key) || [], windowMs);

  if (recent.length >= limit) {
    const retryAfter = Math.max(
      1,
      Math.ceil((windowMs - (Date.now() - Math.min(...recent))) / 1000)
    );
    return NextResponse.json(
      // `code` lets the client render a message in the visitor's own language.
      { ok: false, code: 'rate_limited', error: 'Too many requests. Please slow down.' },
      { status: 429, headers: { 'Retry-After': String(retryAfter) } }
    );
  }

  recent.push(Date.now());
  rateLimitMap.set(key, recent);
  return null; // No rate limit triggered
}
