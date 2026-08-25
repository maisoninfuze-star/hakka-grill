'use client';

import { useEffect, useRef, type ReactNode } from 'react';
import { initGsap, prefersReducedMotion, isTouch } from '@/lib/motion';

/** Transform-only parallax. Off for reduced motion and touch. */
export default function Parallax({ children, amount = 60, className }: { children: ReactNode; amount?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion() || isTouch()) return;
    const gsap = initGsap();
    const ctx = gsap.context(() => {
      const shift = amount / 12; // percent of its own height, each way
      // Oversize the child by a little more than it will travel, or the frame
      // shows a bare strip at whichever edge the image has moved away from.
      const cover = 1 + (shift * 2) / 100 + 0.02;
      gsap.set(el.firstElementChild, { scale: cover, transformOrigin: 'center center' });
      gsap.fromTo(el.firstElementChild,
        { yPercent: -shift },
        { yPercent: shift, ease: 'none',
          scrollTrigger: { trigger: el, start: 'top bottom', end: 'bottom top', scrub: 0.5 } });
    }, el);
    return () => ctx.revert();
  }, [amount]);

  return <div ref={ref} className={`plx ${className ?? ''}`}>{children}</div>;
}
