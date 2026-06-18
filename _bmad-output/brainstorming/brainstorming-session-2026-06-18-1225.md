---
stepsCompleted: [1, 2]
inputDocuments: []
session_topic: 'Improve the Websites service — landing page + demo pages (copy, beauty, responsive, SEO-for-dummies)'
session_goals: 'Punchy/emotional copy; stunning + fully responsive UI; add a simple "SEO for dummies" section; turn demo pages into a real experience'
selected_approach: 'AI-Recommended Techniques'
techniques_used: ['Provocation/Wishful-thinking', 'Role-storming (the customer)', 'SCAMPER', 'Sensory/Experience design']
ideas_generated: []
context_file: ''
---

## Session Overview

**Topic:** Improve the Websites service — landing page + demo pages.
**Goals:** Punchy, emotional copy (English, US market); beautiful + fully responsive UI; new "SEO for dummies" educational/selling section; demo pages that feel like a real, premium experience.

### Session Setup

- Market: US local trades (plumbers, electricians, carpenters). English only.
- Current state reviewed: landing (`/websites`), 3 data-driven demos via `registry.ts` + `LocalBusinessTemplate`, working `LeadForm`, solid technical SEO + responsive baseline.
- Creative direction delegated to facilitator with freedom to recommend.

Approach: AI-recommended divergence across 4 fronts, then full implementation (user delegated creative direction).

## Ideas Generated

### Front 1 — Landing hero (punchy + emotional)
- Emotional truth: "great at the job, invisible online; worse competitor wins on a nicer site."
- Chosen headline: "Stop losing jobs to guys with worse work and better websites."
- CTAs reframed: "Show me my demo" / "Get my free quote"; microcopy "No contracts. No tech headaches. Just more jobs."
- Urgency bar: "7 local businesses got online with us this month."

### Front 2 — "SEO for dummies" section
- Plain-English framing (Google = Yellow Pages everyone uses; top spot free if built right).
- 3-step story: someone searches → Google shows best-built local sites → they call you.
- Jargon→meaning grid (Local SEO, Mobile-first, Page speed, Google Business).
- Closer: "You don't need to understand any of this. That's our job. You just answer the phone."

### Front 3 — Demos as a real experience
- Live BrandPreview island (type your name → faux-browser mockup updates).
- Animated trust stat counters (years, jobs, rating, reviews).
- Sticky mobile click-to-call FAB; header phone always visible on mobile.
- FAQ accordion per trade; verified-review badges; trust badges row.
- Scroll-reveal animations + hover lift/zoom micro-interactions.

### Front 4 — Beauty + responsive polish
- Sticky translucent header, hero glow accent, generous spacing/rhythm, section reveal staggering, image zoom on hover.

## Implemented (2026-06-18)
- New components: `Reveal`, `Counter`, `BrandPreview`, `Faq`.
- Registry: added `stats` + `faqs` per trade.
- Rewrote landing page (hero, trust row, urgency bar, SEO-for-dummies, reveals).
- Enhanced demo template (stats band, trust badges, reveals, hover, FAQ, BrandPreview, mobile call FAB).
- LeadForm copy polish.
- `pnpm build` passes — no new type/lint errors.
