'use client';

import { FC } from 'react';
import Image, { StaticImageData } from 'next/image';
import { motion } from 'framer-motion';
import { BsGithub } from 'react-icons/bs';
import { useTranslations } from 'next-intl';

interface Props {
  name: string;
  index: number;
  image: string | StaticImageData;
  appLink: string;
  description: string;
  sourceCodeLink: string | null;
  tags: { name: string; color: string }[];
}

/**
 * The card used to be a <div> with an onClick that called window.open — not
 * reachable by keyboard and invisible to crawlers. It is now a real anchor,
 * stretched over the card so the whole surface stays clickable, with the
 * optional source link layered above it.
 */
export const ProjectCard: FC<Props> = ({
  tags,
  name,
  image,
  appLink,
  description,
  sourceCodeLink,
}) => {
  const t = useTranslations('projects');

  return (
    <motion.article
      variants={{
        hidden: { opacity: 0, y: 24 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
      }}
      className="card-surface card-surface-hover group relative flex flex-col overflow-hidden"
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-white/5">
        <Image
          src={image}
          alt={t('imageAlt', { name })}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-card/90 via-transparent to-transparent"
        />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-semibold text-slate-50">
            <a
              href={appLink}
              target="_blank"
              rel="noopener noreferrer"
              className="after:absolute after:inset-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
            >
              {name}
              <span className="sr-only"> — {t('openInNewTab')}</span>
            </a>
          </h3>

          {sourceCodeLink ? (
            <a
              href={sourceCodeLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${name} — ${t('sourceCode')}`}
              className="relative z-10 shrink-0 text-slate-500 transition-colors hover:text-slate-200"
            >
              <BsGithub size={18} />
            </a>
          ) : null}
        </div>

        <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400">{description}</p>

        <ul className="mt-5 flex flex-wrap gap-1.5">
          {tags.slice(0, 5).map((tag) => (
            <li
              key={tag.name}
              className="rounded-md border border-white/10 bg-white/[0.04] px-2 py-0.5 text-[11px] font-medium text-slate-400"
            >
              {tag.name}
            </li>
          ))}
        </ul>

        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-300">
          {t('viewProject')}
          <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
            &rarr;
          </span>
        </span>
      </div>
    </motion.article>
  );
};
