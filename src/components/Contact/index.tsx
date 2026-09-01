'use client';

import { FC } from 'react';
import { useTranslations } from 'next-intl';
import { TbBrandWhatsapp, TbMail, TbCalendarTime } from 'react-icons/tb';
import { LeadForm } from '@/components/LeadForm';

const WHATSAPP_URL = 'https://wa.me/541138997032';
const EMAIL = 'team@hellogalaxy.dev';

/**
 * The landing previously offered no way to convert except a WhatsApp link in a
 * bar hidden on mobile — while /api/leads and LeadForm already existed. This
 * section closes that gap and gives the visitor a synchronous option
 * (WhatsApp) next to an asynchronous one (the form).
 */
export const Contact: FC = () => {
  const t = useTranslations('Contact');

  return (
    <section id="contact" className="section section-divider bg-surface">
      <div className="container-content grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="eyebrow">{t('eyebrow')}</p>
          <h2 className="heading-2 mt-3">{t('title')}</h2>
          <p className="lead">{t('description')}</p>

          <ul className="mt-9 space-y-4">
            <ContactRow
              icon={<TbBrandWhatsapp size={20} />}
              label={t('whatsapp')}
              value="+54 11 3899-7032"
              href={WHATSAPP_URL}
              external
            />
            <ContactRow
              icon={<TbMail size={20} />}
              label={t('emailLabel')}
              value={EMAIL}
              href={`mailto:${EMAIL}`}
            />
            <ContactRow
              icon={<TbCalendarTime size={20} />}
              label={t('hoursLabel')}
              value={t('hoursValue')}
            />
          </ul>

          <p className="mt-9 rounded-xl border border-white/10 bg-white/[0.03] p-4 text-sm leading-relaxed text-slate-400">
            {t('note')}
          </p>
        </div>

        <div className="card-surface p-6 md:p-8">
          <h3 className="text-lg font-semibold text-slate-50">{t('formTitle')}</h3>
          <p className="mt-1.5 text-sm text-slate-400">{t('formDescription')}</p>
          <div className="mt-6">
            <LeadForm source="landing" variant="project" tone="dark" />
          </div>
        </div>
      </div>
    </section>
  );
};

interface ContactRowProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
  external?: boolean;
}

const ContactRow: FC<ContactRowProps> = ({ icon, label, value, href, external }) => {
  const body = (
    <>
      <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-500/15 text-brand-300">
        {icon}
      </span>
      <span>
        <span className="block text-xs uppercase tracking-wider text-slate-500">{label}</span>
        <span className="mt-0.5 block text-sm font-medium text-slate-200">{value}</span>
      </span>
    </>
  );

  if (!href) {
    return <li className="flex items-center gap-4">{body}</li>;
  }

  return (
    <li>
      <a
        href={href}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        className="group flex items-center gap-4 rounded-lg transition-opacity hover:opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-4 focus-visible:ring-offset-surface"
      >
        {body}
      </a>
    </li>
  );
};
