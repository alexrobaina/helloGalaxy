import type { MetadataRoute } from 'next';

const locales = ['en-US', 'es-ES'] as const;

export default function sitemap(): MetadataRoute.Sitemap {
	const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';
	const lastModified = new Date();

	return locales.map((locale) => ({
		url: `${baseUrl}/${locale}`,
		lastModified,
		changeFrequency: 'weekly',
		priority: 1,
		alternates: {
			languages: Object.fromEntries(
				locales.map((lng) => [lng, `${baseUrl}/${lng}`])
			),
		},
	}));
} 