'use client'

import React, { FC } from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { fadeIn, textVariant } from '@/utils/motion'
import { projects } from './contants'
import Image from 'next/image'
import { BiLinkAlt } from 'react-icons/bi'
import { BsGithub } from 'react-icons/bs'
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

interface Props {
  name: string
  index: number
  image: string
  appLink: string
  description: string
  sourceCodeLink: string
  tags: { name: string; color: string }[]
}

const ProjectCard: FC<Props> = ({
  tags,
  name,
  image,
  index,
  appLink,
  description,
  sourceCodeLink,
}) => {
  return (
    <motion.div
      onClick={() => window.open(appLink, '_blank')}
      variants={fadeIn('up', 'spring', index * 0.5, 0.75)}
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="flex flex-col flex-wrap bg-tertiary border border-gray-700 shadow-lg py-4 px-4 rounded-2xl sm:w-full md:w-[300px] w-full bg-gray-800 cursor-pointer"
      >
        <div className="relative w-full h-[200px]">
          <Image
            src={image}
            layout="fill"
            alt="project_image"
            className="object-cover rounded-2xl"
          />
        </div>
        <div className="mt-5">
          <div className="flex justify-between">
            <h3 className="font-bold text-[18px] text-purple-50">{name}</h3>
            <div className="flex gap-2">
              {sourceCodeLink && (
                <div
                  onClick={() => window.open(sourceCodeLink, '_blank')}
                  className="rounded-full flex justify-center items-center cursor-pointer text-purple-50"
                >
                  <BsGithub width={36} height={36} />
                </div>
              )}
              {appLink && (
                <div
                  onClick={() => window.open(appLink, '_blank')}
                  className="rounded-full flex justify-center items-center cursor-pointer text-purple-50"
                >
                  <BiLinkAlt width={36} height={36} />
                </div>
              )}
            </div>
          </div>
          <p className="mt-2 text-secondary text-[14px] text-purple-50">{description}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag: { name: string; color: string }) => (
            <div
              key={`${name}-${tag.name}`}
              className={`${tag.color} rounded-full p-1 px-2`}
            >
              <p className={`text-[14px] text-purple-50 text-pretty font-bold`}>
                {tag.name}
              </p>
            </div>
          ))}
        </div>
      </Tilt>
    </motion.div>
  )
}
