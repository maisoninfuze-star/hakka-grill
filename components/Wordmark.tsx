/**
 * The brand lockup: the restaurant's own emblem beside the name set in Fraunces.
 *
 * The emblem is extracted from the only logo file that exists — a 150×150 JPEG
 * (see build-logo.mjs). The name is set in type rather than using the lettering
 * baked into that file, which is ~20px tall in the source and illegible at any
 * real size. A vector logo would let the emblem scale further; see ASSETS.md.
 */
export default function Wordmark({ className, compact = false }: { className?: string; compact?: boolean }) {
  return (
    <span className={`wordmark ${compact ? 'wordmark--compact' : ''} ${className ?? ''}`} aria-hidden="true">
      <img className="wordmark__mark" src="/img/mark.webp" alt="" width={256} height={256} decoding="async" />
      <span className="wordmark__type">
        <span className="wordmark__h">Hakka</span>
        <span className="wordmark__g">Grill</span>
      </span>
    </span>
  );
}
