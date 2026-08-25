import type { Locale } from './menu-data';

export const LOCALES: Locale[] = ['en', 'fr'];
export const DEFAULT_LOCALE: Locale = 'en';
export const isLocale = (v: string): v is Locale => (LOCALES as string[]).includes(v);

/**
 * All visible copy. Written for both markets rather than machine-translated:
 * the French is Québec French, not a literal rendering of the English.
 */
export const COPY = {
  en: {
    htmlLang: 'en-CA',
    nav: { menu: 'Menu', story: 'Our Story', experience: 'Experience', visit: 'Visit', order: 'Order Online', reserve: 'Reserve', skip: 'Skip to content', close: 'Close', open: 'Open menu' },
    hero: {
      line1: 'Experience', line2: 'authentic', line3: 'halal flavour.',
      lede: 'Hakka Chinese cooking, fired in a Montreal wok. One hundred percent halal, every plate, every night.',
      order: 'Order Now', reserve: 'Reserve a Table', scroll: 'Scroll',
    },
    marquee: ['Halal', 'Hakka', 'Montreal', 'Fire', 'Flavour', 'Family', 'Fresh'],
    dishes: {
      eyebrow: 'Signature',
      title1: 'The dishes', title2: 'you come back for.',
      lede: 'Six plates that regulars order without opening the menu.',
      cta: 'See the full menu',
      heat: 'Heat',
      heatLabels: ['No heat', 'Mild', 'Medium', 'Hot'],
    },
    craft: {
      words: ['Sweet.', 'Spicy.', 'Crispy.', 'Unmistakably Hakka.'],
      body: 'Every order starts cold and finishes in seconds — high heat, constant motion, sauce reduced to a glaze in the pan. That is what Hakka cooking is: speed, fire, and a wok that never really cools down.',
      overlay1: 'Made fresh.', overlay2: 'Served with fire.',
    },
    story: {
      eyebrow: 'Our Story',
      title1: 'Rooted in culture.', title2: 'Raised on flavour.',
      body: [
        'Hakka Grill began the way most good restaurants do — in a family kitchen, cooking for people who were already family.',
        'The Hakka table has always travelled. Chinese cooking carried across borders, picking up chilli, garlic and ginger along the way, until it became something with its own name. We cook that food the way we grew up eating it, and we cook it halal, without asking anyone to compromise.',
        'Today that kitchen sits on Saint-Laurent, under the chandeliers, still feeding people like family.',
      ],
      cta: 'Read more',
    },
    halal: {
      big1: '100%', big2: 'Halal',
      title: 'Made with integrity.',
      body: 'Every protein in this kitchen is halal — no separate menu, no exceptions, no asking. It is not a section of what we do. It is the whole restaurant.',
      note: 'Bring anyone. There is nothing on this menu they cannot eat.',
    },
    menu: {
      eyebrow: 'The Menu',
      title1: 'Ninety-nine reasons', title2: 'to sit down.',
      lede: 'Appetizers through desserts, mocktails through kids’ plates. Here is a taste — the full list is one tap away.',
      viewAll: 'View full menu', order: 'Order online',
      from: 'from',
      pageTitle: 'Menu',
      pageLede: 'The complete Hakka Grill menu. Prices in Canadian dollars, taxes not included.',
      jump: 'Jump to',
      allergen: 'Allergies or dietary questions? Call us at',
      before: 'before you order and we will walk you through it.',
    },
    experience: {
      eyebrow: 'The Room',
      title1: 'Come for the flavour.', title2: 'Stay for the experience.',
      body: 'Chandeliers, marble tables and a window onto Saint-Laurent. It is a room built for long tables and second helpings — birthdays, iftars, Friday nights that run late.',
      cta: 'See the gallery',
    },
    gallery: { eyebrow: 'Gallery', title: 'Inside Hakka Grill.', lede: 'Photographed at the restaurant.', open: 'View image', prev: 'Previous', next: 'Next' },
    reserve: {
      eyebrow: 'Reservations',
      title1: 'Your table', title2: 'is waiting.',
      body: 'Tables for two, or the long one down the middle for fifteen. Call and we will set it aside.',
      cta: 'Call to reserve', secondary: 'Order for pickup instead',
      note: 'Reservations are taken by phone during opening hours.',
    },
    visit: {
      eyebrow: 'Visit',
      title1: 'Find us on', title2: 'Saint-Laurent.',
      hours: 'Hours', address: 'Address', call: 'Call', directions: 'Get directions',
      closed: 'Closed', today: 'Today',
      openNow: 'Open now', closesAt: 'until', opensAt: 'Opens', closedNow: 'Closed now',
      map: 'Open in Google Maps',
      mapAria: 'Map showing Hakka Grill at 4274 St Laurent Blvd, Montreal',
    },
    footer: { order: 'Order Online', reserve: 'Reserve', menu: 'Menu', story: 'Our Story', experience: 'Experience', visit: 'Visit', instagram: 'Instagram', directions: 'Directions', rights: 'All rights reserved.', built: 'Halal Chinese & BBQ on Saint-Laurent.' },
    lang: { switch: 'Français', label: 'Change language' },
    notFound: { title: 'Page not found.', body: 'That page has left the pass. Head back to the dining room.', cta: 'Back home' },
  },

  fr: {
    htmlLang: 'fr-CA',
    nav: { menu: 'Menu', story: 'Notre histoire', experience: 'L’expérience', visit: 'Nous trouver', order: 'Commander', reserve: 'Réserver', skip: 'Aller au contenu', close: 'Fermer', open: 'Ouvrir le menu' },
    hero: {
      line1: 'Goûtez la', line2: 'vraie saveur', line3: 'halal.',
      lede: 'La cuisine hakka, saisie au wok en plein Montréal. Cent pour cent halal, à chaque assiette, tous les soirs.',
      order: 'Commander', reserve: 'Réserver une table', scroll: 'Défiler',
    },
    marquee: ['Halal', 'Hakka', 'Montréal', 'Feu', 'Saveur', 'Famille', 'Frais'],
    dishes: {
      eyebrow: 'Nos signatures',
      title1: 'Les plats', title2: 'qui vous ramènent.',
      lede: 'Six assiettes que les habitués commandent sans ouvrir le menu.',
      cta: 'Voir le menu complet',
      heat: 'Piquant',
      heatLabels: ['Doux', 'Légèrement piquant', 'Piquant', 'Très piquant'],
    },
    craft: {
      words: ['Sucré.', 'Épicé.', 'Croustillant.', 'Résolument hakka.'],
      body: 'Chaque commande part à froid et se termine en quelques secondes — feu vif, mouvement constant, sauce réduite en glaçage dans la poêle. C’est ça, la cuisine hakka : la vitesse, le feu, et un wok qui ne refroidit jamais vraiment.',
      overlay1: 'Préparé sur place.', overlay2: 'Servi avec du feu.',
    },
    story: {
      eyebrow: 'Notre histoire',
      title1: 'Enracinés dans la culture.', title2: 'Élevés à la saveur.',
      body: [
        'Hakka Grill a commencé comme la plupart des bons restaurants — dans une cuisine familiale, à nourrir des gens qui étaient déjà de la famille.',
        'La table hakka a toujours voyagé. Une cuisine chinoise portée au-delà des frontières, qui a ramassé le piment, l’ail et le gingembre en chemin, jusqu’à devenir une cuisine à part entière. On la prépare comme on l’a mangée en grandissant, et on la prépare halal, sans demander à personne de faire de compromis.',
        'Aujourd’hui, cette cuisine est sur Saint-Laurent, sous les lustres, et nourrit toujours les gens comme de la famille.',
      ],
      cta: 'En savoir plus',
    },
    halal: {
      big1: '100 %', big2: 'Halal',
      title: 'Préparé avec intégrité.',
      body: 'Toutes les viandes de cette cuisine sont halal — pas de menu séparé, pas d’exception, pas besoin de demander. Ce n’est pas une partie de ce qu’on fait. C’est tout le restaurant.',
      note: 'Venez avec qui vous voulez. Il n’y a rien ici qu’ils ne peuvent pas manger.',
    },
    menu: {
      eyebrow: 'Le menu',
      title1: 'Quatre-vingt-dix-neuf raisons', title2: 'de vous asseoir.',
      lede: 'Des entrées aux desserts, des mocktails aux assiettes pour enfants. En voici un aperçu — le menu complet est à un clic.',
      viewAll: 'Voir le menu complet', order: 'Commander en ligne',
      from: 'à partir de',
      pageTitle: 'Menu',
      pageLede: 'Le menu complet de Hakka Grill. Prix en dollars canadiens, taxes en sus.',
      jump: 'Aller à',
      allergen: 'Allergies ou questions alimentaires ? Appelez-nous au',
      before: 'avant de commander et on vous guidera.',
    },
    experience: {
      eyebrow: 'La salle',
      title1: 'Venez pour la saveur.', title2: 'Restez pour l’expérience.',
      body: 'Des lustres, des tables de marbre et une fenêtre sur Saint-Laurent. Une salle faite pour les longues tablées et les deuxièmes services — anniversaires, iftars, vendredis soirs qui s’étirent.',
      cta: 'Voir la galerie',
    },
    gallery: { eyebrow: 'Galerie', title: 'Dans la salle.', lede: 'Photographié au restaurant.', open: 'Voir l’image', prev: 'Précédent', next: 'Suivant' },
    reserve: {
      eyebrow: 'Réservations',
      title1: 'Votre table', title2: 'vous attend.',
      body: 'Une table pour deux, ou la grande au centre pour quinze. Appelez et on vous la garde.',
      cta: 'Appeler pour réserver', secondary: 'Commander pour emporter',
      note: 'Les réservations se prennent par téléphone pendant les heures d’ouverture.',
    },
    visit: {
      eyebrow: 'Nous trouver',
      title1: 'On est sur', title2: 'Saint-Laurent.',
      hours: 'Heures d’ouverture', address: 'Adresse', call: 'Appeler', directions: 'Itinéraire',
      closed: 'Fermé', today: 'Aujourd’hui',
      openNow: 'Ouvert', closesAt: 'jusqu’à', opensAt: 'Ouvre à', closedNow: 'Fermé',
      map: 'Ouvrir dans Google Maps',
      mapAria: 'Carte indiquant Hakka Grill au 4274 boulevard Saint-Laurent, Montréal',
    },
    footer: { order: 'Commander', reserve: 'Réserver', menu: 'Menu', story: 'Notre histoire', experience: 'L’expérience', visit: 'Nous trouver', instagram: 'Instagram', directions: 'Itinéraire', rights: 'Tous droits réservés.', built: 'Cuisine chinoise halal et BBQ sur Saint-Laurent.' },
    lang: { switch: 'English', label: 'Changer de langue' },
    notFound: { title: 'Page introuvable.', body: 'Cette page a quitté la salle. Retournez à table.', cta: 'Retour à l’accueil' },
  },
} as const;

export type Copy = (typeof COPY)['en'];
