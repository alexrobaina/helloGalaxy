export const FeatureHighlight: React.FC = () => {
  return (
    <section className="bg-gray-50 py-20 px-6 md:px-12">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Why Choose Hellow Gallaxy?
          </h2>
          <p className="text-lg text-gray-600 mt-4">
            Explore the key features that make our AI solutions the perfect fit
            for your business.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Feature 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <img
              src="/icons/customizable.svg"
              alt="Customizable Icon"
              className="w-16 h-16 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800">
              Customizable & Scalable
            </h3>
            <p className="text-gray-600 mt-2">
              Solutions tailored to your business needs, growing with your goals.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <img
              src="/icons/integration.svg"
              alt="Integration Icon"
              className="w-16 h-16 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800">
              Seamlessly Integrated
            </h3>
            <p className="text-gray-600 mt-2">
              Effortlessly connect with CRMs, e-commerce platforms, and messaging apps.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <img
              src="/icons/data-insights.svg"
              alt="Data Insights Icon"
              className="w-16 h-16 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800">
              Data-Driven Insights
            </h3>
            <p className="text-gray-600 mt-2">
              Make smarter decisions with actionable insights from advanced analytics.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <img
              src="/icons/affordable.svg"
              alt="Affordable Icon"
              className="w-16 h-16 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800">
              Accessible for All
            </h3>
            <p className="text-gray-600 mt-2">
              Affordable AI solutions designed for startups and enterprises alike.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};


