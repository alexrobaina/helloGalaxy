'use client';

import { FC, useEffect, useState } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import { Link as RouteLink } from '@/i18n/routing';
import { cn } from '@/lib/cn';

const NAV_LINKS = [
  { href: '#solutions', key: 'solutions' },
  { href: '#process', key: 'process' },
  { href: '#projects', key: 'projects' },
  { href: '#chat', key: 'chat' },
] as const;

/**
 * Transparent over the hero, then solid once the user scrolls — so the nav
 * never competes with the headline but stays readable over content.
 */
export const Navbar: FC = () => {
  const t = useTranslations('Navbar');
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Prevent the page scrolling behind the open mobile menu.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-colors duration-300',
        scrolled ? 'border-b border-white/10 bg-ink/85 backdrop-blur-md' : 'bg-transparent'
      )}
    >
      <div className="container-content flex h-16 items-center justify-between px-4 md:px-8">
        <RouteLink
          href="/"
          className="flex items-center gap-2 text-sm font-semibold tracking-tight text-slate-50"
        >
          <span
            aria-hidden
            className="h-2.5 w-2.5 rounded-full bg-gradient-to-br from-brand-400 to-violet-500"
          />
          Hello Galaxy
        </RouteLink>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex" aria-label={t('primary')}>
          {NAV_LINKS.map(({ href, key }) => (
            <Link
              key={key}
              href={href}
              className="rounded-full px-3.5 py-2 text-sm text-slate-300 transition-colors hover:bg-white/[0.06] hover:text-white"
            >
              {t(key)}
            </Link>
          ))}
          <RouteLink
            href="/websites"
            className="rounded-full px-3.5 py-2 text-sm text-slate-300 transition-colors hover:bg-white/[0.06] hover:text-white"
          >
            {t('websites')}
          </RouteLink>
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden md:block">
            <LanguageSwitcher />
          </div>
          <Link
            href="#contact"
            className="hidden rounded-lg bg-brand-500 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-600 md:inline-flex"
          >
            {t('contact')}
          </Link>

          {/* Burger (mobile only) */}
          <button
            type="button"
            className="p-2 text-slate-100 md:hidden"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? t('closeMenu') : t('openMenu')}
          >
            <svg width="26" height="26" fill="none" viewBox="0 0 24 24" aria-hidden>
              <rect y="5" width="24" height="2" rx="1" fill="currentColor" />
              <rect y="11" width="24" height="2" rx="1" fill="currentColor" />
              <rect y="17" width="24" height="2" rx="1" fill="currentColor" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          id="mobile-menu"
          className="fixed inset-0 z-50 flex flex-col bg-ink/98 px-6 pb-10 pt-6 backdrop-blur-md md:hidden"
        >
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold text-slate-50">Hello Galaxy</span>
            <button
              type="button"
              className="p-2 text-3xl leading-none text-slate-100"
              onClick={closeMenu}
              aria-label={t('closeMenu')}
            >
              &times;
            </button>
          </div>

          <nav className="mt-10 flex flex-col gap-1" aria-label={t('primary')}>
            {NAV_LINKS.map(({ href, key }) => (
              <Link
                key={key}
                href={href}
                onClick={closeMenu}
                className="rounded-xl px-4 py-3.5 text-lg text-slate-200 transition-colors hover:bg-white/[0.06]"
              >
                {t(key)}
              </Link>
            ))}
            <RouteLink
              href="/websites"
              onClick={closeMenu}
              className="rounded-xl px-4 py-3.5 text-lg text-slate-200 transition-colors hover:bg-white/[0.06]"
            >
              {t('websites')}
            </RouteLink>
          </nav>

          <Link
            href="#contact"
            onClick={closeMenu}
            className="mt-6 rounded-lg bg-brand-500 px-4 py-3.5 text-center text-base font-semibold text-white"
          >
            {t('contact')}
          </Link>

          <div className="mt-auto pt-8">
            <LanguageSwitcher />
          </div>
        </div>
      )}
    </header>
  );
};
