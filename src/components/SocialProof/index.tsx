import React from 'react';

export const SocialProof: React.FC = () => {
  return (
    <section className="bg-gray-100 py-20 px-6 md:px-12">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Trusted by Businesses Like Yours
          </h2>
          <p className="text-lg text-gray-600 mt-4">
            See how Hellow Gallaxy is making an impact with real businesses.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-600 italic">
              {`With Hellow Gallaxy's automation tools, we reduced customer
              response times by 50%. Our team is now free to focus on more
              strategic tasks.`}
            </p>
            <div className="mt-4 flex items-center">
              <div>
                <h4 className="text-gray-900 font-semibold">John Doe</h4>
                <p className="text-sm text-gray-500">CEO, Retail Inc.</p>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-600 italic">
              “Hellow Gallaxy’s AI bots have revolutionized our customer service. The efficiency is
              unmatched!”
            </p>
            <div className="mt-4 flex items-center">
              <img
                src="/clients/client2.jpg"
                alt="Client Photo"
                className="w-12 h-12 rounded-full mr-3"
              />
              <div>
                <h4 className="text-gray-900 font-semibold">Sarah Lee</h4>
                <p className="text-sm text-gray-500">Founder, E-Shop</p>
              </div>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-600 italic">
              “The data insights from Hellow Gallaxy helped us make smarter marketing decisions,
              boosting ROI by 30%.”
            </p>
            <div className="mt-4 flex items-center">
              <img
                src="/clients/client3.jpg"
                alt="Client Photo"
                className="w-12 h-12 rounded-full mr-3"
              />
              <div>
                <h4 className="text-gray-900 font-semibold">Michael Smith</h4>
                <p className="text-sm text-gray-500">CMO, Tech Solutions</p>
              </div>
            </div>
          </div>
        </div>

        {/* Case Studies CTA */}
        <div className="text-center mt-12">
          <a
            href="#case-studies"
            className="bg-indigo-500 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-indigo-600 transition"
          >
            Explore Case Studies
          </a>
        </div>
      </div>
    </section>
  );
};
