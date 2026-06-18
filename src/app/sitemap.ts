import type { MetadataRoute } from 'next';
import { liveTools } from '@/tools/registry';
import { templates } from '@/templates/registry';

const locales = ['en-US', 'es-ES'] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';
  const lastModified = new Date();

  // Build hreflang alternates for a given path (path starts with '/').
  const alternates = (path: string) => ({
    languages: Object.fromEntries(
      locales.map((lng) => [lng, `${baseUrl}/${lng}${path}`])
    ),
  });

  // Each indexable path with its priority; expanded across locales below.
  const paths: { path: string; priority: number }[] = [
    { path: '', priority: 1 },
    { path: '/tools', priority: 0.8 },
    ...liveTools().map((tool) => ({
      path: `/tools/${tool.slug}`,
      priority: 0.7,
    })),
    { path: '/websites', priority: 0.9 },
    ...templates.map((tpl) => ({
      path: `/websites/${tpl.slug}`,
      priority: 0.8,
    })),
  ];

  return paths.flatMap(({ path, priority }) =>
    locales.map((locale) => ({
      url: `${baseUrl}/${locale}${path}`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority,
      alternates: alternates(path),
    }))
  );
}
