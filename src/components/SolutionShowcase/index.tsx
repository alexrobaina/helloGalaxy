'use client';

import { LottieAnimation } from '../LottieAnimations';
import customerAttractionIcon from '/assets/lottie/customerAttraction.json';
import businessAnalytics from '/assets/lottie/businessAnalytics.json';
import dataManagement from '/assets/lottie/dataManagement.json';

export const SolutionShowcase: React.FC = () => {
  return (
    <section className="bg-white py-20 px-6 md:px-12">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Enterprise-Grade AI Solutions
          </h2>
          <p className="text-lg text-gray-600 mt-4">
            Transform your business operations with Hello Galaxy advanced AI technology, designed to
            enhance efficiency and drive growth.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Solution 1 */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-md text-center">
            <div className="h-[150px]">
              <LottieAnimation width={150} animation={customerAttractionIcon} />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">Intelligent Customer Engagement</h3>
            <p className="text-gray-600 mt-2">
              Elevate customer experience with AI-powered chatbots that provide instant,
              personalized support and drive conversions 24/7.
            </p>
          </div>

          {/* Solution 2 */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-md text-center">
            <div className="h-[150px]">
              <LottieAnimation width={190} animation={businessAnalytics} />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">Smart Process Automation</h3>
            <p className="text-gray-600 mt-2">
              Boost operational efficiency with AI-driven automation that handles complex workflows,
              from document processing to resource scheduling.
            </p>
          </div>

          {/* Solution 3 */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-md text-center">
            <div className="h-[150px]">
              <LottieAnimation width={250} animation={dataManagement} />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">Predictive Analytics & Insights</h3>
            <p className="text-gray-600 mt-2">
              Harness the power of your data with advanced analytics that deliver actionable
              insights for strategic decision-making and growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
