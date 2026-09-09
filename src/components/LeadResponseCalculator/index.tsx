'use client';

import { FC, useMemo, useState } from 'react';
import { Clock, TrendingDown } from 'lucide-react';

/**
 * Close-rate benchmarks for home-service contractors, keyed by minutes-to-first-reply.
 * Anchored on published 2026 industry data: ~30% under one minute, ~21% at five,
 * ~15% at thirty, under 10% past two hours. Values between anchors are interpolated
 * on a log scale because the drop-off is steep early and flattens out later.
 *
 * These are industry benchmarks, not a promise about any individual shop — the copy
 * around the widget says so explicitly, and it must keep saying so.
 */
const CURVE: ReadonlyArray<readonly [minutes: number, closeRate: number]> = [
  [1, 0.3],
  [5, 0.21],
  [30, 0.15],
  [120, 0.095],
  [1440, 0.06],
];

function closeRateAt(minutes: number): number {
  if (!Number.isFinite(minutes) || minutes <= CURVE[0][0]) return CURVE[0][1];

  for (let i = 0; i < CURVE.length - 1; i++) {
    const [aMin, aRate] = CURVE[i];
    const [bMin, bRate] = CURVE[i + 1];
    if (minutes <= bMin) {
      const t =
        (Math.log(minutes) - Math.log(aMin)) / (Math.log(bMin) - Math.log(aMin));
      return aRate + (bRate - aRate) * t;
    }
  }
  return CURVE[CURVE.length - 1][1];
}

const usd = (n: number) =>
  `$${Math.round(n).toLocaleString('en-US')}`;

/** Falls back to the placeholder value while a field is empty or nonsensical. */
const readNumber = (raw: string, fallback: number) => {
  const n = Number.parseFloat(raw);
  return Number.isFinite(n) && n >= 0 ? n : fallback;
};

interface FieldProps {
  id: string;
  label: string;
  hint?: string;
  value: string;
  onChange: (v: string) => void;
  max: number;
  step: number;
}

const Field: FC<FieldProps> = ({ id, label, hint, value, onChange, max, step }) => (
  <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 border-b border-slate-200 py-4">
    <label htmlFor={id} className="min-w-[12rem] flex-1 text-sm font-semibold text-slate-800">
      {label}
      {hint ? <span className="mt-0.5 block text-xs font-normal text-slate-500">{hint}</span> : null}
    </label>
    <input
      id={id}
      type="number"
      inputMode="numeric"
      min={0}
      max={max}
      step={step}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-32 rounded-lg border border-slate-300 bg-white px-3 py-2 text-right text-lg font-bold tabular-nums text-slate-900 transition-colors focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/30"
    />
  </div>
);

/**
 * Interactive estimator: how many jobs a contractor loses to slow lead response.
 * Opens with realistic defaults so the widget shows a real answer at rest rather
 * than an empty shell.
 */
export const LeadResponseCalculator: FC = () => {
  const [leads, setLeads] = useState('45');
  const [ticket, setTicket] = useState('1434');
  const [minutes, setMinutes] = useState('45');

  const result = useMemo(() => {
    const l = readNumber(leads, 45);
    const t = readNumber(ticket, 1434);
    const m = readNumber(minutes, 45);

    const now = l * closeRateAt(m);
    const fast = l * closeRateAt(0.5);
    const diff = Math.max(0, fast - now);

    return { now, fast, diff, money: diff * t };
  }, [leads, ticket, minutes]);

  return (
    <div className="overflow-hidden rounded-2xl border-2 border-slate-900 bg-white shadow-sm">
      <div className="flex items-center gap-2 bg-slate-900 px-5 py-3 text-white">
        <TrendingDown className="h-5 w-5 text-amber-300" aria-hidden />
        <h3 className="text-lg font-bold tracking-wide">Lost revenue estimator</h3>
      </div>

      <div className="px-5 py-4">
        <Field
          id="lrc-leads"
          label="New leads per month"
          value={leads}
          onChange={setLeads}
          max={2000}
          step={1}
        />
        <Field
          id="lrc-ticket"
          label="Average job ticket"
          hint="US home-services average is about $1,434"
          value={ticket}
          onChange={setTicket}
          max={100000}
          step={50}
        />
        <Field
          id="lrc-minutes"
          label="Your typical response time"
          hint="In minutes. The industry average is 42–47."
          value={minutes}
          onChange={setMinutes}
          max={1440}
          step={1}
        />

        <div className="mt-5 rounded-xl border border-amber-300 bg-amber-50 p-5">
          <dl className="space-y-1.5 text-sm">
            <div className="flex items-baseline justify-between gap-4">
              <dt className="text-slate-600">Jobs you book today</dt>
              <dd className="font-bold tabular-nums text-slate-900">
                {result.now.toFixed(1)}
              </dd>
            </div>
            <div className="flex items-baseline justify-between gap-4">
              <dt className="text-slate-600">Jobs you&rsquo;d book replying in under a minute</dt>
              <dd className="font-bold tabular-nums text-slate-900">
                {result.fast.toFixed(1)}
              </dd>
            </div>
            <div className="flex items-baseline justify-between gap-4">
              <dt className="text-slate-600">Difference</dt>
              <dd className="font-bold tabular-nums text-amber-800">
                +{result.diff.toFixed(1)} jobs
              </dd>
            </div>
          </dl>

          <div className="mt-4 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 border-t-2 border-amber-300 pt-4">
            <span className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-amber-800">
              <Clock className="h-4 w-4" aria-hidden /> Left on the table / month
            </span>
            <span className="text-4xl font-extrabold tabular-nums leading-none text-amber-800">
              {usd(result.money)}
            </span>
          </div>
        </div>

        <p className="mt-4 text-xs leading-relaxed text-slate-500">
          <strong className="text-slate-700">How this is calculated:</strong> we apply
          published industry close rates — about 30% under one minute, 21% at five
          minutes, 15% at thirty, under 10% past two hours — to your lead volume and
          ticket. It is an estimate built on benchmarks, not a promise about your shop.
          Your real numbers will differ, and we would rather measure them than guess.
        </p>
      </div>
    </div>
  );
};
