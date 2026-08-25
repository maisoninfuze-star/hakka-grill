import Link from 'next/link';
import type { Locale } from '@/lib/menu-data';
import { COPY } from '@/lib/copy';
import Img from './Img';
import Reveal from './Reveal';
import Parallax from './Parallax';

/**
 * The founder story.
 *
 * The brief names Chef Zohaib Azhar as founder; that could not be corroborated
 * in any public source, so the copy tells the family-kitchen origin the business
 * itself publishes and does not print an unverified person's name. Confirm with
 * the client and the name drops straight in (see lib/site.ts NEEDS_VERIFICATION).
 */
export default function Story({ locale }: { locale: Locale }) {
  const t = COPY[locale];
  return (
    <section className="story section" id="story" aria-labelledby="story-h">
      <div className="shell story__grid">
        <div className="story__media">
          <Parallax amount={54}>
            <Img
              slug="table" sizes="(max-width: 900px) 88vw, 40vw"
              alt={locale === 'en'
                ? 'A long marble table set for service at Hakka Grill, chandeliers lit above it'
                : 'Une longue table de marbre dressée chez Hakka Grill, sous les lustres allumés'}
              className="story__img"
            />
          </Parallax>
          <span className="story__tag" aria-hidden="true">Saint-Laurent</span>
        </div>

        <div className="story__copy">
          <Reveal><p className="eyebrow">{t.story.eyebrow}</p></Reveal>
          <Reveal as="h2" id="story-h" kind="lines" className="story__h display">
            <span className="mask"><span data-line>{t.story.title1}</span></span>
            <span className="mask"><span data-line className="story__accent">{t.story.title2}</span></span>
          </Reveal>
          {t.story.body.map((p, i) => (
            <Reveal key={i} delay={0.06 * i}><p className="story__p">{p}</p></Reveal>
          ))}
          <Reveal delay={0.2}>
            <Link href={`/${locale}/story`} className="link">{t.story.cta}</Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
