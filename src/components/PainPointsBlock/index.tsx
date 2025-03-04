'use client';
import { PainPoint } from './PainPoint';
import slowResponseIcon from '../../../public/AI-Search.json';
import turtleIcon from '../../../public/pond-turtle.json';
import missedOpportunitiesIcon from '../../../public/laptop.json';
import { useTranslations } from 'next-intl';

export const PainPointsBlock: React.FC = () => {
  const t = useTranslations('PainPointsBlock');

  return (
    <section id="pain-points" className="py-20 px-6 md:px-12 bg-slate-950">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">{t('title')}</h2>
          <p className="text-lg text-gray-600 mt-4">{t('description')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <PainPoint
            lottieWidth={370}
            title={t('paintPoint1.title')}
            lottieIcon={turtleIcon}
            description={t('paintPoint1.description')}
          />

          <PainPoint
            lottieWidth={200}
            title={t('paintPoint2.title')}
            lottieIcon={missedOpportunitiesIcon}
            description={t('paintPoint2.description')}
          />

          <PainPoint
            lottieWidth={250}
            title={t('paintPoint3.title')}
            lottieIcon={slowResponseIcon}
            description={t('paintPoint3.description')}
          />
        </div>
      </div>
    </section>
  );
};
