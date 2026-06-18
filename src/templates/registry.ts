/**
 * Single source of truth for the local-business website templates.
 * One high-quality template (LocalBusinessTemplate) is rendered from these
 * per-trade configs, so adding a niche (or personalizing for a cold-outreach
 * prospect) is just a new entry here. English content + slugs for US SEO.
 *
 * NOTE: theme values are explicit Tailwind class strings (not interpolated)
 * so Tailwind can detect them. tailwind.config scans all of ./src.
 */

export interface TemplateTheme {
  /** Hero background gradient, e.g. 'from-blue-700 to-blue-900'. */
  heroGradient: string;
  /** Primary button (bg + hover + text). */
  primaryBtn: string;
  /** Accent text color for headings/links. */
  accentText: string;
  /** Solid accent background (icons, bars). */
  accentBg: string;
  /** Soft tinted section background. */
  softBg: string;
  /** Small pill/badge. */
  badge: string;
}

export interface ServiceItem {
  icon: string; // emoji
  name: string;
  description: string;
}

export interface Feature {
  icon: 'shield' | 'clock' | 'tag' | 'wrench' | 'star' | 'phone' | 'map';
  title: string;
  description: string;
}

export interface Testimonial {
  name: string;
  location: string;
  quote: string;
}

export interface Faq {
  q: string;
  a: string;
}

/** Headline trust stats shown as animated counters. */
export interface TradeStats {
  yearsExperience: number;
  jobsCompleted: number;
}

export interface TradeTemplate {
  slug: string;
  trade: string;
  /** Sample business name shown in the demo. */
  businessName: string;
  city: string;
  phone: string;
  rating: string;
  reviewsCount: number;
  hero: { headline: string; subheadline: string };
  stats: TradeStats;
  services: ServiceItem[];
  features: Feature[];
  testimonials: Testimonial[];
  faqs: Faq[];
  theme: TemplateTheme;
  /** Self-hosted photos under /public/templates/<slug>/. */
  images: { hero: string; gallery: string[] };
  seo: { title: string; description: string; keywords: string[] };
}

export const templates: TradeTemplate[] = [
  {
    slug: 'plumber',
    trade: 'Plumbing',
    businessName: 'BlueFlow Plumbing',
    city: 'Austin, TX',
    phone: '(512) 555-0148',
    rating: '4.9',
    reviewsCount: 187,
    hero: {
      headline: 'Fast, Reliable Plumbing in Austin',
      subheadline:
        'Licensed plumbers for emergencies, repairs and installations. Upfront pricing, same-day service, no surprises.',
    },
    stats: { yearsExperience: 15, jobsCompleted: 4200 },
    services: [
      { icon: '🚿', name: 'Leak Repairs', description: 'Fast detection and repair of any leak, big or small.' },
      { icon: '🔧', name: 'Drain Cleaning', description: 'Clear clogged drains and sewer lines for good.' },
      { icon: '🔥', name: 'Water Heaters', description: 'Repair, replacement and tankless installations.' },
      { icon: '🚽', name: 'Toilets & Faucets', description: 'Installs and repairs for fixtures throughout your home.' },
      { icon: '🏠', name: 'Repiping', description: 'Whole-home repiping with durable, modern materials.' },
      { icon: '⚠️', name: '24/7 Emergencies', description: 'Burst pipe? We answer around the clock.' },
    ],
    features: [
      { icon: 'shield', title: 'Licensed & Insured', description: 'Fully licensed Texas master plumbers you can trust.' },
      { icon: 'clock', title: 'Same-Day Service', description: 'Call before noon and we are usually there today.' },
      { icon: 'tag', title: 'Upfront Pricing', description: 'Flat-rate quotes before we start. No hidden fees.' },
    ],
    testimonials: [
      { name: 'Sarah M.', location: 'Round Rock', quote: 'Showed up in an hour for a burst pipe and saved my kitchen. Honest pricing too.' },
      { name: 'David L.', location: 'Cedar Park', quote: 'Replaced our water heater same day. Clean, professional, fair.' },
    ],
    faqs: [
      { q: 'Do you offer emergency service?', a: 'Yes — we answer 24/7. Burst pipe at 2am? Call us and we are on the way.' },
      { q: 'How fast can you get here?', a: 'Call before noon and we are usually at your door the same day.' },
      { q: 'Will I know the price before you start?', a: 'Always. You get a flat-rate quote up front — no surprises, no hidden fees.' },
      { q: 'Are you licensed and insured?', a: 'Fully licensed Texas master plumbers, bonded and insured for every job.' },
    ],
    theme: {
      heroGradient: 'from-blue-700 to-blue-900',
      primaryBtn: 'bg-blue-600 hover:bg-blue-700 text-white',
      accentText: 'text-blue-700',
      accentBg: 'bg-blue-600',
      softBg: 'bg-blue-50',
      badge: 'bg-blue-100 text-blue-800',
    },
    images: {
      hero: '/templates/plumber/hero.jpg',
      gallery: [
        '/templates/plumber/work-1.jpg',
        '/templates/plumber/work-2.jpg',
        '/templates/plumber/work-3.jpg',
      ],
    },
    seo: {
      title: 'Austin Plumber — Same-Day Plumbing Repairs | Demo by Hello Galaxy',
      description:
        'A ready-to-launch website template for plumbing businesses: services, reviews, click-to-call and quote requests. Get yours from Hello Galaxy.',
      keywords: ['plumber website', 'plumbing website template', 'website for plumbers', 'austin plumber'],
    },
  },
  {
    slug: 'electrician',
    trade: 'Electrical',
    businessName: 'Voltline Electric',
    city: 'Phoenix, AZ',
    phone: '(602) 555-0192',
    rating: '5.0',
    reviewsCount: 124,
    hero: {
      headline: 'Trusted Electricians in Phoenix',
      subheadline:
        'Safe, code-compliant electrical work for homes and businesses. Panel upgrades, EV chargers, lighting and more.',
    },
    stats: { yearsExperience: 12, jobsCompleted: 3100 },
    services: [
      { icon: '⚡', name: 'Panel Upgrades', description: 'Modernize your electrical panel for more capacity and safety.' },
      { icon: '🔌', name: 'Outlets & Wiring', description: 'New circuits, outlets and full rewiring done right.' },
      { icon: '🚗', name: 'EV Chargers', description: 'Level 2 home charger installation by certified pros.' },
      { icon: '💡', name: 'Lighting', description: 'Recessed, outdoor and smart lighting installs.' },
      { icon: '🔋', name: 'Generators', description: 'Backup generator install and maintenance.' },
      { icon: '⚠️', name: 'Emergency Repairs', description: 'Power out or sparking? We respond fast.' },
    ],
    features: [
      { icon: 'shield', title: 'Licensed & Bonded', description: 'Certified electricians, fully insured and bonded.' },
      { icon: 'star', title: '5-Star Rated', description: 'Hundreds of happy customers across the valley.' },
      { icon: 'tag', title: 'Free Estimates', description: 'Transparent quotes before any work begins.' },
    ],
    testimonials: [
      { name: 'Maria G.', location: 'Tempe', quote: 'Installed our EV charger in a few hours and explained everything. Spotless work.' },
      { name: 'James T.', location: 'Scottsdale', quote: 'Upgraded our panel and fixed code issues other guys missed. Highly recommend.' },
    ],
    faqs: [
      { q: 'Is my wiring up to code?', a: 'We inspect first and tell you straight. Every job we finish is fully code-compliant and safe.' },
      { q: 'Can you install an EV charger at home?', a: 'Absolutely — certified Level 2 home charger installs, usually done in a few hours.' },
      { q: 'Do you give free estimates?', a: 'Yes. You get a transparent, written quote before any work begins.' },
      { q: 'What if the power goes out?', a: 'We handle emergency repairs fast — call us and we will get your power back on.' },
    ],
    theme: {
      heroGradient: 'from-slate-900 to-slate-800',
      primaryBtn: 'bg-amber-400 hover:bg-amber-500 text-slate-900',
      accentText: 'text-amber-600',
      accentBg: 'bg-amber-400',
      softBg: 'bg-amber-50',
      badge: 'bg-amber-100 text-amber-900',
    },
    images: {
      hero: '/templates/electrician/hero.jpg',
      gallery: [
        '/templates/electrician/work-1.jpg',
        '/templates/electrician/work-2.jpg',
        '/templates/electrician/work-3.jpg',
      ],
    },
    seo: {
      title: 'Phoenix Electrician — Panels, EV Chargers, Wiring | Demo by Hello Galaxy',
      description:
        'A ready-to-launch website template for electricians: services, reviews, click-to-call and free estimate requests. Get yours from Hello Galaxy.',
      keywords: ['electrician website', 'electrical website template', 'website for electricians', 'phoenix electrician'],
    },
  },
  {
    slug: 'carpenter',
    trade: 'Carpentry',
    businessName: 'Timbercraft Carpentry',
    city: 'Denver, CO',
    phone: '(303) 555-0173',
    rating: '4.9',
    reviewsCount: 96,
    hero: {
      headline: 'Custom Carpentry & Woodwork in Denver',
      subheadline:
        'Handcrafted cabinetry, trim, decks and built-ins. Quality craftsmanship that lasts a lifetime.',
    },
    stats: { yearsExperience: 20, jobsCompleted: 1800 },
    services: [
      { icon: '🪵', name: 'Custom Cabinetry', description: 'Made-to-measure kitchen and bath cabinets.' },
      { icon: '🪑', name: 'Built-Ins', description: 'Shelving, benches and entertainment centers.' },
      { icon: '🚪', name: 'Doors & Trim', description: 'Interior doors, crown molding and finish carpentry.' },
      { icon: '🌳', name: 'Decks & Pergolas', description: 'Outdoor living spaces built to weather Colorado.' },
      { icon: '🔨', name: 'Framing', description: 'Additions, remodels and structural framing.' },
      { icon: '✨', name: 'Restorations', description: 'Bring antique and damaged woodwork back to life.' },
    ],
    features: [
      { icon: 'wrench', title: 'Master Craftsman', description: 'Over 20 years of fine woodworking experience.' },
      { icon: 'shield', title: 'Licensed & Insured', description: 'Licensed Colorado contractor, fully insured.' },
      { icon: 'star', title: 'Built to Last', description: 'Premium materials and joinery, guaranteed.' },
    ],
    testimonials: [
      { name: 'Emily R.', location: 'Boulder', quote: 'Our custom built-ins are stunning. Attention to detail is unreal.' },
      { name: 'Mark S.', location: 'Littleton', quote: 'Built a cedar deck that everyone compliments. On time and on budget.' },
    ],
    faqs: [
      { q: 'Do you build custom, made-to-measure pieces?', a: 'That is our specialty — every cabinet, built-in and deck is built to your exact space.' },
      { q: 'How long does a project take?', a: 'Most cabinetry and built-ins are done in 2–4 weeks. We give you a clear timeline up front.' },
      { q: 'Will my deck survive Colorado winters?', a: 'Yes — we use premium, weather-rated materials and joinery built to last decades.' },
      { q: 'Are you licensed and insured?', a: 'Licensed Colorado contractor, fully insured, with 20+ years of fine woodworking behind every job.' },
    ],
    theme: {
      heroGradient: 'from-amber-800 to-amber-950',
      primaryBtn: 'bg-amber-700 hover:bg-amber-800 text-white',
      accentText: 'text-amber-800',
      accentBg: 'bg-amber-700',
      softBg: 'bg-amber-50',
      badge: 'bg-amber-100 text-amber-900',
    },
    images: {
      hero: '/templates/carpenter/hero.jpg',
      gallery: [
        '/templates/carpenter/work-1.jpg',
        '/templates/carpenter/work-2.jpg',
        '/templates/carpenter/work-3.jpg',
      ],
    },
    seo: {
      title: 'Denver Carpenter — Custom Cabinetry, Decks & Trim | Demo by Hello Galaxy',
      description:
        'A ready-to-launch website template for carpenters and woodworkers: portfolio, services, reviews and quote requests. Get yours from Hello Galaxy.',
      keywords: ['carpenter website', 'carpentry website template', 'website for carpenters', 'denver carpenter'],
    },
  },
];

export const getTemplate = (slug: string): TradeTemplate | undefined =>
  templates.find((t) => t.slug === slug);
