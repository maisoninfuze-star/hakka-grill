'use client';

import { useEffect, useState } from 'react';
import type { Locale } from '@/lib/menu-data';
import { COPY } from '@/lib/copy';
import { HOURS, DAY_ORDER, formatTime, getOpenState, type Day } from '@/lib/site';

const DAY_NAME: Record<Locale, Record<Day, string>> = {
  en: { monday: 'Monday', tuesday: 'Tuesday', wednesday: 'Wednesday', thursday: 'Thursday', friday: 'Friday', saturday: 'Saturday', sunday: 'Sunday' },
  fr: { monday: 'Lundi', tuesday: 'Mardi', wednesday: 'Mercredi', thursday: 'Jeudi', friday: 'Vendredi', saturday: 'Samedi', sunday: 'Dimanche' },
};

/**
 * Hours are rendered from the restaurant's own published schedule. The live
 * open/closed badge is computed after mount only — the server has no idea what
 * time it is in Montreal for this visitor, and guessing would desync hydration.
 */
export default function Hours({ locale, compact = false }: { locale: Locale; compact?: boolean }) {
  const t = COPY[locale];
  const [state, setState] = useState<ReturnType<typeof getOpenState> | null>(null);
  const [todayKey, setTodayKey] = useState<Day | null>(null);

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      setState(getOpenState(now, locale));
      const wd = new Intl.DateTimeFormat('en-CA', { timeZone: 'America/Toronto', weekday: 'long' })
        .format(now).toLowerCase() as Day;
      setTodayKey(wd);
    };
    tick();
    const id = window.setInterval(tick, 60_000);
    return () => window.clearInterval(id);
  }, [locale]);

  return (
    <div className={`hrs ${compact ? 'hrs--compact' : ''}`}>
      {state && (
        <p className={`hrs__badge ${state.open ? 'is-open' : ''}`}>
          <span className="hrs__dot" aria-hidden="true" />
          {state.open
            ? <>{t.visit.openNow} <span className="hrs__til">{t.visit.closesAt} {state.until}</span></>
            : <>{t.visit.closedNow}{state.next ? <span className="hrs__til">{t.visit.opensAt} {state.next}{state.nextDay ? ` · ${DAY_NAME[locale][state.nextDay]}` : ''}</span> : null}</>}
        </p>
      )}
      <dl className="hrs__list">
        {DAY_ORDER.map((d) => {
          const h = HOURS[d];
          const isToday = todayKey === d;
          return (
            <div key={d} className={`hrs__row ${isToday ? 'is-today' : ''} ${!h ? 'is-closed' : ''}`}>
              <dt>{DAY_NAME[locale][d]}</dt>
              <dd className="num">
                {h ? `${formatTime(h.open, locale)} – ${formatTime(h.close, locale)}` : t.visit.closed}
              </dd>
            </div>
          );
        })}
      </dl>
    </div>
  );
}
