import { MENU, type Dish } from './menu-data';

/**
 * Signature dishes for the homepage.
 *
 * Each image is the kitchen's own photograph of that exact dish, taken from the
 * ordering system where every menu item carries its own shot. Nothing here is a
 * crop guessed out of a group photo, and nothing is stock.
 *
 * Dynamite Shrimp still is not featured: it is the most-praised dish on every
 * review site, but the photograph attached to it upstream does not clearly show
 * it. It stays first on the shot list in ASSETS.md.
 */
export type Featured = {
  dish: Dish;
  img: string;
  /** object-position, when a frame needs a different part of the photograph. */
  position?: string;
  alt: Record<'en' | 'fr', string>;
};

const pick = (slug: string): Dish => {
  const d = MENU.flatMap((c) => c.items).find((i) => i.slug === slug);
  if (!d) throw new Error(`Featured dish "${slug}" is not on the menu — check lib/menu-data.ts`);
  return d;
};

export const FEATURED: Featured[] = [
  {
    dish: pick('sesame-shrimps-s'),
    img: 'sesame',
    alt: {
      en: 'Sesame shrimp in a glossy glaze, scattered with black and white sesame seeds, served with egg fried rice',
      fr: 'Crevettes au sésame dans un glaçage brillant, parsemées de graines de sésame, servies avec du riz frit aux œufs',
    },
  },
  {
    dish: pick('chili-chicken-s'),
    img: 'chili',
    alt: {
      en: 'Chili chicken glazed deep red, topped with sliced scallions, alongside fried rice',
      fr: 'Poulet chili au glaçage rouge profond, garni d’oignons verts, accompagné de riz frit',
    },
  },
  {
    dish: pick('mongolian-beef-l'),
    img: 'beef',
    alt: {
      en: 'Mongolian beef stir-fried with scallions, red pepper and peanuts in a dark savoury sauce',
      fr: 'Bœuf mongol sauté avec oignons verts, poivron rouge et arachides dans une sauce foncée',
    },
  },
  {
    dish: pick('kung-pao-chicken-l'),
    img: 'kungpao',
    alt: {
      en: 'Kung pao chicken with roasted peanuts and scallions in a glossy sauce, served over fries',
      fr: 'Poulet kung pao aux arachides grillées et oignons verts dans une sauce brillante, servi sur frites',
    },
  },
  {
    dish: pick('chef-s-special-chow-mein-l'),
    img: 'chowmein',
    alt: {
      en: 'Chef’s special chow mein — noodles tossed with beef, green pepper, carrot and scallion',
      fr: 'Chow mein spécial du chef — nouilles sautées avec bœuf, poivron vert, carotte et oignon vert',
    },
  },
  {
    dish: pick('korean-chicken-burger'),
    img: 'burger',
    alt: {
      en: 'Korean chicken burger — craggy fried chicken and crisp lettuce in a soft bun, in a basket',
      fr: 'Burger au poulet coréen — poulet frit croustillant et laitue fraîche dans un pain moelleux',
    },
  },
];
