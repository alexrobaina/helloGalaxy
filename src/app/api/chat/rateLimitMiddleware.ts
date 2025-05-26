// Simple in-memory rate limiter middleware for Next.js API routes
import { NextRequest, NextResponse } from 'next/server';

const RATE_LIMIT = 5; // max requests per window
const RATE_WINDOW_MS = 60_000; // 1 minute

const rateLimitMap = new Map<string, number[]>(); // Map<ip, timestamps[]>

function cleanOld(arr: number[], windowMs: number) {
  const now = Date.now();
  return arr.filter(ts => now - ts < windowMs);
}

function getIP(req: NextRequest): string {
  const forwardedFor = req.headers.get('x-forwarded-for');
  if (forwardedFor) return forwardedFor.split(',')[0].trim();
  return 'unknown';
}

export async function rateLimitMiddleware(req: NextRequest): Promise<NextResponse | null> {
  const ip = getIP(req);
  const times = rateLimitMap.get(ip) || [];
  const now = Date.now();
  const recent = cleanOld(times, RATE_WINDOW_MS);
  if (recent.length >= RATE_LIMIT) {
    return NextResponse.json(
      { error: 'Too many requests. Please slow down.' },
      { status: 429 }
    );
  }
  recent.push(now);
  rateLimitMap.set(ip, recent);
  return null; // No rate limit triggered
}
