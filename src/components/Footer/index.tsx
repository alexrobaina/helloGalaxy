'use client';

import { FC } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { TbBrandInstagram, TbBrandLinkedin } from 'react-icons/tb';
import { Link as RouteLink } from '@/i18n/routing';

const SECTION_LINKS = [
  { href: '#solutions', key: 'solutions' },
  { href: '#process', key: 'process' },
  { href: '#projects', key: 'projects' },
  { href: '#chat', key: 'chat' },
  { href: '#contact', key: 'contact' },
] as const;

export const Footer: FC = () => {
  const t = useTranslations('Footer');
  const nav = useTranslations('Navbar');

  return (
    <footer className="section-divider bg-ink px-6 py-16 md:px-12">
      <div className="container-content">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <span className="flex items-center gap-2 text-base font-semibold text-slate-50">
              <span
                aria-hidden
                className="h-2.5 w-2.5 rounded-full bg-gradient-to-br from-brand-400 to-violet-500"
              />
              Hello Galaxy
            </span>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-400">
              {t('description')}
            </p>

            <div className="mt-6 flex gap-3">
              <SocialLink
                href="https://www.instagram.com/hellogalaxy.sf"
                label="Instagram"
                icon={<TbBrandInstagram size={19} />}
              />
              <SocialLink
                href="https://www.linkedin.com/company/hellogalaxy"
                label="LinkedIn"
                icon={<TbBrandLinkedin size={19} />}
              />
            </div>
          </div>

          <nav aria-label={t('navLabel')}>
            <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
              {t('navLabel')}
            </h2>
            <ul className="mt-4 space-y-2.5">
              {SECTION_LINKS.map(({ href, key }) => (
                <li key={key}>
                  <Link
                    href={href}
                    className="text-sm text-slate-400 transition-colors hover:text-slate-100"
                  >
                    {nav(key)}
                  </Link>
                </li>
              ))}
              <li>
                <RouteLink
                  href="/websites"
                  className="text-sm text-slate-400 transition-colors hover:text-slate-100"
                >
                  {nav('websites')}
                </RouteLink>
              </li>
            </ul>
          </nav>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
              {t('contactUs')}
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm text-slate-400">
              <li>
                <a
                  href="https://wa.me/541138997032"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-slate-100"
                >
                  +54 11 3899-7032
                </a>
              </li>
              <li>
                <a
                  href="mailto:team@hellogalaxy.dev"
                  className="transition-colors hover:text-slate-100"
                >
                  team@hellogalaxy.dev
                </a>
              </li>
              <li className="pt-1 text-slate-500">Mendoza &amp; Buenos Aires, AR</li>
              <li className="text-slate-500">
                {`${t('monday')} – ${t('friday')}, 9:00–18:00 UTC-3`}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-8 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Hello Galaxy. {t('rights')}</p>
          <p>{t('builtWith')}</p>
        </div>
      </div>
    </footer>
  );
};

const SocialLink: FC<{ href: string; label: string; icon: React.ReactNode }> = ({
  href,
  label,
  icon,
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-slate-400 transition-colors hover:border-white/20 hover:text-slate-100"
  >
    {icon}
  </a>
);
