import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { ToastContainer } from 'react-toastify';
import Script from 'next/script';
import type { Metadata } from 'next';

import '../globals.css';
import 'react-toastify/dist/ReactToastify.css';

interface RootLayoutProps {
	children: React.ReactNode;
	params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
	const { locale } = await params;
	const t = await getTranslations({ locale, namespace: 'metadata' });

	const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';
	const title = t('title');
	const description = t('description');
	const ogTitle = t('ogTitle');
	const ogDescription = t('ogDescription');
	const twitterDescription = t('twitterDescription');

	return {
		metadataBase: new URL(baseUrl),
		title,
		description,
		keywords: t('keywords'),
		authors: [{ name: 'Alex Robaina', url: 'https://arobaina.dev' }],
		alternates: {
			canonical: `/${locale}`,
			languages: {
				'en-US': '/en-US',
				'es-ES': '/es-ES',
				'x-default': '/en-US',
			},
		},
		openGraph: {
			title: ogTitle,
			description: ogDescription,
			type: 'website',
			url: `/${locale}`,
			locale,
			siteName: 'Hello Galaxy',
			images: [
				{
					url: '/chatAI.png',
					width: 1200,
					height: 630,
					alt: 'Hello Galaxy',
				},
			],
		},
		twitter: {
			card: 'summary_large_image',
			title,
			description: twitterDescription,
			images: ['/chatAI.png'],
		},
		manifest: '/site.webmanifest',
	};
}

export default async function LocaleLayout({ children, params }: RootLayoutProps) {
	const { locale } = await params;

	const messages = await getMessages();

	const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';
	// Business JSON-LD (ProfessionalService)
	const businessId = `${baseUrl}#professional-service`;
	const logoUrl = `${baseUrl}/android-chrome-512x512.png`;
	const professionalServiceJsonLd = {
		"@context": 'https://schema.org',
		"@type": 'ProfessionalService',
		"@id": businessId,
		name: 'Hello Galaxy',
		brand: { "@type": 'Brand', name: 'Hello Galaxy' },
		description:
			'Creamos aplicaciones web y mobile, páginas web y soluciones tecnológicas.',
		url: 'https://www.hellogalaxy.dev',
		logo: logoUrl,
		image: logoUrl,
		foundingDate: '2025-01-10',
		telephone: '+54 11 3899 7032',
		email: 'team@hellogalaxy.dev',
		sameAs: [
			'https://www.linkedin.com/company/hellogalaxy',
			'https://www.instagram.com/hellogalaxy.sf',
		],
		address: {
			"@type": 'PostalAddress',
			streetAddress: 'Godoy Cruz',
			addressLocality: 'Mendoza',
			addressRegion: 'Mendoza',
			postalCode: '5501',
			addressCountry: 'AR',
		},
		openingHoursSpecification: [
			{
				"@type": 'OpeningHoursSpecification',
				dayOfWeek: [
					'https://schema.org/Monday',
					'https://schema.org/Tuesday',
					'https://schema.org/Wednesday',
					'https://schema.org/Thursday',
					'https://schema.org/Friday',
				],
				opens: '09:00',
				closes: '18:00',
			},
		],
		areaServed: ['Global', 'Latin America'],
	};
	// WebSite JSON-LD
	const websiteJsonLd = {
		"@context": 'https://schema.org',
		"@type": 'WebSite',
		"@id": `${baseUrl}#website`,
		name: 'Hello Galaxy',
		url: baseUrl,
		inLanguage: locale,
		publisher: { "@id": businessId },
	};
	// Services JSON-LD
	const servicesJsonLd = [
		{
			"@context": 'https://schema.org',
			"@type": 'Service',
			"@id": `${baseUrl}#service-ai-chatbots-automation`,
			name: 'AI Chatbots & Automation',
			description:
				'Asistentes inteligentes para atención al cliente, captación de leads y automatización de flujos en WhatsApp, web y CRM.',
			serviceType: 'AI Chatbots & Automation',
			provider: { "@id": businessId },
			areaServed: ['Global', 'Latin America'],
			url: 'https://www.hellogalaxy.dev',
		},
		{
			"@context": 'https://schema.org',
			"@type": 'Service',
			"@id": `${baseUrl}#service-custom-web-applications`,
			name: 'Custom Web Applications',
			description:
				'Aplicaciones web escalables y seguras con UX/UI moderno, gestión de datos y automatización de procesos.',
			serviceType: 'Custom Web Applications',
			provider: { "@id": businessId },
			areaServed: ['Global', 'Latin America'],
			url: 'https://www.hellogalaxy.dev',
		},
		{
			"@context": 'https://schema.org',
			"@type": 'Service',
			"@id": `${baseUrl}#service-ecommerce-development`,
			name: 'E-commerce Development',
			description:
				'Tiendas online en Shopify y Tiendanube con integración de pagos, SEO y optimización de conversiones.',
			serviceType: 'E-commerce Development',
			provider: { "@id": businessId },
			areaServed: ['Global', 'Latin America'],
			url: 'https://www.hellogalaxy.dev',
		},
		{
			"@context": 'https://schema.org',
			"@type": 'Service',
			"@id": `${baseUrl}#service-cloud-data-solutions`,
			name: 'Cloud & Data Solutions',
			description:
				'Infraestructura en la nube y organización de datos con AWS, Firestore, BigQuery y Google Sheets.',
			serviceType: 'Cloud & Data Solutions',
			provider: { "@id": businessId },
			areaServed: ['Global', 'Latin America'],
			url: 'https://www.hellogalaxy.dev',
		},
		{
			"@context": 'https://schema.org',
			"@type": 'Service',
			"@id": `${baseUrl}#service-product-design-ux-ui`,
			name: 'Product Design (UX/UI)',
			description:
				'Desde wireframes hasta interfaces optimizadas con accesibilidad y performance.',
			serviceType: 'Product Design (UX/UI)',
			provider: { "@id": businessId },
			areaServed: ['Global', 'Latin America'],
			url: 'https://www.hellogalaxy.dev',
		},
	];

	return (
		<html lang={locale}>
			<body className="bg-cyan-950">
				<NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>
				<ToastContainer />
				<Script id="ld-business" type="application/ld+json" strategy="afterInteractive">
					{JSON.stringify(professionalServiceJsonLd)}
				</Script>
				<Script id="ld-website" type="application/ld+json" strategy="afterInteractive">
					{JSON.stringify(websiteJsonLd)}
				</Script>
				<Script id="ld-services" type="application/ld+json" strategy="afterInteractive">
					{JSON.stringify(servicesJsonLd)}
				</Script>
			</body>
		</html>
	);
}
