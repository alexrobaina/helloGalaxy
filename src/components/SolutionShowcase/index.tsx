'use client';

import { LottieAnimation } from '../LottieAnimations';
import customerAttractionIcon from '../../../public/customerAttraction.json';
import businessAnalytics from '../../../public/businessAnalytics.json';
import dataManagement from '../../../public/dataManagement.json';
import { useTranslations } from 'next-intl';

export const SolutionShowcase: React.FC = () => {
  const t = useTranslations('SolutionShowcase');

  return (
    <section className="bg-white py-20 px-6 md:px-12">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{t('title')}</h2>
          <p className="text-lg text-gray-600 mt-4">{t('description')}</p>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Solution 1 */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-md text-center">
            <div className="h-[150px]">
              <LottieAnimation width={150} animation={customerAttractionIcon} />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">{t('solution1.title')}</h3>
            <p className="text-gray-600 mt-2">{t('solution1.description')}</p>
          </div>

          {/* Solution 2 */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-md text-center">
            <div className="h-[150px]">
              <LottieAnimation width={190} animation={businessAnalytics} />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">{t('solution2.title')}</h3>
            <p className="text-gray-600 mt-2">{t('solution2.description')}</p>
          </div>

          {/* Solution 3 */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-md text-center">
            <div className="h-[150px]">
              <LottieAnimation width={250} animation={dataManagement} />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">{t('solution3.title')}</h3>
            <p className="text-gray-600 mt-2">{t('solution3.description')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
