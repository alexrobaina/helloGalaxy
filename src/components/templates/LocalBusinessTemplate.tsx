import Image from 'next/image';
import { Link } from '@/i18n/routing';
import type { TradeTemplate, Feature } from '@/templates/registry';
import { Reveal } from '@/components/ui/Reveal';
import { Counter } from '@/components/ui/Counter';
import { BrandPreview } from '@/components/templates/BrandPreview';
import { Faq } from '@/components/templates/Faq';
import {
  ShieldCheck,
  Clock,
  Tag,
  Wrench,
  Star,
  Phone,
  MapPin,
  BadgeCheck,
} from 'lucide-react';

const FEATURE_ICONS: Record<Feature['icon'], typeof ShieldCheck> = {
  shield: ShieldCheck,
  clock: Clock,
  tag: Tag,
  wrench: Wrench,
  star: Star,
  phone: Phone,
  map: MapPin,
};

const telHref = (phone: string) => `tel:${phone.replace(/[^\d+]/g, '')}`;

/**
 * A full, standalone local-business website rendered from a TradeTemplate
 * config. Used as the live demo a prospect sees (e.g. /websites/plumber).
 * Intentionally carries NO Hello Galaxy chrome except the demo ribbon.
 */
export function LocalBusinessTemplate({ t }: { t: TradeTemplate }) {
  const year = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-white text-slate-800">
      {/* Header */}
      <header className="sticky top-0 z-30 border-b border-slate-100 bg-white/90 backdrop-blur-sm">
        <div className="container mx-auto flex items-center justify-between gap-4 px-4 py-4">
          <span className={`text-xl font-extrabold ${t.theme.accentText}`}>
            {t.businessName}
          </span>
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href={telHref(t.phone)}
              className="flex items-center gap-2 font-semibold text-slate-700 hover:text-slate-900"
              aria-label={`Call ${t.phone}`}
            >
              <Phone className="h-4 w-4" />
              <span className="hidden sm:inline">{t.phone}</span>
            </a>
            <a
              href="#contact"
              className={`rounded-lg px-4 py-2 text-sm font-semibold shadow-sm transition ${t.theme.primaryBtn}`}
            >
              Get a Quote
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative isolate overflow-hidden text-white">
        <Image
          src={t.images.hero}
          alt=""
          fill
          priority
          sizes="100vw"
          className="-z-20 object-cover"
        />
        <div
          className={`absolute inset-0 -z-10 bg-gradient-to-br ${t.theme.heroGradient} opacity-90`}
        />
        <div className="container mx-auto px-4 py-20 md:py-28">
          <div className="max-w-2xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm ring-1 ring-white/20">
              <span className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current text-amber-300" />
                ))}
              </span>
              <span className="font-medium">
                {t.rating} · {t.reviewsCount} reviews
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              {t.hero.headline}
            </h1>
            <p className="mt-5 text-lg md:text-xl text-white/90">
              {t.hero.subheadline}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href={telHref(t.phone)}
                className={`inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-lg font-semibold shadow-md transition ${t.theme.primaryBtn}`}
              >
                <Phone className="h-5 w-5" /> Call {t.phone}
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-lg border border-white/40 bg-white/10 px-6 py-3 text-lg font-semibold text-white hover:bg-white/20 transition"
              >
                Request a Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust stats band */}
      <section className={`border-b border-slate-100 ${t.theme.softBg}`}>
        <div className="container mx-auto grid grid-cols-2 gap-6 px-4 py-10 md:grid-cols-4">
          {[
            { value: t.stats.yearsExperience, suffix: '+', label: 'Years experience' },
            { value: t.stats.jobsCompleted, suffix: '+', label: 'Jobs completed' },
            { value: parseFloat(t.rating), decimals: 1, label: 'Average rating' },
            { value: t.reviewsCount, suffix: '+', label: 'Happy customers' },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p className={`text-3xl md:text-4xl font-extrabold ${t.theme.accentText}`}>
                <Counter
                  value={s.value}
                  decimals={s.decimals ?? 0}
                  suffix={s.suffix ?? ''}
                />
              </p>
              <p className="mt-1 text-sm font-medium text-slate-600">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Trust badges row */}
      <div className="border-b border-slate-100 bg-white">
        <div className="container mx-auto flex flex-wrap items-center justify-center gap-x-8 gap-y-3 px-4 py-5 text-sm font-medium text-slate-600">
          <span className="inline-flex items-center gap-2">
            <ShieldCheck className="h-5 w-5 text-emerald-600" /> Licensed &amp; Insured
          </span>
          <span className="inline-flex items-center gap-2">
            <BadgeCheck className="h-5 w-5 text-emerald-600" /> Verified Reviews
          </span>
          <span className="inline-flex items-center gap-2">
            <Tag className="h-5 w-5 text-emerald-600" /> Free Estimates
          </span>
          <span className="inline-flex items-center gap-2">
            <MapPin className="h-5 w-5 text-emerald-600" /> Serving {t.city}
          </span>
        </div>
      </div>

      {/* Services */}
      <section className={`py-20 ${t.theme.softBg}`}>
        <div className="container mx-auto px-4">
          <Reveal>
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                Our {t.trade} Services
              </h2>
              <p className="mt-3 text-slate-600">
                Everything you need, done right the first time.
              </p>
            </div>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.services.map((s, i) => (
              <Reveal key={s.name} delay={(i % 3) * 0.08}>
                <div className="h-full rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100 transition hover:-translate-y-1 hover:shadow-lg">
                  <span className="text-3xl" aria-hidden>
                    {s.icon}
                  </span>
                  <h3 className="mt-4 text-lg font-semibold text-slate-900">
                    {s.name}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600">{s.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {t.features.map((f, i) => {
              const Icon = FEATURE_ICONS[f.icon];
              return (
                <Reveal key={f.title} delay={i * 0.1}>
                  <div className="text-center md:text-left">
                    <div
                      className={`inline-flex h-12 w-12 items-center justify-center rounded-xl text-white ${t.theme.accentBg}`}
                    >
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-4 text-xl font-bold text-slate-900">
                      {f.title}
                    </h3>
                    <p className="mt-2 text-slate-600">{f.description}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Recent work */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Recent work
            </h2>
            <p className="mt-3 text-slate-600">
              A few of our latest {t.trade.toLowerCase()} projects.
            </p>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {t.images.gallery.map((src, i) => (
              <Reveal key={src} delay={i * 0.08}>
                <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl ring-1 ring-slate-200">
                  <Image
                    src={src}
                    alt={`${t.trade} project ${i + 1}`}
                    fill
                    sizes="(max-width: 640px) 100vw, 33vw"
                    className="object-cover transition duration-500 group-hover:scale-110"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className={`py-20 ${t.theme.softBg}`}>
        <div className="container mx-auto px-4">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              What customers say
            </h2>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            {t.testimonials.map((r, i) => (
              <Reveal key={r.name} delay={i * 0.1}>
                <figure className="h-full rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-100">
                  <div className="flex">
                    {Array.from({ length: 5 }).map((_, idx) => (
                      <Star key={idx} className="h-5 w-5 fill-current text-amber-400" />
                    ))}
                  </div>
                  <blockquote className="mt-4 text-lg text-slate-700">
                    “{r.quote}”
                  </blockquote>
                  <figcaption className="mt-4 flex items-center gap-2 font-semibold text-slate-900">
                    {r.name}{' '}
                    <span className="font-normal text-slate-500">· {r.location}</span>
                    <span className="ml-auto inline-flex items-center gap-1 text-xs font-medium text-emerald-600">
                      <BadgeCheck className="h-4 w-4" /> Verified
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                Questions? We’ve got answers.
              </h2>
              <p className="mt-3 text-slate-600">
                The stuff customers ask us most, before they pick up the phone.
              </p>
            </div>
          </Reveal>
          <div className="mt-10">
            <Faq items={t.faqs} accentText={t.theme.accentText} />
          </div>
        </div>
      </section>

      {/* Live brand preview (Hello Galaxy hook for prospects) */}
      <section className="border-y border-slate-100 bg-slate-50 py-20">
        <div className="container mx-auto px-4">
          <Reveal>
            <BrandPreview t={t} />
          </Reveal>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className={`py-20 text-white ${t.theme.accentBg}`}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold">
            Ready to get started?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-white/90">
            Call now for fast, friendly service in {t.city}. Free estimates and
            upfront pricing.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <a
              href={telHref(t.phone)}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 text-lg font-semibold text-slate-900 shadow-md hover:bg-slate-100 transition"
            >
              <Phone className="h-5 w-5" /> {t.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-12 text-slate-300">
        <div className="container mx-auto grid grid-cols-1 gap-8 px-4 md:grid-cols-3">
          <div>
            <p className="text-lg font-bold text-white">{t.businessName}</p>
            <p className="mt-2 text-sm">{t.trade} services you can trust.</p>
          </div>
          <div className="text-sm">
            <p className="font-semibold text-white">Contact</p>
            <p className="mt-2 flex items-center gap-2">
              <Phone className="h-4 w-4" /> {t.phone}
            </p>
            <p className="mt-1 flex items-center gap-2">
              <MapPin className="h-4 w-4" /> {t.city}
            </p>
          </div>
          <div className="text-sm">
            <p className="font-semibold text-white">Hours</p>
            <p className="mt-2">Mon–Fri: 8:00am – 6:00pm</p>
            <p>24/7 emergency service</p>
          </div>
        </div>
        <div className="container mx-auto mt-8 px-4 text-xs text-slate-500">
          © {year} {t.businessName}. All rights reserved.
        </div>
      </footer>

      {/* Mobile floating click-to-call (sits above the demo ribbon) */}
      <a
        href={telHref(t.phone)}
        className={`fixed bottom-24 right-4 z-40 inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-bold shadow-xl sm:hidden ${t.theme.primaryBtn}`}
        aria-label={`Call ${t.businessName}`}
      >
        <Phone className="h-5 w-5" /> Call now
      </a>

      {/* Hello Galaxy demo ribbon */}
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-slate-950/95 text-white backdrop-blur">
        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 px-4 py-3">
          <p className="text-sm text-center sm:text-left">
            🚀 This is a <strong>demo template by Hello Galaxy</strong> — get this
            website for your business.
          </p>
          <Link
            href="/websites"
            className="shrink-0 rounded-lg bg-indigo-500 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-600 transition"
          >
            Get your website →
          </Link>
        </div>
      </div>
    </div>
  );
}
