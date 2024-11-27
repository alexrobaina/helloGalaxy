// app/[locale]/language-switcher.tsx
'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';

export default function LanguageSwitcher() {
  const router = useRouter();
  const locale = useLocale();
  const pathname = usePathname();

  const redirectToLocale = (newLocale: string) => {
    const segments = pathname.split('/');
    segments[1] = newLocale;
    router.push(segments.join('/'));
  };

  return (
    <div className="fixed right-0 top-0 m-4 flex gap-2">
      <button
        onClick={() => redirectToLocale('en-US')}
        disabled={locale === 'en-US'}
        className="bg-indigo-500 text-white py-2 px-4 rounded hover:bg-indigo-700 disabled:opacity-50"
      >
        English
      </button>
      <button
        onClick={() => redirectToLocale('es-ES')}
        disabled={locale === 'es-ES'}
        className="bg-indigo-500 text-white py-2 px-4 rounded hover:bg-indigo-700 disabled:opacity-50"
      >
        Español
      </button>
    </div>
  );
}
