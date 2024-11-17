'use client';

import { LottieAnimation } from '../LottieAnimations';
import customerAttractionIcon from '../../assets/lottie/customerAttraction.json';
import automation from '../../assets/lottie/automation.json';
import aiMind from '../../assets/lottie/aiMind.json';
import smart from '../../assets/lottie/smart.json';

export const FeatureHighlight: React.FC = () => {
  return (
    <section className="bg-gray-50 py-20 px-6 md:px-12">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Why Leading Businesses Choose Hello Galaxy
          </h2>
          <p className="text-lg text-gray-600 mt-4">
            Discover how our enterprise AI platform delivers unmatched value through innovation,
            reliability, and results.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Feature 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="h-[150px]">
              <LottieAnimation width={200} animation={customerAttractionIcon} />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">Enterprise-Grade Scalability</h3>
            <p className="text-gray-600 mt-2">
              Flexible solutions that adapt to your needs, from small teams to global operations.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="h-[150px]">
              <LottieAnimation width={220} animation={automation} />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">Seamless Integration</h3>
            <p className="text-gray-600 mt-2">
              Native compatibility with leading enterprise tools and platforms for immediate
              deployment.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="h-[150px]">
              <LottieAnimation width={190} animation={smart} />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">Advanced Analytics</h3>
            <p className="text-gray-600 mt-2">
              Real-time insights and predictive analytics to drive strategic decision-making.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="h-[150px]">
              <LottieAnimation width={220} animation={aiMind} />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">ROI-Focused Solutions</h3>
            <p className="text-gray-600 mt-2">
              Cost-effective AI implementation with measurable business impact and rapid returns.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
