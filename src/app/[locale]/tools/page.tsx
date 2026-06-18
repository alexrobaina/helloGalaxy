import type { Metadata } from 'next';
import { Link } from '@/i18n/routing';
import { Card, CardTitle, CardDescription } from '@/components/ui';
import { tools } from '@/tools/registry';

export function generateMetadata(): Metadata {
  return {
    title: 'Free Online Tools — Hello Galaxy',
    description:
      'A growing collection of fast, privacy-friendly online tools by Hello Galaxy. Convert files, automate small tasks and more.',
    alternates: { canonical: '/tools' },
    openGraph: {
      title: 'Free Online Tools — Hello Galaxy',
      description:
        'A growing collection of fast, privacy-friendly online tools by Hello Galaxy.',
      type: 'website',
    },
  };
}

export default function ToolsHubPage() {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-2xl">
        <h1 className="text-3xl md:text-5xl font-bold text-violet-50">
          Tools by Hello Galaxy
        </h1>
        <p className="mt-4 text-lg text-slate-300">
          Fast, privacy-friendly tools that get the job done. New ones ship
          regularly — free to start, upgrade when you need more.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {tools.map((tool) => {
          const isLive = tool.status === 'live';
          const card = (
            <Card
              key={tool.slug}
              variant="glass"
              interactive={isLive}
              className="h-full bg-white/5 border-white/10 text-slate-100 hover:border-indigo-400/50"
            >
              <div className="flex items-center justify-between">
                <span className="text-3xl" aria-hidden>
                  {tool.icon}
                </span>
                {!isLive && (
                  <span className="rounded-full bg-indigo-500/20 px-2 py-0.5 text-xs font-medium text-indigo-200">
                    Coming soon
                  </span>
                )}
                {isLive && tool.pricing.freeLimit && (
                  <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-xs font-medium text-emerald-200">
                    Free: {tool.pricing.freeLimit}
                  </span>
                )}
              </div>
              <CardTitle as="h2" className="mt-4 text-violet-50">
                {tool.name}
              </CardTitle>
              <CardDescription className="mt-2 text-slate-300">
                {tool.tagline}
              </CardDescription>
            </Card>
          );

          return isLive ? (
            <Link key={tool.slug} href={`/tools/${tool.slug}`} className="block">
              {card}
            </Link>
          ) : (
            card
          );
        })}
      </div>
    </section>
  );
}
