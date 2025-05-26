'use client';
import { useTranslations } from 'next-intl';

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
            className="bg-white flex items-center justify-center text-indigo-600 px-6 py-2 rounded-lg text-sm font-semibold shadow-md hover:bg-indigo-100 transition"
          >
            {t('startButton')}
          </a>
         
        </div>
      </div>
    </footer>
  );
};
