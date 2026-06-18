'use client';

import { useState } from 'react';
import { Phone, Star } from 'lucide-react';
import type { TradeTemplate } from '@/templates/registry';

/**
 * The "wow" island: a prospect types their own business name and instantly
 * sees this exact design wearing their brand inside a faux browser window.
 * Self-contained — it renders a scaled mini-hero rather than mutating the
 * surrounding (server-rendered) page.
 */
export function BrandPreview({ t }: { t: TradeTemplate }) {
  const [name, setName] = useState('');
  const brand = name.trim() || t.businessName;
  const headline = t.hero.headline;

  return (
    <div className="grid items-center gap-8 lg:grid-cols-2">
      <div>
        <p className={`text-sm font-bold uppercase tracking-wide ${t.theme.accentText}`}>
          See it with your name
        </p>
        <h2 className="mt-2 text-3xl md:text-4xl font-bold text-slate-900">
          This could be your website by Friday.
        </h2>
        <p className="mt-3 max-w-md text-slate-600">
          Type your business name and watch this exact design become yours.
          No commitment — just a glimpse of what your customers would see.
        </p>
        <label htmlFor="brand-input" className="sr-only">
          Your business name
        </label>
        <input
          id="brand-input"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your business name…"
          maxLength={32}
          className="mt-5 w-full max-w-sm rounded-lg border border-slate-300 bg-white px-4 py-3 text-lg text-slate-900 placeholder-slate-400 focus:border-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900/20"
        />
        <p className="mt-2 text-xs text-slate-400">
          {name.trim() ? 'Looking sharp 👀' : 'Go ahead, try it.'}
        </p>
      </div>

      {/* Faux browser window */}
      <div className="overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-slate-200">
        <div className="flex items-center gap-2 border-b border-slate-100 bg-slate-50 px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-red-400" />
          <span className="h-3 w-3 rounded-full bg-amber-400" />
          <span className="h-3 w-3 rounded-full bg-green-400" />
          <span className="ml-3 truncate rounded bg-white px-2 py-1 text-xs text-slate-400 ring-1 ring-slate-200">
            www.{brand.toLowerCase().replace(/[^a-z0-9]+/g, '')}.com
          </span>
        </div>
        <div className={`bg-gradient-to-br ${t.theme.heroGradient} p-6 text-white`}>
          <div className="flex items-center justify-between">
            <span className="text-lg font-extrabold">{brand}</span>
            <span className="rounded-md bg-white/20 px-2 py-1 text-xs font-semibold">
              Get a Quote
            </span>
          </div>
          <div className="mt-5 inline-flex items-center gap-1 rounded-full bg-white/10 px-2 py-0.5 text-xs">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-3 w-3 fill-current text-amber-300" />
            ))}
            <span className="ml-1">{t.rating}</span>
          </div>
          <p className="mt-3 text-xl font-extrabold leading-snug">{headline}</p>
          <span className="mt-4 inline-flex items-center gap-1 rounded-md bg-white px-3 py-1.5 text-sm font-bold text-slate-900">
            <Phone className="h-4 w-4" /> Call now
          </span>
        </div>
      </div>
    </div>
  );
}
