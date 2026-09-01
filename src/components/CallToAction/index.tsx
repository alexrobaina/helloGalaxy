'use client';

import { FC } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { TbBrandWhatsapp } from 'react-icons/tb';
import { buttonVariants } from '@/components/ui';
import { cn } from '@/lib/cn';

const WHATSAPP_URL = 'https://wa.me/541138997032';

/**
 * Persistent conversion bar. Previously this rendered as a second <footer>
 * and carried `hidden md:block`, so the site's only real CTA was invisible to
 * mobile visitors. Now it is an <aside>, visible at every breakpoint, and
 * compacted down to the two buttons on small screens.
 *
 * `body.has-sticky-cta` (globals.css) reserves the matching bottom padding.
 */
export const CallToAction: FC = () => {
  const t = useTranslations('CallToAction');

  return (
    <aside
      aria-label={t('title')}
      className="fixed bottom-0 left-0 z-40 w-full border-t border-white/10 bg-ink/90 px-4 py-3 backdrop-blur-md md:px-8"
    >
      <div className="container-content flex items-center justify-between gap-4">
        <div className="hidden sm:block">
          <p className="text-sm font-semibold text-slate-50">{t('title')}</p>
          <p className="text-xs text-slate-400">{t('description')}</p>
        </div>

        <div className="flex w-full items-center gap-2 sm:w-auto">
          <Link
            href="#contact"
            className={cn(buttonVariants({ variant: 'brand', size: 'md' }), 'flex-1 sm:flex-none')}
          >
            {t('startButton')}
          </Link>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t('whatsapp')}
            className={cn(
              buttonVariants({ size: 'md' }),
              'flex-1 gap-2 border border-white/15 bg-white/5 text-slate-100 shadow-none hover:bg-white/10 focus:ring-white/40 sm:flex-none'
            )}
          >
            <TbBrandWhatsapp size={18} />
            <span>{t('whatsapp')}</span>
          </a>
        </div>
      </div>
    </aside>
  );
};
