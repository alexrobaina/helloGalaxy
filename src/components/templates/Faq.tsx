'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import type { Faq as FaqItem, TemplateTheme } from '@/templates/registry';

/**
 * Simple, accessible FAQ accordion for the demo pages. One open at a time.
 */
export function Faq({
  items,
  accentText,
}: {
  items: FaqItem[];
  accentText: TemplateTheme['accentText'];
}) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="mx-auto max-w-3xl divide-y divide-slate-200 rounded-2xl bg-white ring-1 ring-slate-100">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
            >
              <span className="text-lg font-semibold text-slate-900">
                {item.q}
              </span>
              <ChevronDown
                className={`h-5 w-5 shrink-0 transition-transform duration-300 ${accentText} ${
                  isOpen ? 'rotate-180' : ''
                }`}
              />
            </button>
            <div
              className={`grid overflow-hidden px-6 transition-all duration-300 ${
                isOpen ? 'grid-rows-[1fr] pb-5 opacity-100' : 'grid-rows-[0fr] opacity-0'
              }`}
            >
              <p className="min-h-0 text-slate-600">{item.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
