import type { Locale } from '@/lib/menu-data';
import { COPY } from '@/lib/copy';

/** Spice indicator. Three marks, filled to the dish's level. */
export default function Heat({ level, locale }: { level: 0 | 1 | 2 | 3; locale: Locale }) {
  if (level === 0) return null;
  const label = COPY[locale].dishes.heatLabels[level];
  return (
    <span className="heat" title={label}>
      <span className="sr-only">{COPY[locale].dishes.heat}: {label}</span>
      {[1, 2, 3].map((i) => (
        <span key={i} className={`heat__m ${i <= level ? 'is-on' : ''}`} aria-hidden="true" />
      ))}
    </span>
  );
}
