'use client';

import { motion } from 'framer-motion';
import { LottieAnimation } from '../LottieAnimations';
import customerAttractionIcon from '../../../public/customerAttraction.json';
import businessAnalytics from '../../../public/businessAnalytics.json';
import dataManagement from '../../../public/dataManagement.json';
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
      animation: customerAttractionIcon,
      width: 150,
      title: t('solution1.title'),
      description: t('solution1.description'),
    },
    {
      animation: businessAnalytics,
      width: 190,
      title: t('solution2.title'),
      description: t('solution2.description'),
    },
    {
      animation: dataManagement,
      width: 250,
      title: t('solution3.title'),
      description: t('solution3.description'),
    },
  ];

  return (
    <section className="py-20 px-6 md:px-12 bg-black overflow-hidden">
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
          <h2 className="text-3xl md:text-4xl font-bold text-violet-500 font-mono">{t('title')}</h2>
          <p className="text-lg text-gray-300 mt-4 font-mono">{t('description')}</p>
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
              <div className="absolute inset-0 bg-violet-500/20 rounded-2xl blur-xl opacity-50 group-hover:opacity-100 transition-all duration-500" />

              {/* Card */}
              <motion.div className="relative rounded-2xl border-2 border-violet-700 bg-black p-6 text-center backdrop-blur-sm h-[340px] shadow-[0_0_15px_rgba(0,255,0,0.2)] group-hover:shadow-[0_0_25px_rgba(0,255,0,0.3)] transition-all duration-500">
                {/* Animation container */}
                <div className="h-[150px] flex items-center justify-center filter saturate-150">
                  <LottieAnimation width={solution.width} animation={solution.animation} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-violet-500 mt-6 font-mono">
                  {solution.title}
                </h3>
                <p className="text-gray-300 mt-4 leading-relaxed font-mono text-sm">
                  {solution.description}
                </p>

                {/* Terminal-style indicator */}
                <div className="absolute bottom-4 left-6 flex items-center text-violet-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="font-mono text-sm">{'>'}</span>
                  <motion.span
                    className="w-2 h-4 bg-violet-500 ml-1"
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
