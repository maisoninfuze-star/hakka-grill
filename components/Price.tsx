import type { Locale } from '@/lib/menu-data';

/** Prices formatted for the locale: $19.99 / 19,99 $ */
export default function Price({ value, locale }: { value: number; locale: Locale }) {
  const s = new Intl.NumberFormat(locale === 'fr' ? 'fr-CA' : 'en-CA', {
    style: 'currency', currency: 'CAD', currencyDisplay: 'narrowSymbol',
  }).format(value);
  return <span className="price num">{s}</span>;
}
