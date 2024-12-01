'use client';

import { useTranslations } from 'next-intl';
import { PlanCard } from './PlanCard';

export const Pricing: React.FC = () => {
  const t = useTranslations('Pricing');

  return (
    <section id="pricing" className="bg-white py-20 pb-60 px-6 md:px-12">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{t('title')}</h2>
          <p className="text-lg text-gray-600 mt-4">{t('description')}</p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Plan 1 */}
          <PlanCard
            price="$250"
            title={t('plan1.title')}
            buttonText="Contact Us"
            buttonLink="https://wa.me/5491138997032"
            description={t('plan1.description')}
            features={[
              t('plan1.features.1'),
              t('plan1.features.2'),
              t('plan1.features.3'),
              t('plan1.features.4'),
            ]}
          />

          {/* Plan 2 */}
          <PlanCard
            price="$399"
            title={t('plan2.title')}
            buttonText="Contact Us"
            buttonLink="https://wa.me/5491138997032"
            description={t('plan2.description')}
            features={[
              t('plan2.features.1'),
              t('plan2.features.2'),
              t('plan2.features.3'),
              t('plan2.features.4'),
            ]}
          />

          {/* Plan 3 */}
          <PlanCard
            price="Custom"
            title={t('plan3.title')}
            buttonText="Contact Us"
            buttonLink="https://wa.me/5491138997032"
            description={t('plan3.description')}
            features={[
              t('plan3.features.1'),
              t('plan3.features.2'),
              t('plan3.features.3'),
              t('plan3.features.4'),
            ]}
          />
        </div>
      </div>
    </section>
  );
};
