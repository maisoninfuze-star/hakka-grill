import { notFound } from 'next/navigation';
import { isLocale } from '@/lib/copy';
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import Signatures from '@/components/Signatures';
import CraftMoment from '@/components/CraftMoment';
import Story from '@/components/Story';
import MenuDiscovery from '@/components/MenuDiscovery';
import Halal from '@/components/Halal';
import Experience from '@/components/Experience';
import Reserve from '@/components/Reserve';
import Visit from '@/components/Visit';

/**
 * Homepage order follows the conversion journey: see food -> signature dishes ->
 * feel the cooking -> understand Hakka -> explore the menu -> see the room ->
 * order / reserve / visit. Big CTAs appear where desire has been built, not
 * after every section.
 *
 * Only the hero runs full-bleed. Every other photograph sits inside a contained
 * block so the page reads as one calm column rather than a series of
 * full-screen images competing with each other.
 */
export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <>
      <Hero locale={locale} />
      <Marquee locale={locale} />
      <Signatures locale={locale} />
      <CraftMoment locale={locale} />
      <Story locale={locale} />
      <MenuDiscovery locale={locale} />
      <Halal locale={locale} />
      <Experience locale={locale} />
      <Reserve locale={locale} />
      <Visit locale={locale} />
    </>
  );
}
