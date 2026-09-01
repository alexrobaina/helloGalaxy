import localFont from 'next/font/local';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { ToastContainer } from 'react-toastify';
import type { Metadata } from 'next';

import '../globals.css';
import 'react-toastify/dist/ReactToastify.css';

import type { Locale } from '@/i18n/routing';
import { buildJsonLd, getBaseUrl, LOCALES, DEFAULT_LOCALE, ogLocale, NAP } from '@/lib/seo';

const geistSans = localFont({
	src: '../fonts/GeistVF.woff',
	variable: '--font-geist-sans',
	display: 'swap',
	weight: '100 900',
});

const geistMono = localFont({
	src: '../fonts/GeistMonoVF.woff',
	variable: '--font-geist-mono',
	display: 'swap',
	weight: '100 900',
});

interface RootLayoutProps {
	children: React.ReactNode;
	params: Promise<{ locale: string }>;
}

/** hreflang map: every locale plus the x-default Google expects. */
const languageAlternates = (baseUrl: string) => ({
	...Object.fromEntries(LOCALES.map((lng) => [lng, `${baseUrl}/${lng}`])),
	'x-default': `${baseUrl}/${DEFAULT_LOCALE}`,
});

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string }>;
}): Promise<Metadata> {
	const { locale } = await params;
	const t = await getTranslations({ locale, namespace: 'metadata' });
	const baseUrl = getBaseUrl();

	const title = t('title');
	const description = t('description');

	return {
		metadataBase: new URL(baseUrl),
		title: {
			default: title,
			// Sub-pages set only their own title; the brand is appended here so
			// it never has to be repeated (or forgotten) page by page.
			template: `%s | ${NAP.name}`,
		},
		description,
		keywords: t('keywords'),
		applicationName: NAP.name,
		authors: [{ name: 'Alex Robaina', url: 'https://arobaina.dev' }],
		creator: 'Alex Robaina',
		publisher: NAP.name,
		alternates: {
			canonical: `${baseUrl}/${locale}`,
			languages: languageAlternates(baseUrl),
		},
		// Without this Next emits nothing and we rely on crawler defaults;
		// max-image-preview:large is what unlocks large thumbnails in results.
		robots: {
			index: true,
			follow: true,
			googleBot: {
				index: true,
				follow: true,
				'max-video-preview': -1,
				'max-image-preview': 'large',
				'max-snippet': -1,
			},
		},
		openGraph: {
			title: t('ogTitle'),
			description: t('ogDescription'),
			type: 'website',
			url: `${baseUrl}/${locale}`,
			locale: ogLocale(locale),
			alternateLocale: LOCALES.filter((l) => l !== locale).map(ogLocale),
			siteName: NAP.name,
			// og:image comes from the opengraph-image route, which guarantees the
			// declared dimensions match the actual file.
		},
		twitter: {
			card: 'summary_large_image',
			title,
			description: t('twitterDescription'),
		},
		manifest: '/site.webmanifest',
		formatDetection: { telephone: false },
	};
}

export default async function LocaleLayout({ children, params }: RootLayoutProps) {
	const { locale } = await params;
	const messages = await getMessages();
	const t = await getTranslations({ locale, namespace: 'metadata' });
	const baseUrl = getBaseUrl();

	const jsonLd = buildJsonLd({
		locale: locale as Locale,
		baseUrl,
		title: t('title'),
		description: t('description'),
	});

	return (
		<html lang={locale} className={`${geistSans.variable} ${geistMono.variable}`}>
			<head>
				{/*
				  Rendered as a plain script tag so the structured data is present in
				  the served HTML. It previously used next/script with
				  strategy="afterInteractive", which meant the markup only existed in
				  the RSC payload and was injected after hydration — invisible to every
				  crawler that does not execute JavaScript.
				*/}
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
				/>
			</head>
			<body className="bg-ink text-slate-200 antialiased">
				<NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>
				<ToastContainer theme="dark" />
			</body>
		</html>
	);
}
