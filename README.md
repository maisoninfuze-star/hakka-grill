# Hakka Grill — hakkagrill.ca

A bilingual (EN/FR) site for Hakka Grill, Halal Chinese & BBQ at 4274 St Laurent Blvd,
Montreal.

```bash
npm install
npm run dev      # http://localhost:3210
npm run build
```

## What is real

Everything factual on this site came from a first-party source. Nothing is invented.

| Fact | Source |
|---|---|
| 99 dishes, EN + FR, with prices | `order.hakkagrill.ca` page-data payload |
| Address, phone, coordinates | same payload |
| Opening hours (closed Tuesdays) | same payload's `businessHours` |
| Photography | the restaurant's own site + ordering platform |
| A photograph for all 99 dishes | the ordering platform's per-item images |
| The logo | the ordering platform's 150×150 JPEG (see ASSETS.md) |

`lib/site.ts` ends with a `NEEDS_VERIFICATION` block listing everything the client has
**not** confirmed. Nothing in it is rendered anywhere:

- **Founder name.** The brief names Chef Zohaib Azhar; no public source corroborates it,
  so the story section tells the family-kitchen origin the business itself publishes
  rather than printing an unverified person's name.
- **Halal certifier.** The restaurant states 100% halal; no certifying body is published
  anywhere, so none is claimed.
- **Reviews and ratings.** Aggregators disagree (4.5/493 vs 4.5/833) and no review text
  is attributable, so there is no testimonial section and no rating is displayed. Drop
  verified Google reviews in and one can be added.
- **Reservations.** There is no booking system. The reservation section places a real
  phone call instead of faking a backend.

## Updating content

```bash
node build-menu.mjs        # re-pull the menu from the ordering system
node build-images.mjs      # re-encode site photos + regenerate lib/images.ts
node build-logo.mjs        # rebuild the brand mark (run after build-images.mjs)
node build-dish-images.mjs # fetch + encode the photo for every menu item
```

Both write generated files that are committed. Copy lives in `lib/copy.ts` — the French
is written for Québec, not machine-translated, so edit both sides deliberately.

## Architecture

```
app/[locale]/          en | fr, statically prerendered (10 pages)
  layout.tsx           fonts, Restaurant + Menu JSON-LD, header/footer
  page.tsx             homepage section order = the conversion journey
lib/
  site.ts              verified facts, hours maths, NEEDS_VERIFICATION
  copy.ts              all visible strings, both languages
  menu-data.ts         generated — 99 dishes
  images.ts            generated — real encoded widths per image
  motion.ts            one GSAP config, shared easings, capability checks
components/            one component per section, plus Img/Reveal/Magnetic primitives
```

### Dish photography

Every one of the 99 menu items has the kitchen's own photograph, pulled from the same
ordering-system payload as the prices. `build-dish-images.mjs` downloads them, encodes
card-sized AVIF/WebP, and writes `lib/dish-images.ts`.

Images are keyed by a **hash of the source URL**, not by dish slug, because several
dishes share a frame — a large and a small serving of the same thing, a burger sold
single or as a trio. Eight burger variants resolve to two photographs. A separate
`DISH_IMAGE_OF` map points each slug at its key, so a shared photo is encoded once
instead of four times. Portrait sources (the mocktails) are centre-cropped to the card
ratio so a grid never ends up with wildly uneven card heights.

`<DishImg>` returns **null** when a dish has no photo rather than rendering a
placeholder — a card with a grey box reads as broken, a purely typographic card reads as
intentional.

The download cache in `src-assets/dish/` (~42 MB) is gitignored; the encoded output in
`public/img/dish` (12 MB, ~15 KB per card) is committed, because that is the site.

### The opening

`components/Intro.tsx` plays a one-shot branded opening — the emblem ignites, the name
wipes in beneath it, the rule draws, and the lockup dissolves into the hero. Once per
session. Any click or key press skips it.

**Add `?intro` to any URL to replay it** (e.g. `/en?intro`), which is how to review it
without clearing session storage.

The design point worth preserving: **the overlay's resting state is the finished
lockup**, and the reveal is layered on top by an `.is-playing` class that JavaScript
only adds once `document.visibilityState === 'visible'`.

That is not over-engineering. A hidden or throttled tab pauses CSS animations as well
as rAF — measured here, the animations sat frozen on frame zero for two full seconds.
An overlay whose first keyframe is "black, emblem invisible" therefore becomes a blank
black screen for exactly as long as the freeze lasts. Resting on the *finished* frame
means the worst case is a legible logo on black; the reveal is a bonus that runs when
someone is actually looking. A timer takes the overlay down either way, and a 9-second
hard cap guarantees it can never hold the page.

One CSS trap to leave alone: `.intro__word` sets `clip-path: inset(0 0 0 0)` explicitly
rather than leaving it `none`. A keyframe animating `inset()` toward `none` cannot be
interpolated, so the browser jumps discretely at the midpoint and the wipe pops instead
of sliding.

### Motion

GSAP + ScrollTrigger, with Lenis for smooth scroll on pointer devices only. A few
decisions worth knowing before editing:

- **`whenAnimatable()` in `lib/motion.ts` gates every entrance.** A hidden or
  backgrounded tab suspends `requestAnimationFrame`, so anything that hides an element
  and waits for rAF to bring it back would render blank forever. Nothing applies a hidden
  start-state unless the document is visible.
- **State first, animation second.** The signature-dish stage picks its visible layer
  from React state; GSAP only adds the wipe. With reduced motion, or before hydration,
  the right dish is still on screen.
- **The scroll-driven dish uses CSS `position: sticky`, not ScrollTrigger's pin.** Sticky
  is laid out by the browser, so it cannot desync from a scrub timeline or inject a
  pin-spacer sized from a stale measurement.
- **Filters go on the still parent, transforms on the child.** A CSS `filter` forces a
  rasterization layer; putting one on the same element that scales makes the browser
  rasterize and then upscale the bitmap, which is visibly soft.
- **No infinite CSS animations.** Decorative loops run a fixed number of iterations so
  the page can actually go idle.

Reduced motion disables smooth scroll, parallax and the scroll-driven scene, and replaces
reveals with immediate display.

### Images

Pre-encoded AVIF + WebP in `/public/img`, no runtime optimizer. `lib/images.ts` records
the **real** encoded width of every file, because sources are never upscaled — a
requested 2000w can land at 1282w, and a srcset descriptor that lies makes the browser
pick a file smaller than it asked for. Intrinsic `width`/`height` come from the manifest,
so nothing shifts on load. Images opt into covering a frame with `<Img fill>`.

The map is a click-to-load facade over OpenStreetMap — no API key, no third-party
requests until the visitor asks for it.

## Accessibility

Audited at 4.5:1 (3:1 for large text) across both languages: zero failures. The primary
CTA uses `--ember-cta`, a deeper orange than the accent `--ember`, because white text on
the brighter one measured 3.49:1.

Semantic landmarks, skip link, visible focus rings, keyboard-operable tabs (arrow keys),
a focus-trapped lightbox and nav panel, and alt text on every content image.

### Two mobile defects worth not reintroducing

**The page slid sideways ~1285px on a phone.** The signature-dish rail scrolls
horizontally by design and correctly had `overflow-x: auto`, but the *section* around it
still reported the rail's full scroll width, so the whole document became horizontally
scrollable. `overflow-x: clip` on `body` did not help, and neither did putting it on
`html`. The fix is `overflow-x: clip` on `.sig`, scoped to the mobile breakpoint — at
desktop that clip would become the scroll container for the sticky dish stage and break
it.

**Footer links were 18px tall**, under the 24px WCAG 2.5.8 minimum and far under a
comfortable thumb target. They now carry vertical padding with the column gap at zero,
so the targets sit flush with no dead strips between them, and `--t-micro` lifts from
11.5px to 12.5px on phones.

### Layout restraint

The hero is the **dining room**, not a plate. The room is the thing no competitor can
copy and no stock library can fake — chandeliers, teal curtains, gold leaf, navy
banquettes — and it is where the entire palette came from, so the page and its hero
finally agree. Its dark left third carries the headline without needing a heavy scrim,
and the grade barely touches it (brightness 0.9) because the source is already a dark,
warm interior.

A second, previously unpublished room photograph was recovered from the old site's
JavaScript bundle and carries the Experience band, so the homepage never shows the same
room twice.

Only the hero runs full-bleed. Every other photograph sits inside the page column with
a capped height, so the homepage reads as one calm column rather than a series of
full-screen images competing with each other. The cooking section was removed outright:
it was a full-viewport still standing in for footage that does not exist.

One CSS note worth keeping: `img { height: auto }` in `globals.css` is load-bearing.
The `width`/`height` attributes on `<img>` are presentational hints that map to the CSS
`width` and `height` properties, so styling only `width` leaves the height hint in force
and a 1600×2400 source lays out 2400px tall regardless of `aspect-ratio`. That single
declaration cut a quarter off the homepage.

## Known gaps

- Photography is still the binding constraint for anything that is not a plated dish —
  there is no chef, no exterior, no room-with-guests, no wok footage. See `ASSETS.md`.
- No vector logo. See `ASSETS.md`.
- **Mobile is verified**, at 390px and 768px, across all 8 routes in both languages.
  The preview browser mis-scales its own viewport, so the audit runs the site inside an
  iframe of a fixed width — an iframe gives its document a real layout viewport, so
  media queries and layout finally agree. Two genuine defects were found and fixed this
  way (see below). Remaining caveat: `sizes` resolution cannot be trusted inside an
  iframe, because the preload scanner reads the *parent's* viewport when choosing a
  srcset candidate — worth confirming on a real handset that the hero picks
  `hero-1000` rather than `hero-2304`.
