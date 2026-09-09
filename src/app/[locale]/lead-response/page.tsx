import type { Metadata } from 'next';
import { redirect } from 'next/navigation';
import { Link } from '@/i18n/routing';
import { getBaseUrl, DEFAULT_LOCALE } from '@/lib/seo';
import { LeadForm } from '@/components/LeadForm';
import { LeadResponseCalculator } from '@/components/LeadResponseCalculator';
import { Reveal } from '@/components/ui/Reveal';
import {
  ArrowRight,
  CalendarCheck,
  Check,
  Clock,
  FileText,
  Globe,
  MapPin,
  MessageSquare,
  ShieldCheck,
  Star,
} from 'lucide-react';

/**
 * US-market landing page, English only.
 *
 * It is the destination of cold outreach to American HVAC and plumbing shops,
 * so it must read the same for every visitor regardless of the locale their
 * browser negotiates. Any non-English locale is redirected to the canonical
 * en-US URL rather than rendering English body copy around a translated form.
 */
export function generateMetadata(): Metadata {
  const canonical = `${getBaseUrl()}/${DEFAULT_LOCALE}/lead-response`;

  return {
    title: 'Answer First — Lead Response & Online Booking for Contractors',
    description:
      'HVAC and plumbing shops lose most of their paid leads to slow replies. We set up online booking with a service-area filter and under-60-second text response, so the jobs you already paid for stop going to whoever answered first.',
    keywords: [
      'contractor lead response',
      'HVAC online booking',
      'plumber scheduling software setup',
      'speed to lead home services',
      'after hours lead response contractors',
      'service area booking filter',
    ],
    // Single-language page: one canonical, and deliberately no hreflang
    // alternates, because no Spanish version of this page exists.
    alternates: { canonical },
    openGraph: {
      locale: 'en_US',
      url: canonical,
      title: 'You paid for that lead. Then you lost it.',
      description:
        'Online booking with service-area control, plus under-60-second text response for the emergencies. Built for HVAC and plumbing contractors.',
      type: 'website',
    },
  };
}

/** Published benchmarks. Every figure on the page is traceable to a source below. */
const FACTS = [
  {
    value: '30%',
    good: true,
    body: 'Close rate when a contractor replies to a new lead in under 60 seconds.',
  },
  {
    value: '<10%',
    good: false,
    body: 'Close rate on that same lead after two hours. Same lead, same price, same crew.',
  },
  {
    value: '42–47',
    good: false,
    body: 'Minutes — the industry average response time. That is where most shops actually sit.',
  },
  {
    value: '12%',
    good: false,
    body: 'Of contractors reply within five minutes. The most common response time is a full day.',
  },
  {
    value: '34%',
    good: false,
    body: 'Of leads are lost by shops with no after-hours coverage — the 6pm-to-8am window.',
  },
  {
    value: '82%',
    good: true,
    body: 'Of consumers would rather book online than call. 48% have switched providers over a bad booking experience.',
  },
];

const INCLUDED = [
  {
    icon: CalendarCheck,
    title: 'Online booking with service-area control',
    body: 'Your calendar, your working days, your ZIP codes. Customers who are outside your area cannot put themselves on your schedule.',
  },
  {
    icon: MessageSquare,
    title: 'Under-60-second text response, around the clock',
    body: 'Every form, every call you miss, every after-hours message gets a real reply with the questions you would ask anyway.',
  },
  {
    icon: Clock,
    title: 'Follow-up that does not quit after one try',
    body: 'Most shops text once. The second and third touch is where the booked jobs are.',
  },
  {
    icon: Star,
    title: 'Review requests, sent automatically after the job',
    body: 'Homeowners pay up to 10% more for a contractor with a stronger reputation. Reviews are the cheapest price increase you will ever get.',
  },
  {
    icon: Globe,
    title: 'A website that feeds the system',
    body: 'Fast, works on a phone, built so the visitor books instead of leaving. If yours already works, we keep it.',
  },
  {
    icon: FileText,
    title: 'One page of numbers every month',
    body: 'Leads in, response time, jobs booked, revenue. No impressions, no clicks, no keyword rankings. If you cannot tell whether your money worked, the report failed.',
  },
];

const STEPS = [
  {
    title: 'Free measurement',
    body: 'We time how long your business takes to answer a real enquiry, and show you exactly when we messaged and when the reply came. No charge, whether or not you hire us.',
  },
  {
    title: 'Paid audit — $300 to $500',
    body: 'Every way a customer can reach you, tested and timed. You get a one-page breakdown with three fixes, two of which you can do yourself without us.',
  },
  {
    title: '30-day pilot',
    body: 'Fixed scope, fixed price, guarantee in writing. If it does not work you have lost a month, not a season.',
  },
  {
    title: 'Ongoing',
    body: 'We run it, tune it, and send the one-pager. Month to month — cancel whenever, no annual contract.',
  },
];

const STRAIGHT_ANSWERS = [
  {
    q: 'Who we are',
    a: 'Hello Galaxy — a US-registered C-Corp. Our engineering team is in Argentina.',
  },
  {
    q: 'Time zone',
    a: 'One to two hours ahead of Eastern, and Argentina does not observe daylight saving — so the gap is the same all year. You get same-day answers, not next-day.',
  },
  {
    q: 'Language',
    a: 'English, spoken and written. You deal with the same person from start to finish.',
  },
  {
    q: 'What we have built',
    a: 'Six products in production, including our own software for auto repair shops that handles inspections, work orders, customers and invoicing — so we know what a trades business actually runs on.',
  },
  {
    q: 'Who owns it',
    a: 'You do. Your domain, your accounts, your data, your customer list. If we part ways you keep all of it, with the logins.',
  },
];

const SOURCES = [
  {
    label: 'Close rates and response times',
    href: 'https://customerflows.com/research/contractor-lead-response-time-study/',
    name: 'CustomerFlows — 2026 Contractor Lead Response Time Study',
  },
  {
    label: 'Online booking preference and switching',
    href: 'https://schedulingkit.com/statistics/online-booking-statistics',
    name: 'SchedulingKit — Online Booking Statistics 2026',
  },
  {
    label: 'Average job ticket and cost per lead',
    href: 'https://www.webtonic.io/blog/electrical-services-digital-marketing-statistics',
    name: 'Web Tonic — 2026 benchmarks',
  },
  {
    label: 'Reputation and pricing power',
    href: 'https://www.improveit360.com/blog/homeowner-behavior-shifts-2026/',
    name: 'improveit360 — 2026 homeowner insights',
  },
  {
    label: 'Emergency vs. scheduled mix',
    href: 'https://schedulingkit.com/statistics/hvac-industry-statistics',
    name: 'SchedulingKit — HVAC Industry Statistics 2026',
  },
];

export default async function LeadResponsePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // English-only page — see the note on generateMetadata. Sending a Spanish
  // visitor here would render English copy wrapped around a Spanish LeadForm.
  if (locale !== DEFAULT_LOCALE) redirect(`/${DEFAULT_LOCALE}/lead-response`);

  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Lead response and online booking setup for home service contractors',
    serviceType: 'Marketing automation for HVAC and plumbing contractors',
    provider: { '@type': 'Organization', name: 'Hello Galaxy' },
    areaServed: 'US',
    description:
      'Online booking with service-area filtering and under-60-second text response for HVAC and plumbing contractors.',
    offers: {
      '@type': 'Offer',
      priceCurrency: 'USD',
      priceSpecification: {
        '@type': 'PriceSpecification',
        minPrice: 2500,
        maxPrice: 4000,
        priceCurrency: 'USD',
      },
    },
  };

  return (
    <div className="min-h-screen bg-white text-slate-800">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />

      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-slate-100 bg-white/90 backdrop-blur">
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <Link href="/" className="text-lg font-extrabold text-indigo-600">
            Hello Galaxy
          </Link>
          <a
            href="#contact"
            className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-indigo-700"
          >
            Book the call
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
              <Clock className="h-4 w-4 text-amber-300" /> For HVAC &amp; plumbing contractors
            </span>
            <h1 className="mt-5 text-4xl font-extrabold leading-[1.05] md:text-6xl">
              You paid for that lead.{' '}
              <span className="text-amber-300">Then you lost it.</span>
            </h1>
            <p className="mt-6 text-lg text-white/90 md:text-xl">
              Not because your price was wrong or your crew was busy. Because
              somebody else picked up first. Five minutes is the whole margin
              between winning the job and funding your competitor.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#estimator"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 text-lg font-semibold text-indigo-700 shadow-md transition hover:bg-slate-100"
              >
                What is it costing me? <ArrowRight className="h-5 w-5" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-lg border border-white/40 bg-white/10 px-6 py-3 text-lg font-semibold text-white transition hover:bg-white/20"
              >
                Book a 15-minute call
              </a>
            </div>
            <p className="mt-4 text-sm text-white/70">
              No contracts. No app for your customers to download. Cancel any time.
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 bg-black/10">
          <div className="container mx-auto flex flex-wrap items-center justify-center gap-x-8 gap-y-3 px-4 py-4 text-sm text-white/80">
            <span className="inline-flex items-center gap-2">
              <CalendarCheck className="h-4 w-4" /> Online booking
            </span>
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4" /> Service-area filter
            </span>
            <span className="inline-flex items-center gap-2">
              <MessageSquare className="h-4 w-4" /> 60-second text reply
            </span>
            <span className="inline-flex items-center gap-2">
              <ShieldCheck className="h-4 w-4" /> 90-day guarantee
            </span>
          </div>
        </div>
      </section>

      {/* Facts */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Reveal>
            <div className="max-w-2xl">
              <p className="text-sm font-bold uppercase tracking-widest text-indigo-600">
                The numbers
              </p>
              <h2 className="mt-2 text-3xl font-bold text-slate-900 md:text-4xl">
                What the industry data says
              </h2>
              <p className="mt-3 text-slate-600">
                None of this is our opinion. It is published benchmark data on home
                service contractors, and every source is listed at the bottom of this
                page.
              </p>
            </div>
          </Reveal>

          <div className="mx-auto mt-10 max-w-3xl border-t-2 border-slate-900">
            {FACTS.map((f, i) => (
              <Reveal key={f.value + i} delay={i * 0.05}>
                <div className="grid grid-cols-[5.5rem_1fr] items-baseline gap-4 border-b border-slate-200 py-5 sm:grid-cols-[7rem_1fr]">
                  <span
                    className={`text-3xl font-extrabold tabular-nums leading-none sm:text-4xl ${
                      f.good ? 'text-emerald-700' : 'text-amber-700'
                    }`}
                  >
                    {f.value}
                  </span>
                  <p className="m-0 text-slate-600">{f.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Estimator */}
      <section id="estimator" className="bg-slate-50 py-20">
        <div className="container mx-auto px-4">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-bold uppercase tracking-widest text-indigo-600">
                The math on your business
              </p>
              <h2 className="mt-2 text-3xl font-bold text-slate-900 md:text-4xl">
                What the gap costs you
              </h2>
              <p className="mt-3 text-slate-600">
                Change the three numbers to match your shop. Nothing is sent anywhere —
                this runs in your browser.
              </p>
            </div>
          </Reveal>
          <div className="mx-auto mt-10 max-w-2xl">
            <Reveal>
              <LeadResponseCalculator />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Two halves */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Reveal>
            <div className="max-w-2xl">
              <p className="text-sm font-bold uppercase tracking-widest text-indigo-600">
                What we build
              </p>
              <h2 className="mt-2 text-3xl font-bold text-slate-900 md:text-4xl">
                Two halves, because your work has two halves
              </h2>
              <p className="mt-3 text-slate-600">
                About a third of your calls are emergencies. The rest can be scheduled.
                Most systems only handle one of those, which is why they disappoint.
              </p>
            </div>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-2xl border border-slate-200 border-t-4 border-t-emerald-600 bg-white p-6 shadow-sm">
                <p className="text-xs font-bold uppercase tracking-widest text-slate-500">
                  Roughly two thirds of the work
                </p>
                <h3 className="mt-2 text-xl font-bold text-slate-900">Book themselves</h3>
                <p className="mt-3 text-slate-600">
                  Maintenance, installs, seasonal tune-ups. Customers pick a slot on your
                  calendar from their phone, on your site or your Google listing. You set
                  which days you work.
                </p>
                <p className="mt-3 text-slate-600">
                  <strong className="text-slate-900">Service area filter:</strong> they
                  enter their ZIP before they book. If you do not drive there, they cannot
                  put it on your schedule.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="h-full rounded-2xl border border-slate-200 border-t-4 border-t-amber-500 bg-white p-6 shadow-sm">
                <p className="text-xs font-bold uppercase tracking-widest text-slate-500">
                  Roughly one third of the work
                </p>
                <h3 className="mt-2 text-xl font-bold text-slate-900">
                  Get answered instantly
                </h3>
                <p className="mt-3 text-slate-600">
                  A burst pipe at 9pm does not schedule for Thursday. Every after-hours
                  enquiry gets a real text back in under a minute, with the questions you
                  would ask anyway, so it is qualified before you wake up.
                </p>
                <p className="mt-3 text-slate-600">
                  <strong className="text-slate-900">Text, not an app.</strong> Your
                  customers already text. Nothing for them to download.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* What you get */}
      <section className="bg-slate-50 py-20">
        <div className="container mx-auto px-4">
          <Reveal>
            <div className="max-w-2xl">
              <p className="text-sm font-bold uppercase tracking-widest text-indigo-600">
                The package
              </p>
              <h2 className="mt-2 text-3xl font-bold text-slate-900 md:text-4xl">
                What you get
              </h2>
            </div>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {INCLUDED.map((item, i) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.title} delay={i * 0.06}>
                  <div className="h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                    <Icon className="h-6 w-6 text-indigo-600" aria-hidden />
                    <h3 className="mt-3 text-lg font-bold text-slate-900">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.body}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* How it goes */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Reveal>
            <div className="max-w-2xl">
              <p className="text-sm font-bold uppercase tracking-widest text-indigo-600">
                How it goes
              </p>
              <h2 className="mt-2 text-3xl font-bold text-slate-900 md:text-4xl">
                Start small, prove it, then scale
              </h2>
            </div>
          </Reveal>

          <ol className="mx-auto mt-10 max-w-3xl">
            {STEPS.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.06}>
                <li className="grid grid-cols-[2.75rem_1fr] gap-4 border-t border-slate-200 py-5">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-900 text-lg font-extrabold text-white">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">{s.title}</h3>
                    <p className="mt-1 text-slate-600">{s.body}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>

          <Reveal>
            <div className="mx-auto mt-8 max-w-3xl rounded-2xl border-2 border-emerald-600 bg-emerald-50 p-6">
              <p className="text-sm font-bold uppercase tracking-widest text-emerald-800">
                In writing
              </p>
              <p className="mt-2 text-lg font-semibold leading-snug text-slate-900">
                If we do not cut your average after-hours lead response time to under
                five minutes within 90 days, we refund the setup fee in full and you keep
                every asset we built. No conditions, no prorating.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-slate-50 py-20">
        <div className="container mx-auto px-4">
          <Reveal>
            <div className="max-w-2xl">
              <p className="text-sm font-bold uppercase tracking-widest text-indigo-600">
                Pricing
              </p>
              <h2 className="mt-2 text-3xl font-bold text-slate-900 md:text-4xl">
                Published, because you should not have to ask
              </h2>
              <p className="mt-3 text-slate-600">
                Specialist contractor agencies run $2,500 to $12,000 a month, and $12,000
                or more for a website alone. We are a small shop and we price like one.
              </p>
            </div>
          </Reveal>

          <div className="mx-auto mt-10 grid max-w-3xl grid-cols-1 gap-6 md:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-2xl border-2 border-amber-400 bg-white p-6">
                <p className="text-xs font-bold uppercase tracking-widest text-amber-700">
                  Setup
                </p>
                <p className="mt-2 text-4xl font-extrabold tabular-nums text-slate-900">
                  $2,500<span className="text-xl">–4,000</span>
                </p>
                <p className="text-sm text-slate-500">One time</p>
                <p className="mt-3 text-sm text-slate-600">
                  Booking, service area, instant response, review requests, reporting.
                  Website build from $3,000 if you need one.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="h-full rounded-2xl border border-slate-200 bg-white p-6">
                <p className="text-xs font-bold uppercase tracking-widest text-slate-500">
                  Monthly
                </p>
                <p className="mt-2 text-4xl font-extrabold tabular-nums text-slate-900">
                  $500<span className="text-xl">–1,500</span>
                </p>
                <p className="text-sm text-slate-500">Month to month</p>
                <p className="mt-3 text-sm text-slate-600">
                  We run it and tune it. Cancel any time. No annual lock-in, no
                  cancellation fee.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal>
            <p className="mx-auto mt-6 max-w-3xl text-sm text-slate-600">
              For reference: at a $1,434 average ticket, the setup pays for itself in{' '}
              <strong className="text-slate-900">two to three recovered jobs</strong>.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Straight answers */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Reveal>
            <div className="max-w-2xl">
              <p className="text-sm font-bold uppercase tracking-widest text-indigo-600">
                Who you would be working with
              </p>
              <h2 className="mt-2 text-3xl font-bold text-slate-900 md:text-4xl">
                Straight answers before you ask
              </h2>
            </div>
          </Reveal>
          <dl className="mx-auto mt-10 max-w-3xl border-t-2 border-slate-900">
            {STRAIGHT_ANSWERS.map((row, i) => (
              <Reveal key={row.q} delay={i * 0.05}>
                <div className="grid grid-cols-1 gap-1 border-b border-slate-200 py-4 sm:grid-cols-[10rem_1fr] sm:gap-4">
                  <dt className="text-sm font-bold uppercase tracking-wider text-slate-500">
                    {row.q}
                  </dt>
                  <dd className="m-0 text-slate-700">{row.a}</dd>
                </div>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-slate-950 py-20 text-white">
        <div className="container mx-auto px-4">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-bold uppercase tracking-widest text-amber-300">
                Next step
              </p>
              <h2 className="mt-2 text-3xl font-bold md:text-4xl">
                Fifteen minutes, and you get your number either way
              </h2>
              <p className="mt-3 text-slate-300">
                We will walk you through what we measured on your business. If you decide
                we are not a fit, you still keep the measurement and the three fixes.
              </p>
            </div>
          </Reveal>
          <div className="mt-10">
            <LeadForm source="lead-response" variant="trade" defaultTrade="plumber" tone="dark" />
          </div>
          <p className="mt-6 flex items-center justify-center gap-2 text-sm text-slate-400">
            <Check className="h-4 w-4 text-emerald-400" /> No obligation, and no
            salesperson will call you twice.
          </p>
        </div>
      </section>

      {/* Sources */}
      <footer className="border-t border-slate-200 py-12">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-base font-bold text-slate-900">
              Sources for every figure on this page
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              We cite them because contractors get pitched a lot of numbers nobody can
              trace.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-slate-500">
              {SOURCES.map((s) => (
                <li key={s.href}>
                  <span className="text-slate-600">{s.label}:</span>{' '}
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-2 hover:text-indigo-600"
                  >
                    {s.name}
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-slate-500">
              Hello Galaxy · US C-Corp ·{' '}
              <Link href="/websites" className="underline underline-offset-2 hover:text-indigo-600">
                See our website templates by trade
              </Link>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
