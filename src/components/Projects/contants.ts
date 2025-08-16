import { petsloveApp, carpinteriaRobaina, rangeApp, aiChatbot, deville, antoinetteBone, soulConnection } from '@/assets/images'

export const projects = (t: (s: string) => string) => {
  return [
    {
      name: 'Deville Argentina',
      description: t('project1.description'),
      tags: [
        {
          name: 'Shopify',
          color: 'bg-teal-500',
        },
        {
          name: 'HTML',
          color: 'bg-cyan-500',
        },
        {
          name: 'CSS',
          color: 'bg-blue-500',
        },
      ],
      image: deville,
      appLink: 'https://devilleargentina.com.ar/',
      sourceCodeLink: null,
    },
    {
      image: soulConnection, 
      name: 'Soul Connection',
      description: t('project7.description'),
      tags: [
        {
          name: 'NextJs',
          color: 'bg-yellow-500',
        },
        {
          name: 'Typescript',
          color: 'bg-rose-500',
        },
        
        {
          name: 'Tailwind',
          color: 'bg-pink-500',
        },
        {
          name: 'i18N',
          color: 'bg-rose-500',
        },
        {
          name: 'NodeJs',
          color: 'bg-green-500',
        },
        {
          name: 'OpenAI',
          color: 'bg-violet-500',
        },
       
        {
          name: 'Prisma',
          color: 'bg-pink-500',
        },
        {
          name: 'Postgresql',
          color: 'bg-fuchsia-500',
        },
      ],
      appLink: 'https://soul-connection.vercel.app/',
      sourceCodeLink: null,
    }, 
    {
      image: rangeApp,
      name: 'Range',
      description: t('project2.description'),
      tags: [
        {
          name: 'ViteJs',
          color: 'bg-yellow-500',
        },
        {
          name: 'React',
          color: 'bg-amber-500',
        },
        {
          name: 'Tailwind',
          color: 'bg-violet-500',
        },
        {
          name: 'Postgresql',
          color: 'bg-fuchsia-500',
        },
        {
          name: 'Prisma',
          color: 'bg-pink-500',
        },
        {
          name: 'Typescript',
          color: 'bg-rose-500',
        },
        {
          name: 'Express',
          color: 'bg-teal-500',
        },
      ],
      sourceCodeLink: null,
      appLink: 'https://app.range.org/',
    },
    {
      name: 'Antoinette Bone',
      description: t('project3.description'),
      tags: [
        {
          name: 'Antoinette Bone',
          color: 'bg-teal-500',
        },
        {
          name: 'NextJs',
          color: 'bg-yellow-500',
        },
        {
          name: 'Typescript',
          color: 'bg-rose-500',
        },
        {
          name: 'Tailwind',
          color: 'bg-pink-500',
        },
      ],
      image: antoinetteBone,
      appLink: 'https://abonelaw.com/',
      sourceCodeLink: null,
    },
    {
      name: 'Carpinteria Robaina',
      description: t('project4.description'),
      tags: [
        {
          name: 'NextJs',
          color: 'bg-yellow-500',
        },
        {
          name: 'Typescript',
          color: 'bg-rose-500',
        },
        {
          name: 'Tailwind',
          color: 'bg-pink-500',
        },
      ],
      image: carpinteriaRobaina,
      appLink: 'https://arcarpinteria.vercel.app/',
      sourceCodeLink: null,
    },
    {
      name: `Chatbot AI`,
      description: t('project5.description'),
      tags: [
        {
          name: 'NextJs',
          color: 'bg-yellow-500',
        },
        {
          name: 'i18N',
          color: 'bg-rose-500',
        },
        {
          name: 'Tailwind',
          color: 'bg-pink-500',
        },
        {
          name: 'NodeJs',
          color: 'bg-green-500',
        },
        {
          name: 'Meta',
          color: 'bg-cyan-500',
        },
        {
          name: 'OpenAI',
          color: 'bg-violet-500',
        },
        {
          name: 'Google Scheets',
          color: 'bg-fuchsia-500',
        },
        {
          name: 'Chatwoot',
          color: 'bg-pink-500',
        },
        {
          name: 'Typescript',
          color: 'bg-rose-500',
        },
      ],
      image: aiChatbot,
      sourceCodeLink: '',
      appLink: 'https://landing-page-ai-woad.vercel.app/en-US',
    },
    {
      name: `Pet's love`,
      description: t('project6.description'),
      tags: [
        {
          name: 'ViteJs',
          color: 'bg-teal-500',
        },
        {
          name: 'React',
          color: 'bg-cyan-500',
        },
        {
          name: 'Tailwind',
          color: 'bg-violet-500',
        },
        {
          name: 'Postgresql',
          color: 'bg-fuchsia-500',
        },
        {
          name: 'Prisma',
          color: 'bg-pink-500',
        },
        {
          name: 'Typescript',
          color: 'bg-rose-500',
        },
        {
          name: 'Express',
          color: 'bg-teal-500',
        },
      ],
      image: petsloveApp,
      sourceCodeLink: 'https://github.com/alexrobaina/frontend_petsLove',
      appLink: 'https://petslove.app',
    },
  ]
}
