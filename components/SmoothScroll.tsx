'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';
import { initGsap, ScrollTrigger, prefersReducedMotion, isTouch } from '@/lib/motion';

/**
 * Smooth scroll, but only where it actually improves things: pointer devices
 * with motion enabled. Touch keeps native momentum, which always feels better
 * than a JS approximation of it.
 */
export default function SmoothScroll() {
  useEffect(() => {
    initGsap();
    document.documentElement.classList.remove('no-js');

    const reduced = prefersReducedMotion();
    if (reduced) document.documentElement.classList.add('no-motion');
    if (reduced || isTouch()) {
      // Still refresh triggers after fonts/images settle.
      const id = window.setTimeout(() => ScrollTrigger.refresh(), 300);
      return () => window.clearTimeout(id);
    }

    const lenis = new Lenis({
      duration: 0.95,          // responsive, not floaty
      wheelMultiplier: 1,
      touchMultiplier: 1.6,
      lerp: 0.11,
      smoothWheel: true,
    });

    // Drive Lenis from GSAP's ticker so scroll and animation share one clock.
    const raf = (time: number) => lenis.raf(time * 1000);
    const gsapCore = initGsap();
    gsapCore.ticker.add(raf);
    gsapCore.ticker.lagSmoothing(0);

    // Lenis scrolls the real document, so ScrollTrigger needs no scrollerProxy —
    // it only needs to be told when a scroll happened. Adding a proxy here
    // silently breaks trigger measurement and nothing ever reveals.
    lenis.on('scroll', ScrollTrigger.update);

    // Let in-page anchors go through Lenis.
    const onAnchor = (e: MouseEvent) => {
      const a = (e.target as HTMLElement)?.closest?.('a[href^="#"]') as HTMLAnchorElement | null;
      if (!a) return;
      const id = a.getAttribute('href')!.slice(1);
      if (!id) return;
      const el = document.getElementById(id);
      if (!el) return;
      e.preventDefault();
      lenis.scrollTo(el, { offset: -96 });
    };
    document.addEventListener('click', onAnchor);

    const refresh = window.setTimeout(() => ScrollTrigger.refresh(), 300);

    return () => {
      document.removeEventListener('click', onAnchor);
      window.clearTimeout(refresh);
      gsapCore.ticker.remove(raf);
      lenis.destroy();
    };
  }, []);

  return null;
}
