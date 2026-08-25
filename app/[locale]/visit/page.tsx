import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { COPY, isLocale, LOCALES } from '@/lib/copy';
import PageHead from '@/components/PageHead';
import Visit from '@/components/Visit';
import Reserve from '@/components/Reserve';

export function generateStaticParams() { return LOCALES.map((locale) => ({ locale })); }

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const en = locale === 'en';
  return {
    title: en ? 'Visit — 4274 St Laurent Blvd, Montreal' : 'Nous trouver — 4274 boul. Saint-Laurent, Montréal',
    description: en
      ? 'Hakka Grill is at 4274 St Laurent Blvd, Montreal H2W 1Z3. Hours, directions and phone. Closed Tuesdays.'
      : 'Hakka Grill est au 4274 boul. Saint-Laurent, Montréal H2W 1Z3. Heures, itinéraire et téléphone. Fermé le mardi.',
    alternates: { canonical: `/${locale}/visit`, languages: { 'en-CA': '/en/visit', 'fr-CA': '/fr/visit' } },
  };
}

export default async function VisitPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = COPY[locale];
  return (
    <>
      <PageHead eyebrow={t.visit.eyebrow} title={`${t.visit.title1} ${t.visit.title2}`} slug="detail" locale={locale} position="center 35%" />
      <Visit locale={locale} />
      <Reserve locale={locale} />
    </>
  );
}
