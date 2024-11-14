export const  SolutionShowcase: React.FC = () => {
  return (
    <section className="bg-white py-20 px-6 md:px-12">
    <div className="container mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          AI Solutions Tailored to Your Business
        </h2>
        <p className="text-lg text-gray-600 mt-4">
          Discover how Hellow Gallaxy can revolutionize your workflows and customer interactions with cutting-edge AI tools.
        </p>
      </div>

      {/* Solutions Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Solution 1 */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-md text-center">
          <img
            src="/icons/customer-service-bots.svg"
            alt="Customer Service Bots Icon"
            className="w-20 h-20 mx-auto mb-4"
          />
          <h3 className="text-xl font-semibold text-gray-800">
            AI-Driven Customer Service Bots
          </h3>
          <p className="text-gray-600 mt-2">
            Automate inquiries, resolve issues, and recommend products with smart bots tailored to your business needs.
          </p>
        </div>

        {/* Solution 2 */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-md text-center">
          <img
            src="/icons/business-automation.svg"
            alt="Business Automation Icon"
            className="w-20 h-20 mx-auto mb-4"
          />
          <h3 className="text-xl font-semibold text-gray-800">
            Business Process Automation
          </h3>
          <p className="text-gray-600 mt-2">
            Streamline repetitive tasks like order processing and appointment scheduling with customizable workflows.
          </p>
        </div>

        {/* Solution 3 */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-md text-center">
          <img
            src="/icons/data-insights.svg"
            alt="Data Insights Icon"
            className="w-20 h-20 mx-auto mb-4"
          />
          <h3 className="text-xl font-semibold text-gray-800">
            Data Management & Insights
          </h3>
          <p className="text-gray-600 mt-2">
            Organize, analyze, and gain actionable insights from your data to improve customer interactions and marketing.
          </p>
        </div>
      </div>
    </div>
  </section>
  );
};


