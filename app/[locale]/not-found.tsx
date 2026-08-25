import Link from 'next/link';
import { COPY } from '@/lib/copy';

export default function NotFound() {
  // A locale-agnostic 404: this renders for unmatched routes under either prefix.
  const t = COPY.en;
  return (
    <div className="nf">
      <div className="shell">
        <p className="eyebrow">404</p>
        <h1 className="display display--tight nf__h">{t.notFound.title}</h1>
        <p className="lede">{t.notFound.body}</p>
        <Link href="/en" className="btn btn--ember">{t.notFound.cta}</Link>
      </div>
    </div>
  );
}
