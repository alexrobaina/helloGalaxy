'use client';

import { useTranslations } from 'next-intl';
import { SiGooglecloud } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaAws } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { TbBrandPrisma } from "react-icons/tb";

import { FC } from 'react';


export const LogoCarrousel: FC = () => {
  const t = useTranslations('LogoCarrousel');

  return (
    <section className="py-20 px-6 md:px-12 bg-gray-950">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-50">{t('title')}</h2>
        </div>

        {/* Features Grid */}
        <div className="flex flex-wrap gap-10 justify-center items-center">
          {/* Feature 1 */}
            {logoData.map((logo) => (<div key={logo.text} className="flex flex-col items-center justify-center">
              {logo.icon}
              <p className="text-base font-semibold text-gray-50 mt-2">{logo.text}</p>
            </div>) )}
      </div>
      </div>
    </section>
  );
};


const logoData = [
  { icon: <SiGooglecloud color='white' size={40} />  , text: 'Google Cloud' },
  { icon: <FaAws color='white' size={40} /> , text: 'AWS Cloud' },
  { icon: <FaNode color='white' size={40} /> , text: 'Node.js' },
  { icon: <FaReact color='white' size={40} /> , text: 'React' },
  { icon: <TbBrandPrisma color='white' size={40} /> , text: 'Prisma' },
  { icon: <BiLogoPostgresql color='white' size={40} /> , text: 'PostgreSQL' },
  ]