import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getTool } from '@/tools/registry';

const tool = getTool('pdf');

export function generateMetadata(): Metadata {
  if (!tool) return {};
  return {
    title: `${tool.name} — ${tool.tagline}`,
    description: tool.description,
    keywords: tool.keywords,
    alternates: { canonical: `/tools/${tool.slug}` },
    // Keep out of the index until the tool is actually live (avoid thin content).
    robots: tool.status === 'live' ? undefined : { index: false, follow: true },
    openGraph: {
      title: `${tool.name} — Hello Galaxy`,
      description: tool.description,
      type: 'website',
    },
  };
}

export default function PdfToolPage() {
  if (!tool) notFound();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: tool.name,
    applicationCategory: 'UtilitiesApplication',
    operatingSystem: 'Web',
    description: tool.description,
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: (tool.pricing.currency ?? 'usd').toUpperCase(),
    },
  };

  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-2xl">
        <span className="text-4xl" aria-hidden>
          {tool.icon}
        </span>
        <h1 className="mt-4 text-3xl md:text-5xl font-bold text-violet-50">
          {tool.name}
        </h1>
        <p className="mt-4 text-lg text-slate-300">{tool.tagline}</p>
        {tool.pricing.freeLimit && (
          <p className="mt-2 text-sm text-emerald-300">
            Free tier: {tool.pricing.freeLimit}
          </p>
        )}
      </div>

      {/* Converter drop zone — wired to client-side WASM in Phase C. */}
      <div className="mt-12 max-w-3xl rounded-2xl border border-dashed border-white/20 bg-white/5 p-12 text-center">
        <p className="text-slate-300">
          Drag &amp; drop your PDF here — processing runs privately in your
          browser.
        </p>
        <p className="mt-2 text-sm text-slate-500">Coming soon.</p>
      </div>
    </section>
  );
}
