'use client';

import { FC } from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

/**
 * Problem-first section. Before pitching services we name the situations the
 * visitor is actually in, so the services that follow read as answers rather
 * than a catalogue. Replaces the old PainPointsBlock (white cards on violet,
 * failing contrast, and never mounted on the page).
 */
export const PainPoints: FC = () => {
  const t = useTranslations('PainPoints');

  const points = [1, 2, 3].map((n) => ({
    title: t(`point${n}.title`),
    description: t(`point${n}.description`),
    outcome: t(`point${n}.outcome`),
  }));

  return (
    <section id="pain-points" className="section section-divider bg-ink">
      <div className="container-content">
        <div className="max-w-3xl">
          <p className="eyebrow">{t('eyebrow')}</p>
          <h2 className="heading-2 mt-3">{t('title')}</h2>
          <p className="lead">{t('description')}</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {points.map((point, index) => (
            <motion.article
              key={point.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="card-surface flex flex-col p-6 md:p-7"
            >
              <span
                aria-hidden
                className="font-mono text-sm font-semibold text-brand-400/70"
              >
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-3 text-lg font-semibold leading-snug text-slate-50">
                {point.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">
                {point.description}
              </p>
              <p className="mt-5 flex items-start gap-2 border-t border-white/10 pt-4 text-sm font-medium text-brand-200">
                <Arrow />
                <span>{point.outcome}</span>
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

const Arrow: FC = () => (
  <svg
    aria-hidden
    viewBox="0 0 20 20"
    className="mt-0.5 h-4 w-4 shrink-0 text-brand-400"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M2.5 10a1 1 0 0 1 1-1h10.6l-3.8-3.8a1 1 0 1 1 1.4-1.4l5.5 5.5a1 1 0 0 1 0 1.4l-5.5 5.5a1 1 0 0 1-1.4-1.4l3.8-3.8H3.5a1 1 0 0 1-1-1Z"
      clipRule="evenodd"
    />
  </svg>
);
