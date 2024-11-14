import Image from 'next/image';

export const Hero: React.FC = () => {
  return (
    <section className="bg-white text-gray-900 py-20 px-6 md:px-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Text Content */}
        <div className="max-w-lg text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
            Revolutionize Your Business with AI-Powered Automation
          </h1>
          <p className="text-lg md:text-xl mb-6 text-gray-600">
            Streamline workflows, enhance customer satisfaction, and close deals
            faster with scalable AI solutions from Hellow Gallaxy.
          </p>
          <div className="flex flex-col md:flex-row gap-4">
            <a
              href="#get-started"
              className="bg-indigo-500 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-indigo-600 transition"
            >
              Get Started Today
            </a>
            <a
              href="#learn-more"
              className="bg-gray-100 border-2 border-gray-300 px-6 py-3 rounded-lg text-lg font-semibold text-gray-700 hover:bg-gray-200 transition"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Hero Image */}
        <div className="mt-10 md:mt-0 md:ml-10">
          <Image
            src="/images/hero.png"
            alt="AI Automation Illustration"
            width={600}
            height={600}
            className="w-full max-w-md mx-auto md:mx-0"
          />
        </div>
      </div>
    </section>
  );
};


