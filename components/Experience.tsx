import Link from 'next/link';
import type { Locale } from '@/lib/menu-data';
import { COPY } from '@/lib/copy';
import Img from './Img';
import Reveal from './Reveal';
import Parallax from './Parallax';

export default function Experience({ locale }: { locale: Locale }) {
  const t = COPY[locale];
  return (
    <section className="exp section" id="experience" aria-labelledby="exp-h">
      <div className="shell">
        <div className="exp__top">
          <Reveal>
            <p className="eyebrow">{t.experience.eyebrow}</p>
            <h2 id="exp-h" className="display exp__h">{t.experience.title1}<br />{t.experience.title2}</h2>
          </Reveal>
          <Reveal delay={0.08} className="exp__side">
            <p className="lede">{t.experience.body}</p>
            <Link href={`/${locale}/experience`} className="link">{t.experience.cta}</Link>
          </Reveal>
        </div>
      </div>

      <Reveal kind="mask" className="exp__wide">
        <Parallax amount={40}>
          <Img slug="roomwide" fill sizes="(max-width: 1100px) 100vw, 90rem"
            alt={locale === 'en'
              ? 'Long tables set under a row of crystal chandeliers at Hakka Grill, gold-leaf panel and teal curtains behind'
              : 'De longues tables dressées sous une rangée de lustres en cristal chez Hakka Grill, panneau à la feuille d’or et rideaux sarcelle derrière'} />
        </Parallax>
        <span className="exp__grade" aria-hidden="true" />
      </Reveal>
    </section>
  );
}
