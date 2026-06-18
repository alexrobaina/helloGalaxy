'use client';

import { FC, FormEvent, useState } from 'react';
import { toast } from 'react-toastify';
import { Button } from '@/components/ui';
import { templates } from '@/templates/registry';

interface LeadFormProps {
  /** Tags where the lead came from, e.g. 'websites' or 'websites/plumber'. */
  source?: string;
  /** Preselect a trade in the dropdown. */
  defaultTrade?: string;
}

const inputClass =
  'w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-slate-900 placeholder-slate-400 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/30';

export const LeadForm: FC<LeadFormProps> = ({ source = 'websites', defaultTrade }) => {
  const [loading, setLoading] = useState(false);

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
        toast.success("Got it! We'll be in touch within 24 hours. 🚀");
        form.reset();
      } else {
        toast.error(json.error ?? 'Something went wrong. Please try again.');
      }
    } catch {
      toast.error('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-xl text-left">
      {/* Honeypot — hidden from real users */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden
        className="hidden"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="lead-name" className="mb-1 block text-sm font-medium text-slate-700">
            Name *
          </label>
          <input id="lead-name" name="name" required className={inputClass} placeholder="Jane Doe" />
        </div>
        <div>
          <label htmlFor="lead-email" className="mb-1 block text-sm font-medium text-slate-700">
            Email *
          </label>
          <input id="lead-email" name="email" type="email" required className={inputClass} placeholder="you@business.com" />
        </div>
        <div>
          <label htmlFor="lead-business" className="mb-1 block text-sm font-medium text-slate-700">
            Business name
          </label>
          <input id="lead-business" name="business" className={inputClass} placeholder="Acme Plumbing" />
        </div>
        <div>
          <label htmlFor="lead-phone" className="mb-1 block text-sm font-medium text-slate-700">
            Phone
          </label>
          <input id="lead-phone" name="phone" type="tel" className={inputClass} placeholder="(555) 012-3456" />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="lead-trade" className="mb-1 block text-sm font-medium text-slate-700">
            Your trade
          </label>
          <select id="lead-trade" name="trade" defaultValue={defaultTrade ?? ''} className={inputClass}>
            <option value="">Select…</option>
            {templates.map((t) => (
              <option key={t.slug} value={t.slug}>
                {t.trade}
              </option>
            ))}
            <option value="other">Other</option>
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="lead-message" className="mb-1 block text-sm font-medium text-slate-700">
            What do you need?
          </label>
          <textarea id="lead-message" name="message" rows={4} className={inputClass} placeholder="Tell us about your business and what you need…" />
        </div>
      </div>

      <Button
        type="submit"
        variant="brand"
        size="lg"
        fullWidth
        loading={loading}
        loadingText="Sending…"
        className="mt-6"
      >
        Get my free quote
      </Button>
      <p className="mt-3 text-center text-xs text-slate-500">
        No spam. No contracts. We reply within 24 hours.
      </p>
    </form>
  );
};
