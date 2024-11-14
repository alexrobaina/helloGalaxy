export const InteractiveDemo: React.FC = () => {
  return (
    <section className="bg-white py-20 px-6 md:px-12">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            See Hellow Gallaxy in Action
          </h2>
          <p className="text-lg text-gray-600 mt-4">
            Watch how our AI-powered tools streamline processes, enhance
            customer interactions, and drive efficiency.
          </p>
        </div>

        {/* Video or Interactive Content */}
        <div className="relative aspect-w-16 aspect-h-9 flex justify-center items-center">
          <iframe
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Hellow Gallaxy Demo"
            className="w-[80%] h-[500px] rounded-lg shadow-lg "
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <a
            href="#get-started"
            className="bg-indigo-500 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-indigo-600 transition"
          >
            Try It Yourself
          </a>
        </div>
      </div>
    </section>
  );
};

