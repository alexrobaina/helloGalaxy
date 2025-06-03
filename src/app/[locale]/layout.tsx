import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { ToastContainer } from 'react-toastify';

import '../globals.css';
import 'react-toastify/dist/ReactToastify.css';

interface RootLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export async function generateMetadata() {
  const messages = await getMessages();

  // Define metadata based on locale
  return {
    title: messages['metadata.title'],
    description: messages['metadata.description'],
    keywords: messages['metadata.keywords'],
    authors: [{ name: 'Alex Robaina', url: 'https://arobaina.dev' }],
    openGraph: {
      title: messages['metadata.ogTitle'],
      description: messages['metadata.ogDescription'],
      type: 'website',
      images: '/chatAI.png', // Ensure this path is correct
    },
    twitter: {
      description: messages['metadata.twitterDescription'],
    },
  };
}

export default async function LocaleLayout({ children, params }: RootLayoutProps) {
  const { locale } = await params;

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className="bg-cyan-950">
        <NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>
        <ToastContainer />
      </body>
    </html>
  );
}
