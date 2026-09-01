import type { MetadataRoute } from 'next';
import { getBaseUrl, DEFAULT_LOCALE } from '@/lib/seo';
import { liveTools } from '@/tools/registry';
import { templates } from '@/templates/registry';

const locales = ['en-US', 'es-ES'] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getBaseUrl();
  const lastModified = new Date();

  // Build hreflang alternates for a given path (path starts with '/').
  const alternates = (path: string) => ({
    languages: {
      ...Object.fromEntries(locales.map((lng) => [lng, `${baseUrl}/${lng}${path}`])),
      'x-default': `${baseUrl}/${DEFAULT_LOCALE}${path}`,
    },
  });

  // Each indexable path with its priority; expanded across locales below.
  type Entry = {
    path: string;
    priority: number;
    changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'];
  };

  const paths: Entry[] = [
    { path: '', priority: 1, changeFrequency: 'weekly' },
    { path: '/websites', priority: 0.9, changeFrequency: 'weekly' },
    ...templates.map((tpl) => ({
      path: `/websites/${tpl.slug}`,
      priority: 0.8,
      changeFrequency: 'monthly' as const,
    })),
    { path: '/tools', priority: 0.8, changeFrequency: 'weekly' },
    ...liveTools().map((tool) => ({
      path: `/tools/${tool.slug}`,
      priority: 0.7,
      changeFrequency: 'monthly' as const,
    })),
  ];

  return paths.flatMap(({ path, priority, changeFrequency }) =>
    locales.map((locale) => ({
      url: `${baseUrl}/${locale}${path}`,
      lastModified,
      changeFrequency,
      priority,
      alternates: alternates(path),
    }))
  );
}
