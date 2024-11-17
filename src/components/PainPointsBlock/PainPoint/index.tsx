import { LottieAnimation } from '@/components/LottieAnimations';
import { LottieComponentProps } from 'lottie-react';
import { FC } from 'react';

type PainPointProps = {
  lottieIcon: LottieComponentProps;
  title: string;
  description: string;
  lottieWidth: number;
};

export const PainPoint: FC<PainPointProps> = ({ lottieIcon, title, description, lottieWidth }) => (
  <div className="bg-white p-6 rounded-lg shadow-md text-center">
    <div className="flex justify-center h-[200px]">
      <LottieAnimation speed={0.5} width={lottieWidth} animation={lottieIcon} />
    </div>
    <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
    <p className="text-gray-600 mt-2">{description}</p>
  </div>
);
