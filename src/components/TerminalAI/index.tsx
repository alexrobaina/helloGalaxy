'use client';

import { FC } from 'react';
import { useTranslations } from 'next-intl';
import { VintageTerminal } from '../VintageTerminal';

export const TerminalAI: FC = () => {
  const t = useTranslations('TerminalAI');

  return (
    <section
      id="chat"
      className="py-20 px-6 md:px-12 bg-gradient-to-b from-gray-950 to-gray-950"
    >
      <div className="container mx-auto">
        <div className='flex sm:justify-center gap-4 flex-col items-center' >
          <h1 className='text-3xl sm:text-4xl flex flex-col text-slate-100 text-balance md:text-6xl font-bold s`m:text-center leading-tight sm:mb-4'>{t('title')}</h1>
          <p className='text-base sm:text-xl flex text-slate-100 tedt balance sm:text-center leading-tight'>{t('description')}</p>
        </div>
        <div className="text-center mt-5 mb-12">
          <VintageTerminal />
        </div>
      </div>
    </section>
  );
};
  