'use client';

import { FC, FormEvent, useState } from 'react';
import { toast } from 'react-toastify';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui';
import { cn } from '@/lib/cn';
import { templates } from '@/templates/registry';

/** Failure codes the API can return; anything else falls back to 'unknown'. */
const ERROR_CODES = [
  'rate_limited',
  'invalid_fields',
  'invalid_json',
  'not_configured',
  'delivery_failed',
];

/** Project types offered on the main landing (sent to the API as `trade`). */
const PROJECT_TYPES = ['website', 'webapp', 'ecommerce', 'automation', 'cloud'] as const;

interface LeadFormProps {
  /** Tags where the lead came from, e.g. 'websites' or 'landing'. */
  source?: string;
  /** Preselect a value in the dropdown. */
  defaultTrade?: string;
  /**
   * 'trade' lists the local-business template niches (used on /websites).
   * 'project' lists the service lines (used on the main landing).
   */
  variant?: 'trade' | 'project';
  /** Colour scheme of the inputs — 'dark' for the landing's ink sections. */
  tone?: 'light' | 'dark';
}

const inputBase =
  'w-full rounded-lg border px-4 py-2.5 focus:outline-none focus:ring-2 transition-colors';

const inputTone = {
  light:
    'border-slate-300 bg-white text-slate-900 placeholder-slate-400 focus:border-indigo-500 focus:ring-indigo-500/30 [&>option]:bg-white [&>option]:text-slate-900',
  dark:
    'border-white/15 bg-white/[0.04] text-slate-100 placeholder-slate-500 focus:border-brand-400 focus:ring-brand-500/40 [&>option]:bg-card [&>option]:text-slate-100',
};

const labelTone = {
  light: 'text-slate-700',
  dark: 'text-slate-300',
};

const hintTone = {
  light: 'text-slate-500',
  dark: 'text-slate-500',
};

export const LeadForm: FC<LeadFormProps> = ({
  source = 'websites',
  defaultTrade,
  variant = 'trade',
  tone = 'light',
}) => {
  const t = useTranslations('LeadForm');
  const [loading, setLoading] = useState(false);

  const inputClass = cn(inputBase, inputTone[tone]);
  const labelClass = cn('mb-1 block text-sm font-medium', labelTone[tone]);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    setLoading(true);
    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, source }),
      });
      const json = await res.json().catch(() => ({}));

      if (res.ok && json.ok) {
        toast.success(t('success'));
        form.reset();
        return;
      }

      // The API returns a stable `code`; the English `error` string it also
      // sends is for logs, not for the visitor.
      const code =
        typeof json.code === 'string' && ERROR_CODES.includes(json.code)
          ? json.code
          : 'unknown';
      toast.error(t(`errors.${code}`));
    } catch {
      toast.error(t('errors.network'));
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto w-full max-w-xl text-left">
      {/* Honeypot — hidden from real users */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden
        className="hidden"
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="lead-name" className={labelClass}>
            {t('name')} *
          </label>
          <input
            id="lead-name"
            name="name"
            required
            autoComplete="name"
            className={inputClass}
            placeholder={t('namePlaceholder')}
          />
        </div>
        <div>
          <label htmlFor="lead-email" className={labelClass}>
            {t('email')} *
          </label>
          <input
            id="lead-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={inputClass}
            placeholder={t('emailPlaceholder')}
          />
        </div>
        <div>
          <label htmlFor="lead-business" className={labelClass}>
            {t('business')}
          </label>
          <input
            id="lead-business"
            name="business"
            autoComplete="organization"
            className={inputClass}
            placeholder={t('businessPlaceholder')}
          />
        </div>
        <div>
          <label htmlFor="lead-phone" className={labelClass}>
            {t('phone')}
          </label>
          <input
            id="lead-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className={inputClass}
            placeholder={t('phonePlaceholder')}
          />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="lead-trade" className={labelClass}>
            {variant === 'project' ? t('projectType') : t('trade')}
          </label>
          <select
            id="lead-trade"
            name="trade"
            defaultValue={defaultTrade ?? ''}
            className={inputClass}
          >
            <option value="">{t('select')}</option>
            {variant === 'project'
              ? PROJECT_TYPES.map((type) => (
                  <option key={type} value={type}>
                    {t(`projectTypes.${type}`)}
                  </option>
                ))
              : templates.map((tpl) => (
                  <option key={tpl.slug} value={tpl.slug}>
                    {tpl.trade}
                  </option>
                ))}
            <option value="other">{t('other')}</option>
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="lead-message" className={labelClass}>
            {t('message')}
          </label>
          <textarea
            id="lead-message"
            name="message"
            rows={4}
            className={inputClass}
            placeholder={t('messagePlaceholder')}
          />
        </div>
      </div>

      <Button
        type="submit"
        variant="brand"
        size="lg"
        fullWidth
        loading={loading}
        loadingText={t('sending')}
        className="mt-6"
      >
        {t('submit')}
      </Button>
      <p className={cn('mt-3 text-center text-xs', hintTone[tone])}>{t('reassurance')}</p>
    </form>
  );
};
