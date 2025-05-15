'use client';

import { LottieAnimation } from '../LottieAnimations';
import customerAttractionIcon from '../../../public/customerAttraction.json';
import automation from '../../../public/automation.json';
import aiMind from '../../../public/aiMind.json';
import smart from '../../../public/smart.json';
import { useTranslations } from 'next-intl';

export const FeatureHighlight: React.FC = () => {
  const t = useTranslations('FeatureHighlight');

  return (
    <section className="py-20 px-6 md:px-12">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{t('title')}</h2>
          <p className="text-lg text-gray-600 mt-4">{t('description')}</p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Feature 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="h-[150px]">
              <LottieAnimation width={200} animation={customerAttractionIcon} />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">{t('feature1.title')}</h3>
            <p className="text-gray-600 mt-2">{t('feature1.description')}</p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="h-[150px]">
              <LottieAnimation width={220} animation={automation} />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">{t('feature2.title')}</h3>
            <p className="text-gray-600 mt-2">{t('feature2.description')}</p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="h-[150px]">
              <LottieAnimation width={190} animation={smart} />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">{t('feature3.title')}</h3>
            <p className="text-gray-600 mt-2">{t('feature3.description')}</p>
          </div>

          {/* Feature 4 */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="h-[150px]">
              <LottieAnimation width={220} animation={aiMind} />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">{t('feature4.title')}</h3>
            <p className="text-gray-600 mt-2">{t('feature4.description')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
