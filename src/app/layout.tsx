import type { Metadata, Viewport } from 'next';
import { getBaseUrl } from '@/lib/seo';

interface RootLayoutProps {
	children: React.ReactNode;
}

export const metadata: Metadata = {
	metadataBase: new URL(getBaseUrl()),
	icons: {
		icon: [
			{ url: '/favicon.ico' },
			{ url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
			{ url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
		],
		apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
	},
	manifest: '/site.webmanifest',
	verification: {
		google: 'DQIXWlqtsXrewpoOfQeUG8t7h1DISQ2e_nODvngFv6Y',
	},
};

export const viewport: Viewport = {
	width: 'device-width',
	initialScale: 1,
	themeColor: '#05070f',
	colorScheme: 'dark',
};

/**
 * Every page lives under `[locale]`, and that layout owns <html>/<body> so it
 * can set `lang`. This one therefore renders its children untouched — when it
 * also emitted <html><body>, the response contained two of each and the outer
 * (document-root) <html> carried no lang attribute at all.
 */
export default function RootLayout({ children }: RootLayoutProps) {
	return children;
}
