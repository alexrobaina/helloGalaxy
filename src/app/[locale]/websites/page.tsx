import type { Metadata } from 'next';
import Image from 'next/image';
import { Link } from '@/i18n/routing';
import { templates } from '@/templates/registry';
import { LeadForm } from '@/components/LeadForm';
import { Reveal } from '@/components/ui/Reveal';
import {
  Check,
  ArrowRight,
  Search,
  MapPin,
  Phone,
  Smartphone,
  Zap,
  Star,
  ShieldCheck,
} from 'lucide-react';

export function generateMetadata(): Metadata {
  return {
    title: 'Websites for Local Businesses — Built to Win You Jobs | Hello Galaxy',
    description:
      'Professional, mobile-friendly websites for plumbers, electricians, carpenters and other local trades. Live in days, built to rank on Google and turn visitors into phone calls. See live demos.',
    keywords: [
      'local business website',
      'contractor website',
      'website for plumbers',
      'website for electricians',
      'website for carpenters',
      'small business web design',
    ],
    alternates: { canonical: '/websites' },
    openGraph: {
      title: 'Websites for Local Businesses — Hello Galaxy',
      description:
        'Professional websites for local trades. Live in days, built to rank and convert.',
      type: 'website',
    },
  };
}

const INCLUDED = [
  'Mobile-first design that looks great on any phone',
  'Click-to-call & quote request forms',
  'Built for Google — local SEO ready',
  'Fast, secure hosting included',
  'Your photos, services and reviews',
  'Live in days, not months',
];

// "SEO in plain English" — geeky term → what it actually means for the owner.
const SEO_PLAIN = [
  {
    icon: MapPin,
    term: 'Local SEO',
    means: 'You show up when neighbors search “near me.”',
  },
  {
    icon: Smartphone,
    term: 'Mobile-first',
    means: 'Looks perfect on the phone they’re holding.',
  },
  {
    icon: Zap,
    term: 'Page speed',
    means: 'Loads before they get bored and leave.',
  },
  {
    icon: Star,
    term: 'Google Business',
    means: 'Your stars, hours & map, all connected.',
  },
];

export default function WebsitesLandingPage() {
  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Website design for local businesses',
    serviceType: 'Web design',
    provider: { '@type': 'Organization', name: 'Hello Galaxy' },
    areaServed: 'United States',
    description:
      'Professional, conversion-focused websites for local trades such as plumbers, electricians and carpenters.',
  };

  return (
    <div className="min-h-screen bg-white text-slate-800">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />

      {/* Urgency / social-proof bar */}
      <div className="bg-slate-950 text-center text-sm text-white">
        <div className="container mx-auto px-4 py-2">
          ⚡ <strong>7 local businesses</strong> got online with us this month — your turn.
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-slate-100 bg-white/90 backdrop-blur">
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <Link href="/" className="text-lg font-extrabold text-indigo-600">
            Hello Galaxy
          </Link>
          <a
            href="#contact"
            className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-700 transition"
          >
            Get started
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-700 to-violet-900 text-white">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-white/10 blur-3xl"
        />
        <div className="container relative mx-auto px-4 py-20 md:py-28">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm font-medium ring-1 ring-white/20">
              <Star className="h-4 w-4 fill-current text-amber-300" /> Trusted by local trades across the US
            </span>
            <h1 className="mt-5 text-4xl md:text-6xl font-extrabold leading-[1.05]">
              Stop losing jobs to guys with{' '}
              <span className="text-amber-300">worse work</span> and better websites.
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/90">
              We build fast, beautiful websites for plumbers, electricians,
              carpenters and other trades — designed to show up on Google and
              turn “just looking” into a phone call. Live in days, not months.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="#demos"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 text-lg font-semibold text-indigo-700 shadow-md hover:bg-slate-100 transition"
              >
                Show me my demo <ArrowRight className="h-5 w-5" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-lg border border-white/40 bg-white/10 px-6 py-3 text-lg font-semibold text-white hover:bg-white/20 transition"
              >
                Get my free quote
              </a>
            </div>
            <p className="mt-4 text-sm text-white/70">
              No contracts. No tech headaches. Just more jobs.
            </p>
          </div>
        </div>

        {/* Trust row */}
        <div className="border-t border-white/10 bg-black/10">
          <div className="container mx-auto flex flex-wrap items-center justify-center gap-x-8 gap-y-3 px-4 py-4 text-sm text-white/80">
            <span className="inline-flex items-center gap-2">
              <ShieldCheck className="h-4 w-4" /> Licensed-trade focused
            </span>
            <span className="inline-flex items-center gap-2">
              <Zap className="h-4 w-4" /> Live in days
            </span>
            <span className="inline-flex items-center gap-2">
              <Phone className="h-4 w-4" /> Built to ring your phone
            </span>
            <span className="inline-flex items-center gap-2">
              <Search className="h-4 w-4" /> Google-ready SEO
            </span>
          </div>
        </div>
      </section>

      {/* Demos by trade */}
      <section id="demos" className="py-20">
        <div className="container mx-auto px-4">
          <Reveal>
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                See your website before you spend a dime
              </h2>
              <p className="mt-3 text-slate-600">
                These are real, live templates. Pick your trade and preview
                exactly what your site could look like.
              </p>
            </div>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {templates.map((tpl, i) => (
              <Reveal key={tpl.slug} delay={i * 0.08}>
                <Link
                  href={`/websites/${tpl.slug}`}
                  className="group block h-full overflow-hidden rounded-2xl ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-xl hover:ring-slate-300"
                >
                  <div className="relative h-44 overflow-hidden">
                    <Image
                      src={tpl.images.hero}
                      alt={`${tpl.trade} website preview`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-t ${tpl.theme.heroGradient} opacity-50`}
                    />
                    <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-white/90 px-2.5 py-1 text-xs font-semibold text-slate-700 shadow-sm">
                      <Star className="h-3 w-3 fill-current text-amber-400" />
                      {tpl.rating} · {tpl.reviewsCount} reviews
                    </span>
                  </div>
                  <div className="p-6">
                    <p className="text-sm font-medium text-slate-500">
                      {tpl.trade}
                    </p>
                    <h3 className="mt-1 text-xl font-bold text-slate-900">
                      {tpl.businessName}
                    </h3>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-indigo-600 group-hover:gap-2 transition-all">
                      View live demo <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SEO in plain English ("SEO for dummies") */}
      <section className="bg-slate-50 py-20">
        <div className="container mx-auto px-4">
          <Reveal>
            <div className="max-w-2xl">
              <p className="text-sm font-bold uppercase tracking-wide text-indigo-600">
                SEO, explained like you’d explain your trade
              </p>
              <h2 className="mt-2 text-3xl md:text-4xl font-bold text-slate-900">
                What’s SEO? (In plain English)
              </h2>
              <p className="mt-3 text-slate-600">
                Think of Google like the Yellow Pages — except everybody uses
                it, and the top spot is free if your site is built right. Your
                competitor isn’t better. He just shows up first. We fix that.
              </p>
            </div>
          </Reveal>

          {/* 3-step story */}
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              {
                icon: Search,
                step: '1',
                title: 'Someone searches',
                body: '“electrician near me” or “plumber in Austin.”',
              },
              {
                icon: MapPin,
                step: '2',
                title: 'Google shows the best-built local sites first',
                body: 'Fast, mobile, trustworthy — that’s yours, the way we build it.',
              },
              {
                icon: Phone,
                step: '3',
                title: 'They call you — not the other guy',
                body: 'More calls, more jobs, less “where did you find us?”',
              },
            ].map((s, i) => (
              <Reveal key={s.step} delay={i * 0.1}>
                <div className="flex h-full flex-col rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-600 text-white">
                    <s.icon className="h-5 w-5" />
                  </div>
                  <p className="mt-4 text-sm font-bold text-indigo-600">
                    Step {s.step}
                  </p>
                  <h3 className="mt-1 text-lg font-bold text-slate-900">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Jargon → plain meaning */}
          <Reveal>
            <div className="mt-12 overflow-hidden rounded-2xl bg-white ring-1 ring-slate-200">
              <div className="grid grid-cols-1 divide-y divide-slate-100 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
                {SEO_PLAIN.map((row) => (
                  <div key={row.term} className="p-6">
                    <row.icon className="h-6 w-6 text-indigo-600" />
                    <p className="mt-3 font-semibold text-slate-900">{row.term}</p>
                    <p className="mt-1 text-sm text-slate-600">{row.means}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal>
            <p className="mt-8 text-center text-lg font-medium text-slate-700">
              You don’t need to understand any of this.{' '}
              <span className="font-bold text-slate-900">That’s our job.</span>{' '}
              You just answer the phone.
            </p>
          </Reveal>
        </div>
      </section>

      {/* What's included */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Everything your business needs to get found
            </h2>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {INCLUDED.map((item, i) => (
              <Reveal key={item} delay={i * 0.05}>
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-indigo-600 text-white">
                    <Check className="h-4 w-4" />
                  </span>
                  <span className="text-slate-700">{item}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="bg-indigo-600 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold">
            The phone should be ringing. Let’s make it ring.
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-indigo-100">
            Tell us about your business and we’ll get you a free quote — usually
            within 24 hours.
          </p>

          <div className="mx-auto mt-10 max-w-2xl rounded-2xl bg-white p-6 sm:p-8 shadow-xl">
            <LeadForm source="websites" />
          </div>

          <p className="mt-6 text-sm text-indigo-100">
            Prefer to chat?{' '}
            <a href="https://wa.me/541138997032" className="font-semibold underline hover:text-white">
              Message us on WhatsApp
            </a>
          </p>
        </div>
      </section>

      <footer className="bg-slate-900 py-10 text-center text-sm text-slate-400">
        <div className="container mx-auto px-4">
          <Link href="/" className="hover:text-white transition-colors">
            Hello Galaxy
          </Link>{' '}
          · Websites for local businesses
        </div>
      </footer>
    </div>
  );
}
