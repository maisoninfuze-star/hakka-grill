import Link from 'next/link';
import './globals.css';

export default function RootNotFound() {
  return (
    <html lang="en-CA">
      <body>
        <div className="nf">
          <div className="shell">
            <p className="eyebrow">404</p>
            <h1 className="display display--tight nf__h">Page not found.</h1>
            <p className="lede">That page has left the pass. Head back to the dining room.</p>
            <Link href="/en" className="btn btn--ember">Back home</Link>
          </div>
        </div>
      </body>
    </html>
  );
}
