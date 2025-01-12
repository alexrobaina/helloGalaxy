import { FC } from 'react';

interface PlanCardProps {
  title: string;
  price: string;
  features: string[];
  buttonText: string;
  buttonLink: string;
  description: string;
}

export const PlanCard: FC<PlanCardProps> = ({
  title,
  price,
  features,
  buttonText,
  buttonLink,
  description,
}) => (
  <div className="bg-gray-50 p-6 rounded-lg shadow-md text-center h-full">
    <h3 className="text-2xl font-bold text-gray-800">{title}</h3>
    <p className="text-gray-600 mt-2 h-10">{description}</p>
    <div className="my-6">
      <span className="text-4xl font-bold text-gray-900">{price}</span>
      <span className="text-gray-600 text-lg">/month</span>
    </div>
    <ul className="text-gray-600 text-left mb-10">
      {features.map((feature: string) => (
        <li className="mb-2 flex items-center gap-2" key={feature}>
          <svg
            className="w-5 h-5 text-indigo-500 flex-shrink-0"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
          {feature}
        </li>
      ))}
    </ul>
    <a
      href={buttonLink}
      className="w-full bg-green-500 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-green-600 transition"
    >
      {buttonText}
    </a>
  </div>
);
