// /src/pages/api/chat.ts or /src/app/api/chat/route.ts (depending on app structure)
import { NextRequest, NextResponse } from 'next/server';
import { rateLimitMiddleware } from './rateLimitMiddleware';

const OPENAI_TIMEOUT_MS = 15000; // 15 seconds

// Helper for timeout
async function fetchWithTimeout(resource: RequestInfo, options: RequestInit = {}, timeout = OPENAI_TIMEOUT_MS) {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);
  try {
    const response = await fetch(resource, { ...options, signal: controller.signal });
    clearTimeout(id);
    return response;
  } catch (err) {
    clearTimeout(id);
    throw err;
  }
}

export async function POST(req: NextRequest) {
  // 1. Rate limiting
  const rlResponse = await rateLimitMiddleware(req);
  if (rlResponse) return rlResponse;

  try {
    const { messages } = await req.json();

    // 2. Validate input
    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json({ error: 'Messages array is required' }, { status: 400 });
    }

    // 3. Call OpenAI API
    const response = await fetchWithTimeout(
      'https://api.openai.com/v1/chat/completions',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages,
          temperature: 0.7,
          max_tokens: 500,
        }),
      },
      OPENAI_TIMEOUT_MS
    );

    // 4. Handle OpenAI response
    if (!response.ok) {
      throw new Error(`OpenAI API error: ${response.statusText}`);
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Chat API error:', error);
    if (error instanceof Error && error.name === 'AbortError') {
      return NextResponse.json({ error: 'AI service timeout. Try again later.' }, { status: 504 });
    }
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
