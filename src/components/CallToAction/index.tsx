'use client';
import { useTranslations } from 'next-intl';
import { buttonVariants } from '@/components/ui';
import { cn } from '@/lib/cn';

export const CallToAction: React.FC = () => {
  const t = useTranslations('CallToAction');

  return (
    <footer className="hidden md:block fixed bottom-0 w-full bg-indigo-600 text-white py-4 px-6 shadow-md z-50">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* CTA Text */}
        <div className="text-center md:text-left mb-3 md:mb-0">
          <h3 className="text-lg font-semibold">{t('title')}</h3>
          <p className="text-sm text-indigo-200">{t('description')}</p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row gap-4">
          <a
            href="https://wa.me/541138997032"
            className={cn(buttonVariants({ variant: 'brandInverse', size: 'md' }), 'px-6')}
          >
            {t('startButton')}
          </a>
         
        </div>
      </div>
    </footer>
  );
};
