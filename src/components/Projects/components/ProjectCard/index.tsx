import Image, { StaticImageData } from 'next/image'
import { motion } from 'framer-motion'
import { fadeIn } from '@/utils/motion'
import { FC } from 'react'
import { BiLinkAlt } from 'react-icons/bi'
import { BsGithub } from 'react-icons/bs'
import { Tilt } from 'react-tilt'

interface Props {
  name: string
  index: number
  image: string | StaticImageData;
  appLink: string
  description: string
  sourceCodeLink: string | null;
  tags: { name: string; color: string }[]
}

export const ProjectCard: FC<Props> = ({
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
                  <BsGithub size={20} />
                </div>
              )}
              {appLink && (
                <div
                  onClick={() => window.open(appLink, '_blank')}
                  className="rounded-full flex justify-center items-center cursor-pointer text-purple-50"
                >
                  <BiLinkAlt size={20 } />
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