'use client';

import { FC } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { buttonVariants } from '@/components/ui';
import { cn } from '@/lib/cn';

/**
 * Above the fold the visitor must be able to answer three questions:
 * what do they do, is it for me, and what do I do next. So: a concrete
 * claim, a plain-language subline, two CTAs (one committal, one browsing)
 * and a strip of verifiable trust signals — no vague slogans.
 */
export const Hero: FC = () => {
  const t = useTranslations('Hero');

  const stats = [
    { value: t('stats.projects.value'), label: t('stats.projects.label') },
    { value: t('stats.delivery.value'), label: t('stats.delivery.label') },
    { value: t('stats.reply.value'), label: t('stats.reply.label') },
  ];

  return (
    <section className="relative flex min-h-[92vh] items-center overflow-hidden bg-ink px-6 pb-20 pt-32 md:px-12 md:pt-36">
      <Backdrop />

      <div className="container-content relative z-10">
        <div className="max-w-4xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-400/30 bg-brand-500/10 px-3 py-1 text-xs font-medium text-brand-200">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-400" aria-hidden />
            {t('eyebrow')}
          </span>

          <h1 className="mt-6 text-balance text-4xl font-bold leading-[1.08] tracking-tight text-slate-50 sm:text-5xl md:text-6xl">
            {t('title')}{' '}
            <span className="bg-gradient-to-r from-brand-300 to-violet-400 bg-clip-text text-transparent">
              {t('titleAccent')}
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-balance text-lg leading-relaxed text-slate-400 md:text-xl">
            {t('description')}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="#contact"
              className={cn(buttonVariants({ variant: 'brand', size: 'lg' }), 'text-base')}
            >
              {t('primaryCta')}
            </Link>
            <Link
              href="#projects"
              className={cn(
                buttonVariants({ size: 'lg' }),
                'border border-white/15 bg-white/5 text-base text-slate-100 shadow-none hover:bg-white/10 focus:ring-white/40'
              )}
            >
              {t('secondaryCta')}
            </Link>
          </div>

          <dl className="mt-14 grid max-w-2xl grid-cols-1 gap-6 border-t border-white/10 pt-8 sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span className="block text-2xl font-bold text-slate-50">{stat.value}</span>
                  <span className="mt-1 block text-sm text-slate-500">{stat.label}</span>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
};

/**
 * Decorative background: one soft indigo glow behind the copy plus a faint
 * grid. Kept low-contrast so the headline stays the brightest thing on screen.
 */
const Backdrop: FC = () => (
  <>
    <div
      aria-hidden
      className="pointer-events-none absolute -left-1/4 -top-1/3 h-[70rem] w-[70rem] rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.20),transparent_62%)]"
    />
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 opacity-[0.35]"
      style={{
        backgroundImage:
          'linear-gradient(to right, rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.045) 1px, transparent 1px)',
        backgroundSize: '72px 72px',
        maskImage: 'radial-gradient(ellipse 80% 60% at 50% 30%, black, transparent)',
        WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 30%, black, transparent)',
      }}
    />
    <div
      aria-hidden
      className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-ink"
    />
  </>
);
