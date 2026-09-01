import { FC } from 'react';

/** Inline 24px stroke icons — no extra dependency, inherits currentColor. */
const base = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.7,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  className: 'h-5 w-5',
  'aria-hidden': true,
};

export const Storefront: FC = () => (
  <svg {...base}>
    <path d="M3 9.5 4.6 4.8A1.5 1.5 0 0 1 6 3.8h12a1.5 1.5 0 0 1 1.4 1L21 9.5" />
    <path d="M3 9.5a2.5 2.5 0 0 0 4.5 1.5 2.5 2.5 0 0 0 4.5 0 2.5 2.5 0 0 0 4.5 0A2.5 2.5 0 0 0 21 9.5" />
    <path d="M4.5 12.5V20h15v-7.5" />
    <path d="M9.5 20v-4.5h5V20" />
  </svg>
);

export const Rocket: FC = () => (
  <svg {...base}>
    <path d="M13.5 3.5c3.5 0 7 3.5 7 7 0 0-2 5-7.5 8.5L9 15l-4-4C8.5 5.5 13.5 3.5 13.5 3.5Z" />
    <circle cx="14.5" cy="9.5" r="1.8" />
    <path d="M6.5 15.5C5 17 4.5 20 4.5 20s3-.5 4.5-2" />
  </svg>
);
