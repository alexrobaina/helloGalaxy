'use client';

import React, { FC } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';

import 'react-vertical-timeline-component/style.min.css';
import ReactLogo from '@/assets/animations/react-logo.json';
import { LottieAnimation } from '../LottieAnimations';
import { fadeIn } from '@/utils/motion';

interface ExperienceItem {
  title: string;
  company_name: string;
  date: string;
  icon: object;
  points: string[];
}

const ExperienceCard: FC<{ experience: ExperienceItem }> = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: 'rgba(0, 0, 0, 0.7)',
        color: '#fff',
        border: '2px solid #0e7490', // fixed color here!
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 0 15px rgba(0,255,0,0.2)',
        backdropFilter: 'blur(10px)',
      }}
      contentArrowStyle={{ borderRight: '7px solid #15803d' }}
      date={experience.date}
      iconStyle={{
        background: '#000',
        border: '2px solid #15803d',
        boxShadow: '0 0 15px rgba(0,255,0,0.3)',
      }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <div className="w-full h-full flex justify-center items-center -ml-2 mt-[12px] md:-ml-2 md:mt-[13px]">
            <LottieAnimation width={35} animation={experience.icon} />
          </div>
        </div>
      }
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-slate-50 text-2xl font-bold ">{experience.title}</h3>
        <p className="text-gray-300 text-lg " style={{ margin: 0 }}>
          {experience.company_name}
        </p>
      </motion.div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-gray-300 text-lg pl-1 tracking-wider "
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

export const WorkExperience = () => {
  const experiences = [
    {
      title: 'Fullstack Developer',
      company_name: 'Composable Finance',
      date: 'January 2024 - Present',
      icon: ReactLogo,
      points: [
        'Developed the Solana IBC Explorer using Next.js, GraphQL, and Tailwind.',
        'Enhanced skills in creating complex, high-performance web applications.',
        'Contributed to both frontend and backend development ensuring seamless user experience.',
      ],
    },
    {
      title: 'Fullstack Developer',
      company_name: 'Scanworks',
      date: 'June 2021 - December 2023',
      icon: ReactLogo,
      points: [
        'Built UI and reusable components for the Range App using React, Vite.js, and Tailwind.',
        'Ensured efficient, reusable, and scalable front-end components.',
        'Collaborated on both front-end and back-end development using TypeScript, Node.js, and PostgreSQL.',
      ],
    },
    {
      title: 'Frontend Developer',
      company_name: 'Telecom - Personal Pay',
      date: 'January 2019 - February 2021',
      icon: ReactLogo,
      points: [
        'mobile fintech with React-native, virtual cards and transactions',
        'Implemented TypeScript, React-query, React-native, and styled-components.',
        'Focused on clean, scalable code and optimized front-end performance.',
      ],
    },
  ];

  return (
    <section className="py-20 bg-gray-950 overflow-hidden">
      <motion.div
        className="container mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-violet-500 mb-4">
            What I have done so far
          </h2>
          <h3 className="text-2xl md:text-3xl text-gray-300">Work Experience</h3>
        </div>

        <div className="mt-20">
          <VerticalTimeline lineColor="#15803d">
            {experiences.map((experience, index) => (
              <ExperienceCard key={`experience-${index}`} experience={experience} />
            ))}
          </VerticalTimeline>
        </div>
      </motion.div>
    </section>
  );
};
