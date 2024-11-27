// next.config.js
import createNextIntlPlugin from 'next-intl/plugin';

// Pass the path to your i18n configuration file
const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Other Next.js configurations
};

export default withNextIntl(nextConfig);
