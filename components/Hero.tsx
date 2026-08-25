'use client';

import { useEffect, useRef } from 'react';
import type { Locale } from '@/lib/menu-data';
import { COPY } from '@/lib/copy';
import { SITE, LOCALITY } from '@/lib/site';
import { initGsap, prefersReducedMotion, whenAnimatable } from '@/lib/motion';
import Img from './Img';
import Magnetic from './Magnetic';

/**
 * The cinematic entrance. One GSAP timeline drives the whole thing, plus one
 * ScrollTrigger for the parallax — no competing per-element animations.
 */
export default function Hero({ locale }: { locale: Locale }) {
  const t = COPY[locale];
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;

    if (prefersReducedMotion()) {
      el.querySelectorAll<HTMLElement>('[data-h]').forEach((n) => { n.style.opacity = '1'; n.style.transform = 'none'; });
      el.querySelectorAll<HTMLElement>('[data-hline] > span').forEach((n) => { n.style.transform = 'none'; });
      return;
    }

    return whenAnimatable(() => {
      const gsap = initGsap();
      const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'expo.out' } });

      // 0.0 dark frame -> 0.2 image emerges -> 0.5 mark -> 0.8 headline -> 1.2 lede -> 1.5 CTAs
      // Opacity + scale only. Animating `filter` on the element that also scales
      // forces a rasterize-then-upscale and softens the photograph.
      tl.fromTo('[data-hmedia]', { opacity: 0 }, { opacity: 1, duration: 1.6, ease: 'power2.out' }, 0.2)
        .fromTo('[data-hmedia] img', { scale: 1.12 }, { scale: 1, duration: 2.1, ease: 'power2.out' }, 0.2)
        .fromTo('[data-hmark]', { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.8 }, 0.5)
        .fromTo('[data-hline] > span', { yPercent: 112 }, { yPercent: 0, duration: 1.25, stagger: 0.11 }, 0.8)
        .fromTo('[data-hlede]', { opacity: 0, y: 18 }, { opacity: 1, y: 0, duration: 1 }, 1.2)
        .fromTo('[data-hcta]', { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.9, stagger: 0.09 }, 1.5)
        .fromTo('[data-hmeta]', { opacity: 0 }, { opacity: 1, duration: 0.9 }, 1.6);

      // Scroll: image drifts and scales, headline separates. Transform-only.
      gsap.timeline({
        scrollTrigger: { trigger: el, start: 'top top', end: 'bottom top', scrub: 0.6 },
      })
        .to('[data-hmedia] img', { scale: 1.16, yPercent: 8, ease: 'none' }, 0)
        .to('[data-hcopy]', { yPercent: -22, opacity: 0.25, ease: 'none' }, 0)
        .to('[data-hveil]', { opacity: 1, ease: 'none' }, 0);
      }, el);
      return () => ctx.revert();
    });
  }, []);

  const lines = [t.hero.line1, t.hero.line2, t.hero.line3];

  return (
    <section className="hero" ref={root}>
      <div className="hero__media" data-hmedia>
        <Img
          fill
          slug="hero"
          sizes="100vw"
          priority
          // Biased left: the frame crops hardest on narrow viewports, and the
          // room's dark end is on the left, which is where the headline sits.
          position="30% center"
          alt={locale === 'en'
            ? 'The Hakka Grill dining room at night — crystal chandeliers over marble tables, teal curtains and gold-leaf panels along the wall'
            : 'La salle de Hakka Grill le soir — lustres en cristal au-dessus des tables de marbre, rideaux sarcelle et panneaux à la feuille d’or'}
          className="hero__img"
        />
        <div className="hero__grade" aria-hidden="true" />
        <div className="hero__veil" data-hveil aria-hidden="true" />
      </div>

      <div className="shell hero__in">
        <div className="hero__copy" data-hcopy>
          <p className="hero__mark eyebrow" data-hmark>
            {locale === 'en' ? 'Halal Chinese & BBQ · Montreal' : 'Chinois halal & BBQ · Montréal'}
          </p>

          <h1 className="hero__h display display--tight">
            {lines.map((l, i) => (
              <span className="hero__line" data-hline key={i}><span>{l}</span></span>
            ))}
          </h1>

          <p className="hero__lede lede" data-hlede>{t.hero.lede}</p>

          <div className="hero__ctas">
            <span data-hcta>
              <Magnetic>
                <a href={SITE.orderUrl} className="btn btn--ember btn--lg" target="_blank" rel="noopener noreferrer">
                  {t.hero.order}
                </a>
              </Magnetic>
            </span>
            <span data-hcta>
              <a href={`tel:${SITE.phone}`} className="btn btn--outline btn--lg">{t.hero.reserve}</a>
            </span>
          </div>
        </div>

        <div className="hero__meta" data-hmeta>
          <a className="hero__addr" href={SITE.mapsUrl} target="_blank" rel="noopener noreferrer">
            <span>{SITE.address.street}</span>
            <span>{LOCALITY[locale]}</span>
          </a>
          <span className="hero__scroll" aria-hidden="true">
            {t.hero.scroll}<i />
          </span>
        </div>
      </div>
    </section>
  );
}
