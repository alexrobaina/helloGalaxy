'use client';

import { useEffect, useRef, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';
import { routing, type Locale } from '@/i18n/routing';
import { cn } from '@/lib/cn';

/** Native names — a language picker should read in the language it offers. */
const NATIVE_LABELS: Record<Locale, string> = {
  'en-US': 'English',
  'es-ES': 'Español',
};

const SHORT_LABELS: Record<Locale, string> = {
  'en-US': 'EN',
  'es-ES': 'ES',
};

/**
 * Sits inline in the navbar. It used to be `fixed right-0 top-4`, which took
 * it out of the header's flex row entirely — so it overlapped the Contact CTA
 * and never lined up with it — and it was painted as a solid indigo button,
 * competing with the one action we actually want clicked.
 */
export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale() as Locale;
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close on outside click and on Escape.
  useEffect(() => {
    if (!isOpen) return;

    const onPointerDown = (event: MouseEvent | TouchEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) setIsOpen(false);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false);
    };

    document.addEventListener('mousedown', onPointerDown);
    document.addEventListener('touchstart', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('mousedown', onPointerDown);
      document.removeEventListener('touchstart', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen]);

  const redirectToLocale = (newLocale: Locale) => {
    setIsOpen(false);
    if (newLocale === locale) return;
    const segments = pathname.split('/');
    segments[1] = newLocale;
    router.push(segments.join('/'));
  };

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-label={`${NATIVE_LABELS[locale]} — ${locale}`}
        className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 px-2.5 py-2 text-sm font-medium text-slate-300 transition-colors hover:border-white/20 hover:bg-white/[0.06] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-400"
      >
        <Globe />
        <span aria-hidden>{SHORT_LABELS[locale]}</span>
        <Chevron open={isOpen} />
      </button>

      {isOpen && (
        <ul
          role="listbox"
          aria-label="Language"
          className="absolute right-0 z-50 mt-2 w-40 overflow-hidden rounded-xl border border-white/10 bg-card shadow-xl shadow-black/40"
        >
          {routing.locales.map((option) => {
            const active = option === locale;
            return (
              <li key={option}>
                <button
                  type="button"
                  role="option"
                  aria-selected={active}
                  onClick={() => redirectToLocale(option)}
                  className={cn(
                    'flex w-full items-center justify-between px-3.5 py-2.5 text-left text-sm transition-colors',
                    active
                      ? 'bg-white/[0.06] font-medium text-white'
                      : 'text-slate-300 hover:bg-white/[0.06] hover:text-white'
                  )}
                >
                  {NATIVE_LABELS[option]}
                  {active && <Check />}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

const Globe = () => (
  <svg
    aria-hidden
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.7}
    className="h-4 w-4"
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M3.5 9h17M3.5 15h17" />
    <path d="M12 3a15 15 0 0 1 0 18 15 15 0 0 1 0-18Z" />
  </svg>
);

const Chevron = ({ open }: { open: boolean }) => (
  <svg
    aria-hidden
    viewBox="0 0 20 20"
    fill="currentColor"
    className={cn('h-4 w-4 text-slate-500 transition-transform', open && 'rotate-180')}
  >
    <path
      fillRule="evenodd"
      d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
      clipRule="evenodd"
    />
  </svg>
);

const Check = () => (
  <svg aria-hidden viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 text-brand-400">
    <path
      fillRule="evenodd"
      d="M16.7 5.3a1 1 0 0 1 0 1.4l-7.5 7.5a1 1 0 0 1-1.4 0L3.3 9.7a1 1 0 1 1 1.4-1.4l3.8 3.8 6.8-6.8a1 1 0 0 1 1.4 0Z"
      clipRule="evenodd"
    />
  </svg>
);
