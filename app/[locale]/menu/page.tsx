import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { COPY, isLocale, LOCALES } from '@/lib/copy';
import { MENU } from '@/lib/menu-data';
import { SITE } from '@/lib/site';
import Price from '@/components/Price';
import Heat from '@/components/Heat';
import DishImg from '@/components/DishImg';
import Reveal from '@/components/Reveal';
import PageHead from '@/components/PageHead';

export function generateStaticParams() { return LOCALES.map((locale) => ({ locale })); }

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const en = locale === 'en';
  return {
    title: en ? 'Menu — halal Chinese in Montreal' : 'Menu — cuisine chinoise halal à Montréal',
    description: en
      ? 'The full Hakka Grill menu: appetizers, Hakka mains, rice, chow mein, Asian and classic burgers, mocktails and desserts. All halal. Prices in CAD.'
      : 'Le menu complet de Hakka Grill : entrées, plats hakka, riz, chow mein, burgers asiatiques et classiques, mocktails et desserts. Tout halal. Prix en CAD.',
    alternates: { canonical: `/${locale}/menu`, languages: { 'en-CA': '/en/menu', 'fr-CA': '/fr/menu' } },
  };
}

export default async function MenuPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = COPY[locale];

  return (
    <>
      <PageHead eyebrow={t.menu.eyebrow} title={t.menu.pageTitle} lede={t.menu.pageLede} slug="beef" locale={locale} />

      <div className="shell mpg">
        <nav className="mpg__jump" aria-label={t.menu.jump}>
          <span className="mpg__jumplbl">{t.menu.jump}</span>
          <ul role="list">
            {MENU.map((c) => (
              <li key={c.slug}><a href={`#c-${c.slug}`} className="mpg__jumpl">{c.name[locale]}</a></li>
            ))}
          </ul>
        </nav>

        {MENU.map((c, ci) => (
          <section key={c.slug} id={`c-${c.slug}`} className="mpg__sec" aria-labelledby={`h-${c.slug}`}>
            <Reveal className="mpg__sechead">
              <h2 id={`h-${c.slug}`} className="display mpg__sech">{c.name[locale]}</h2>
              <span className="mpg__count num">{String(c.items.length).padStart(2, '0')}</span>
            </Reveal>
            <ul role="list" className="mpg__grid">
              {c.items.map((d, i) => (
                <li key={d.slug} className="dcard">
                  <div className="dcard__img">
                    <DishImg
                      dish={d.slug}
                      alt={`${d.name[locale]} — ${SITE.name}`}
                      sizes="(max-width: 620px) 92vw, (max-width: 1080px) 44vw, 30vw"
                      /* Only the first row of the first category is worth
                         fetching eagerly; the rest are far below the fold. */
                      priority={ci === 0 && i < 3}
                    />
                  </div>
                  <div className="dcard__body">
                    <h3 className="dcard__name">{d.name[locale]}<Heat level={d.heat} locale={locale} /></h3>
                    {d.desc[locale] && <p className="dcard__d">{d.desc[locale]}</p>}
                    <p className="dcard__foot"><Price value={d.price} locale={locale} /></p>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        ))}

        <p className="mpg__note">
          {t.menu.allergen} <a href={`tel:${SITE.phone}`} className="link num">{SITE.phoneDisplay}</a> {t.menu.before}
        </p>

        <div className="mpg__cta">
          <a href={SITE.orderUrl} className="btn btn--ember btn--lg" target="_blank" rel="noopener noreferrer">{t.menu.order}</a>
        </div>
      </div>
    </>
  );
}
