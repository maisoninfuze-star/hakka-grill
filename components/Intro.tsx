'use client';

import { useEffect, useRef } from 'react';

export const INTRO_KEY = 'hg:intro';

/** Hard stop: never hold the overlay longer than this, whatever happens. */
const MAX_HOLD_MS = 9000;

/**
 * Branded opening: the emblem ignites, the name wipes in beneath it, and the
 * lockup dissolves into the hero. Plays once per session.
 *
 * The important detail is what happens when the animation *cannot* run. A tab
 * that is hidden or throttled pauses CSS animations as well as rAF, so an
 * overlay whose first keyframe is "black, emblem invisible" sits there as a
 * blank black screen until something clears it. Measured: frozen at frame zero
 * for two full seconds.
 *
 * So the resting state of this overlay is the finished lockup — logo, name and
 * rule, legible — and the animation is layered on top only once the document is
 * actually visible. Frozen means "logo on black", which reads as intentional;
 * playing means the full reveal. Either way a timer always takes it down.
 */
export default function Intro() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // The inline script in the head already decided whether this should run.
    if (document.documentElement.classList.contains('intro-done')) return;

    try { sessionStorage.setItem(INTRO_KEY, '1'); } catch { /* private mode */ }

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const timers: number[] = [];
    let finished = false;

    const finish = () => {
      if (finished) return;
      finished = true;
      timers.forEach(clearTimeout);
      document.removeEventListener('visibilitychange', onVisible);
      window.removeEventListener('pointerdown', skip);
      window.removeEventListener('keydown', skip);
      document.body.style.overflow = prevOverflow;
      document.documentElement.classList.add('intro-done');
      el.remove();
    };

    function skip() {
      el!.classList.add('is-out');
      finish();
    }

    const play = () => {
      el.classList.add('is-playing');
      timers.push(window.setTimeout(() => el.classList.add('is-out'), 1250));
      timers.push(window.setTimeout(finish, 1780));
    };

    function onVisible() {
      if (document.visibilityState !== 'visible') return;
      document.removeEventListener('visibilitychange', onVisible);
      play();
    }

    if (document.visibilityState === 'visible') play();
    else document.addEventListener('visibilitychange', onVisible);

    // Let people out early, and never hold the page hostage.
    window.addEventListener('pointerdown', skip, { once: true });
    window.addEventListener('keydown', skip, { once: true });
    timers.push(window.setTimeout(finish, MAX_HOLD_MS));

    return () => {
      timers.forEach(clearTimeout);
      document.removeEventListener('visibilitychange', onVisible);
      window.removeEventListener('pointerdown', skip);
      window.removeEventListener('keydown', skip);
      document.body.style.overflow = prevOverflow;
    };
  }, []);

  return (
    <div className="intro" ref={ref} aria-hidden="true">
      <div className="intro__lock">
        <img className="intro__mark" src="/img/mark.webp" alt="" width={256} height={256} fetchPriority="high" />
        <span className="intro__word">
          <span className="intro__h">Hakka</span>
          <span className="intro__g">Grill</span>
        </span>
        <span className="intro__rule" />
      </div>
    </div>
  );
}
