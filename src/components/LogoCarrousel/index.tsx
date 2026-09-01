'use client';

import { FC } from 'react';
import { useTranslations } from 'next-intl';
import { SiGooglecloud, SiFigma, SiTypescript } from 'react-icons/si';
import { BiLogoPostgresql } from 'react-icons/bi';
import { FaAws, FaReact, FaNode } from 'react-icons/fa';
import { AiOutlinePython } from 'react-icons/ai';
import { TbBrandPrisma, TbBrandNextjs } from 'react-icons/tb';

const LOGOS = [
  { icon: TbBrandNextjs, label: 'Next.js' },
  { icon: FaReact, label: 'React' },
  { icon: SiTypescript, label: 'TypeScript' },
  { icon: FaNode, label: 'Node.js' },
  { icon: AiOutlinePython, label: 'Python' },
  { icon: BiLogoPostgresql, label: 'PostgreSQL' },
  { icon: TbBrandPrisma, label: 'Prisma' },
  { icon: FaAws, label: 'AWS' },
  { icon: SiGooglecloud, label: 'Google Cloud' },
  { icon: SiFigma, label: 'Figma' },
];

/**
 * Secondary trust signal, so it stays visually quiet: a slim strip with muted
 * icons rather than the full-height section with an h2 it used to be. The
 * stack matters, but it is not the reason anyone hires us.
 */
export const LogoCarrousel: FC = () => {
  const t = useTranslations('LogoCarrousel');

  return (
    <section className="section-divider bg-ink px-6 py-14 md:px-12">
      <div className="container-content">
        <p className="text-center text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
          {t('title')}
        </p>

        <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-6 md:gap-x-14">
          {LOGOS.map(({ icon: Icon, label }) => (
            <li
              key={label}
              className="flex items-center gap-2.5 text-slate-500 transition-colors hover:text-slate-300"
            >
              <Icon size={26} aria-hidden />
              <span className="text-sm font-medium">{label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
