'use client';

import { useEffect, useRef } from 'react';
import type { Locale } from '@/lib/menu-data';
import { COPY } from '@/lib/copy';
import { initGsap, prefersReducedMotion, isTouch, whenAnimatable } from '@/lib/motion';
import Img from './Img';

/**
 * The one big scroll-driven set piece.
 *
 * Deliberately layered photography driven by GSAP rather than a WebGL scene:
 * there is no 3D scan of a Hakka Grill dish, and dropping in a generic model of
 * someone else's food would be a lie told at 60fps. Real plate, real depth,
 * a fraction of the bytes.
 *
 * The "pin" is CSS `position: sticky`, not ScrollTrigger's pin. Sticky is laid
 * out by the browser, so it cannot desync from a scrub timeline, cannot inject
 * a pin-spacer sized from a stale measurement, and costs nothing on resize.
 * GSAP only scrubs transforms inside the already-stuck frame.
 */
export default function CraftMoment({ locale }: { locale: Locale }) {
  const t = COPY[locale];
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;

    const reveal = () => {
      el.querySelectorAll<HTMLElement>('[data-cw], [data-cbody]').forEach((n) => {
        n.style.opacity = '1'; n.style.transform = 'none';
      });
    };

    // No viewport (hidden tab, zero-sized frame) => never measure. Show and stop.
    if (prefersReducedMotion() || isTouch() || window.innerHeight === 0) { reveal(); return; }

    return whenAnimatable(() => {
      const gsap = initGsap();
      const ctx = gsap.context(() => {
      const scrub = { trigger: el, start: 'top top', end: 'bottom bottom', scrub: 0.7 };

      gsap.fromTo('[data-cplate]', { scale: 0.9, rotate: -7 }, { scale: 1.05, rotate: 6, ease: 'none', scrollTrigger: scrub });
      gsap.fromTo('[data-cglow]', { opacity: 0.18, scale: 0.85 }, { opacity: 0.5, scale: 1.15, ease: 'none', scrollTrigger: scrub });

      gsap.fromTo('[data-cw]', { opacity: 0, y: 38 }, {
        opacity: 1, y: 0, stagger: 0.16, duration: 0.7, ease: 'expo.out',
        scrollTrigger: { trigger: el, start: 'top 55%', once: true },
      });
      gsap.fromTo('[data-cbody]', { opacity: 0, y: 22 }, {
        opacity: 1, y: 0, duration: 0.8, ease: 'expo.out',
        scrollTrigger: { trigger: el, start: 'top 20%', once: true },
      });
      }, el);
      return () => ctx.revert();
    });
  }, []);

  return (
    <section className="craft" ref={root} aria-labelledby="craft-h">
      <div className="craft__stick">
        <div className="craft__glow" data-cglow aria-hidden="true" />

        <div className="shell craft__grid">
          <div className="craft__copy">
            <h2 id="craft-h" className="craft__words display display--tight">
              {t.craft.words.map((w, i) => (
                <span key={i} data-cw className={`craft__w craft__w--${i}`}>{w}</span>
              ))}
            </h2>
            <p className="craft__body" data-cbody>{t.craft.body}</p>
          </div>

          <div className="craft__plate" data-cplate>
            <Img slug="chili" fill sizes="(max-width: 900px) 62vw, 34vw"
              alt={locale === 'en'
                ? 'Chili chicken in a glossy red glaze, close up'
                : 'Poulet chili dans un glaçage rouge brillant, gros plan'} />
          </div>
        </div>
      </div>
    </section>
  );
}
