'use client';

import { useTranslations } from 'next-intl';
import { VintageTerminal } from '../VintageTerminal';
export const TerminalAI: React.FC = () => {
  const t = useTranslations('TerminalAI');

  return (
    <section
      id="pain-points"
      className="py-20 px-6 md:px-12 bg-gradient-to-b from-gray-950 to-slate-950"
    >
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <VintageTerminal />
        </div>
      </div>
    </section>
  );
};
