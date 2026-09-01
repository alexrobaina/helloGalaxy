import type { Locale } from '@/i18n/routing';

/**
 * Canonical origin for every absolute URL we emit (canonicals, hreflang,
 * OpenGraph, JSON-LD @ids).
 *
 * NEXT_PUBLIC_SITE_URL is the source of truth. The Vercel fallbacks exist so a
 * forgotten env var degrades to the real deployment host instead of silently
 * publishing `http://localhost:3000` canonicals — which is what the build did
 * before, and which de-indexes the whole site if it ships.
 */
export function getBaseUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit.replace(/\/$/, '');

  const vercelProd = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (vercelProd) return `https://${vercelProd}`;

  const vercel = process.env.VERCEL_URL;
  if (vercel) return `https://${vercel}`;

  return 'http://localhost:3000';
}

export const LOCALES: Locale[] = ['en-US', 'es-ES'];
export const DEFAULT_LOCALE: Locale = 'en-US';

/** BCP-47 → the underscored form OpenGraph expects (es-ES → es_ES). */
export const ogLocale = (locale: string) => locale.replace('-', '_');

export const NAP = {
  name: 'Hello Galaxy',
  legalName: 'Hello Galaxy',
  email: 'team@hellogalaxy.dev',
  telephone: '+541138997032',
  whatsapp: 'https://wa.me/541138997032',
  foundingDate: '2025-01-10',
  sameAs: [
    'https://www.linkedin.com/company/hellogalaxy',
    'https://www.instagram.com/hellogalaxy.sf',
  ],
  address: {
    streetAddress: 'Godoy Cruz',
    addressLocality: 'Mendoza',
    addressRegion: 'Mendoza',
    postalCode: '5501',
    addressCountry: 'AR',
  },
} as const;

/**
 * The four service lines actually shown on the landing. The previous graph
 * advertised six — including e-commerce and product design — which no longer
 * appear anywhere on the page; structured data that contradicts the visible
 * content is worse than none.
 */
interface ServiceCopy {
  slug: string;
  name: Record<Locale, string>;
  description: Record<Locale, string>;
}

export const SERVICES: ServiceCopy[] = [
  {
    slug: 'custom-web-and-mobile-applications',
    name: {
      'en-US': 'Custom web and mobile applications',
      'es-ES': 'Aplicaciones web y móviles a medida',
    },
    description: {
      'en-US':
        'We build the whole product: from the first wireframe to a scalable, secure app in production, with Next.js, React and Node.',
      'es-ES':
        'Construimos el producto completo: desde el primer wireframe hasta la app en producción, escalable y segura, con Next.js, React y Node.',
    },
  },
  {
    slug: 'websites-that-convert',
    name: {
      'en-US': 'Websites that convert',
      'es-ES': 'Sitios web que convierten',
    },
    description: {
      'en-US':
        'Fast, well-ranked websites built so the visitor acts: technical and local SEO, Core Web Vitals and lead capture.',
      'es-ES':
        'Sitios web rápidos y bien posicionados para que el visitante actúe: SEO técnico y local, Core Web Vitals y captación de leads.',
    },
  },
  {
    slug: 'automation-and-ai',
    name: {
      'en-US': 'Automation & AI',
      'es-ES': 'Automatización e IA',
    },
    description: {
      'en-US':
        'AI assistants and automated workflows that take over repetitive work and answer customers around the clock on WhatsApp, web and CRM.',
      'es-ES':
        'Asistentes de IA y flujos automáticos que se hacen cargo de lo repetitivo y responden a tus clientes las 24 horas en WhatsApp, web y CRM.',
    },
  },
  {
    slug: 'cloud-and-data',
    name: {
      'en-US': 'Cloud & data',
      'es-ES': 'Nube y datos',
    },
    description: {
      'en-US':
        'Cloud infrastructure that survives growth and organized data: AWS, Google Cloud, PostgreSQL, BigQuery, dashboards and reporting.',
      'es-ES':
        'Infraestructura en la nube que aguanta el crecimiento y datos ordenados: AWS, Google Cloud, PostgreSQL, BigQuery, dashboards y reportes.',
    },
  },
];

const ORG_DESCRIPTION: Record<Locale, string> = {
  'en-US':
    'A product studio that designs and builds custom software, websites, AI automation and cloud infrastructure for businesses across Latin America and the United States.',
  'es-ES':
    'Estudio de producto que diseña y construye software a medida, sitios web, automatizaciones con IA e infraestructura en la nube para negocios de Latinoamérica y Estados Unidos.',
};

/**
 * One `@graph` with cross-referenced @ids beats three disconnected documents:
 * search engines can resolve the organization behind the page, the site it
 * belongs to and the services it offers as a single entity.
 */
export function buildJsonLd({
  locale,
  baseUrl,
  title,
  description,
}: {
  locale: Locale;
  baseUrl: string;
  title: string;
  description: string;
}) {
  const orgId = `${baseUrl}/#organization`;
  const siteId = `${baseUrl}/#website`;
  const pageUrl = `${baseUrl}/${locale}`;
  const logoUrl = `${baseUrl}/android-chrome-512x512.png`;

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ProfessionalService',
        '@id': orgId,
        name: NAP.name,
        legalName: NAP.legalName,
        description: ORG_DESCRIPTION[locale],
        url: baseUrl,
        foundingDate: NAP.foundingDate,
        email: NAP.email,
        telephone: NAP.telephone,
        sameAs: [...NAP.sameAs, NAP.whatsapp],
        logo: { '@id': `${baseUrl}/#logo` },
        image: { '@id': `${baseUrl}/#logo` },
        address: { '@type': 'PostalAddress', ...NAP.address },
        knowsLanguage: ['es', 'en'],
        // We sell remotely into both markets, so both are declared.
        areaServed: [
          { '@type': 'Country', name: 'Argentina' },
          { '@type': 'Country', name: 'United States' },
          { '@type': 'Place', name: 'Latin America' },
        ],
        contactPoint: [
          {
            '@type': 'ContactPoint',
            contactType: 'sales',
            email: NAP.email,
            telephone: NAP.telephone,
            availableLanguage: ['Spanish', 'English'],
          },
        ],
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
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
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: locale === 'es-ES' ? 'Servicios' : 'Services',
          itemListElement: SERVICES.map((service) => ({
            '@type': 'Offer',
            itemOffered: { '@id': `${baseUrl}/#service-${service.slug}` },
          })),
        },
      },
      {
        // Hoisted to the graph root so every reference to it resolves against a
        // top-level node instead of one nested inside the organization.
        '@type': 'ImageObject',
        '@id': `${baseUrl}/#logo`,
        url: logoUrl,
        contentUrl: logoUrl,
        width: 512,
        height: 512,
        caption: NAP.name,
      },
      {
        '@type': 'WebSite',
        '@id': siteId,
        name: NAP.name,
        url: baseUrl,
        inLanguage: locale,
        publisher: { '@id': orgId },
      },
      {
        '@type': 'WebPage',
        '@id': `${pageUrl}#webpage`,
        url: pageUrl,
        name: title,
        description,
        inLanguage: locale,
        isPartOf: { '@id': siteId },
        about: { '@id': orgId },
        primaryImageOfPage: { '@id': `${pageUrl}#primaryimage` },
      },
      {
        '@type': 'ImageObject',
        '@id': `${pageUrl}#primaryimage`,
        url: `${pageUrl}/opengraph-image`,
        width: 1200,
        height: 630,
        caption: title,
      },
      ...SERVICES.map((service) => ({
        '@type': 'Service',
        '@id': `${baseUrl}/#service-${service.slug}`,
        name: service.name[locale],
        description: service.description[locale],
        serviceType: service.name['en-US'],
        provider: { '@id': orgId },
        areaServed: [
          { '@type': 'Country', name: 'Argentina' },
          { '@type': 'Country', name: 'United States' },
        ],
        url: `${pageUrl}#solutions`,
      })),
      {
        '@type': 'BreadcrumbList',
        '@id': `${pageUrl}#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: NAP.name,
            item: pageUrl,
          },
        ],
      },
    ],
  };
}
