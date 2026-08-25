'use client';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

let registered = false;

/** Register plugins exactly once, and set the defaults the whole site inherits. */
export function initGsap() {
  if (registered || typeof window === 'undefined') return gsap;
  gsap.registerPlugin(ScrollTrigger);
  gsap.defaults({ ease: 'power3.out', duration: 0.9 });
  ScrollTrigger.config({ ignoreMobileResize: true });
  registered = true;
  return gsap;
}

/** The single source of truth for "should this device animate?". */
export function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/** Coarse pointer + no hover => phone/tablet. Drives cursor, magnetics, smooth scroll. */
export function isTouch(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(hover: none), (pointer: coarse)').matches;
}

/** Rough low-power heuristic. Used to skip the most expensive effects. */
export function isLowPower(): boolean {
  if (typeof window === 'undefined') return false;
  const cores = navigator.hardwareConcurrency ?? 8;
  const mem = (navigator as Navigator & { deviceMemory?: number }).deviceMemory ?? 8;
  return cores <= 4 || mem <= 4;
}

export const EASE = {
  out: 'power3.out',
  inOut: 'power2.inOut',
  expo: 'expo.out',
} as const;

/** Shared reveal distances/durations so every section moves the same way. */
export const REVEAL = {
  y: 26,
  duration: 0.95,
  stagger: 0.075,
  start: 'top 82%',
} as const;

export { gsap, ScrollTrigger };

/**
 * Run animation setup only when the document can actually animate.
 *
 * A hidden/backgrounded tab suspends requestAnimationFrame. Anything that first
 * hides an element and then relies on rAF to bring it back would sit invisible
 * indefinitely — a page opened in a background tab would render blank. So we
 * never apply a hidden start-state while the document is hidden; we wait for it
 * to become visible and set up then. Content stays visible in the meantime.
 *
 * Returns a cleanup for whatever the callback set up, plus the listener.
 */
export function whenAnimatable(setup: () => (() => void) | void): () => void {
  if (typeof document === 'undefined') return () => {};

  let teardown: (() => void) | void;

  if (document.visibilityState === 'visible') {
    teardown = setup();
    return () => { teardown?.(); };
  }

  const onVisible = () => {
    if (document.visibilityState !== 'visible') return;
    document.removeEventListener('visibilitychange', onVisible);
    teardown = setup();
  };
  document.addEventListener('visibilitychange', onVisible);

  return () => {
    document.removeEventListener('visibilitychange', onVisible);
    teardown?.();
  };
}
