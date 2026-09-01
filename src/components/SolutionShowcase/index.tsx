'use client';

import { FC } from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { LottieAnimation } from '../LottieAnimations';
import userInterface from '../../../public/assets/Lottie/interface.json';
import softwareHardware from '../../../public/assets/Lottie/SoftwareHardware.json';
import computer from '../../../public/assets/Lottie/computer.json';
import automation from '../../../public/assets/Lottie/automation.json';

/**
 * Four services, each stated as an outcome with the concrete deliverables
 * underneath. The previous version listed six — mixing cloud infrastructure
 * with Instagram marketing — which left no single message standing. The two
 * dropped offerings survive as a secondary line below the grid.
 */
export const SolutionShowcase: FC = () => {
  const t = useTranslations('SolutionShowcase');

  const solutions = [
    {
      key: 'apps',
      animation: userInterface,
      width: 170,
      deliverables: ['apps.item1', 'apps.item2', 'apps.item3'],
    },
    {
      key: 'web',
      animation: computer,
      width: 175,
      deliverables: ['web.item1', 'web.item2', 'web.item3'],
    },
    {
      key: 'ai',
      animation: automation,
      width: 195,
      deliverables: ['ai.item1', 'ai.item2', 'ai.item3'],
    },
    {
      key: 'cloud',
      animation: softwareHardware,
      width: 200,
      deliverables: ['cloud.item1', 'cloud.item2', 'cloud.item3'],
    },
  ];

  return (
    <section id="solutions" className="section section-divider bg-surface">
      <div className="container-content">
        <div className="max-w-3xl">
          <p className="eyebrow">{t('eyebrow')}</p>
          <h2 className="heading-2 mt-3">{t('title')}</h2>
          <p className="lead">{t('description')}</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {solutions.map((solution, index) => (
            <motion.article
              key={solution.key}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: (index % 2) * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="card-surface card-surface-hover flex flex-col overflow-hidden p-7 md:flex-row md:items-start md:gap-7 md:p-8"
            >
              <div className="flex h-[130px] shrink-0 items-center justify-center md:w-[150px]">
                <LottieAnimation width={solution.width} animation={solution.animation} />
              </div>

              <div className="mt-4 md:mt-0">
                <h3 className="text-xl font-semibold text-slate-50">
                  {t(`${solution.key}.title`)}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-slate-400">
                  {t(`${solution.key}.description`)}
                </p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {solution.deliverables.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-slate-300"
                    >
                      {t(item)}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>

        <p className="mt-8 text-sm text-slate-500">
          {t('alsoLabel')}{' '}
          <span className="text-slate-400">{t('alsoItems')}</span>
        </p>
      </div>
    </section>
  );
};
