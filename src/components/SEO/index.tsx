import Head from 'next/head';
import { FC } from 'react';

export const SEO: FC = () => (
  <Head>
    <title>Hello Galaxy</title>
    <meta name="description" content="Transform Your Business with Intelligent Automation" />
    <meta
      name="keywords"
      content="AI, automation, business, efficiency, growth, typescript, Node.js, Next.js"
    />
    <meta name="author" content="Your Name" />
    <meta property="og:title" content="Transform Your Business with Intelligent Automation" />
    <meta
      property="og:description"
      content="Elevate your operations with AI-powered solutions that boost efficiency, delight
      customers, and accelerate growth. Experience the future of business with Hellow Gallaxy."
    />
    <meta property="og:type" content="website" />
    {/* <meta property="og:url" content="https://your-website-url.com" /> */}
    <meta property="og:image" content="../../public/chatAI.png" />
    <meta
      name="twitter:description"
      content="Elevate your operations with AI-powered solutions that boost efficiency, delight
      customers, and accelerate growth. Experience the future of business with Hellow Gallaxy."
    />
    {/* <meta name="twitter:image" content="https://your-website-url.com/your-image.jpg" /> */}
    <link rel="icon" href="/favicon.ico" />
  </Head>
);
