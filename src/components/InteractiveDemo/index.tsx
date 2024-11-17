'use client';

export const InteractiveDemo: React.FC = () => {
  return (
    <section className="bg-white py-20 px-6 md:px-12">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Experience Hello Galaxy in Action
          </h2>
          <p className="text-lg text-gray-600 mt-4">
            See how our enterprise AI platform transforms business operations, automates complex
            workflows, and delivers measurable results.
          </p>
        </div>

        {/* Video or Interactive Content */}
        <div className="relative aspect-w-16 aspect-h-9 flex justify-center items-center">
          <iframe
            src="https://www.youtube.com/embed/AGi0r-S_HEA?si=_LrMIJHZb7KkQmye"
            title="Hello Galaxy Demo"
            className="md:w-[80%] w-full h-[400px] md:h-[500px] rounded-lg shadow-lg "
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};