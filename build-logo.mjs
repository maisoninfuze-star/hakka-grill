/**
 * Turns the only logo file that exists — a 150x150 JPEG from the ordering
 * platform — into a usable brand mark.
 *
 * The emblem is cropped away from the baked-in "HAKKA GRILL" lettering (that
 * lettering is ~20px tall in the source and turns to mush at any real size; the
 * site sets the name in Fraunces instead).
 *
 * The emblem is then set in a circular roundel rather than being keyed to
 * transparency. Keying was tried and abandoned: the artwork sits on a vignetted
 * dark backdrop, and at 150px with JPEG ringing there is no threshold that
 * removes the backdrop without either leaving a ragged dark halo — very visible
 * once the mark sits over the bright hero photograph — or chewing into the
 * grill itself. A circle is exact geometry with no artefacts, it reads as a
 * deliberate containing shape, and the backdrop simply becomes the disc.
 *
 * A vector logo would remove all of this. See ASSETS.md.
 */
import sharp from 'sharp';
import fs from 'fs';

const SRC = 'src-assets/logo-150.jpg';
const OUT = 'public/img';

// Emblem only, above the lettering.
const CROP = { left: 18, top: 4, width: 114, height: 106 };

const SIZE = 256;          // master roundel
const INSET = 0.80;        // emblem occupies 80% of the diameter

const emblemW = Math.round(SIZE * INSET);

const emblem = await sharp(SRC)
  .extract(CROP)
  .resize({ width: emblemW, kernel: 'lanczos3' })
  .modulate({ saturation: 1.12 })
  .linear(1.08, -6)        // a little contrast; the source is flat and noisy
  .toBuffer();

const disc = Buffer.from(
  `<svg width="${SIZE}" height="${SIZE}"><circle cx="${SIZE / 2}" cy="${SIZE / 2}" r="${SIZE / 2}" fill="#fff"/></svg>`,
);

const roundel = sharp({
  create: { width: SIZE, height: SIZE, channels: 4, background: { r: 14, g: 17, b: 21, alpha: 1 } },
})
  .composite([
    { input: emblem, gravity: 'center' },
    { input: disc, blend: 'dest-in' },   // clip everything to the circle
  ])
  .png({ compressionLevel: 9 });

const buf = await roundel.toBuffer();

// WebP, not PNG: the emblem is photographic artwork, so lossless costs ~105 KB
// for something the header draws at 46px. WebP with alpha lands under 20.
await sharp(buf).webp({ quality: 88, alphaQuality: 90 }).toFile(`${OUT}/mark.webp`);

// Favicon: same roundel, flattened onto the site's ink.
await sharp(buf)
  .resize({ width: 180, height: 180 })
  .flatten({ background: { r: 10, g: 12, b: 15 } })
  .png({ palette: true, quality: 90 })
  .toFile(`${OUT}/icon.png`);

const kb = (f) => Math.round(fs.statSync(`${OUT}/${f}`).size / 1024);
console.log(`mark.webp ${SIZE}x${SIZE}  ${kb('mark.webp')} KB`);
console.log(`icon.png  180x180  ${kb('icon.png')} KB`);
