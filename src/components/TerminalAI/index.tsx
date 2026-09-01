'use client';

import { FC } from 'react';
import { useTranslations } from 'next-intl';
import { VintageTerminal } from '../VintageTerminal';

/**
 * Live demo of our own work. Downgraded from <h1> to <h2>: the page must have
 * exactly one h1 and that belongs to the hero.
 */
export const TerminalAI: FC = () => {
  const t = useTranslations('TerminalAI');

  return (
    <section id="chat" className="section section-divider bg-surface">
      <div className="container-content">
        <div className="max-w-3xl">
          <p className="eyebrow">{t('eyebrow')}</p>
          <h2 className="heading-2 mt-3">{t('title')}</h2>
          <p className="lead">{t('description')}</p>
        </div>

        <div className="mt-12">
          <VintageTerminal />
        </div>
      </div>
    </section>
  );
};
