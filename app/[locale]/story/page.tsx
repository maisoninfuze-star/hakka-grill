import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { COPY, isLocale, LOCALES } from '@/lib/copy';
import PageHead from '@/components/PageHead';
import Reveal from '@/components/Reveal';
import Halal from '@/components/Halal';
import Img from '@/components/Img';

export function generateStaticParams() { return LOCALES.map((locale) => ({ locale })); }

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const en = locale === 'en';
  return {
    title: en ? 'Our Story' : 'Notre histoire',
    description: en
      ? 'How Hakka Grill went from a family kitchen to a halal Hakka Chinese dining room on Saint-Laurent Boulevard in Montreal.'
      : 'Comment Hakka Grill est passé d’une cuisine familiale à une salle chinoise hakka halal sur le boulevard Saint-Laurent à Montréal.',
    alternates: { canonical: `/${locale}/story`, languages: { 'en-CA': '/en/story', 'fr-CA': '/fr/story' } },
  };
}

export default async function StoryPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = COPY[locale];

  return (
    <>
      <PageHead eyebrow={t.story.eyebrow} title={`${t.story.title1} ${t.story.title2}`} slug="table" locale={locale} position="center 40%" />

      <div className="shell spg">
        <div className="spg__body">
          {t.story.body.map((p, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <p className={i === 0 ? 'spg__lead' : 'spg__p'}>{p}</p>
            </Reveal>
          ))}
        </div>

        <Reveal kind="mask" className="spg__fig">
          <Img slug="room" sizes="(max-width: 900px) 92vw, 76vw"
            alt={locale === 'en'
              ? 'The Hakka Grill dining room, chandeliers lit over marble tables'
              : 'La salle de Hakka Grill, lustres allumés au-dessus des tables de marbre'} />
          <figcaption className="spg__cap">
            {locale === 'en' ? 'The room on Saint-Laurent.' : 'La salle sur Saint-Laurent.'}
          </figcaption>
        </Reveal>
      </div>

      <Halal locale={locale} />
    </>
  );
}
