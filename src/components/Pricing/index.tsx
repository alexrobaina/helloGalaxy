export const Pricing: React.FC = () => {
  return (
    <section className="bg-white py-20 pb-60 px-6 md:px-12">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Affordable Plans for Every Business
          </h2>
          <p className="text-lg text-gray-600 mt-4">
            Choose a plan that fits your needs and scale effortlessly as you grow.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Plan 1 */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-md text-center">
            <h3 className="text-2xl font-bold text-gray-800">Startup Plan</h3>
            <p className="text-gray-600 mt-2">
              Perfect for small businesses just getting started.
            </p>
            <div className="my-6">
              <span className="text-4xl font-bold text-gray-900">$29</span>
              <span className="text-gray-600 text-lg">/month</span>
            </div>
            <ul className="text-gray-600 text-left mb-6">
              <li className="mb-2">✔ AI-Powered Chatbots</li>
              <li className="mb-2">✔ Basic Automation Workflows</li>
              <li className="mb-2">✔ Email Support</li>
            </ul>
            <a
              href="#start-now"
              className="bg-indigo-500 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-indigo-600 transition"
            >
              Get Started
            </a>
          </div>

          {/* Plan 2 */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-md text-center border-2 border-indigo-500">
            <h3 className="text-2xl font-bold text-gray-800">Growth Plan</h3>
            <p className="text-gray-600 mt-2">
              Ideal for growing teams scaling their operations.
            </p>
            <div className="my-6">
              <span className="text-4xl font-bold text-gray-900">$79</span>
              <span className="text-gray-600 text-lg">/month</span>
            </div>
            <ul className="text-gray-600 text-left mb-6">
              <li className="mb-2">✔ Everything in Startup</li>
              <li className="mb-2">✔ Advanced Analytics</li>
              <li className="mb-2">✔ Workflow Customization</li>
            </ul>
            <a
              href="#start-now"
              className="bg-indigo-500 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-indigo-600 transition"
            >
              Get Started
            </a>
          </div>

          {/* Plan 3 */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-md text-center">
            <h3 className="text-2xl font-bold text-gray-800">Enterprise Plan</h3>
            <p className="text-gray-600 mt-2">
              Fully customizable solutions for large enterprises.
            </p>
            <div className="my-6">
              <span className="text-4xl font-bold text-gray-900">Custom</span>
              <span className="text-gray-600 text-lg">/month</span>
            </div>
            <ul className="text-gray-600 text-left mb-6">
              <li className="mb-2">✔ Everything in Growth</li>
              <li className="mb-2">✔ Dedicated Account Manager</li>
              <li className="mb-2">✔ 24/7 Priority Support</li>
            </ul>
            <a
              href="#start-now"
              className="bg-indigo-500 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-indigo-600 transition"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

