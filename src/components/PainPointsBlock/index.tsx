import Image from 'next/image';

export const PainPointsBlock: React.FC = () => {
  return (
    <section className="bg-gray-50 py-20 px-6 md:px-12">
    <div className="container mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          What’s Slowing Down Your Business?
        </h2>
        <p className="text-lg text-gray-600 mt-4">
          Discover the common challenges businesses face and how Hellow Gallaxy
          provides solutions to overcome them.
        </p>
      </div>

      {/* Pain Points Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Pain Point 1 */}
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <Image
            src="/images/slowResponse.png" 
            alt="Slow Response Icon"
            width={200}
            height={200}
            className="mx-auto mb-4"
          />
          <h3 className="text-xl font-semibold text-gray-800">
            Slow Response Times
          </h3>
          <p className="text-gray-600 mt-2">
            Customers expect quick responses, but manual processes slow you down.
          </p>
        </div>

        {/* Pain Point 2 */}
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <Image
            src="/images/task.png" 
            alt="Repetitive Tasks Icon"
            width={200}
            height={200}
            className="mx-auto mb-4"
          />
          <h3 className="text-xl font-semibold text-gray-800">
            Repetitive Tasks
          </h3>
          <p className="text-gray-600 mt-2">
            Tedious workflows drain resources that could be spent on growth.
          </p>
        </div>

        {/* Pain Point 3 */}
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <Image
            src="/images/missed.png" 
            alt="Missed Opportunities Icon"
            width={200}
            height={200}
            className="mx-auto mb-4"
          />
          <h3 className="text-xl font-semibold text-gray-800">
            Missed Opportunities
          </h3>
          <p className="text-gray-600 mt-2">
            Manual tracking means missed leads and slow sales cycles.
          </p>
        </div>
      </div>
    </div>
  </section>
  );
};


