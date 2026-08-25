# Assets — what exists, what is missing, what to shoot

## The logo

`build-logo.mjs` produces the brand mark from `src-assets/logo-150.jpg`, the only
logo file that exists anywhere: a **150×150 JPEG** served by the ordering platform.
There is no vector, no high-resolution original, and the site favicon caps at 48px.

Two decisions follow from that:

- **The emblem is cropped away from the lettering.** The "HAKKA GRILL" text baked
  into that file is about 20px tall in the source and turns to mush at any usable
  size. The site sets the name in Fraunces beside the emblem instead.
- **The emblem sits in a circular roundel** rather than being keyed to transparency.
  Keying was tried and abandoned: the artwork sits on a vignetted dark backdrop, and
  at 150px with JPEG ringing there is no threshold that removes the backdrop without
  either leaving a ragged dark halo — very visible over the hero photograph — or
  chewing into the grill itself. A circle is exact geometry with no artefacts.

**A vector logo would remove all of this** and let the emblem scale freely. It is the
single highest-value brand asset the client could supply.

## What was recovered from the old site

Scanning the old site's **JavaScript bundle**, not just its HTML, turned up assets that
are never rendered on any page:

- **`media/home-image-1-*.jpg`** — a real, unpublished photograph of the dining room
  (2304px, same Sony body as the others). It composes better than anything else
  available and now carries the Experience band.
- **`assets/menu/honey_garlic.JPG`** — a 4608px dish shot.
- **`assets/halal/01–04.png`** — four 6000×6000 generic clip-art seals reading
  "100% CERTIFIED" and "100% QUALITY PRODUCT". **Not used, and worth raising with the
  client:** their current site displays badges asserting halal *certification* while no
  certifying body is named anywhere. That is a claim the site should not make on their
  behalf. This site states 100% halal — which the business itself states — and names no
  certifier.

## Photography

Every image is a real photograph of this restaurant. No stock, no AI-generated food.

The ordering platform turned out to carry **its own photograph for all 99 menu items**
— a far better source than the old website. The six signature dishes now use the
kitchen's own shot of that exact dish.

`src-assets/dish-photo-survey.json` records all 89 unique photographs with dimensions
and a measured brightness of the outer border, which is what the hero was picked
against. 62 of them are 2400px or wider. Most were shot on a **striped tablecloth that
shows in the corners** — fine inside a contained card, cheap-looking behind a headline.
The Korean chicken frame is one of the few where the black tray runs to every edge,
which is why it became the hero. Re-download any photo from the `photo` field in
`lib/menu-data.ts`.

| Slug | Source | Used for |
|---|---|---|
| `hero` | wide crop of `DSC00253.jpg` (2304px) | homepage hero — the dining room, the only full-bleed image on the site |
| `roomwide` | `room-wide.jpg` — recovered from the old site's JS bundle | Experience band |
| `sesame` `chili` `beef` `kungpao` `chowmein` `burger` | the ordering system's own per-dish photographs | signature dish cards, scroll-driven dish |
| `room` | `DSC00253.jpg` | Experience band, gallery, story page |
| `table` | `DSC00244.jpg` | Story section, gallery |
| `detail` | `tableNumber.jpg` | Reservation panel, Visit page head |
| `spread` | `location.jpg` (1282px — the smallest source) | gallery, OG image |

```bash
node build-images.mjs      # re-encode site photos + regenerate lib/images.ts
node build-logo.mjs        # rebuild the brand mark (run after build-images.mjs)
node build-dish-images.mjs # fetch + encode the photo for every menu item
```

**All 99 menu items now carry the kitchen's own photograph**, on the full menu and in
the homepage discovery grid. 89 unique frames cover the 99 dishes; the overlap is large
and small servings of the same dish, and burgers sold single or as a trio.

`lib/menu-data.ts` carries the upstream `photo` URL for every dish, so any of the
other 93 photographs can be pulled in without hunting for it.

## Not used, and why

- **The old site's food photos** (`sushi.png`, `pulao.jpg`, `gulab-jamun.jpg`,
  `doublechocolate.jpg`, `hotels.jpg`) — template stock of dishes Hakka Grill does not
  serve.
- **The baked-in logo lettering** — see above.

## Production shot list

Priority order.

1. **Dynamite Shrimp** — the most-praised dish on every review site. A photograph does
   exist upstream but does not clearly show the dish, so it is still not featured.
2. **Chef portrait** and **chef cooking** — hands, wok, motion. Nothing exists.
3. **Exterior at night** — the Saint-Laurent frontage. Nothing exists.
4. **Dining room with guests** — the current room shot is empty. With signed releases.
5. **Wok / flame action** — 6–10s of video. The cooking section was cut from the
   homepage partly because there is no real footage behind it.
6. **A re-shoot of the three-plate spread** at full resolution (the current file is
   1282px, the weakest asset on the site).
7. **A vector logo.**

### Direction

Shoot the room as it actually is: chandeliers, navy banquettes, white marble, warm
tungsten. Dark backgrounds, warm directional key, visible steam, shallow depth of
field. Deliver 4000px+ on the long edge.

The dish photography is shot flat-lit on a light tablecloth, which is why the site
grades it. Shooting darker and warmer in-camera removes the need.

## Data flags for the client

- **Chicken Corn Soup (L) is priced at $23.99** while the small is $8.99, and
  **Chef Special Soup (L) at $25.99** against $9.99. Both look like data-entry errors
  in the ordering system. The site prints exactly what that system says — fix it there
  and re-run `node build-menu.mjs`.
- **Kids Meals has a single item.** Either incomplete, or it should fold into the main
  menu.
- Several French entries had typos (`Repas Four Enfants`, `mais` for `maïs`,
  `General Tso` for `Général Tao`). These are corrected in `build-menu.mjs` rather than
  upstream, so fixing them in the ordering system is still worth doing.
