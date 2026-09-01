import { ImageResponse } from 'next/og';

export const alt = 'Hello Galaxy — product studio: web, custom apps, AI and cloud';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

/**
 * Generated share card, replacing the stale `/chatAI.png` illustration whose
 * real dimensions (1400x1080) did not even match the 1200x630 the metadata
 * declared. Generating it keeps the card in sync with the positioning and
 * guarantees the declared size is the actual size.
 *
 * Copy is inlined rather than read through next-intl: if this route throws,
 * every social preview silently breaks, so it must have no runtime deps.
 */
const COPY = {
  'es-ES': {
    tagline: 'Convertimos tu idea en software que funciona y que vende.',
    services: ['Apps a medida', 'Sitios web', 'IA y automatización', 'Nube y datos'],
  },
  'en-US': {
    tagline: 'We turn your idea into software that works — and sells.',
    services: ['Custom apps', 'Websites', 'AI & automation', 'Cloud & data'],
  },
} as const;

export default async function OpengraphImage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const copy = COPY[locale as keyof typeof COPY] ?? COPY['en-US'];

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: '#05070f',
          backgroundImage:
            'radial-gradient(circle at 20% 0%, rgba(99,102,241,0.30), transparent 55%)',
          padding: '72px',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
          <div
            style={{
              width: '28px',
              height: '28px',
              borderRadius: '999px',
              backgroundColor: '#818cf8',
            }}
          />
          <div style={{ fontSize: 34, fontWeight: 700, color: '#f8fafc' }}>Hello Galaxy</div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              fontSize: 66,
              fontWeight: 700,
              color: '#f8fafc',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              maxWidth: '960px',
            }}
          >
            {copy.tagline}
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}>
          {copy.services.map((service) => (
            <div
              key={service}
              style={{
                display: 'flex',
                fontSize: 26,
                color: '#c7d2fe',
                border: '1px solid rgba(129,140,248,0.45)',
                borderRadius: '999px',
                padding: '10px 24px',
              }}
            >
              {service}
            </div>
          ))}
        </div>
      </div>
    ),
    size
  );
}
