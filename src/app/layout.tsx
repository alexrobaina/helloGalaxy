interface RootLayoutProps {
	children: React.ReactNode;
}

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';

export const metadata = {
	metadataBase: new URL(baseUrl),
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

export const viewport = {
	width: 'device-width',
	initialScale: 1,
	themeColor: '#083344',
	colorScheme: 'dark light',
};

export default function RootLayout({ children }: RootLayoutProps) {
	// Perform any global setup or checks here
	return (
		<html>
			<body>{children}</body>
		</html>
	);
}
