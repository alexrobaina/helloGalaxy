import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getTemplate } from '@/templates/registry';
import { LocalBusinessTemplate } from '@/components/templates/LocalBusinessTemplate';

type Params = { params: Promise<{ locale: string; trade: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { trade } = await params;
  const tpl = getTemplate(trade);
  if (!tpl) return {};
  return {
    title: tpl.seo.title,
    description: tpl.seo.description,
    keywords: tpl.seo.keywords,
    alternates: { canonical: `/websites/${tpl.slug}` },
    openGraph: {
      title: tpl.seo.title,
      description: tpl.seo.description,
      type: 'website',
    },
  };
}

export default async function TemplatePreviewPage({ params }: Params) {
  const { trade } = await params;
  const tpl = getTemplate(trade);
  if (!tpl) notFound();

  return <LocalBusinessTemplate t={tpl} />;
}
