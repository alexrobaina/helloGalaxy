/**
 * Single source of truth for Hello Galaxy's monetizable micro-apps.
 * One entry here drives: the /tools hub, each tool's metadata + JSON-LD,
 * the sitemap, and internal linking. To add a tool: add an entry + a
 * `src/app/[locale]/tools/<slug>/page.tsx`.
 */

export type ToolStatus = 'live' | 'soon';

export type PricingModel = 'free' | 'freemium' | 'one-time' | 'subscription';

export interface ToolPricing {
  /** Default monetization model (locked default: freemium). */
  model: PricingModel;
  /** Human-readable free-tier cap shown in UI, e.g. "3 files / day". */
  freeLimit?: string;
  /** Stripe Price ID used by /api/stripe/checkout (set in Phase B). */
  stripePriceId?: string;
  /** Display amount in the smallest currency unit (e.g. cents). */
  amount?: number;
  currency?: string;
}

export interface ToolDef {
  slug: string;
  name: string;
  /** Short one-liner for cards/hero. */
  tagline: string;
  /** Longer copy for SEO meta description + hub card. */
  description: string;
  category: 'utility' | 'business';
  status: ToolStatus;
  pricing: ToolPricing;
  /** Emoji/icon hint for the hub card (kept simple for now). */
  icon: string;
  keywords: string[];
}

export const tools: ToolDef[] = [
  {
    slug: 'pdf',
    name: 'PDF Converter',
    tagline: 'Convert, merge & compress PDFs — right in your browser.',
    description:
      'Free online PDF toolkit: convert, merge, split and compress PDF files privately in your browser. No upload, no sign-up to start.',
    category: 'utility',
    status: 'soon',
    pricing: { model: 'freemium', freeLimit: '3 files / day', currency: 'usd' },
    icon: '📄',
    keywords: [
      'pdf converter',
      'merge pdf',
      'compress pdf',
      'split pdf',
      'online pdf tools',
    ],
  },
];

export const getTool = (slug: string): ToolDef | undefined =>
  tools.find((t) => t.slug === slug);

export const liveTools = (): ToolDef[] => tools.filter((t) => t.status === 'live');
