import type { Metadata, Viewport } from 'next';
import { notFound } from 'next/navigation';
import { Fraunces, Inter } from 'next/font/google';
import '../globals.css';
import '../site.css';
import { COPY, LOCALES, isLocale } from '@/lib/copy';
import { SITE, openingHoursSpecification } from '@/lib/site';
import { MENU } from '@/lib/menu-data';
import SmoothScroll from '@/components/SmoothScroll';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileOrderBar from '@/components/MobileOrderBar';
import Intro from '@/components/Intro';

const fraunces = Fraunces({
  subsets: ['latin'],
  display: 'swap',
  // Variable: wght comes for free. Only `opsz` is requested — the design pins
  // SOFT and WONK at 0, so shipping those axes would be paying for range we
  // never move.
  axes: ['opsz'],
  variable: '--f-display',
});

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--f-sans',
});

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export const icons = {
  icon: [{ url: '/img/icon.png', type: 'image/png', sizes: '180x180' }],
  apple: '/img/icon.png',
};

export const viewport: Viewport = {
  themeColor: '#0A0C0F',
  colorScheme: 'dark',
};

type Params = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};

  const en = locale === 'en';
  const title = en
    ? 'Hakka Grill — Halal Chinese Restaurant on Saint-Laurent, Montreal'
    : 'Hakka Grill — Restaurant chinois halal sur Saint-Laurent, Montréal';
  const description = en
    ? 'Authentic Hakka Chinese cooking, 100% halal, on Saint-Laurent Boulevard in Montreal. Dynamite shrimp, Korean chicken, General Tao, Mongolian beef. Order online or reserve a table.'
    : 'Cuisine chinoise hakka authentique, 100 % halal, sur le boulevard Saint-Laurent à Montréal. Crevettes dynamite, poulet coréen, Général Tao, bœuf mongol. Commandez en ligne ou réservez.';

  return {
    metadataBase: new URL(SITE.url),
    title: { default: title, template: `%s — ${SITE.name}` },
    description,
    alternates: {
      canonical: `/${locale}`,
      languages: { 'en-CA': '/en', 'fr-CA': '/fr', 'x-default': '/en' },
    },
    openGraph: {
      type: 'website',
      siteName: SITE.name,
      title,
      description,
      url: `${SITE.url}/${locale}`,
      locale: en ? 'en_CA' : 'fr_CA',
      alternateLocale: en ? 'fr_CA' : 'en_CA',
      images: [{ url: '/img/hero-1600.webp', width: 1600, height: 764, alt: en ? 'The Hakka Grill dining room, chandeliers lit over marble tables' : 'La salle de Hakka Grill, lustres allumés au-dessus des tables de marbre' }],
    },
    twitter: { card: 'summary_large_image', title, description, images: ['/img/hero-1600.webp'] },
    robots: { index: true, follow: true },
  };
}

export default async function LocaleLayout({ children, params }: Params & { children: React.ReactNode }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = COPY[locale];

  // Restaurant structured data, built from verified facts + the real menu.
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    '@id': `${SITE.url}/#restaurant`,
    name: SITE.name,
    alternateName: SITE.legalName,
    url: `${SITE.url}/${locale}`,
    telephone: SITE.phone,
    image: [`${SITE.url}/img/hero-1600.webp`, `${SITE.url}/img/room-1400.webp`],
    servesCuisine: ['Chinese', 'Hakka', 'Halal', 'Asian'],
    priceRange: '$$',
    currenciesAccepted: 'CAD',
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.locality,
      addressRegion: SITE.address.region,
      postalCode: SITE.address.postalCode,
      addressCountry: SITE.address.country,
    },
    geo: { '@type': 'GeoCoordinates', latitude: SITE.address.lat, longitude: SITE.address.lng },
    openingHoursSpecification,
    acceptsReservations: 'https://hakkagrill.ca/' + locale + '#reserve',
    potentialAction: {
      '@type': 'OrderAction',
      target: { '@type': 'EntryPoint', urlTemplate: SITE.orderUrl, inLanguage: t.htmlLang },
    },
    hasMenu: {
      '@type': 'Menu',
      url: `${SITE.url}/${locale}/menu`,
      inLanguage: t.htmlLang,
      hasMenuSection: MENU.map((c) => ({
        '@type': 'MenuSection',
        name: c.name[locale],
        hasMenuItem: c.items.map((d) => ({
          '@type': 'MenuItem',
          name: d.name[locale],
          ...(d.desc[locale] ? { description: d.desc[locale] } : {}),
          offers: { '@type': 'Offer', price: d.price.toFixed(2), priceCurrency: 'CAD' },
        })),
      })),
    },
    sameAs: [SITE.instagram],
  };

  return (
    <html lang={t.htmlLang} className={`${fraunces.variable} ${inter.variable} no-js`} suppressHydrationWarning>
      <body>
        <script
          type="application/ld+json"
          // Structured data is generated from our own typed constants, not user input.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Decide before first paint whether the intro runs, so returning
            visitors never see a flash of the overlay. Self-authored, no input.

            Deliberately NOT gated on document.visibilityState. The intro is CSS
            keyframed with `fill-mode: forwards` and has a JS failsafe that
            clears it, so a throttled background tab can never strand anyone —
            and gating on visibility meant any embedded or backgrounded view
            reported itself hidden and silently skipped the intro forever.

            `?intro` on the URL forces a replay, for reviewing it on demand. */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{var d=document.documentElement;" +
              "if(location.search.indexOf('intro')>-1){sessionStorage.removeItem('hg:intro')}" +
              "else if(sessionStorage.getItem('hg:intro')||" +
              "matchMedia('(prefers-reduced-motion: reduce)').matches)" +
              "d.classList.add('intro-done')}" +
              "catch(e){}",
          }}
        />
        <Intro />
        <a className="skip" href="#main">{t.nav.skip}</a>
        <SmoothScroll />
        <Header locale={locale} />
        <main id="main">{children}</main>
        <Footer locale={locale} />
        <MobileOrderBar locale={locale} />
      </body>
    </html>
  );
}
