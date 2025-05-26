'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { FC } from 'react';
import LanguageSwitcher from '@/components/LanguageSwitcher';


export const Navbar: FC = () => {
  const t = useTranslations('Navbar');

  return (
  <header className="fixed justify-center p-4 items-center rounded-full z-50">
            <nav className="fixed top-2 left-0 w-full px-8 backdrop-blur-sm flex justify-center items-center gap-12">
              <div className="flex justify-center items-center gap-12 bg-indigo-500 bg-opacity-10 rounded-full h-10 p-0">
                <Link
                  href="/"
                  className="text-indigo-100 text-sm py-2 px-6  rounded-3xl hover:bg-indigo-900 transition-colors"
                >
                  {t('solutions')}
                </Link>
                <Link
                  href="/projects"
                  className="text-indigo-100 text-sm py-2 px-6  rounded-3xl hover:bg-indigo-900 transition-colors"
                >
                  {t('projects')}
                </Link>
                <Link
                  href="/chat"
                  className="text-indigo-100 text-sm py-2 px-6  rounded-3xl hover:bg-indigo-900 transition-colors"
                >
                  {t('chat')}
                </Link>
                <Link
                  href="/contact"
                  className="text-indigo-100 text-sm py-2 px-6  rounded-3xl hover:bg-indigo-900 transition-colors"
                >
                  {t('contact')}
                </Link>
              </div>
              <LanguageSwitcher />
            </nav>
          </header>
  
  );
};
