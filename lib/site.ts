/**
 * VERIFIED BUSINESS FACTS — Hakka Grill, Montreal.
 *
 * Every value below was taken from a first-party source (the restaurant's own
 * ordering platform, order.hakkagrill.ca) on 2026-08-24. Nothing here is invented.
 *
 * Anything the client has NOT confirmed lives in `NEEDS_VERIFICATION` at the bottom
 * and is deliberately NOT rendered anywhere on the site.
 */

export const SITE = {
  name: 'Hakka Grill',
  legalName: 'Hakka Grill Halal Chinese and BBQ Restaurant',
  url: 'https://hakkagrill.ca',
  orderUrl: 'https://order.hakkagrill.ca',
  phone: '+14383809786',
  phoneDisplay: '(438) 380-9786',
  address: {
    street: '4274 St Laurent Blvd',
    locality: 'Montreal',
    region: 'QC',
    postalCode: 'H2W 1Z3',
    country: 'CA',
    lat: 45.51860043015909,
    lng: -73.5833007,
  },
  /** Trip-planning links built from the verified coordinates. */
  get mapsUrl() {
    const q = encodeURIComponent(`${this.name}, ${this.address.street}, ${this.address.locality}`);
    return `https://www.google.com/maps/search/?api=1&query=${q}`;
  },
  get directionsUrl() {
    const d = encodeURIComponent(`${this.address.street}, ${this.address.locality}, ${this.address.region} ${this.address.postalCode}`);
    return `https://www.google.com/maps/dir/?api=1&destination=${d}`;
  },
  instagram: 'https://www.instagram.com/hakka_grill/',
} as const;

/** The city's own name differs by language; the postal address does not. */
export const LOCALITY: Record<'en' | 'fr', string> = { en: 'Montreal', fr: 'Montréal' };

/**
 * Opening hours, straight from the ordering platform's `businessHours` payload.
 * Tuesday is absent from that payload — the restaurant is closed Tuesdays, which
 * three independent listings also agree on.
 */
export type Day = 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday';

export const HOURS: Record<Day, { open: string; close: string } | null> = {
  monday: { open: '16:00', close: '22:00' },
  tuesday: null,
  wednesday: { open: '16:00', close: '22:00' },
  thursday: { open: '16:00', close: '22:00' },
  friday: { open: '15:00', close: '23:00' },
  saturday: { open: '13:00', close: '23:00' },
  sunday: { open: '13:00', close: '22:00' },
};

export const DAY_ORDER: Day[] = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];

/** Schema.org day URIs. */
const SCHEMA_DAY: Record<Day, string> = {
  monday: 'Monday', tuesday: 'Tuesday', wednesday: 'Wednesday', thursday: 'Thursday',
  friday: 'Friday', saturday: 'Saturday', sunday: 'Sunday',
};

export const openingHoursSpecification = DAY_ORDER.filter((d) => HOURS[d]).map((d) => ({
  '@type': 'OpeningHoursSpecification',
  dayOfWeek: `https://schema.org/${SCHEMA_DAY[d]}`,
  opens: HOURS[d]!.open,
  closes: HOURS[d]!.close,
}));

/** 24h "16:00" -> "4 PM" / "16 h" (fr). Whole hours drop the ":00". */
export function formatTime(t: string, locale: 'en' | 'fr'): string {
  const [hStr, mStr] = t.split(':');
  const h = Number(hStr);
  const m = Number(mStr);
  if (locale === 'fr') return m === 0 ? `${h} h` : `${h} h ${mStr}`;
  const suffix = h >= 12 ? 'PM' : 'AM';
  const h12 = h % 12 === 0 ? 12 : h % 12;
  return m === 0 ? `${h12} ${suffix}` : `${h12}:${mStr} ${suffix}`;
}

/**
 * Present open/closed state for the restaurant's own timezone (America/Toronto,
 * which shares Montreal's offset), NOT the visitor's. Computed client-side only,
 * so the server and client never disagree on first paint.
 */
export function getOpenState(now: Date, locale: 'en' | 'fr') {
  const fmt = new Intl.DateTimeFormat('en-CA', {
    timeZone: 'America/Toronto', weekday: 'long', hour: '2-digit', minute: '2-digit', hour12: false,
  });
  const parts = Object.fromEntries(fmt.formatToParts(now).map((p) => [p.type, p.value]));
  const day = String(parts.weekday).toLowerCase() as Day;
  // Intl can emit "24" for midnight; normalise so comparisons stay ordered.
  const hour = Number(parts.hour) % 24;
  const mins = hour * 60 + Number(parts.minute);

  const today = HOURS[day];
  if (today) {
    const [oh, om] = today.open.split(':').map(Number);
    const [ch, cm] = today.close.split(':').map(Number);
    if (mins >= oh * 60 + om && mins < ch * 60 + cm) {
      return { open: true as const, until: formatTime(today.close, locale) };
    }
    if (mins < oh * 60 + om) {
      return { open: false as const, next: formatTime(today.open, locale), nextDay: null as Day | null };
    }
  }
  // Find the next day that has hours.
  for (let i = 1; i <= 7; i++) {
    const d = DAY_ORDER[(DAY_ORDER.indexOf(day) + i) % 7];
    if (HOURS[d]) return { open: false as const, next: formatTime(HOURS[d]!.open, locale), nextDay: d };
  }
  return { open: false as const, next: null, nextDay: null };
}

/**
 * NOT RENDERED. Confirm with the client, then promote into SITE above.
 *  - founderName: the brief names "Chef Zohaib Azhar" as founder. Could not be
 *    corroborated in any public source, so the story section speaks about the
 *    family kitchen rather than printing an unverified person's name.
 *  - halalCertifier: the restaurant states 100% halal; no certifying body is
 *    published anywhere. No certifier is claimed on the site.
 *  - reviews: aggregate rating differs across aggregators (4.5/493 vs 4.5/833),
 *    so no rating, review count, or review quote is displayed.
 *  - prayerRoom: mentioned in third-party review summaries only.
 *  - reservations: no booking system exists today; the reservation section calls
 *    and does not pretend to have a backend.
 */
export const NEEDS_VERIFICATION = {
  founderName: null,
  halalCertifier: null,
  aggregateRating: null,
  prayerRoom: null,
  reservationProvider: null,
} as const;
