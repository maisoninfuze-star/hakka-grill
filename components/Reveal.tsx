'use client';

import { useEffect, useRef, type ElementType, type ReactNode } from 'react';
import { initGsap, ScrollTrigger, prefersReducedMotion, REVEAL, whenAnimatable } from '@/lib/motion';

type Props = {
  children: ReactNode;
  as?: ElementType;
  /** 'up' fades up, 'mask' wipes a block in, 'lines' staggers direct children. */
  kind?: 'up' | 'mask' | 'lines';
  delay?: number;
  className?: string;
  id?: string;
};

/**
 * The one reveal primitive. Everything on the site enters through this so the
 * whole page shares a single timing language instead of ad-hoc animations.
 */
export default function Reveal({ children, as: Tag = 'div', kind = 'up', delay = 0, className, id }: Props) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Reduced motion: show it, animate nothing.
    if (prefersReducedMotion()) {
      el.style.opacity = '1';
      el.style.transform = 'none';
      el.style.clipPath = 'none';
      return;
    }

    return whenAnimatable(() => {
      const gsap = initGsap();
      const ctx = gsap.context(() => {
      const common = { scrollTrigger: { trigger: el, start: REVEAL.start, once: true }, delay };

      if (kind === 'lines') {
        // Animate the inner spans, so the `.mask` wrappers can actually clip
        // them. Moving the wrapper instead would slide the mask along with its
        // contents and reveal nothing.
        const marked = el.querySelectorAll<HTMLElement>('[data-line]');
        const kids = marked.length ? Array.from(marked) : (Array.from(el.children) as HTMLElement[]);
        gsap.set(kids, { yPercent: 108 });
        gsap.to(kids, { yPercent: 0, duration: 1.05, stagger: REVEAL.stagger, ease: 'expo.out', ...common });
      } else if (kind === 'mask') {
        gsap.set(el, { clipPath: 'inset(0 0 100% 0)' });
        gsap.to(el, { clipPath: 'inset(0 0 0% 0)', duration: 1.15, ease: 'expo.out', ...common });
      } else {
        gsap.set(el, { opacity: 0, y: REVEAL.y });
        gsap.to(el, { opacity: 1, y: 0, duration: REVEAL.duration, ...common });
      }
      }, el);

      // Safety net: if a trigger never fires (odd layout, print, bfcache), reveal anyway.
      const failsafe = window.setTimeout(() => {
        if (getComputedStyle(el).opacity === '0') {
          el.style.opacity = '1';
          el.style.transform = 'none';
          el.style.clipPath = 'none';
        }
      }, 4000);

      return () => { ctx.revert(); window.clearTimeout(failsafe); ScrollTrigger.refresh(); };
    });
  }, [kind, delay]);

  return (
    <Tag ref={ref} id={id} className={className} data-reveal={kind}>
      {children}
    </Tag>
  );
}
