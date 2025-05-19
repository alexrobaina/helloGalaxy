'use client';

import { motion } from 'framer-motion';
import { LottieAnimation } from '../LottieAnimations';
import ecommerce from '../../../public/assets/Lottie/Ecommerce.json';
import userInterface from '../../../public/assets/Lottie/interface.json';
import dataManagement from '../../../public/assets/Lottie/Copywriting.json';
import webDesign from '../../../public/assets/Lottie/Online Tutorials.json'
import { useTranslations } from 'next-intl';

export const SolutionShowcase: React.FC = () => {
  const t = useTranslations('SolutionShowcase');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 12,
      },
    },
    hover: {
      scale: 1.02,
      y: -5,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 10,
      },
    },
  };

  const solutions = [
    {
      animation: webDesign,
      width: 150,
      title: t('solution1.title'), // Diseño y Desarrollo Web
      description: t('solution1.description'), // Creamos sitios web modernos, adaptables y orientados a resultados. Desde landing pages hasta portales completos, siempre con enfoque UX/UI.
    },
    {
      animation: userInterface,
      width: 190,
      title: t('solution2.title'), // Aplicaciones Web a Medida
      description: t('solution2.description'), // Desarrollamos soluciones web escalables y seguras para automatizar procesos, gestionar datos y mejorar la eficiencia operativa.
    },
    {
      animation: dataManagement,
      width: 250,
      title: t('solution3.title'), // Infraestructura y Datos en la Nube
      description: t('solution3.description'), // Configuramos tu infraestructura en la nube y organizamos tus datos con herramientas como Google Sheets, Firestore o BigQuery.
    },
    {
      // animation: ecommerceBuild,
      animation: ecommerce,
      width: 210,
      title: t('solution4.title'), // Tiendas Online
      description: t('solution4.description'), // Lanzamos tu e-commerce en plataformas como Shopify y Tiendanube, integrando diseño, pagos y funcionalidades personalizadas.
    },
    {
      // animation: socialMediaMarketing,
      animation: dataManagement,
      width: 180,
      title: t('solution5.title'), // Marketing en Instagram
      description: t('solution5.description'), // Creamos contenido visual atractivo: publicaciones, reels y stories que conectan con tu audiencia y potencian tu marca.
    },
    {
      // animation: automationBots,
      animation: dataManagement,
      width: 220,
      title: t('solution6.title'), // Automatización y Chatbots
      description: t('solution6.description'), // Implementamos flujos automatizados con bots para atención al cliente, generación de leads o gestión interna.
    },
  ];
  

  return (
    <section className="py-20 px-6 md:px-6 bg-gray-950 overflow-hidden">
      <motion.div
        className="container mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={containerVariants}
      >
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-violet-50 ">{t('title')}</h2>
          <p className="text-lg text-gray-300 mt-4 ">{t('description')}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              whileHover="hover"
              variants={cardVariants}
              className="relative group"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-4xl blur-xl opacity-50 group-hover:opacity-100 transition-all duration-500 shadow-3xl shadow-indigo-800" />

              {/* Card */}
              <motion.div className="relative rounded-2xl bg-[#0D1019] ring-1 ring-indigo-400 p-6 text-center backdrop-blur-sm h-[340px] shadow-2xl shadow-indigo-500/55 transition-all duration-500">
                {/* Animation container */}
                <div className="h-[150px] flex items-center justify-center filter saturate-150">
                  <LottieAnimation width={solution.width} animation={solution.animation} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-violet-50 mt-6 ">
                  {solution.title}
                </h3>
                <p className="text-gray-300 mt-4 leading-relaxed  text-sm">
                  {solution.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
