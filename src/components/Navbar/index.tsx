'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { FC, useState } from 'react';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import { Link as RouteLink } from '@/i18n/routing';

const NAV_LINKS = [
  { href: '#solutions', key: 'solutions' },
  { href: '#projects', key: 'projects' },
  { href: '#chat', key: 'chat' },
  { href: '#contact', key: 'contact' },
] as const;

export const Navbar: FC = () => {
  const t = useTranslations('Navbar');
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="fixed w-full z-50 justify-center md:p-4 md:items-center md:rounded-full">
      {/* Burger Button (mobile only) */}
      <button
        className="absolute left-4 top-4 z-60 md:hidden text-indigo-100"
        onClick={() => setMenuOpen((open) => !open)}
        aria-label="Open menu"
      >
        {/* Simple SVG burger icon */}
        <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
          <rect y="4" width="24" height="2" rx="1" fill="currentColor" />
          <rect y="11" width="24" height="2" rx="1" fill="currentColor" />
          <rect y="18" width="24" height="2" rx="1" fill="currentColor" />
        </svg>
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <nav>
          <div className="fixed inset-0 bg-indigo-900 bg-opacity-90 backdrop-blur-sm flex flex-col justify-center items-center gap-12 p-4 md:hidden z-50 transition">
            {/* Close button */}
            <button
              className="absolute top-6 left-8 text-indigo-100 text-3xl"
              onClick={closeMenu}
              aria-label="Close menu"
            >
              ×
            </button>

            {NAV_LINKS.map(({ href, key }) => (
              <Link
                key={key}
                href={href}
                className="text-indigo-100 text-lg py-3 px-8 rounded-3xl hover:bg-indigo-800 transition"
                onClick={closeMenu}
              >
                {t(key)}
              </Link>
            ))}
            <RouteLink
              href="/websites"
              className="text-indigo-100 text-lg py-3 px-8 rounded-3xl hover:bg-indigo-800 transition"
              onClick={closeMenu}
            >
              Websites
            </RouteLink>

            <div className="mt-6 left-12">
              <LanguageSwitcher />
            </div>
          </div>
        </nav>
      )}

      {/* Desktop menu */}
      <nav className="hidden md:flex fixed top-2 left-0 w-full px-8 backdrop-blur-sm justify-center items-center gap-12">
        <div className="flex justify-center items-center gap-12 bg-indigo-900 bg-opacity-10 rounded-full h-10 p-0">
          {NAV_LINKS.map(({ href, key }) => (
            <Link
              key={key}
              href={href}
              className="text-indigo-100 text-sm py-2 px-6 rounded-3xl hover:bg-indigo-900 transition-colors"
            >
              {t(key)}
            </Link>
          ))}
          <RouteLink
            href="/websites"
            className="text-indigo-100 text-sm py-2 px-6 rounded-3xl hover:bg-indigo-900 transition-colors"
          >
            Websites
          </RouteLink>
        </div>
      </nav>
      {/* LanguageSwitcher always shows on desktop */}
      <div className="hidden md:block absolute right-12 top-10 z-50">
        <LanguageSwitcher />
      </div>
    </header>
  );
};
