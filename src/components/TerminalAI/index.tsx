'use client';

import { FC } from 'react';
import { useTranslations } from 'next-intl';
import { VintageTerminal } from '../VintageTerminal';

export const TerminalAI: FC = () => {
  const t = useTranslations('TerminalAI');

  return (
    <section
      id="pain-points"
      className="py-20 px-6 md:px-12 bg-gradient-to-b from-gray-950 to-gray-950"
    >
      <div className="container mx-auto">
        <div className='flex justify-center flex-col items-center' >
          <h1 className='text-4xl flex flex-col text-slate-100 text-balance md:text-6xl font-bold text-center leading-tight sm:mb-4'>{t('title')}</h1>
          <p className='text-xl flex text-slate-100 tedt balance text-center leading-tight just'>{t('description')}</p>
        </div>
        <div className="text-center mb-12">
          <VintageTerminal />
        </div>
      </div>
    </section>
  );
};
  