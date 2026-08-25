'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import type { Locale } from '@/lib/menu-data';
import { COPY } from '@/lib/copy';
import { GALLERY } from '@/lib/gallery';
import Img from './Img';
import Reveal from './Reveal';

/** Editorial masonry + an accessible lightbox (focus trap, Esc, arrows). */
export default function Gallery({ locale }: { locale: Locale }) {
  const t = COPY[locale];
  const [open, setOpen] = useState<number | null>(null);
  const dialog = useRef<HTMLDivElement>(null);
  const opener = useRef<HTMLButtonElement | null>(null);

  const close = useCallback(() => { setOpen(null); opener.current?.focus(); }, []);
  const step = useCallback((d: number) => {
    setOpen((v) => (v === null ? v : (v + d + GALLERY.length) % GALLERY.length));
  }, []);

  useEffect(() => {
    if (open === null) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    dialog.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { e.preventDefault(); close(); }
      if (e.key === 'ArrowRight') { e.preventDefault(); step(1); }
      if (e.key === 'ArrowLeft') { e.preventDefault(); step(-1); }
      if (e.key === 'Tab') {
        // Only three controls in here; keep focus among them.
        const f = dialog.current?.querySelectorAll<HTMLElement>('button');
        if (!f?.length) return;
        const first = f[0], last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    };
    document.addEventListener('keydown', onKey);
    return () => { document.body.style.overflow = prevOverflow; document.removeEventListener('keydown', onKey); };
  }, [open, close, step]);

  const item = open === null ? null : GALLERY[open];

  return (
    <section className="gal section" id="gallery" aria-labelledby="gal-h">
      <div className="shell">
        <Reveal className="gal__head">
          <p className="eyebrow">{t.gallery.eyebrow}</p>
          <h2 id="gal-h" className="display gal__h">{t.gallery.title}</h2>
          <p className="lede">{t.gallery.lede}</p>
        </Reveal>

        <ul className="gal__grid" role="list">
          {GALLERY.map((g, i) => (
            <li key={g.slug} className={`gal__cell gal__cell--${i}`} style={{ aspectRatio: g.ratio }}>
              <button
                type="button"
                className="gal__btn"
                onClick={(e) => { opener.current = e.currentTarget; setOpen(i); }}
                aria-label={`${t.gallery.open}: ${g.alt[locale]}`}
              >
                <Img slug={g.slug} fill sizes="(max-width: 700px) 92vw, (max-width: 1100px) 46vw, 31vw" alt={g.alt[locale]} />
                <span className="gal__scrim" aria-hidden="true" />
              </button>
            </li>
          ))}
        </ul>
      </div>

      {item && (
        <div className="lb" role="dialog" aria-modal="true" aria-label={item.alt[locale]} ref={dialog} tabIndex={-1}>
          <button type="button" className="lb__back" onClick={close} aria-label={t.nav.close} />
          <div className="lb__inner">
            <Img slug={item.slug} sizes="92vw" alt={item.alt[locale]} priority />
            <p className="lb__cap">{item.alt[locale]}</p>
          </div>
          <button type="button" className="lb__nav lb__nav--prev" onClick={() => step(-1)} aria-label={t.gallery.prev}>‹</button>
          <button type="button" className="lb__nav lb__nav--next" onClick={() => step(1)} aria-label={t.gallery.next}>›</button>
          <button type="button" className="lb__x" onClick={close} aria-label={t.nav.close}>×</button>
        </div>
      )}
    </section>
  );
}
