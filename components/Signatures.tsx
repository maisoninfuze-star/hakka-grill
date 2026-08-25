'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import type { Locale } from '@/lib/menu-data';
import { COPY } from '@/lib/copy';
import { FEATURED } from '@/lib/featured';
import { initGsap, prefersReducedMotion, whenAnimatable } from '@/lib/motion';
import Img from './Img';
import Heat from './Heat';
import Price from './Price';
import Reveal from './Reveal';

/**
 * Desktop: the dish list is the control surface — hovering or focusing a name
 * wipes a new photograph in behind it. Mobile: the same six dishes become a
 * snap-scrolling rail, which is the interaction a thumb actually wants.
 */
export default function Signatures({ locale }: { locale: Locale }) {
  const t = COPY[locale];
  const [active, setActive] = useState(0);
  const stage = useRef<HTMLDivElement>(null);
  const prev = useRef(0);

  useEffect(() => {
    const el = stage.current;
    if (!el || prefersReducedMotion()) { prev.current = active; return; }
    if (prev.current === active) return;

    return whenAnimatable(() => {
      const gsap = initGsap();
      const layers = el.querySelectorAll<HTMLElement>('[data-layer]');
    const incoming = layers[active];
    if (!incoming) return;

    const goingDown = active > prev.current;
    prev.current = active;

    const ctx = gsap.context(() => {
      gsap.set(layers, { zIndex: 1 });
      gsap.set(incoming, { zIndex: 2, opacity: 1 });
      gsap.fromTo(incoming,
        { clipPath: goingDown ? 'inset(100% 0 0 0)' : 'inset(0 0 100% 0)' },
        { clipPath: 'inset(0% 0 0% 0)', duration: 0.85, ease: 'expo.out' });
      gsap.fromTo(incoming.querySelector('img'),
        { scale: 1.12 }, { scale: 1, duration: 1.2, ease: 'expo.out' });
      }, el);
      return () => ctx.revert();
    });
  }, [active]);

  return (
    <section className="sig section" id="signatures" aria-labelledby="sig-h">
      <div className="shell">
        <Reveal className="sig__head">
          <p className="eyebrow">{t.dishes.eyebrow}</p>
          <h2 id="sig-h" className="display sig__h">
            {t.dishes.title1}<br />{t.dishes.title2}
          </h2>
          <p className="lede">{t.dishes.lede}</p>
        </Reveal>
      </div>

      {/* ---- desktop: list + masked stage ---- */}
      <div className="shell sig__body">
        <ol className="sig__list" role="list">
          {FEATURED.map((f, i) => (
            <li key={f.dish.slug}>
              <button
                type="button"
                className={`sig__item ${i === active ? 'is-active' : ''}`}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onClick={() => setActive(i)}
                aria-describedby={`sig-d-${i}`}
              >
                <span className="sig__n num">{String(i + 1).padStart(2, '0')}</span>
                <span className="sig__name display">{f.dish.name[locale]}</span>
                <span className="sig__meta">
                  <Heat level={f.dish.heat} locale={locale} />
                  <Price value={f.dish.price} locale={locale} />
                </span>
              </button>
              <div className="sig__descwrap">
                <p id={`sig-d-${i}`} className="sig__desc">{f.dish.desc[locale]}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="sig__stage" ref={stage} aria-hidden="true">
          {FEATURED.map((f, i) => (
            /* Visibility is driven by state, not by the animation. GSAP only
               adds the wipe on top — with reduced motion, or before the script
               runs, the correct dish is still the one on screen. */
            <div
              key={f.dish.slug}
              className="sig__layer"
              data-layer
              style={{ opacity: i === active ? 1 : 0, zIndex: i === active ? 2 : 1 }}
            >
              <Img slug={f.img} fill sizes="(max-width: 1024px) 90vw, 44vw" alt="" position={f.position} className="sig__img" />
            </div>
          ))}
          <div className="sig__stagegrade" />
        </div>
      </div>

      {/* ---- mobile: swipeable rail ---- */}
      <ul className="sig__rail" role="list">
        {FEATURED.map((f) => (
          <li key={f.dish.slug} className="sig__card">
            <div className="sig__cardimg">
              <Img slug={f.img} fill sizes="78vw" alt={f.alt[locale]} position={f.position} />
            </div>
            <div className="sig__cardbody">
              <h3 className="sig__cardname display">{f.dish.name[locale]}</h3>
              <p className="sig__carddesc">{f.dish.desc[locale]}</p>
              <p className="sig__cardfoot">
                <Price value={f.dish.price} locale={locale} />
                <Heat level={f.dish.heat} locale={locale} />
              </p>
            </div>
          </li>
        ))}
      </ul>

      <div className="shell">
        <Reveal className="sig__cta">
          <Link href={`/${locale}/menu`} className="link">{t.dishes.cta}</Link>
        </Reveal>
      </div>
    </section>
  );
}
