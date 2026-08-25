'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import type { Locale } from '@/lib/menu-data';
import { COPY } from '@/lib/copy';
import { MENU } from '@/lib/menu-data';
import { SITE } from '@/lib/site';
import { initGsap, prefersReducedMotion, whenAnimatable } from '@/lib/motion';
import Heat from './Heat';
import DishImg from './DishImg';
import Price from './Price';
import Reveal from './Reveal';

/** Discovery, not a data dump: a category selector over a curated slice. */
const SHOWN = ['appetizers', 'main-course-single-serving', 'rice', 'chow-mein', 'asian-style-burgers', 'classic-burgers', 'mocktails', 'desserts'];
const PER_CATEGORY = 6;

export default function MenuDiscovery({ locale }: { locale: Locale }) {
  const t = COPY[locale];
  const cats = MENU.filter((c) => SHOWN.includes(c.slug));
  const [active, setActive] = useState(cats[0]?.slug ?? '');
  const listRef = useRef<HTMLUListElement>(null);

  const current = cats.find((c) => c.slug === active) ?? cats[0];
  const items = current.items.slice(0, PER_CATEGORY);

  // Re-run a short stagger whenever the category changes.
  useEffect(() => {
    const el = listRef.current;
    if (!el || prefersReducedMotion()) return;
    return whenAnimatable(() => {
      const gsap = initGsap();
      const ctx = gsap.context(() => {
      gsap.fromTo(el.children, { opacity: 0, y: 14 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.045, ease: 'power3.out', overwrite: true });
      }, el);
      return () => ctx.revert();
    });
  }, [active]);

  const from = Math.min(...current.items.map((i) => i.price));

  return (
    <section className="disc section" id="menu" aria-labelledby="disc-h">
      <div className="shell">
        <Reveal className="disc__head">
          <p className="eyebrow">{t.menu.eyebrow}</p>
          <h2 id="disc-h" className="display disc__h">{t.menu.title1}<br />{t.menu.title2}</h2>
          <p className="lede">{t.menu.lede}</p>
        </Reveal>

        <div className="disc__tabs" role="tablist" aria-label={t.menu.eyebrow}>
          {cats.map((c) => (
            <button
              key={c.slug}
              role="tab"
              type="button"
              id={`tab-${c.slug}`}
              aria-selected={c.slug === active}
              aria-controls="disc-panel"
              tabIndex={c.slug === active ? 0 : -1}
              className={`disc__tab ${c.slug === active ? 'is-on' : ''}`}
              onClick={() => setActive(c.slug)}
              onKeyDown={(e) => {
                const i = cats.findIndex((x) => x.slug === active);
                if (e.key === 'ArrowRight') { e.preventDefault(); const n = cats[(i + 1) % cats.length]; setActive(n.slug); document.getElementById(`tab-${n.slug}`)?.focus(); }
                if (e.key === 'ArrowLeft') { e.preventDefault(); const n = cats[(i - 1 + cats.length) % cats.length]; setActive(n.slug); document.getElementById(`tab-${n.slug}`)?.focus(); }
              }}
            >
              {c.name[locale]}
            </button>
          ))}
        </div>

        <div id="disc-panel" role="tabpanel" aria-labelledby={`tab-${current.slug}`}>
          <ul className="mpg__grid" role="list" ref={listRef}>
            {items.map((d) => (
              <li key={d.slug} className="dcard">
                <div className="dcard__img">
                  <DishImg dish={d.slug} alt={`${d.name[locale]} — ${SITE.name}`}
                    sizes="(max-width: 620px) 92vw, (max-width: 1080px) 44vw, 30vw" />
                </div>
                <div className="dcard__body">
                  <h3 className="dcard__name">{d.name[locale]}<Heat level={d.heat} locale={locale} /></h3>
                  {d.desc[locale] && <p className="dcard__d">{d.desc[locale]}</p>}
                  <p className="dcard__foot"><Price value={d.price} locale={locale} /></p>
                </div>
              </li>
            ))}
          </ul>

          <p className="disc__more num">
            {current.items.length > PER_CATEGORY && (
              <>+{current.items.length - PER_CATEGORY} · </>
            )}
            {t.menu.from} <Price value={from} locale={locale} />
          </p>
        </div>

        <div className="disc__cta">
          <Link href={`/${locale}/menu`} className="btn btn--outline">{t.menu.viewAll}</Link>
          <a href={SITE.orderUrl} className="btn btn--ember" target="_blank" rel="noopener noreferrer">{t.menu.order}</a>
        </div>
      </div>
    </section>
  );
}
