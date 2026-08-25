import Link from 'next/link';
import type { Locale } from '@/lib/menu-data';
import { COPY } from '@/lib/copy';
import { SITE, LOCALITY } from '@/lib/site';
import Hours from './Hours';

export default function Footer({ locale }: { locale: Locale }) {
  const t = COPY[locale];
  const year = 2026; // static build; avoids a hydration mismatch on New Year's Eve

  return (
    <footer className="ftr">
      <div className="shell">
        <div className="ftr__grid">
          <div className="ftr__nav">
            <ul role="list" className="ftr__col">
              <li><Link href={`/${locale}/menu`} className="ftr__l">{t.footer.menu}</Link></li>
              <li><Link href={`/${locale}/story`} className="ftr__l">{t.footer.story}</Link></li>
              <li><Link href={`/${locale}/experience`} className="ftr__l">{t.footer.experience}</Link></li>
              <li><Link href={`/${locale}/visit`} className="ftr__l">{t.footer.visit}</Link></li>
            </ul>
            <ul role="list" className="ftr__col">
              <li><a href={SITE.orderUrl} className="ftr__l" target="_blank" rel="noopener noreferrer">{t.footer.order}</a></li>
              <li><a href={`tel:${SITE.phone}`} className="ftr__l">{t.footer.reserve}</a></li>
              <li><a href={SITE.instagram} className="ftr__l" target="_blank" rel="noopener noreferrer">{t.footer.instagram}</a></li>
              <li><a href={SITE.directionsUrl} className="ftr__l" target="_blank" rel="noopener noreferrer">{t.footer.directions}</a></li>
            </ul>
          </div>

          <div className="ftr__info">
            <address className="ftr__addr">
              {SITE.address.street}<br />
              {LOCALITY[locale]}, {SITE.address.region} {SITE.address.postalCode}<br />
              <a href={`tel:${SITE.phone}`} className="ftr__tel num">{SITE.phoneDisplay}</a>
            </address>
            <Hours locale={locale} compact />
          </div>
        </div>
      </div>

      {/* Oversized wordmark, clipped to the viewport edge. */}
      <div className="ftr__big" aria-hidden="true">
        <span>Hakka</span><span>Grill</span>
      </div>

      <div className="shell">
        <div className="ftr__base">
          <p className="ftr__fine">© {year} {SITE.legalName}. {t.footer.rights}</p>
          <p className="ftr__fine">{t.footer.built}</p>
        </div>
      </div>
    </footer>
  );
}
