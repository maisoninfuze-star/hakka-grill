'use client';

import { useEffect, useRef } from 'react';
import type { Locale } from '@/lib/menu-data';
import { COPY } from '@/lib/copy';
import { initGsap, prefersReducedMotion, whenAnimatable } from '@/lib/motion';

/**
 * A slow kinetic line, nudged by scroll velocity rather than looping forever at
 * a fixed speed. It reads as a transition, not a ticker.
 */
export default function Marquee({ locale }: { locale: Locale }) {
  const words = COPY[locale].marquee;
  const track = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = track.current;
    if (!el || prefersReducedMotion()) return;

    return whenAnimatable(() => {
      const gsap = initGsap();
      const ctx = gsap.context(() => {
      // Two identical halves; move one width and wrap.
      const tween = gsap.to(el, {
        xPercent: -50, duration: 34, ease: 'none', repeat: -1,
      });
      gsap.to(tween, {
        timeScale: 1,
        scrollTrigger: {
          trigger: el, start: 'top bottom', end: 'bottom top',
          onUpdate: (self) => {
            // Subtle: scrolling speeds the line up, direction flips it.
            const v = gsap.utils.clamp(-2.4, 2.4, self.getVelocity() / 400);
            tween.timeScale(v === 0 ? 1 : (Math.abs(v) < 1 ? 1 : v));
          },
        },
      });
      }, el);
      return () => ctx.revert();
    });
  }, []);

  const run = [...words, ...words, ...words, ...words];

  return (
    <div className="mq" aria-hidden="true">
      <div className="mq__track" ref={track}>
        {[0, 1].map((half) => (
          <div className="mq__half" key={half}>
            {run.map((w, i) => (
              <span className="mq__w" key={`${half}-${i}`}>
                {w}<i className="mq__sep" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
