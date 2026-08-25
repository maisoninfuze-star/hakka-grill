'use client';

import { useEffect, useRef, cloneElement, type ReactElement } from 'react';
import { initGsap, prefersReducedMotion, isTouch } from '@/lib/motion';

/**
 * Very subtle magnetic pull. Desktop pointers only — on touch it renders the
 * child untouched, and it never moves far enough to break the hit target.
 */
export default function Magnetic({ children, strength = 0.22 }: { children: ReactElement; strength?: number }) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion() || isTouch()) return;

    const gsap = initGsap();
    const setX = gsap.quickTo(el, 'x', { duration: 0.45, ease: 'power3.out' });
    const setY = gsap.quickTo(el, 'y', { duration: 0.45, ease: 'power3.out' });

    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      const dx = e.clientX - (r.left + r.width / 2);
      const dy = e.clientY - (r.top + r.height / 2);
      // Cap the travel so the button never detaches from where it looks.
      setX(Math.max(-10, Math.min(10, dx * strength)));
      setY(Math.max(-7, Math.min(7, dy * strength)));
    };
    const onLeave = () => { setX(0); setY(0); };

    el.addEventListener('pointermove', onMove);
    el.addEventListener('pointerleave', onLeave);
    return () => {
      el.removeEventListener('pointermove', onMove);
      el.removeEventListener('pointerleave', onLeave);
      gsap.set(el, { x: 0, y: 0 });
    };
  }, [strength]);

  return cloneElement(children as ReactElement<{ ref?: unknown }>, { ref });
}
