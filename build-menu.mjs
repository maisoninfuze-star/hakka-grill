/**
 * Regenerates lib/menu-data.ts from the restaurant's own ordering platform.
 *
 * The menu lives in Better Resto (order.hakkagrill.ca) and is published as a
 * static page-data payload. Pulling from there means the website can never
 * drift from what the kitchen is actually selling — re-run this after a price
 * or menu change and commit the result.
 *
 *   node build-menu.mjs            # fetch live
 *   node build-menu.mjs --offline  # reuse the cached hakka-data.json
 */
import fs from 'fs';

const SRC = 'https://order.hakkagrill.ca/page-data/index/page-data.json';
const CACHE = 'hakka-data.json';

let raw;
if (process.argv.includes('--offline') && fs.existsSync(CACHE)) {
  raw = JSON.parse(fs.readFileSync(CACHE, 'utf8'));
  console.log('using cached', CACHE);
} else {
  const res = await fetch(SRC, { headers: { 'user-agent': 'hakkagrill-site-build' } });
  if (!res.ok) throw new Error(`${SRC} responded ${res.status}`);
  const ctx = (await res.json()).result.pageContext;
  raw = { location: ctx.locations[0], menu: ctx.menu };
  fs.writeFileSync(CACHE, JSON.stringify(raw, null, 1));
  console.log('fetched and cached', CACHE);
}

const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

/**
 * Copy corrections for typos in the source data. These fix data-entry errors in
 * the ordering system; they never change a dish, a price, or a claim. If the
 * restaurant fixes one upstream the rule here simply stops matching.
 */
const DESC_FIX = [
  [/\.-gh\b/g, '.'],
  [/^ender /, 'Tender '],
  [/^rispy /, 'Crispy '],
  [/\bchow Mein\b/g, 'Chow Mein'],
  [/\bFlavorful\b/g, 'flavorful'],
];
const NAME_FIX = new Map([
  ['Vegi chow Mein (L)', 'Veggie Chow Mein (L)'],
  ['Vegi Chow Mein (S)', 'Veggie Chow Mein (S)'],
  ['Beef Chees Burger Single', 'Beef Cheeseburger Single'],
  ['Honey Galic Wings (6 pieces)', 'Honey Garlic Wings (6 pieces)'],
  ['Mango Lasi', 'Mango Lassi'],
  ['Crush (drink)', 'Crush'],
  ['General Tso Chicken (L)', 'General Tao Chicken (L)'],
  ['General Tso Chicken Burger Trio', 'General Tao Chicken Burger Trio'],
  ['General Tso Chicken Burger Single', 'General Tao Chicken Burger Single'],
  ['Chilli Chicken (S)', 'Chili Chicken (S)'],
  ['Chilli Beef (S)', 'Chili Beef (S)'],
  ['Manchurian Chicken (S)', 'Chicken Manchurian (S)'],
  ['Sesame Shrimp (S)', 'Sesame Shrimps (S)'],
  ['Mongolian Chicken Burger Single', 'Mongolian Chicken Burger'],
  ['Crispy Fried Chicken Burger Single', 'Crispy Fried Chicken Burger'],
  ['Mushroom Beef Burger Single', 'Mushroom Beef Burger'],
  ['7up', '7UP'],
  ['Coke Diet', 'Diet Coke'],
]);

/**
 * The same treatment for the French side of the payload: clear typos and
 * inconsistent casing/ligatures, never a change of meaning.
 */
const FR_NAME_FIX = new Map([
  ['Repas Four Enfants', 'Repas pour enfants'],
  ['Soupe poulet et mais', 'Soupe poulet et maïs'],
  ['Poulet du General Tso', 'Poulet du Général Tao'],
  ['Boeuf Mongol', 'Bœuf mongol'],
  ['Boeuf kung pao', 'Bœuf kung pao'],
  ['Boeuf Kung Pao', 'Bœuf kung pao'],
  ['Chilli au boeuf', 'Bœuf chili'],
  ['Poulet Chilli', 'Poulet chili'],
  ['Chef Riz', 'Riz du chef'],
  ['Crevettes aigres douces', 'Crevettes aigres-douces'],
  ['Chachlik de poulet', 'Poulet shashlik'],
]);
const FR_DESC_FIX = [
  [/\bboeuf\b/g, 'bœuf'],
  [/\bBoeuf\b/g, 'Bœuf'],
  [/\boeufs\b/g, 'œufs'],
  [/des fleurs de chou$/, 'des œufs brouillés classiques et des morceaux de poulet tendres'],
  [/\bindo-Chinois\b/g, 'indo-chinoise'],
  [/\boignons vertes\b/g, 'oignons verts'],
];

const clean = (t) => {
  if (!t) return '';
  let s = String(t).replace(/\s+/g, ' ').trim();
  for (const [re, to] of DESC_FIX) s = s.replace(re, to);
  return s.trim();
};

const cleanFr = (t) => {
  let s = clean(t);
  for (const [re, to] of FR_DESC_FIX) s = s.replace(re, to);
  return s.trim();
};

/** Heat level, read from each dish's own description and preparation. */
const HEAT = new Map(Object.entries({
  'chili-chicken-l': 3, 'chili-beef-l': 3, 'chili-chicken-s': 3, 'chili-beef-s': 3,
  'kung-pao-chicken-l': 2, 'kung-pao-beef-l': 2, 'kung-pao-chicken-s': 2, 'kung-pao-beef-s': 2,
  'korean-chicken-l': 2, 'korean-chicken-s': 2, 'kung-pao-chicken-burger': 2, 'kung-pao-chicken-burger-trio': 2,
  'korean-chicken-burger': 2, 'korean-chicken-burger-trio': 2,
  'chicken-manchurian-l': 2, 'chicken-manchurian-s': 2,
  'dynamite-shrimps': 2, 'dynamite-chicken': 2,
  'chicken-shashlik-l': 2, 'chicken-shashlik-s': 2,
  'general-tao-chicken-l': 1, 'general-tao-chicken-s': 1,
  'general-tao-chicken-burger': 1, 'general-tao-chicken-burger-trio': 1,
  'mongolian-beef-l': 1, 'mongolian-chicken-l': 1, 'mongolian-beef-s': 1, 'mongolian-chicken-s': 1,
  'mongolian-chicken-burger': 1, 'mongolian-chicken-burger-trio': 1,
  'crispy-fried-chicken-burger': 1, 'crispy-fried-chicken-burger-trio': 1,
}));

const cats = raw.menu.categories.map((c) => {
  const cname = clean(c.en.name);
  return {
    slug: slug(cname),
    name: { en: cname, fr: FR_NAME_FIX.get(clean(c.fr.name)) ?? clean(c.fr.name) ?? cname },
    items: c.items.map((it) => {
      const en = NAME_FIX.get(clean(it.en.name)) ?? clean(it.en.name);
      const s = slug(en);
      return {
        slug: s,
        price: Number(it.en.price),
        heat: HEAT.get(s) ?? 0,
        name: { en, fr: FR_NAME_FIX.get(clean(it.fr.name)) ?? clean(it.fr.name) ?? en },
        desc: { en: clean(it.en.description), fr: cleanFr(it.fr.description) },
        // The kitchen photographs most dishes. Kept as the upstream URL so the
        // shot list stays honest about which of these are already downloaded
        // and optimised into /public/img.
        photo: (it.en.photo || {}).url || null,
      };
    }).filter((i) => i.name.en && Number.isFinite(i.price)),
  };
});

const ts = `// AUTO-GENERATED from the restaurant's own ordering system (order.hakkagrill.ca).
// Do not edit by hand — run: node build-menu.mjs
// Prices in CAD, exactly as the kitchen has them.
export type Locale = 'en' | 'fr';
export type Dish = {
  slug: string; price: number; heat: 0 | 1 | 2 | 3;
  name: Record<Locale, string>; desc: Record<Locale, string>;
  photo: string | null;
};
export type Category = { slug: string; name: Record<Locale, string>; items: Dish[] };

export const MENU: Category[] = ${JSON.stringify(cats, null, 2)} as unknown as Category[];

export const findDish = (s: string): Dish | undefined =>
  MENU.flatMap((c) => c.items).find((d) => d.slug === s);
`;
fs.writeFileSync('lib/menu-data.ts', ts);
console.log('categories:', cats.length, 'items:', cats.reduce((a, c) => a + c.items.length, 0));
