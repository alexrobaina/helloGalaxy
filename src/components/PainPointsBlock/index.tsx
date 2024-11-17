'use client';
import { PainPoint } from './PainPoint';
import slowResponseIcon from '../../../public/AI-search.json';
import turtleIcon from '../../../public/pond-turtle.json';
import missedOpportunitiesIcon from '../../../public/laptop.json';

export const PainPointsBlock: React.FC = () => {
  return (
    <section className="bg-gray-50 py-20 px-6 md:px-12">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Transform Your Business Operations
          </h2>
          <p className="text-lg text-gray-600 mt-4">
            See how Hello Gallaxy eliminates common business challenges and accelerates your growth
            potential.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <PainPoint
            lottieWidth={370}
            title="Instant Customer Engagement"
            lottieIcon={turtleIcon}
            description="Don't keep customers waiting. Automate responses and deliver immediate, personalized support."
          />

          <PainPoint
            lottieWidth={200}
            title="Automation That Works"
            lottieIcon={missedOpportunitiesIcon}
            description="Free your team from repetitive tasks and focus on strategic initiatives that drive growth."
          />

          <PainPoint
            lottieWidth={250}
            title="Capture Every Opportunity"
            lottieIcon={slowResponseIcon}
            description="Never miss a lead again. Our smart tracking ensures every opportunity is captured and pursued."
          />
        </div>
      </div>
    </section>
  );
};
