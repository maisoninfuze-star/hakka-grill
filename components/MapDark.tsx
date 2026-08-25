'use client';

import { useState } from 'react';
import type { Locale } from '@/lib/menu-data';
import { COPY } from '@/lib/copy';
import { SITE, LOCALITY } from '@/lib/site';

/**
 * Map facade.
 *
 * The embed is not loaded until the visitor asks for it: a third-party map
 * iframe is one of the heaviest, most tracker-laden things you can put on a
 * restaurant page, and it would sit below the fold costing everyone LCP for a
 * feature most people never touch. Tiles come from OpenStreetMap (no API key,
 * no account), tinted dark to match the room rather than punching a white
 * rectangle through the page.
 */
export default function MapDark({ locale }: { locale: Locale }) {
  const t = COPY[locale];
  const [loaded, setLoaded] = useState(false);

  const { lat, lng } = SITE.address;
  const d = 0.004;
  const bbox = `${lng - d},${lat - d / 1.9},${lng + d},${lat + d / 1.9}`;
  const src = `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${lat},${lng}`;

  return (
    <div className="map">
      {loaded ? (
        <iframe
          className="map__frame"
          src={src}
          title={t.visit.mapAria}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      ) : (
        <button type="button" className="map__facade" onClick={() => setLoaded(true)}>
          <span className="map__grid" aria-hidden="true" />
          <span className="map__pin" aria-hidden="true">
            <span className="map__pulse" />
            <span className="map__dot" />
          </span>
          <span className="map__copy">
            <span className="map__street display">{SITE.address.street}</span>
            <span className="map__city">{LOCALITY[locale]}, {SITE.address.region} {SITE.address.postalCode}</span>
            <span className="map__load">{locale === 'en' ? 'Load interactive map' : 'Charger la carte interactive'}</span>
          </span>
        </button>
      )}

      <a className="map__out" href={SITE.mapsUrl} target="_blank" rel="noopener noreferrer">
        {t.visit.map}
      </a>
    </div>
  );
}
