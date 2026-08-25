import type { Locale } from '@/lib/menu-data';
import { COPY } from '@/lib/copy';
import Reveal from './Reveal';

/**
 * The halal moment — an oversized typographic composition, not an icon card.
 * States only what the business itself states. No certifying body is named,
 * because none is published anywhere (see lib/site.ts NEEDS_VERIFICATION).
 */
export default function Halal({ locale }: { locale: Locale }) {
  const t = COPY[locale];
  return (
    <section className="halal section" aria-labelledby="halal-h">
      <div className="shell">
        <Reveal kind="lines" className="halal__type">
          <span className="mask"><span data-line className="halal__big display display--tight">{t.halal.big1}</span></span>
          <span className="mask"><span data-line className="halal__big halal__big--out display display--tight">{t.halal.big2}</span></span>
        </Reveal>

        <div className="halal__foot">
          <Reveal>
            <h2 id="halal-h" className="halal__h display">{t.halal.title}</h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="halal__p">{t.halal.body}</p>
            <p className="halal__note">{t.halal.note}</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
