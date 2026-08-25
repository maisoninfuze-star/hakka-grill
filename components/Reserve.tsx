import type { Locale } from '@/lib/menu-data';
import { COPY } from '@/lib/copy';
import { SITE } from '@/lib/site';
import Img from './Img';
import Reveal from './Reveal';

/**
 * The reservation moment, as a contained panel rather than a full-screen image.
 *
 * The business has no booking system, so this does not pretend to have one:
 * the primary action is a real phone call to a real number. Wire a provider in
 * here the day they choose one — the shape will not need to change.
 */
export default function Reserve({ locale }: { locale: Locale }) {
  const t = COPY[locale];
  return (
    <section className="rsv section" id="reserve" aria-labelledby="rsv-h">
      <div className="shell">
        <div className="rsv__panel">
          <div className="rsv__media">
            <Img slug="detail" fill sizes="(max-width: 1100px) 100vw, 90rem" position="center 38%"
              alt={locale === 'en'
                ? 'A candle and table number on a marble table, the dining room glowing behind'
                : 'Une bougie et un numéro de table sur le marbre, la salle illuminée derrière'} />
            <div className="rsv__grade" aria-hidden="true" />
          </div>

          <div className="rsv__in">
            <Reveal><p className="eyebrow">{t.reserve.eyebrow}</p></Reveal>
            <Reveal as="h2" id="rsv-h" kind="lines" className="rsv__h display display--tight">
              <span className="mask"><span data-line>{t.reserve.title1}</span></span>
              <span className="mask"><span data-line className="rsv__accent">{t.reserve.title2}</span></span>
            </Reveal>
            <Reveal delay={0.1}><p className="rsv__p lede">{t.reserve.body}</p></Reveal>
            <Reveal delay={0.16} className="rsv__ctas">
              <a href={`tel:${SITE.phone}`} className="btn btn--ember btn--lg">
                {t.reserve.cta} <span className="num rsv__tel">{SITE.phoneDisplay}</span>
              </a>
              <a href={SITE.orderUrl} className="btn btn--outline btn--lg" target="_blank" rel="noopener noreferrer">
                {t.reserve.secondary}
              </a>
            </Reveal>
            <Reveal delay={0.22}><p className="rsv__note">{t.reserve.note}</p></Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
