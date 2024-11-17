import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Hello Galaxy',
  description: 'Transform Your Business with Intelligent Automation',
  keywords: 'AI, automation, business, efficiency, growth, typescript, Node.js, Next.js',
  authors: [{ name: 'Alex Robaina', url: 'https://github.com/alexrobaina' }],
  openGraph: {
    title: 'Transform Your Business with Intelligent Automation',
    description:
      'Elevate your operations with AI-powered solutions that boost efficiency, delight customers, and accelerate growth. Experience the future of business with Hello Galaxy.',
    type: 'website',
    images: '../../public/chatAI.png',
  },
  twitter: {
    description:
      'Elevate your operations with AI-powered solutions that boost efficiency, delight customers, and accelerate growth. Experience the future of business with Hello Galaxy.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
    </html>
  );
}
