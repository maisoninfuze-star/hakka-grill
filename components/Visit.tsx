import type { Locale } from '@/lib/menu-data';
import { COPY } from '@/lib/copy';
import { SITE, LOCALITY } from '@/lib/site';
import Hours from './Hours';
import Reveal from './Reveal';
import MapDark from './MapDark';

export default function Visit({ locale }: { locale: Locale }) {
  const t = COPY[locale];
  return (
    <section className="vis section" id="visit" aria-labelledby="vis-h">
      <div className="shell">
        <Reveal className="vis__head">
          <p className="eyebrow">{t.visit.eyebrow}</p>
          <h2 id="vis-h" className="display vis__h">{t.visit.title1}<br />{t.visit.title2}</h2>
        </Reveal>

        <div className="vis__grid">
          <Reveal className="vis__col">
            <h3 className="vis__lbl">{t.visit.address}</h3>
            <address className="vis__addr">
              {SITE.address.street}<br />
              {LOCALITY[locale]}, {SITE.address.region} {SITE.address.postalCode}
            </address>
            <div className="vis__acts">
              <a href={SITE.directionsUrl} className="btn btn--outline" target="_blank" rel="noopener noreferrer">{t.visit.directions}</a>
              <a href={`tel:${SITE.phone}`} className="btn btn--ghost num">{SITE.phoneDisplay}</a>
            </div>
          </Reveal>

          <Reveal delay={0.08} className="vis__col">
            <h3 className="vis__lbl">{t.visit.hours}</h3>
            <Hours locale={locale} />
          </Reveal>
        </div>
      </div>

      <Reveal kind="mask" className="vis__map">
        <MapDark locale={locale} />
      </Reveal>
    </section>
  );
}
