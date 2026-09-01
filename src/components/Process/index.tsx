'use client';

import { FC } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { buttonVariants } from '@/components/ui';
import { cn } from '@/lib/cn';

/**
 * "How do you work and how long does it take" is the question that blocks the
 * decision right after the visitor is convinced by the services. Four steps,
 * each with an explicit timebox, so the commitment feels bounded.
 */
export const Process: FC = () => {
  const t = useTranslations('Process');
  const steps = [1, 2, 3, 4].map((n) => ({
    title: t(`step${n}.title`),
    duration: t(`step${n}.duration`),
    description: t(`step${n}.description`),
  }));

  return (
    <section id="process" className="section section-divider bg-ink">
      <div className="container-content">
        <div className="max-w-3xl">
          <p className="eyebrow">{t('eyebrow')}</p>
          <h2 className="heading-2 mt-3">{t('title')}</h2>
          <p className="lead">{t('description')}</p>
        </div>

        <ol className="relative mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Connecting rail — decorative, desktop only. */}
          <span
            aria-hidden
            className="absolute left-0 right-0 top-5 hidden h-px bg-gradient-to-r from-brand-500/60 via-brand-500/25 to-transparent lg:block"
          />

          {steps.map((step, index) => (
            <motion.li
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <span className="relative z-10 inline-flex h-10 w-10 items-center justify-center rounded-full border border-brand-400/40 bg-ink font-mono text-sm font-semibold text-brand-300">
                {index + 1}
              </span>
              <h3 className="mt-5 text-base font-semibold text-slate-50">{step.title}</h3>
              <p className="mt-1 text-xs font-medium uppercase tracking-wider text-brand-400">
                {step.duration}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">{step.description}</p>
            </motion.li>
          ))}
        </ol>

        <div className="mt-14 flex flex-col items-start gap-4 rounded-2xl border border-brand-400/25 bg-brand-500/[0.07] p-7 sm:flex-row sm:items-center sm:justify-between md:p-8">
          <div>
            <p className="text-lg font-semibold text-slate-50">{t('cta.title')}</p>
            <p className="mt-1 text-sm text-slate-400">{t('cta.description')}</p>
          </div>
          <Link
            href="#contact"
            className={cn(buttonVariants({ variant: 'brand', size: 'lg' }), 'shrink-0')}
          >
            {t('cta.button')}
          </Link>
        </div>
      </div>
    </section>
  );
};
