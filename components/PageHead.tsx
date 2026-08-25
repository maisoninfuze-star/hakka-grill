import type { Locale } from '@/lib/menu-data';
import Img from './Img';

/** Shared masthead for the inner pages, so they read as one publication. */
export default function PageHead({ eyebrow, title, lede, slug, locale, position }: {
  eyebrow: string; title: string; lede?: string; slug: string; locale: Locale; position?: string;
}) {
  return (
    <header className="phead">
      <div className="phead__media">
        <Img slug={slug} fill sizes="100vw" priority position={position} alt="" />
        <span className="phead__grade" aria-hidden="true" />
      </div>
      <div className="shell phead__in">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="display display--tight phead__h">{title}</h1>
        {lede && <p className="lede phead__lede">{lede}</p>}
      </div>
      <span className="sr-only" lang={locale}>{title}</span>
    </header>
  );
}
