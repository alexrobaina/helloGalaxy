'use client';

import React, { FC, useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';

import heroImage from '../../../public/conversationalAIbot.json';
import { LottieAnimation } from '../LottieAnimations';

export const Hero: FC = () => {
  const t = useTranslations('Hero');

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Assuming mobile is less than 768px
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Set initial value

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="bg-white text-gray-900 py-20 px-6 md:px-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Text Content */}

        <div className="max-w-6xl text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">{t('title')}</h1>
          <p className="text-lg md:text-xl mb-6 text-gray-600">{t('description')}</p>
          <div className="flex flex-col md:flex-row gap-4">
            <a
              href="#get-started"
              className="bg-indigo-500 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-indigo-600 transition"
            >
              {t('startButton')}
            </a>
            <a
              href="#learn-more"
              className="bg-gray-100 border-2 border-gray-300 px-6 py-3 rounded-lg text-lg font-semibold text-gray-700 hover:bg-gray-200 transition"
            >
              {t('exploreButton')}
            </a>
          </div>
        </div>

        {/* Hero Image */}
        <div className="mt-10 md:mt-10 md:ml-10">
          <LottieAnimation
            speed={0.5}
            animation={heroImage}
            width={isMobile ? 400 : 800} // Change width based on isMobile
          />
        </div>
      </div>
    </section>
  );
};
