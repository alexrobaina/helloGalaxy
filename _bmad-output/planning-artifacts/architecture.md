# Hello Galaxy — Micro-Apps Platform Architecture

**Status:** Decisions locked 2026-06-13
**Context:** Hello Galaxy is a software factory that doubles as a platform for monetizable micro-apps (utility tools + local-business website templates), all inside one Next.js 15 project.

## Decisions

| Area | Decision | Rationale |
|---|---|---|
| URL strategy | **Routes, same domain** — `hellogalaxy.dev/tools/<slug>` | Concentrates SEO authority; a `/tools` hub interlinks every app |
| Source of truth | `src/tools/registry.ts` (`ToolDef[]`) | One entry drives hub, metadata, JSON-LD, sitemap, links |
| Folder layout | `(marketing)/` group + `tools/` group with shared ToolShell | Separate chrome; consistent tool UX |
| UI | uipulse primitives (`src/components/ui/`) + brand variants | Standard toolkit; preserve look |
| Identity / entitlements | **Auth (magic link) + Postgres** | Supports subscriptions, usage metering, multi-device |
| Monetization | **Freemium with limits** (per-tool override via registry) | Maximize SEO traffic + conversion |
| Payments | Shared `src/lib/stripe/` + `/api/stripe/{checkout,webhook}` | One integration, priceId per tool |
| Compute cost | **Client-side WASM** first (pdf-lib/pdf.js); server only when needed | Marginal cost ≈ 0 → passive income viable |
| i18n | `localePrefix: always` → **`as-needed`** (deferred, own change) | Clean US-SEO URLs (drop `/en-US`) |

## Target structure

```
src/
  app/[locale]/
    layout.tsx                 # i18n provider + global JSON-LD (existing)
    (marketing)/page.tsx       # landing (move of current page.tsx)
    tools/
      layout.tsx               # ToolShell (uipulse)
      page.tsx                 # /tools hub (SEO authority page)
      <slug>/page.tsx          # each micro-app
  app/api/stripe/
    checkout/route.ts          # create Checkout Session
    webhook/route.ts           # verify + grant entitlement (Postgres)
  tools/registry.ts            # ToolDef[] — single source of truth
  lib/stripe/                  # shared Stripe server client
  lib/db/                      # Postgres client + entitlements queries
```

## Build roadmap

- **Phase A — Foundation (no secrets):** registry, `/tools` hub, ToolShell, first tool placeholder page, registry-driven `sitemap.ts`.
- **Phase B — Monetization wiring (needs Stripe + Postgres creds):** Stripe lib, checkout + webhook, magic-link auth, entitlements table, freemium gate component.
- **Phase C — First micro-app:** PDF converter (client-side WASM) with freemium limits.
- **Phase D — First template:** website template for a US local-business niche (plumbing/carpentry/electrician) + showcase page for cold outreach.

## Open items / debts

- In-memory rate limiter (`api/chat/rateLimitMiddleware.ts`) won't survive serverless scale-out → move to durable store (Upstash/KV) for paid tools.
- `localePrefix` migration requires updating canonical/alternates in metadata + middleware matcher.
- Need env: `STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET`, Postgres connection string.
