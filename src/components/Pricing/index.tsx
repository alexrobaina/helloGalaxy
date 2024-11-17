import { PlanCard } from './PlanCard';

export const Pricing: React.FC = () => {
  return (
    <section className="bg-white py-20 pb-60 px-6 md:px-12">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Flexible Plans for Sustainable Growth
          </h2>
          <p className="text-lg text-gray-600 mt-4">
            Select the perfect plan to power your business with enterprise AI capabilities.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Plan 1 */}
          <PlanCard
            price="$140"
            title="Essential Plan"
            buttonText="Contact Us"
            buttonLink="#contact-us"
            description="Streamline operations with powerful AI automation essentials."
            features={[
              'Intelligent AI Assistant',
              'Custom AI Training',
              '1,000 Monthly Interactions',
              'Core Automation Suite',
              'Priority Email Support',
              'Business Tools Integration',
            ]}
          />

          {/* Plan 2 */}
          <PlanCard
            price="$190"
            title="Professional Plan"
            buttonText="Contact Us"
            buttonLink="#contact-us"
            description="Enhanced capabilities for scaling businesses and teams."
            features={[
              'Advanced AI Assistant',
              'Extended AI Training',
              '3,000 Monthly Interactions',
              'Premium Automation Suite',
              'Priority Support & Training',
              'Advanced Integration Hub',
            ]}
          />

          {/* Plan 3 */}
          <PlanCard
            price="Custom"
            title="Enterprise Suite"
            buttonText="Contact Us"
            buttonLink="#contact-us"
            description="Comprehensive AI solutions tailored to enterprise needs."
            features={[
              'Custom AI Solutions',
              'Unlimited AI Training',
              'Unlimited Interactions',
              'Enterprise Automation Suite',
              'Dedicated Success Manager',
              'Custom Integration Solutions',
            ]}
          />
        </div>
      </div>
    </section>
  );
};
