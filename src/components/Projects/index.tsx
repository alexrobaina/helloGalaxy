'use client';

import { FC } from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { projects } from './contants';
import { ProjectCard } from './components/ProjectCard';

/**
 * Portfolio presented as evidence, not decoration: every card links out to a
 * live production URL, which is the strongest proof we have while there are no
 * client testimonials to show.
 */
export const Projects: FC = () => {
  const t = useTranslations('projects');

  return (
    <section id="projects" className="section section-divider bg-surface">
      <div className="container-content">
        <div className="max-w-3xl">
          <p className="eyebrow">{t('eyebrow')}</p>
          <h2 className="heading-2 mt-3">{t('title')}</h2>
          <p className="lead">{t('description2')}</p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
          className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects(t).map((project, index) => (
            <ProjectCard key={project.name} index={index} {...project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};
