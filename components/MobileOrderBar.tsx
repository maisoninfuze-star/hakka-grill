'use client';

import { useEffect, useState } from 'react';
import type { Locale } from '@/lib/menu-data';
import { COPY } from '@/lib/copy';
import { SITE } from '@/lib/site';

/**
 * Sticky conversion bar for phones. Appears once the hero is behind you, so it
 * never competes with the hero's own CTAs.
 */
export default function MobileOrderBar({ locale }: { locale: Locale }) {
  const t = COPY[locale];
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.6);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className={`obar ${show ? 'is-in' : ''}`} aria-hidden={!show}>
      <a href={`tel:${SITE.phone}`} className="obar__b obar__b--ghost" tabIndex={show ? 0 : -1}>
        {t.nav.reserve}
      </a>
      <a href={SITE.orderUrl} className="obar__b obar__b--ember" target="_blank" rel="noopener noreferrer" tabIndex={show ? 0 : -1}>
        {t.nav.order}
      </a>
    </div>
  );
}
