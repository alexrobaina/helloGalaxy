'use client';

import { FC } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Link as RouteLink } from '@/i18n/routing';
import { Storefront, Rocket } from './icons';

/**
 * Hello Galaxy serves two very different visitors: a local business owner who
 * needs an online presence, and a founder/team who needs a product built.
 * Rather than writing copy that half-fits both, we fork here and send each one
 * down their own path.
 */
export const AudienceSplit: FC = () => {
  const t = useTranslations('AudienceSplit');

  return (
    <section id="audience" className="section section-divider bg-surface">
      <div className="container-content">
        <div className="max-w-3xl">
          <p className="eyebrow">{t('eyebrow')}</p>
          <h2 className="heading-2 mt-3">{t('title')}</h2>
          <p className="lead">{t('description')}</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          <PathCard
            index={0}
            icon={<Storefront />}
            title={t('business.title')}
            summary={t('business.summary')}
            bullets={[t('business.bullet1'), t('business.bullet2'), t('business.bullet3')]}
            ctaLabel={t('business.cta')}
            href="/websites"
            internal
          />
          <PathCard
            index={1}
            icon={<Rocket />}
            title={t('product.title')}
            summary={t('product.summary')}
            bullets={[t('product.bullet1'), t('product.bullet2'), t('product.bullet3')]}
            ctaLabel={t('product.cta')}
            href="#solutions"
          />
        </div>
      </div>
    </section>
  );
};

interface PathCardProps {
  index: number;
  icon: React.ReactNode;
  title: string;
  summary: string;
  bullets: string[];
  ctaLabel: string;
  href: string;
  /** Locale-aware route (uses next-intl Link) instead of an in-page anchor. */
  internal?: boolean;
}

const PathCard: FC<PathCardProps> = ({
  index,
  icon,
  title,
  summary,
  bullets,
  ctaLabel,
  href,
  internal = false,
}) => {
  const Anchor = internal ? RouteLink : Link;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="card-surface card-surface-hover group flex flex-col p-7 md:p-8"
    >
      <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-500/15 text-brand-300">
        {icon}
      </span>

      <h3 className="mt-5 text-xl font-semibold text-slate-50">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-400">{summary}</p>

      <ul className="mt-6 space-y-2.5">
        {bullets.map((bullet) => (
          <li key={bullet} className="flex items-start gap-2.5 text-sm text-slate-300">
            <Check />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>

      <Anchor
        href={href}
        className="mt-8 inline-flex items-center gap-1.5 self-start text-sm font-semibold text-brand-300 transition-colors hover:text-brand-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
      >
        {ctaLabel}
        <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
          &rarr;
        </span>
      </Anchor>
    </motion.div>
  );
};

const Check: FC = () => (
  <svg
    aria-hidden
    viewBox="0 0 20 20"
    className="mt-0.5 h-4 w-4 shrink-0 text-brand-400"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M16.7 5.3a1 1 0 0 1 0 1.4l-7.5 7.5a1 1 0 0 1-1.4 0L3.3 9.7a1 1 0 1 1 1.4-1.4l3.8 3.8 6.8-6.8a1 1 0 0 1 1.4 0Z"
      clipRule="evenodd"
    />
  </svg>
);
