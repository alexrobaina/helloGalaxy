import 'server-only';
import { Pool } from 'pg';

/**
 * Lead capture for the /websites offer.
 *
 * Sinks are env-driven and optional — a lead is delivered to whichever are
 * configured:
 *   - DATABASE_URL      → persisted to Postgres (table auto-created)
 *   - RESEND_API_KEY    → email notification via Resend
 * If neither is set, the lead is logged server-side and reported as un-stored
 * so the caller can surface a clear error (instead of silently dropping it).
 */

export interface Lead {
  name: string;
  email: string;
  business?: string;
  trade?: string;
  phone?: string;
  message?: string;
  /** Where the lead came from, e.g. 'websites' or 'websites/plumber'. */
  source?: string;
}

export interface SaveResult {
  ok: boolean;
  stored: boolean; // true if at least one durable/notifying sink succeeded
  sinks: { db: 'ok' | 'error' | 'skipped'; email: 'ok' | 'error' | 'skipped' };
}

// Reuse a single pool across hot reloads / lambda invocations.
const globalForPg = globalThis as unknown as { _leadsPool?: Pool };

function getPool(): Pool | null {
  const connectionString = process.env.DATABASE_URL;
  if (!connectionString) return null;
  if (!globalForPg._leadsPool) {
    globalForPg._leadsPool = new Pool({
      connectionString,
      max: 3,
      ssl: connectionString.includes('localhost')
        ? false
        : { rejectUnauthorized: false },
    });
  }
  return globalForPg._leadsPool;
}

async function saveToPostgres(pool: Pool, lead: Lead): Promise<void> {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS leads (
      id          bigserial PRIMARY KEY,
      name        text NOT NULL,
      email       text NOT NULL,
      business    text,
      trade       text,
      phone       text,
      message     text,
      source      text,
      created_at  timestamptz NOT NULL DEFAULT now()
    )
  `);
  await pool.query(
    `INSERT INTO leads (name, email, business, trade, phone, message, source)
     VALUES ($1, $2, $3, $4, $5, $6, $7)`,
    [
      lead.name,
      lead.email,
      lead.business ?? null,
      lead.trade ?? null,
      lead.phone ?? null,
      lead.message ?? null,
      lead.source ?? null,
    ]
  );
}

async function notifyByEmail(lead: Lead): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return;
  const to = process.env.LEADS_NOTIFY_EMAIL ?? 'team@hellogalaxy.dev';
  const from = process.env.LEADS_FROM_EMAIL ?? 'Hello Galaxy <onboarding@resend.dev>';

  const rows = [
    ['Name', lead.name],
    ['Email', lead.email],
    ['Business', lead.business],
    ['Trade', lead.trade],
    ['Phone', lead.phone],
    ['Source', lead.source],
    ['Message', lead.message],
  ]
    .filter(([, v]) => v)
    .map(([k, v]) => `<p><strong>${k}:</strong> ${String(v)}</p>`)
    .join('');

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from,
      to,
      reply_to: lead.email,
      subject: `New website lead${lead.business ? ` — ${lead.business}` : ''}`,
      html: `<h2>New lead from hellogalaxy.dev</h2>${rows}`,
    }),
  });
  if (!res.ok) {
    throw new Error(`Resend error ${res.status}: ${await res.text()}`);
  }
}

export async function saveLead(lead: Lead): Promise<SaveResult> {
  const sinks: SaveResult['sinks'] = { db: 'skipped', email: 'skipped' };

  const pool = getPool();
  if (pool) {
    try {
      await saveToPostgres(pool, lead);
      sinks.db = 'ok';
    } catch (err) {
      sinks.db = 'error';
      console.error('[leads] Postgres sink failed:', err);
    }
  }

  if (process.env.RESEND_API_KEY) {
    try {
      await notifyByEmail(lead);
      sinks.email = 'ok';
    } catch (err) {
      sinks.email = 'error';
      console.error('[leads] Email sink failed:', err);
    }
  }

  const stored = sinks.db === 'ok' || sinks.email === 'ok';
  if (!stored) {
    // No sink configured/succeeded — don't lose the lead silently.
    console.warn('[leads] No sink stored this lead:', JSON.stringify(lead));
  }
  return { ok: stored, stored, sinks };
}
