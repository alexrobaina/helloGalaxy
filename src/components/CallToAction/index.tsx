export const CallToAction: React.FC = () => {
  return (
    <footer className="fixed bottom-0 w-full bg-indigo-600 text-white py-4 px-6 shadow-md z-50">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* CTA Text */}
        <div className="text-center md:text-left mb-3 md:mb-0">
          <h3 className="text-lg font-semibold">Ready to Revolutionize Your Business?</h3>
          <p className="text-sm text-indigo-200">
            Join the growing list of businesses transforming with AI.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row gap-4">
          <a
            href="#get-started"
            className="bg-white flex items-center justify-center  text-indigo-600 px-6 py-2 rounded-lg text-sm font-semibold shadow-md hover:bg-indigo-100 transition"
          >
            Get Started
          </a>
          <a
            href="#contact-us"
            className="bg-transparent border-2 border-white px-6 py-2 rounded-lg text-sm font-semibold hover:bg-white hover:text-indigo-600 transition"
          >
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  );
};
