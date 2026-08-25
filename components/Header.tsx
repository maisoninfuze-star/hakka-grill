'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { Locale } from '@/lib/menu-data';
import { COPY } from '@/lib/copy';
import { SITE } from '@/lib/site';
import Wordmark from './Wordmark';
import Magnetic from './Magnetic';

export default function Header({ locale }: { locale: Locale }) {
  const t = COPY[locale];
  const pathname = usePathname();
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  // Compact/solid state after the hero.
  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 80);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close the mobile panel on route change.
  useEffect(() => { setOpen(false); }, [pathname]);

  // Lock scroll + trap focus while the panel is open.
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const panel = panelRef.current;
    const focusables = panel?.querySelectorAll<HTMLElement>('a[href], button:not([disabled])');
    focusables?.[0]?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { setOpen(false); toggleRef.current?.focus(); return; }
      if (e.key !== 'Tab' || !focusables?.length) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    };
    document.addEventListener('keydown', onKey);
    return () => { document.body.style.overflow = prev; document.removeEventListener('keydown', onKey); };
  }, [open]);

  const other: Locale = locale === 'en' ? 'fr' : 'en';
  // Preserve the current route across the language switch.
  const rest = pathname.replace(/^\/(en|fr)/, '') || '';
  const switchHref = `/${other}${rest}`;

  const links = [
    { href: `/${locale}/menu`, label: t.nav.menu },
    { href: `/${locale}/story`, label: t.nav.story },
    { href: `/${locale}/experience`, label: t.nav.experience },
    { href: `/${locale}/visit`, label: t.nav.visit },
  ];

  return (
    <>
    {/* `&& !open`: with the panel open the solid/blurred bar would paint over
        it as a mismatched band. Transparent lets the logo and X sit directly
        on the panel. */}
    <header className={`hdr ${solid && !open ? 'is-solid' : ''}`}>
      <div className="hdr__in">
        <Link href={`/${locale}`} className="hdr__logo" aria-label={`${SITE.name} — ${locale === 'en' ? 'home' : 'accueil'}`}>
          <Wordmark compact={solid} />
        </Link>

        <nav className="hdr__nav" aria-label={locale === 'en' ? 'Primary' : 'Principale'}>
          {links.map((l) => (
            <Link key={l.href} href={l.href} className={`navlink ${pathname === l.href ? 'is-current' : ''}`} aria-current={pathname === l.href ? 'page' : undefined}>
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hdr__act">
          <Link href={switchHref} className="hdr__lang" aria-label={t.lang.label} hrefLang={other}>
            {t.lang.switch}
          </Link>
          <a href={`tel:${SITE.phone}`} className="btn btn--ghost hdr__reserve">{t.nav.reserve}</a>
          <Magnetic>
            <a href={SITE.orderUrl} className="btn btn--ember" target="_blank" rel="noopener noreferrer">
              {t.nav.order}
            </a>
          </Magnetic>

          <button
            ref={toggleRef}
            type="button"
            className="hdr__burger"
            aria-expanded={open}
            aria-controls="mnav"
            // Explicit label as well as the visually-hidden text: audit tooling
            // reported the button as unnamed when relying on the span alone.
            aria-label={open ? t.nav.close : t.nav.open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className={`burger ${open ? 'is-open' : ''}`} aria-hidden="true"><i /><i /></span>
          </button>
        </div>
      </div>
    </header>

    {/* Deliberately a SIBLING of <header>, not a child.
        .hdr.is-solid applies backdrop-filter once the page is scrolled, and
        backdrop-filter (like filter and transform) makes an element the
        containing block for its position:fixed descendants. As a child, this
        panel's inset:0 resolved against the ~60px header box the moment you
        scrolled, collapsing it to a sliver where only the first row showed.

        Order/Reserve are repeated at the top so the primary actions are never
        buried behind a scroll inside the menu. */}
    <div id="mnav" ref={panelRef} className={`mnav ${open ? 'is-open' : ''}`} hidden={!open}>
        <div className="mnav__act">
          <a href={SITE.orderUrl} className="btn btn--ember btn--wide" target="_blank" rel="noopener noreferrer">{t.nav.order}</a>
          {/* --outline, not --ghost: in the panel this is a primary conversion
              action shown at full width, so it gets the same visible edge as
              the hero. --ghost stays for the compact desktop nav item. */}
          <a href={`tel:${SITE.phone}`} className="btn btn--outline btn--wide">{t.nav.reserve}</a>
        </div>
        <nav aria-label={locale === 'en' ? 'Mobile' : 'Mobile'}>
          {links.map((l, i) => (
            <Link key={l.href} href={l.href} className="mnav__link" style={{ transitionDelay: `${0.05 + i * 0.05}s` }}>
              <span className="mnav__i num">0{i + 1}</span>{l.label}
            </Link>
          ))}
        </nav>
        <div className="mnav__foot">
          <Link href={switchHref} className="mnav__lang" hrefLang={other}>{t.lang.switch}</Link>
          <a href={`tel:${SITE.phone}`} className="mnav__tel num">{SITE.phoneDisplay}</a>
      </div>
    </div>
    </>
  );
}
