import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { COPY, isLocale, LOCALES } from '@/lib/copy';
import PageHead from '@/components/PageHead';
import Gallery from '@/components/Gallery';
import Reserve from '@/components/Reserve';

export function generateStaticParams() { return LOCALES.map((locale) => ({ locale })); }

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const en = locale === 'en';
  return {
    title: en ? 'The Experience' : 'L’expérience',
    description: en
      ? 'Inside Hakka Grill: chandeliers, marble tables and a window onto Saint-Laurent. Photographed at the restaurant.'
      : 'À l’intérieur de Hakka Grill : lustres, tables de marbre et vitrine sur Saint-Laurent. Photographié au restaurant.',
    alternates: { canonical: `/${locale}/experience`, languages: { 'en-CA': '/en/experience', 'fr-CA': '/fr/experience' } },
  };
}

export default async function ExperiencePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = COPY[locale];
  return (
    <>
      <PageHead eyebrow={t.experience.eyebrow} title={`${t.experience.title1} ${t.experience.title2}`} lede={t.experience.body} slug="room" locale={locale} />
      <Gallery locale={locale} />
      <Reserve locale={locale} />
    </>
  );
}
