/** Real photographs taken at the restaurant. Slug -> sizes + bilingual alt. */
export const GALLERY = [
  { slug: 'room', ratio: '3 / 2', alt: {
      en: 'The Hakka Grill dining room: crystal chandeliers, navy chairs and marble tables running to the front window',
      fr: 'La salle à manger de Hakka Grill : lustres en cristal, chaises marine et tables de marbre jusqu’à la vitrine' } },
  { slug: 'table', ratio: '2 / 3', alt: {
      en: 'A long table set with glassware and menus, warm gold light along the wall behind',
      fr: 'Une longue table dressée avec verrerie et menus, lumière dorée le long du mur' } },
  { slug: 'spread', ratio: '5 / 4', alt: {
      en: 'Three plates on marble: chow mein, sesame shrimp with fried rice, and chili chicken',
      fr: 'Trois assiettes sur le marbre : chow mein, crevettes au sésame avec riz frit et poulet chili' } },
  { slug: 'detail', ratio: '2 / 3', alt: {
      en: 'A table number card and candle on marble, the dining room soft behind it',
      fr: 'Un numéro de table et une bougie sur le marbre, la salle floue en arrière-plan' } },
  { slug: 'beef', ratio: '3 / 2', alt: {
      en: 'Mongolian beef in a patterned bowl, scallions and red pepper through a dark glaze',
      fr: 'Bœuf mongol dans un bol à motifs, oignons verts et poivron rouge dans un glaçage foncé' } },
  { slug: 'burger', ratio: '3 / 2', alt: {
      en: 'A fried chicken burger in a basket, lettuce spilling from a soft bun',
      fr: 'Un burger au poulet frit dans un panier, laitue débordant du pain moelleux' } },
] as const;

export type GalleryItem = (typeof GALLERY)[number];
