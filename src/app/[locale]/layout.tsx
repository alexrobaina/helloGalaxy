import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import { ToastContainer } from 'react-toastify';

import '../globals.css';
import 'react-toastify/dist/ReactToastify.css';
import Link from 'next/link';

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
        <header className="fixed justify-center p-4 items-center rounded-full z-50">
          <nav className="fixed top-2 left-0 w-full px-8 backdrop-blur-sm flex justify-center items-center gap-12">
            <div className="flex justify-center items-center gap-12 bg-indigo-500 bg-opacity-10 rounded-full h-10 p-0">
              <Link
                href="/"
                className="text-indigo-100 text-sm py-2 px-6  rounded-3xl hover:bg-indigo-900 transition-colors"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-indigo-100 text-sm py-2 px-6  rounded-3xl hover:bg-indigo-900 transition-colors"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-indigo-100 text-sm py-2 px-6  rounded-3xl hover:bg-indigo-900 transition-colors"
              >
                Contact
              </Link>
            </div>
            <LanguageSwitcher />
          </nav>
        </header>
        <NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>
        <ToastContainer />
      </body>
    </html>
  );
}
