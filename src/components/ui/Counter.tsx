'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

interface CounterProps {
  /** Final value to count up to. Accepts decimals (e.g. 4.9). */
  value: number;
  /** Decimal places to render. */
  decimals?: number;
  /** Text appended after the number, e.g. '+' or '/7'. */
  suffix?: string;
  /** Text prepended before the number. */
  prefix?: string;
  durationMs?: number;
  className?: string;
}

/**
 * Counts up from 0 to `value` once it scrolls into view. Used for the trust
 * stats (reviews, years, rating) on the demo pages.
 */
export function Counter({
  value,
  decimals = 0,
  suffix = '',
  prefix = '',
  durationMs = 1400,
  className,
}: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    let start: number | null = null;

    const tick = (now: number) => {
      if (start === null) start = now;
      const progress = Math.min((now - start) / durationMs, 1);
      // easeOutCubic for a snappy finish
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(value * eased);
      if (progress < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, durationMs]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display.toFixed(decimals)}
      {suffix}
    </span>
  );
}
