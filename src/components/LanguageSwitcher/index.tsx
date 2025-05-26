// app/[locale]/language-switcher.tsx
'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';
import { useState } from 'react';

export default function LanguageSwitcher() {
  const router = useRouter();
  const locale = useLocale();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const redirectToLocale = (newLocale: string) => {
    const segments = pathname.split('/');
    segments[1] = newLocale;
    router.push(segments.join('/'));
    setIsOpen(false);
  };

  return (
    <div className="fixed right-0 top-4 mr-4 inline-block text-left p-2 justify-center md:justify-end">
      <div>
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-gray-50 shadow-sm ring-1 ring-inset ring-indigo-500 hover:bg-indigo-600"
          aria-expanded={isOpen}
          aria-haspopup="true"
        >
          {locale === 'en-US' ? 'English' : 'Español'}
          <svg
            className="-mr-1 size-5 text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div
          className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex={-1}
        >
          <div className="py-1" role="none">
            <button
              onClick={() => redirectToLocale('en-US')}
              disabled={locale === 'en-US'}
              className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 disabled:bg-gray-100 disabled:text-gray-500"
              role="menuitem"
            >
              English
            </button>
            <button
              onClick={() => redirectToLocale('es-ES')}
              disabled={locale === 'es-ES'}
              className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 disabled:bg-gray-100 disabled:text-gray-500"
              role="menuitem"
            >
              Español
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
