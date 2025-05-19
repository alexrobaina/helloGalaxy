'use client'
import { motion } from 'framer-motion'
import { fadeIn, textVariant } from '@/utils/motion'
import { projects } from './contants'
import { ProjectCard } from './components/ProjectCard'
import { useTranslations } from 'next-intl'

export const Projects = () => {
  const t = useTranslations('projects') // Moved here

  return (
    <section id="projects" className="py-20 px-6 md:px-12 bg-gray-950 overflow-hidden">
        <motion.div className="flex gap-4 flex-col w-full" variants={textVariant()}>
          <h2 className={`text-3xl md:text-5xl text-slate-50 font-bold`}>
            {t('description')}
          </h2>
        </motion.div>
        <div className="w-full flex justify-start">
          <motion.p
            variants={fadeIn('', '', 0.1, 1)}
            className="text-purple-50 mt-10 text-base text-[17px] max-w-4xl flex justify-center"
          >
            {t('description2')}
          </motion.p>
        </div>
        <div className="mt-20 flex flex-wrap gap-7 justify-between">
          {projects(t).map((project, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          ))}
        </div>
    </section>
  )
}

