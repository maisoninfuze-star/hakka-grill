// AUTO-GENERATED from the restaurant's own ordering system (order.hakkagrill.ca).
// Do not edit by hand — run: node build-menu.mjs
// Prices in CAD, exactly as the kitchen has them.
export type Locale = 'en' | 'fr';
export type Dish = {
  slug: string; price: number; heat: 0 | 1 | 2 | 3;
  name: Record<Locale, string>; desc: Record<Locale, string>;
  photo: string | null;
};
export type Category = { slug: string; name: Record<Locale, string>; items: Dish[] };

export const MENU: Category[] = [
  {
    "slug": "appetizers",
    "name": {
      "en": "Appetizers",
      "fr": "Entrées"
    },
    "items": [
      {
        "slug": "chicken-corn-soup-l",
        "price": 23.99,
        "heat": 0,
        "name": {
          "en": "Chicken Corn Soup (L)",
          "fr": "Soupe poulet et maïs"
        },
        "desc": {
          "en": "A comforting soup made with sweet corn kernels, classic egg drop flowers, tender chicken pieces and a delicate broth.",
          "fr": "Une soupe réconfortante préparée avec des grains de maïs doux, des œufs brouillés classiques et des morceaux de poulet tendres"
        },
        "photo": "https://betterresto.s3.us-west-1.wasabisys.com/production/13382/2025_10_27_00_20_50_019_8afc58a5fe.jpg"
      },
      {
        "slug": "honey-garlic-fries",
        "price": 9.99,
        "heat": 0,
        "name": {
          "en": "Honey Garlic Fries",
          "fr": "Frites au miel et à l'ail"
        },
        "desc": {
          "en": "Crispy golden fries tossed in a sweet and savory honey garlic glaze.",
          "fr": "Frites dorées et croustillantes enrobées d'un glaçage sucré"
        },
        "photo": "https://betterresto.s3.us-west-1.wasabisys.com/production/13382/2025_10_27_00_20_50_083_b15ee9fbe6.jpg"
      },
      {
        "slug": "spring-rolls",
        "price": 8.99,
        "heat": 0,
        "name": {
          "en": "Spring Rolls",
          "fr": "Rouleaux de printemps"
        },
        "desc": {
          "en": "Crispy golden rolls stuffed with a fresh mix of seasoned vegetables, served with a tangy dipping sauce.",
          "fr": "Rouleaux dorés et croustillants farcis d'un mélange frais de légumes assaisonnés, servis avec une sauce piquante."
        },
        "photo": "https://betterresto.s3.us-west-1.wasabisys.com/production/13382/2025_10_27_00_20_50_034_1f245b4b12.jpg"
      },
      {
        "slug": "tempura-shrimps",
        "price": 11.99,
        "heat": 0,
        "name": {
          "en": "Tempura Shrimps",
          "fr": "Crevettes tempura"
        },
        "desc": {
          "en": "Juicy shrimp coated in a light, crispy tempura batter, fried to golden perfection and served with dipping sauce.",
          "fr": "Crevettes juteuses enrobées d'une pâte à tempura légère et croustillante, frites à la perfection et servies avec une sauce."
        },
        "photo": "https://betterresto.s3.us-west-1.wasabisys.com/production/13382/2025_10_27_00_20_50_085_7842cc4088.jpg"
      },
      {
        "slug": "honey-garlic-wings-6-pieces",
        "price": 12.99,
        "heat": 0,
        "name": {
          "en": "Honey Garlic Wings (6 pieces)",
          "fr": "Ailes au miel et à l'ail (6 pièces)"
        },
        "desc": {
          "en": "Chicken wings tossed in golden brown honey garlic glaze",
          "fr": "Ailes de poulet enrobées d'un glaçage doré au miel et à l'ail."
        },
        "photo": "https://betterresto.s3.us-west-1.wasabisys.com/production/13382/2025_10_27_00_20_50_039_13aee5d14b.jpg"
      },
      {
        "slug": "honey-garlic-chicken-bites",
        "price": 10.99,
        "heat": 0,
        "name": {
          "en": "Honey Garlic Chicken Bites",
          "fr": "Bouchées de poulet au miel et à l'ail"
        },
        "desc": {
          "en": "Crispy chicken bites tossed in a sweet and savory honey garlic glaze. A perfect balance of crunch and flavor in every bite!",
          "fr": "De délicieux morceaux de poulet croustillants enrobés d'une sauce miel"
        },
        "photo": "https://betterresto.s3.us-west-1.wasabisys.com/production/13382/2025_10_27_00_20_50_035_40c0f1c283.jpg"
      },
      {
        "slug": "fried-fish",
        "price": 12.99,
        "heat": 0,
        "name": {
          "en": "Fried Fish",
          "fr": "Poisson frit"
        },
        "desc": {
          "en": "Crispy, golden-battered fish fillets with tender, flaky insides. Served with our dynamite dipping sauce.",
          "fr": "Filets de poisson panés, croustillants et dorés, à la chair tendre et feuilletée. Servis avec notre sauce explosif !"
        },
        "photo": "https://betterresto.s3.us-west-1.wasabisys.com/production/13382/2025_10_27_00_20_50_043_743069029b.jpg"
      },
      {
        "slug": "lollipop-chicken-4-pieces",
        "price": 14.99,
        "heat": 0,
        "name": {
          "en": "Lollipop Chicken (4 pieces)",
          "fr": "Poulet Lollipop (4 morceaux)"
        },
        "desc": {
          "en": "Crispy and flavorful chicken drum lollipop, marinated and then batter fried until crisp.",
          "fr": "Sucettes de pilon de poulet croustillantes et savoureuses, marinées puis frites en pâte à beignets jusqu'à ce qu'elles soient croustillantes."
        },
        "photo": "https://betterresto.s3.us-west-1.wasabisys.com/production/13382/2025_10_27_00_20_50_100_5032483151.jpg"
      },
      {
        "slug": "garlic-shrimps",
        "price": 12.99,
        "heat": 0,
        "name": {
          "en": "Garlic Shrimps",
          "fr": "Crevettes à l'ail"
        },
        "desc": {
          "en": "Juicy shrimp sautéed in a succulent garlic butter and served with a side of dipping sauce.",
          "fr": "Crevettes juteuses sautées dans une succulente sauce au beurre à l'ail."
        },
        "photo": "https://betterresto.s3.us-west-1.wasabisys.com/production/13382/2025_10_27_00_20_50_062_f2b0643726.jpg"
      },
      {
        "slug": "french-fries",
        "price": 5.99,
        "heat": 0,
        "name": {
          "en": "French Fries",
          "fr": "Frites"
        },
        "desc": {
          "en": "Single serving of fries.",
          "fr": "Portion individuelle de frites."
        },
        "photo": "https://betterresto.s3.us-west-1.wasabisys.com/production/13382/2025_10_27_00_20_50_072_0278759ceb.jpg"
      },
      {
        "slug": "dynamite-shrimps",
        "price": 12.99,
        "heat": 2,
        "name": {
          "en": "Dynamite Shrimps",
          "fr": "Crevettes dynamite"
        },
        "desc": {
          "en": "Crispy, fried shrimp coated in a spicy mayonnaise dressing.",
          "fr": "Crevettes frites croustillantes enrobées d'une sauce mayonnaise épicée."
        },
        "photo": "https://betterresto.s3.us-west-1.wasabisys.com/production/13382/2025_10_27_00_20_50_091_cd38c344b2.jpg"
      },
      {
        "slug": "dynamite-chicken",
        "price": 10.99,
        "heat": 2,
        "name": {
          "en": "Dynamite Chicken",
          "fr": "Poulet dynamite"
        },
        "desc": {
          "en": "Tender chicken pieces tossed in a spicy mayo sauce.",
          "fr": "Morceaux de poulet tendres enrobés d'une sauce mayonnaise épicée."
        },
        "photo": "https://betterresto.s3.us-west-1.wasabisys.com/production/13382/2025_10_27_00_20_50_021_d7d95402cd.jpg"
      },
      {
        "slug": "chicken-corn-soup-s",
        "price": 8.99,
        "heat": 0,
        "name": {
          "en": "Chicken Corn Soup (S)",
          "fr": "Soupe de poulet et maïs (S)"
        },
        "desc": {
          "en": "A comforting soup made with sweet corn kernels, classic egg drop flowers, tender chicken pieces and a delicate broth.",
          "fr": "Une soupe réconfortante préparée avec des grains de maïs doux, des œufs brouillés classiques, des morceaux de poulet tendres et un bouillon délicat."
        },
        "photo": "https://betterresto.s3.us-west-1.wasabisys.com/production/13382/2025_10_27_00_20_50_069_0e2e64a54a.jpg"
      },
      {
        "slug": "chef-special-soup-s",
        "price": 9.99,
        "heat": 0,
        "name": {
          "en": "Chef Special Soup (S)",
          "fr": "Soupe spéciale du chef (S)"
        },
        "desc": {
          "en": "Our chef's special creation, a rich and flavorful soup with chicken, shrimp and a variety of fresh vegetables.",
          "fr": "La création spéciale de notre chef : une soupe riche et savoureuse au poulet, aux crevettes et à une variété de légumes frais."
        },
        "photo": "https://betterresto.s3.us-west-1.wasabisys.com/production/13382/2025_10_27_00_20_50_047_1597d7a938.jpg"
      },
      {
        "slug": "chef-special-soup-l",
        "price": 25.99,
        "heat": 0,
        "name": {
          "en": "Chef Special Soup (L)",
          "fr": "Soupe spéciale du chef (L)"
        },
        "desc": {
          "en": "Our chef's special creation, a rich and flavorful soup with chicken, shrimp and a variety of fresh vegetables.",
          "fr": "La création spéciale de notre chef : une soupe riche et savoureuse au poulet, aux crevettes et à une variété de légumes frais."
        },
        "photo": "https://betterresto.s3.us-west-1.wasabisys.com/production/13382/2025_10_27_00_20_50_067_e3bc003a83.jpg"
      }
    ]
  },
  {
    "slug": "main-course-large-serving",
    "name": {
      "en": "Main Course Large Serving",
      "fr": "Plat Principal Grande Portion"
    },
    "items": [
      {
        "slug": "sesame-shrimps-l",
        "price": 26.99,
        "heat": 0,
        "name": {
          "en": "Sesame Shrimps (L)",
          "fr": "Crevettes au sésame"
        },
        "desc": {
          "en": "Crispy Shrimp tossed in a sweet, salty, crispy, sticky and a little bit spicy, garnished with sesame seeds.",
          "fr": "Crevettes croustillantes enrobées d'une sauce sucrée et parsemé de graines de sésame pour plus de saveur et de croquant."
        },
        "photo": "https://betterresto.s3.us-west-1.wasabisys.com/production/13382/2025_10_27_00_20_50_059_cfe6754bbf.jpg"
      },
      {
        "slug": "sweet-and-sour-chicken-l",
        "price": 24.99,
        "heat": 0,
        "name": {
          "en": "Sweet and Sour Chicken (L)",
          "fr": "Poulet aigre-doux"
        },
        "desc": {
          "en": "Crispy chicken tossed in a sweet and sour sauce with mixed bell peppers and pineapple.",
          "fr": "Poulet croustillant enrobé d'une sauce aigre-doux avec des poivrons et ananas"
        },
        "photo": "https://betterresto.s3.us-west-1.wasabisys.com/production/13382/2025_10_27_00_20_50_055_c098b175b9.jpg"
      },
      {
        "slug": "sweet-and-sour-shrimps-l",
        "price": 26.99,
        "heat": 0,
        "name": {
          "en": "Sweet and Sour Shrimps (L)",
          "fr": "Crevettes aigres-douces"
        },
        "desc": {
          "en": "Crispy shrimp tossed in a sweet and sour sauce with mixed bell peppers and pineapple.",
          "fr": "Crevettes croustillantes enrobées d'une sauce aigre-doux avec des poivrons et ananas"
        },
        "photo": "https://betterresto.s3.us-west-1.wasabisys.com/production/13382/2025_10_27_00_20_50_070_5e8dfe3405.jpg"
      },
      {
        "slug": "sesame-chicken-l",
        "price": 24.99,
        "heat": 0,
        "name": {
          "en": "Sesame Chicken (L)",
          "fr": "Poulet au sésame"
        },
        "desc": {
          "en": "Crispy chicken tossed in a sweet, salty, crispy, sticky and a little bit spicy sauce, garnished with sesame seeds.",
          "fr": "Du poulet frit croustillant, enrobé d'un glaçage sucré et parsemé de graines de sésame pour plus de saveur et de croquant."
        },
        "photo": "https://betterresto.s3.us-west-1.wasabisys.com/production/13382/2025_10_27_00_20_50_024_ba1efd800b.jpg"
      },
      {
        "slug": "mongolian-beef-l",
        "price": 26.99,
        "heat": 1,
        "name": {
          "en": "Mongolian Beef (L)",
          "fr": "Bœuf mongol"
        },
        "desc": {
          "en": "Sliced beef stir-fried with onions and scallions in a savory Mongolian sauce.",
          "fr": "Bœuf tendre frit avec brocoli et oignons dans une sauce soja sucrée et légèrement épicée"
        },
        "photo": "https://betterresto.s3.us-west-1.wasabisys.com/production/13382/2025_10_27_00_20_50_080_a3ef5b9762.jpg"
      },
      {
        "slug": "mongolian-chicken-l",
        "price": 24.99,
        "heat": 1,
        "name": {
          "en": "Mongolian Chicken (L)",
          "fr": "Poulet mongol"
        },
        "desc": {
          "en": "Sliced chicken stir-fried with onions and scallions in a savory Mongolian sauce.",
          "fr": "Poulet sauté avec des oignons et des oignons verts dans une savoureuse sauce soja sucrée et légèrement épicée"
        },
        "photo": "https://betterresto.s3.us-west-1.wasabisys.com/production/13382/2025_10_27_00_20_50_052_048c23f014.jpg"
      },
      {
        "slug": "kung-pao-chicken-l",
        "price": 24.99,
        "heat": 2,
        "name": {
          "en": "Kung Pao Chicken (L)",
          "fr": "Poulet Kung Pao"
        },
        "desc": {
          "en": "A classic Chinese dish with diced chicken, peanuts, and vegetables in a salty, sweet and spicy sauce.",
          "fr": "Un plat chinois classique composé de poulet en dés, de cacahuètes et de légumes dans une sauce salée, sucrée et épicée."
        },
        "photo": "https://betterresto.s3.us-west-1.wasabisys.com/production/13382/2025_10_27_00_20_50_053_c41343a1e4.jpg"
      },
      {
        "slug": "kung-pao-beef-l",
        "price": 26.99,
        "heat": 2,
        "name": {
          "en": "Kung Pao Beef (L)",
          "fr": "Bœuf kung pao"
        },
        "desc": {
          "en": "A classic Chinese dish with diced beef, peanuts, and vegetables in a salty, sweet and spicy sauce.",
          "fr": "Un plat chinois classique composé de bœuf en dés, de cacahuètes et de légumes dans une sauce salée, sucrée et épicée."
        },
        "photo": "https://betterresto.s3.us-west-1.wasabisys.com/production/13382/2025_10_27_00_20_50_053_c41343a1e4.jpg"
      },
      {
        "slug": "korean-chicken-l",
        "price": 24.99,
        "heat": 2,
        "name": {
          "en": "Korean Chicken (L)",
          "fr": "Poulet coréen"
        },
        "desc": {
          "en": "Double deep-fried chicken coated with sticky, spicy and sweet sauce.",
          "fr": "Poulet frit, enrobé d'une sauce collante, épicée et sucrée."
        },
        "photo": "https://betterresto.s3.us-west-1.wasabisys.com/production/13382/2025_10_27_00_20_50_098_d32f654e02.jpg"
      },
      {
        "slug": "heavenly-white-sauce-fish-l",
        "price": 26.99,
        "heat": 0,
        "name": {
          "en": "Heavenly White Sauce Fish (L)",
          "fr": "Poisson à la sauce blanche divine"
        },
        "desc": {
          "en": "Tender fish fillets cooked in a rich, creamy white sauce with delicate spices. A smooth and flavorful delight!",
          "fr": "De tendres filets de poisson cuits dans une sauce blanche onctueuse et riche, délicatement épicée. Un délice fondant et savoureux !"
        },
        "photo": "https://betterresto.s3.us-west-1.wasabisys.com/production/13382/2025_10_27_00_20_50_007_5ebed78492.jpg"
      },
      {
        "slug": "general-tao-chicken-l",
        "price": 24.99,
        "heat": 1,
        "name": {
          "en": "General Tao Chicken (L)",
          "fr": "Poulet du Général Tao"
        },
        "desc": {
          "en": "Crispy chicken tossed in a sweet, tangy, and slightly spicy sauce, known for its rich glaze and bold flavor.",
          "fr": "Du poulet croustillant enrobé d'une sauce légèrement épicée, réputée pour son glaçage riche et sa saveur prononcée."
        },
        "photo": "https://betterresto.s3.us-west-1.wasabisys.com/production/13382/2025_10_27_00_20_50_098_d32f654e02.jpg"
      },
      {
        "slug": "chili-chicken-l",
        "price": 24.99,
        "heat": 3,
        "name": {
          "en": "Chili Chicken (L)",
          "fr": "Poulet chili"
        },
        "desc": {
          "en": "Chicken cooked with fresh chili peppers, onions, and bell peppers in a spicy sauce.",
          "fr": "Poulet cuit avec des piments frais, des oignons et des poivrons dans une sauce épicée."
        },
        "photo": "https://betterresto.s3.us-west-1.wasabisys.com/production/13382/2025_10_27_00_20_50_031_70ee9d365a.jpg"
      },
      {
        "slug": "chili-beef-l",
        "price": 26.99,
        "heat": 3,
        "name": {
          "en": "Chili Beef (L)",
          "fr": "Bœuf chili"
        },
        "desc": {
          "en": "Beef cooked with fresh chili peppers, onions, and bell peppers in a spicy sauce.",
          "fr": "Bœuf cuit avec des piments frais, des oignons et des poivrons dans une sauce épicée."
        },
        "photo": "https://betterresto.s3.us-west-1.wasabisys.com/production/13382/2025_10_27_00_20_50_093_85d3d64226.jpg"
      },
      {
        "slug": "chicken-shashlik-l",
        "price": 24.99,
        "heat": 2,
        "name": {
          "en": "Chicken Shashlik (L)",
          "fr": "Poulet Shashlik"
        },
        "desc": {
          "en": "Tender chicken cooked in a tangy, spiced sauce offering a burst of bold flavors.",
          "fr": "Du poulet tendre cuit dans une sauce acidulée et épicée offrant une explosion de saveurs audacieuses."
        },
        "photo": "https://betterresto.s3.us-west-1.wasabisys.com/production/13382/2025_10_27_00_20_50_036_5749f0c9d9.jpg"
      },
      {
        "slug": "chicken-manchurian-l",
        "price": 24.99,
        "heat": 2,
        "name": {
          "en": "Chicken Manchurian (L)",
          "fr": "Poulet Manchurian"
        },
        "desc": {
          "en": "Deep-fried chicken tossed in a spicy, tangy soy-garlic sauce with a hint of chili.",
          "fr": "Poulet frit enrobé d'une sauce soja épicée et acidulée"
        },
        "photo": "https://betterresto.s3.us-west-1.wasabisys.com/production/13382/2025_10_27_00_20_50_092_bdbd193a7e.jpg"
      }
    ]
  },
  {
    "slug": "main-course-single-serving",
    "name": {
      "en": "Main Course Single Serving",
      "fr": "Plat Principal Portion Individuelle"
    },
    "items": [
      {
        "slug": "sweet-sour-shrimps-s",
        "price": 20.99,
        "heat": 0,
        "name": {
          "en": "Sweet & Sour Shrimps (S)",
          "fr": "Crevettes aigres-douces"
        },
        "desc": {
          "en": "Crispy fried Shrimps tossed in a vibrant sweet and tangy sauce with bell peppers, onions, and pineapple.",
          "fr": "Crevettes frites croustillantes, enrobées d'une sauce aigre douce et savoureuse, avec des poivrons, des oignons et de l'ananas."
        },
        "photo": "https://betterresto.s3.us-west-1.wasabisys.com/production/13382/2025_10_27_00_20_50_041_2ef85d9121.jpg"
      },
      {
        "slug": "sweet-sour-chicken-s",
        "price": 19.99,
        "heat": 0,
        "name": {
          "en": "Sweet & Sour Chicken (S)",
          "fr": "Poulet aigre-doux"
        },
        "desc": {
          "en": "Crispy fried chicken tossed in a vibrant sweet and tangy sauce with bell peppers, onions, and pineapple.",
          "fr": "Du poulet frit croustillant enrobé d'une sauce aigre-douce et savoureuse, avec des poivrons, des oignons et de l'ananas."
        },
        "photo": "https://betterresto.s3.us-west-1.wasabisys.com/production/13382/2025_10_27_00_20_50_026_b1b9d36b6a.jpg"
      },
      {
        "slug": "chicken-shashlik-s",
        "price": 19.99,
        "heat": 2,
        "name": {
          "en": "Chicken Shashlik (S)",
          "fr": "Poulet shashlik"
        },
        "desc": {
          "en": "Crispy chicken tossed in a tangy, spicy sauce with bell peppers and onions for a bold, smoky flavor.",
          "fr": "Du poulet croustillant enrobé d'une sauce acidulée et épicée avec des poivrons et des oignons pour une saveur fumée prononcée."
        },
        "photo": "https://betterresto.s3.us-west-1.wasabisys.com/production/13382/2025_10_27_00_20_50_051_b01144f658.jpg"
      },
      {
        "slug": "sesame-shrimps-s",
        "price": 20.99,
        "heat": 0,
        "name": {
          "en": "Sesame Shrimps (S)",
          "fr": "Crevettes au sésame"
        },
        "desc": {
          "en": "Crispy fried shrimp tossed in a sweet, tangy glaze and sprinkled with sesame seeds for a rich, crunchy finish.",
          "fr": "Crevettes frites croustillantes, enrobées d'un glaçage sucrées et parsemées de graines de sésame pour une finition riche et croquante."
        },
        "photo": "https://betterresto.s3.us-west-1.wasabisys.com/production/13382/2025_10_27_00_20_50_030_4b5002d5ba.jpg"
      },
      {
        "slug": "sesame-chicken-s",
        "price": 19.99,
        "heat": 0,
        "name": {
          "en": "Sesame Chicken (S)",
          "fr": "Poulet au sésame"
        },
        "desc": {
          "en": "Crispy fried chicken coated in a sweet glaze and topped with sesame seeds for extra flavor and crunch.",
          "fr": "Du poulet frit croustillant, enrobé d'un glaçage sucré et parsemé de graines de sésame pour plus de saveur et de croquant."
        },
        "photo": "https://betterresto.s3.us-west-1.wasabisys.com/production/13382/2025_10_27_00_20_50_022_3ce2fa5b26.jpg"
      },
      {
        "slug": "mongolian-chicken-s",
        "price": 19.99,
        "heat": 1,
        "name": {
          "en": "Mongolian Chicken (S)",
          "fr": "Poulet mongol"
        },
        "desc": {
          "en": "Tender chicken stir-fried with broccoli, and onions in a sweet and mildly spicy soy-based glaze.",
          "fr": "Poulet tendre avec brocolis et oignons dans une sauce soja sucrée et légèrement épicée"
        },
        "photo": "https://betterresto.s3.us-west-1.wasabisys.com/production/13382/2025_10_27_00_20_50_078_42b80c986f.jpg"
      },
      {
        "slug": "mongolian-beef-s",
        "price": 20.99,
        "heat": 1,
        "name": {
          "en": "Mongolian Beef (S)",
          "fr": "Bœuf mongol"
        },
        "desc": {
          "en": "Tender beef stir-fried with broccoli and onions in a sweet and mildly spicy soy-based glaze.",
          "fr": "Bœuf tendre frit avec brocoli et oignons dans une sauce soja sucrée et légèrement épicée"
        },
        "photo": "https://betterresto.s3.us-west-1.wasabisys.com/production/13382/2025_10_27_00_20_50_037_ffe6d62028.jpg"
      },
      {
        "slug": "chicken-manchurian-s",
        "price": 19.99,
        "heat": 2,
        "name": {
          "en": "Chicken Manchurian (S)",
          "fr": "Poulet Manchurian"
        },
        "desc": {
          "en": "Crispy fried chicken tossed in a tangy, spicy Indo-Chinese sauce with garlic, soy, and green onions.",
          "fr": "Poulet frit croustillant enrobé d'une sauce indo-chinoise avec ail,soja et oignons verts."
        },
        "photo": "https://betterresto.s3.us-west-1.wasabisys.com/production/13382/2025_10_27_00_20_50_045_0f5d20086f.jpg"
      },
      {
        "slug": "kung-pao-chicken-s",
        "price": 19.99,
        "heat": 2,
        "name": {
          "en": "Kung Pao Chicken (S)",
          "fr": "Poulet Kung Pao"
        },
        "desc": {
          "en": "Juicy chicken stir-fried with peanuts, and bell peppers in a spicy, tangy soy-based sauce.",
          "fr": "Du poulet frit juteux cuit dans de l'huile d'arachide avec des cacahuètes croquantes et des poivrons colorés, le tout enrobé d'une sauce soja épicée et acidulée."
        },
        "photo": "https://betterresto.s3.us-west-1.wasabisys.com/production/13382/2025_10_27_00_20_50_076_396d4070bd.jpg"
      },
      {
        "slug": "kung-pao-beef-s",
        "price": 20.99,
        "heat": 2,
        "name": {
          "en": "Kung Pao Beef (S)",
          "fr": "Bœuf kung pao"
        },
        "desc": {
          "en": "Tender beef stir-fried with peanuts and bell peppers in a spicy, tangy soy-based sauce.",
          "fr": "Du bœuf frit juteux cuit dans de l'huile d'arachide avec des cacahuètes croquantes et des poivrons colorés, le tout enrobé d'une sauce soja épicée et acidulée."
        },
        "photo": "https://betterresto.s3.us-west-1.wasabisys.com/production/13382/2025_10_27_00_20_50_061_5686813b74.jpg"
      },
      {
        "slug": "heavenly-white-sauce-fish-s",
        "price": 20.99,
        "heat": 0,
        "name": {
          "en": "Heavenly White Sauce Fish (S)",
          "fr": "Poisson à la sauce blanche divine"
        },
        "desc": {
          "en": "Crispy fried basa fillet smothered in a rich, creamy oregano-based white sauce for a smooth and savory flavor.",
          "fr": "Filet de basa frit et croustillant, nappé d'une riche sauce blanche crémeuse à base d'origan pour une saveur onctueuse et savoureuse."
        },
        "photo": "https://betterresto.s3.us-west-1.wasabisys.com/production/13382/2025_10_27_00_20_50_028_4ee92fb363.jpg"
      },
      {
        "slug": "korean-chicken-s",
        "price": 19.99,
        "heat": 2,
        "name": {
          "en": "Korean Chicken (S)",
          "fr": "Poulet coréen"
        },
        "desc": {
          "en": "Crispy fried chicken coated in a sticky, sweet, and spicy, famous for its crunch and bold flavor.",
          "fr": "Du poulet frit croustillant enrobé d'une sauce collante, sucrée et épicée, célèbre pour son croustillant et sa saveur prononcée."
        },
        "photo": "https://betterresto.s3.us-west-1.wasabisys.com/production/13382/2025_10_27_00_20_50_011_f41eb240ad.jpg"
      },
      {
        "slug": "general-tao-chicken-s",
        "price": 19.99,
        "heat": 1,
        "name": {
          "en": "General Tao Chicken (S)",
          "fr": "Poulet Général Tao"
        },
        "desc": {
          "en": "Crispy chicken tossed in a sweet, tangy, and slightly spicy sauce, known for its rich glaze and bold flavour.",
          "fr": "Du poulet croustillant enrobé d'une sauce aigre-douce et légèrement épicée, réputée pour son glaçage riche et sa saveur prononcée."
        },
        "photo": "https://betterresto.s3.us-west-1.wasabisys.com/production/13382/2025_10_27_00_20_50_101_ca9fe10d01.jpg"
      },
      {
        "slug": "chili-chicken-s",
        "price": 19.99,
        "heat": 3,
        "name": {
          "en": "Chili Chicken (S)",
          "fr": "Poulet Chili"
        },
        "desc": {
          "en": "Crispy fried chicken with peppers and onions in a home-made spicy sauce",
          "fr": "Poulet frit croustillant avec poivrons et oignons dans une sauce épicée maison."
        },
        "photo": "https://betterresto.s3.us-west-1.wasabisys.com/production/13382/2025_10_27_00_20_50_029_f1d80ea849.jpg"
      },
      {
        "slug": "chili-beef-s",
        "price": 20.99,
        "heat": 3,
        "name": {
          "en": "Chili Beef (S)",
          "fr": "Bœuf Chili"
        },
        "desc": {
          "en": "Beef stir-fried with fresh chilli peppers, onions and bell peppers in a spicy sauce",
          "fr": "Bœuf frit croustillant avec poivrons et oignons dans une sauce épicée maison."
        },
        "photo": "https://betterresto.s3.us-west-1.wasabisys.com/production/13382/2025_10_27_00_20_50_077_358b8705d8.jpg"
      }
    ]
  },
  {
    "slug": "rice",
    "name": {
      "en": "Rice",
      "fr": "Riz"
    },
    "items": [
      {
        "slug": "egg-fried-rice",
        "price": 13.99,
        "heat": 0,
        "name": {
          "en": "Egg Fried Rice",
          "fr": "Riz frit aux œufs"
        },
        "desc": {
          "en": "Stir-fried rice with eggs",
          "fr": "Riz sauté aux œufs"
        },
        "photo": "https://betterresto.s3.us-west-1.wasabisys.com/production/13382/2025_10_27_00_20_50_071_44e1f6e1f3.jpg"
      },
      {
        "slug": "white-rice",
        "price": 10.99,
        "heat": 0,
        "name": {
          "en": "White Rice",
          "fr": "Riz Blanc"
        },
        "desc": {
          "en": "Plain white basmati Rice.",
          "fr": "Riz basmati blanc nature."
        },
        "photo": "https://betterresto.s3.us-west-1.wasabisys.com/production/13382/2025_10_27_00_20_50_020_34a62684ec.jpg"
      },
      {
        "slug": "vegetable-rice",
        "price": 15.99,
        "heat": 0,
        "name": {
          "en": "Vegetable Rice",
          "fr": "Riz aux légumes"
        },
        "desc": {
          "en": "Fried rice with a mix of fresh vegetables.",
          "fr": "Riz frit avec un mélange de légumes frais."
        },
        "photo": "https://betterresto.s3.us-west-1.wasabisys.com/production/13382/2025_10_27_00_20_50_013_78bc27d41f.jpg"
      },
      {
        "slug": "shrimp-fried-rice",
        "price": 18.99,
        "heat": 0,
        "name": {
          "en": "Shrimp Fried Rice",
          "fr": "Riz frit aux crevettes"
        },
        "desc": {
          "en": "Fluffy rice stir-fried with shrimp, eggs, and vegetables.",
          "fr": "Riz sauté moelleux aux crevettes et aux légumes."
        },
        "photo": "https://betterresto.s3.us-west-1.wasabisys.com/production/13382/2025_10_27_00_20_50_096_323a2d1e22.jpg"
      },
      {
        "slug": "chicken-fried-rice",
        "price": 17.99,
        "heat": 0,
        "name": {
          "en": "Chicken Fried Rice",
          "fr": "Riz Frit Au Poulet"
        },
        "desc": {
          "en": "Stir-fried rice with tender chicken, vegetables, soy sauce, and aromatic spices. A flavorful and satisfying classic.",
          "fr": "Riz sauté au poulet tendre, légumes, sauce soja et épices aromatiques. Un classique savoureux et réconfortant."
        },
        "photo": "https://betterresto.s3.us-west-1.wasabisys.com/production/13382/2025_10_27_00_20_50_012_c7a703598c.jpg"
      },
      {
        "slug": "chef-rice",
        "price": 19.99,
        "heat": 0,
        "name": {
          "en": "Chef Rice",
          "fr": "Riz du chef"
        },
        "desc": {
          "en": "Special fried rice with a medley of Beef, Shrimps, Chicken and vegetables.",
          "fr": "Riz frit spécial avec un mélange de bœuf, de crevettes, de poulet et de légumes."
        },
        "photo": "https://betterresto.s3.us-west-1.wasabisys.com/production/13382/2025_10_27_00_20_50_089_ec699ce3b0.jpg"
      }
    ]
  },
  {
    "slug": "chow-mein",
    "name": {
      "en": "Chow Mein",
      "fr": "Chow Mein"
    },
    "items": [
      {
        "slug": "chef-s-special-chow-mein-l",
        "price": 26.99,
        "heat": 0,
        "name": {
          "en": "Chef's Special Chow Mein (L)",
          "fr": "Chow Mein spécial du chef (L)"
        },
        "desc": {
          "en": "Our chef's special Chow Mein with a combination of chicken, beef, shrimp, and vegetables.",
          "fr": "Le chow mein spécial de notre chef, composé de poulet, de bœuf, de crevettes et de légumes."
        },
        "photo": "https://betterresto.s3.us-west-1.wasabisys.com/production/13382/2025_10_27_00_20_50_040_7ba511ca77.jpg"
      },
      {
        "slug": "chicken-chow-mein-l",
        "price": 24.99,
        "heat": 0,
        "name": {
          "en": "Chicken Chow Mein (L)",
          "fr": "Chow Mein au poulet (L)"
        },
        "desc": {
          "en": "Stir-fried noodles with chicken and mixed vegetables in a flavorful sauce.",
          "fr": "Nouilles sautées au poulet et aux légumes variés dans une sauce savoureuse."
        },
        "photo": "https://betterresto.s3.us-west-1.wasabisys.com/production/13382/2025_10_27_00_20_50_063_2504d03c8f.jpg"
      },
      {
        "slug": "shrimp-chow-mein-l",
        "price": 25.99,
        "heat": 0,
        "name": {
          "en": "Shrimp Chow Mein (L)",
          "fr": "Chow Mein aux crevettes (L)"
        },
        "desc": {
          "en": "Stir-fried noodles with plump shrimp and crisp vegetables in a flavourful sauce.",
          "fr": "Nouilles sautées avec des crevettes et des légumes dans une sauce savoureuse sauce."
        },
        "photo": "https://betterresto.s3.us-west-1.wasabisys.com/production/13382/2025_10_27_00_20_50_087_48a1520d70.jpg"
      },
      {
        "slug": "vegi-chow-mein-l",
        "price": 23.99,
        "heat": 0,
        "name": {
          "en": "Vegi Chow Mein (L)",
          "fr": "Chow Mein aux légumes (L)"
        },
        "desc": {
          "en": "Stir-fried noodles with a variety of fresh vegetables in a flavorful sauce.",
          "fr": "Nouilles sautées avec un assortiment de légumes frais dans une sauce savoureuse."
        },
        "photo": "https://betterresto.s3.us-west-1.wasabisys.com/production/13382/2025_10_27_00_20_50_044_f6418f34c6.jpg"
      },
      {
        "slug": "chef-special-chow-mein-s",
        "price": 17.99,
        "heat": 0,
        "name": {
          "en": "Chef special Chow Mein (S)",
          "fr": "Chow Mein spécial du chef (S)"
        },
        "desc": {
          "en": "Our chef's special Chow Mein with a combination of chicken, beef, shrimp, and vegetables.",
          "fr": "Le chow mein spécial de notre chef, composé de poulet, de bœuf, des crevettes et des légumes."
        },
        "photo": "https://betterresto.s3.us-west-1.wasabisys.com/production/13382/2025_10_27_00_20_50_084_2f48b05d43.jpg"
      },
      {
        "slug": "veggie-chow-mein-s",
        "price": 14.99,
        "heat": 0,
        "name": {
          "en": "Veggie Chow Mein (S)",
          "fr": "Chow Mein aux légumes (S)"
        },
        "desc": {
          "en": "Stir-fried noodles with a variety of fresh vegetables in a flavorful sauce.",
          "fr": "Nouilles sautées avec un assortiment des légumes frais dans une sauce savoureuse."
        },
        "photo": "https://betterresto.s3.us-west-1.wasabisys.com/production/13382/2025_10_27_00_20_50_023_ce53000bf7.jpg"
      },
      {
        "slug": "shrimp-chow-mein-s",
        "price": 16.99,
        "heat": 0,
        "name": {
          "en": "Shrimp Chow Mein (S)",
          "fr": "Chow Mein aux crevettes (S)"
        },
        "desc": {
          "en": "Stir-fried noodles with plump shrimp and crisp vegetables in a flavorful sauce.",
          "fr": "Nouilles sautées avec des crevettes charnues et des légumes croquants dans une sauce savoureuse."
        },
        "photo": "https://betterresto.s3.us-west-1.wasabisys.com/production/13382/2025_10_27_00_20_50_066_3e992ab61e.jpg"
      },
      {
        "slug": "chicken-chow-mein-s",
        "price": 15.99,
        "heat": 0,
        "name": {
          "en": "Chicken Chow Mein (S)",
          "fr": "Chow Mein au poulet (S)"
        },
        "desc": {
          "en": "Stir-fried noodles with chicken and mixed vegetables in a savory sauce.",
          "fr": "Nouilles sautées au poulet et aux légumes variés dans une sauce savoureuse."
        },
        "photo": "https://betterresto.s3.us-west-1.wasabisys.com/production/13382/2025_10_27_00_20_50_056_2afa8cd8f1.jpg"
      }
    ]
  },
  {
    "slug": "asian-style-burgers",
    "name": {
      "en": "Asian Style Burgers",
      "fr": "Burgers à l'asiatique"
    },
    "items": [
      {
        "slug": "korean-chicken-burger",
        "price": 14.99,
        "heat": 2,
        "name": {
          "en": "Korean Chicken Burger",
          "fr": "Burger de poulet coréen"
        },
        "desc": {
          "en": "A fusion of Korean flavors with juicy chicken and chef special slaw.",
          "fr": "Une fusion de saveurs coréennes avec du poulet juteux et une salade de chou spéciale du chef."
        },
        "photo": "https://betterresto.s3.us-west-1.wasabisys.com/production/13382/2025_10_27_00_20_50_090_3124a4d5cc.jpg"
      },
      {
        "slug": "general-tao-chicken-burger-trio",
        "price": 18.99,
        "heat": 1,
        "name": {
          "en": "General Tao Chicken Burger Trio",
          "fr": "Trio de burgers au poulet Général Tao"
        },
        "desc": {
          "en": "Experience the bold flavors of General Tso's sauce in this delectable chicken.",
          "fr": "Découvrez les saveurs audacieuses de la sauce du général Tso dans ce délicieux burger au poulet."
        },
        "photo": "https://betterresto.s3.us-west-1.wasabisys.com/production/13382/2025_10_27_00_20_50_060_291abae502.jpg"
      },
      {
        "slug": "korean-chicken-burger-trio",
        "price": 18.99,
        "heat": 2,
        "name": {
          "en": "Korean Chicken Burger Trio",
          "fr": "Trio de burgers au poulet coréen"
        },
        "desc": {
          "en": "A fusion of Korean flavors with juicy chicken and chef special slaw. Comes with Fries and Soda",
          "fr": "Un mélange de saveurs coréennes avec du poulet juteux et une salade de chou spéciale du chef. Servi avec des frites et une boisson gazeuse."
        },
        "photo": "https://betterresto.s3.us-west-1.wasabisys.com/production/13382/2025_10_27_00_20_50_075_cf1217ac57.jpg"
      },
      {
        "slug": "kung-pao-chicken-burger-trio",
        "price": 18.99,
        "heat": 2,
        "name": {
          "en": "Kung Pao Chicken Burger Trio",
          "fr": "Trio de burgers au poulet Kung Pao"
        },
        "desc": {
          "en": "Spicy and savory, featuring diced chicken, peanuts, and vegetables in a Kung Pao sauce. Comes with Fries and Soda",
          "fr": "Épicé et savoureux ce burger est composé de poulet dans une sauce Kung Pao. Servi avec des frites et une boisson gazeuse."
        },
        "photo": "https://betterresto.s3.us-west-1.wasabisys.com/production/13382/2025_10_27_00_20_50_075_cf1217ac57.jpg"
      },
      {
        "slug": "mongolian-chicken-burger-trio",
        "price": 18.99,
        "heat": 1,
        "name": {
          "en": "Mongolian Chicken Burger Trio",
          "fr": "Trio de burgers au poulet mongol"
        },
        "desc": {
          "en": "Sliced chicken stir-fried with onions and scallions in a savory Mongolian sauce. Comes with Fries and Soda",
          "fr": "Galette de poulet enrobée d'une savoureuse sauce mongole. Servie avec des frites et une boisson gazeuse."
        },
        "photo": "https://betterresto.s3.us-west-1.wasabisys.com/production/13382/2025_10_27_00_20_50_075_cf1217ac57.jpg"
      },
      {
        "slug": "kung-pao-chicken-burger",
        "price": 14.99,
        "heat": 2,
        "name": {
          "en": "Kung Pao Chicken Burger",
          "fr": "Burger au poulet kung pao"
        },
        "desc": {
          "en": "Spicy and savory, featuring diced chicken, peanuts, and vegetables in a Kung Pao sauce.",
          "fr": "Épicé et savoureux ce burger est composé de poulet dans une sauce"
        },
        "photo": "https://betterresto.s3.us-west-1.wasabisys.com/production/13382/2025_10_27_00_20_50_090_3124a4d5cc.jpg"
      },
      {
        "slug": "mongolian-chicken-burger",
        "price": 14.99,
        "heat": 1,
        "name": {
          "en": "Mongolian Chicken Burger",
          "fr": "burger au poulet mongol"
        },
        "desc": {
          "en": "Sliced chicken stir-fried with onions and scallions in a savory Mongolian sauce.",
          "fr": "Galette de poulet enrobée d'une savoureuse sauce mongol."
        },
        "photo": "https://betterresto.s3.us-west-1.wasabisys.com/production/13382/2025_10_27_00_20_50_090_3124a4d5cc.jpg"
      },
      {
        "slug": "general-tao-chicken-burger-single",
        "price": 14.99,
        "heat": 0,
        "name": {
          "en": "General Tao Chicken Burger Single",
          "fr": "Burger de general tao"
        },
        "desc": {
          "en": "Experience the bold flavors of General Tso's sauce in this delectable chicken.",
          "fr": "Découvrez les saveurs audacieuses de la sauce du général Tso dans ce burger."
        },
        "photo": "https://betterresto.s3.us-west-1.wasabisys.com/production/13382/2025_10_27_00_20_50_090_3124a4d5cc.jpg"
      }
    ]
  },
  {
    "slug": "classic-burgers",
    "name": {
      "en": "Classic Burgers",
      "fr": "Burgers Classiques"
    },
    "items": [
      {
        "slug": "crispy-fried-chicken-burger-trio",
        "price": 16.99,
        "heat": 1,
        "name": {
          "en": "Crispy Fried Chicken Burger Trio",
          "fr": "Burger de poulet frit croustillant (trio)"
        },
        "desc": {
          "en": "Crispy fried chicken topped with lettuce, pickles and spicy mayo sauce. comes with Fries and Soda",
          "fr": "Poulet frit croustillant garni de laitue, de cornichons et de sauce."
        },
        "photo": "https://betterresto.s3.us-west-1.wasabisys.com/production/13382/2025_10_27_00_20_50_042_a255341397.jpg"
      },
      {
        "slug": "crispy-fried-chicken-burger",
        "price": 13.99,
        "heat": 1,
        "name": {
          "en": "Crispy Fried Chicken Burger",
          "fr": "Burger de poulet frit croustillant"
        },
        "desc": {
          "en": "Crispy fried chicken topped with lettuce, pickles and spicy mayo sauce.",
          "fr": "Poulet frit croustillant garni de laitue, de cornichons et de sauce."
        },
        "photo": "https://betterresto.s3.us-west-1.wasabisys.com/production/13382/2025_10_27_00_20_50_008_69e1c2bc75.jpg"
      },
      {
        "slug": "mushroom-beef-burger-trio",
        "price": 18.99,
        "heat": 0,
        "name": {
          "en": "Mushroom Beef Burger Trio",
          "fr": "Burger au boeuf et champignons.(trio)"
        },
        "desc": {
          "en": "A mouthwatering burger featuring a savory mushroom sauce, caramelized onions and a succulent beef patty, along with our special homemade sauce. Comes with Fries and Soda",
          "fr": "Un burger appétissant composé d'une savoureuse sauce aux champignons, d'oignons caramélisés et d'un steak haché succulent, le tout nappé de notre sauce maison spéciale. Servi avec des frites et une boisson gazeuse."
        },
        "photo": "https://betterresto.s3.us-west-1.wasabisys.com/production/13382/2025_10_27_00_20_50_082_664345bf42.jpg"
      },
      {
        "slug": "mushroom-beef-burger",
        "price": 14.99,
        "heat": 0,
        "name": {
          "en": "Mushroom Beef Burger",
          "fr": "Burger au boeuf et champignons."
        },
        "desc": {
          "en": "A mouthwatering burger featuring a savory mushroom sauce, caramelized onions and a succulent beef patty, along with our special homemade sauce.",
          "fr": "Un burger appétissant composé d'une savoureuse sauce aux champignons, d'oignons caramélisés et d'un steak haché succulent, le tout nappé de notre sauce maison spéciale."
        },
        "photo": "https://betterresto.s3.us-west-1.wasabisys.com/production/13382/2025_10_27_00_20_50_090_3124a4d5cc.jpg"
      },
      {
        "slug": "beef-cheeseburger-trio",
        "price": 16.99,
        "heat": 0,
        "name": {
          "en": "Beef Cheeseburger Trio",
          "fr": "Burger de boeuf (trio)"
        },
        "desc": {
          "en": "A timeless favorite featuring a juicy beef patty, homemade special sauce topped with cheese in a brioche bun. Comes with Soda and Fries",
          "fr": "Un classique indémodable Gallette de bœuf juteux, une sauce spéciale maison et du fromage fondu dans un pain. Servi avec une boisson gazeuse et des frites."
        },
        "photo": "https://betterresto.s3.us-west-1.wasabisys.com/production/13382/2025_10_27_00_20_50_002_cd4b30bfc5.jpg"
      },
      {
        "slug": "beef-cheeseburger-single",
        "price": 13.99,
        "heat": 0,
        "name": {
          "en": "Beef Cheeseburger Single",
          "fr": "Burger de boeuf"
        },
        "desc": {
          "en": "A timeless favorite featuring a juicy beef patty, homemade special sauce topped with cheese in a brioche bun.",
          "fr": "Un classique indémodable Gallette de bœuf juteux, une sauce spéciale maison et du fromage fondu dans un pain. Servi avec une boisson gazeuse et des frites."
        },
        "photo": "https://betterresto.s3.us-west-1.wasabisys.com/production/13382/2025_10_27_00_20_50_027_5c643bf6f0.jpg"
      }
    ]
  },
  {
    "slug": "mocktails",
    "name": {
      "en": "Mocktails",
      "fr": "Mocktails"
    },
    "items": [
      {
        "slug": "mango-lassi",
        "price": 7.99,
        "heat": 0,
        "name": {
          "en": "Mango Lassi",
          "fr": "Lassi mangue"
        },
        "desc": {
          "en": "A creamy yogurt-based drink blended with ripe mangoes and a touch of sugar. Served chilled and refreshing.",
          "fr": "Une boisson onctueuse à base de yaourt, mélangée à des mangues et une touche de sucre. Servie fraîche et rafraîchissante."
        },
        "photo": "https://betterresto.s3.us-west-1.wasabisys.com/production/13382/2025_10_27_00_20_50_073_f5c88c3c5d.jpg"
      },
      {
        "slug": "green-apple-mocktail",
        "price": 7.99,
        "heat": 0,
        "name": {
          "en": "Green Apple Mocktail",
          "fr": "Cocktail sans alcool à la pomme verte"
        },
        "desc": {
          "en": "Crisp green apple flavor with a hint of citrus, sparkling fizz, and fruity jelly, served refreshingly chilled.",
          "fr": "Saveur de pomme verte croquante avec une pointe d'agrumes, de boisson pétillantes et une gelée de fruits, servie bien fraîche."
        },
        "photo": "https://betterresto.s3.us-west-1.wasabisys.com/production/13382/2025_10_27_00_20_50_099_1fd290b4ca.jpg"
      },
      {
        "slug": "watermelon-mocktail",
        "price": 7.99,
        "heat": 0,
        "name": {
          "en": "Watermelon Mocktail",
          "fr": "Cocktail sans alcool au melon d'eau"
        },
        "desc": {
          "en": "Refreshing watermelon blended with mint and sparkle, finished with fruity jelly for a cool summer sip.",
          "fr": "Une pastèque rafraîchissante mélangée à de la menthe et des bulles, le tout agrémenté de gelée de fruits pour une gorgée estivale désaltérante."
        },
        "photo": "https://betterresto.s3.us-west-1.wasabisys.com/production/13382/2025_10_27_00_20_50_032_5aed7d33e5.jpg"
      },
      {
        "slug": "peach-mocktail",
        "price": 7.99,
        "heat": 0,
        "name": {
          "en": "Peach Mocktail",
          "fr": "Cocktail sans alcool à la pêche"
        },
        "desc": {
          "en": "Juicy peach flavor with fresh mint, sparkling bubbles, and fruity jelly, perfectly refreshing.",
          "fr": "Un goût de pêche juteuse avec de la menthe fraîche, boisson pétillantes et gelées fruitée, parfaitement rafraîchissant."
        },
        "photo": "https://betterresto.s3.us-west-1.wasabisys.com/production/13382/2025_10_27_00_20_50_032_5aed7d33e5.jpg"
      },
      {
        "slug": "mango-mocktail",
        "price": 7.99,
        "heat": 0,
        "name": {
          "en": "Mango Mocktail",
          "fr": "Cocktail sans alcool à la mangue"
        },
        "desc": {
          "en": "Smooth mango paired with fresh mint leaves, sparkling touch, and fruity jelly for a cool, tropical delight",
          "fr": "La mangue onctueuse avec menthe fraîche, boisson pétillante et une gelée fruitée pour un délice tropical rafraîchissant."
        },
        "photo": "https://betterresto.s3.us-west-1.wasabisys.com/production/13382/2025_10_27_00_20_50_074_b6bac5ed60.jpg"
      },
      {
        "slug": "pineapple-mocktail",
        "price": 7.99,
        "heat": 0,
        "name": {
          "en": "Pineapple Mocktail",
          "fr": "Cocktail sans alcool à l'ananas"
        },
        "desc": {
          "en": "Tropical pineapple fused with zesty citrus, bubbles, and fruity jelly, bright and refreshing",
          "fr": "Ananas tropical mêlé à des agrumes acidulés et une gelée de fruits, pour un résultat vif et rafraîchissant."
        },
        "photo": "https://betterresto.s3.us-west-1.wasabisys.com/production/13382/2025_10_27_00_20_50_074_b6bac5ed60.jpg"
      },
      {
        "slug": "blueberry-mocktail",
        "price": 7.99,
        "heat": 0,
        "name": {
          "en": "Blueberry Mocktail",
          "fr": "Cocktail sans alcool aux bleuets"
        },
        "desc": {
          "en": "A fruity mix of ripe blueberries and citrus, topped with bubbles and fruity jelly for a refreshing sip",
          "fr": "Un mélange fruité de bleuets mûres et d'agrumes, agrémenté de bulles et de gelée de fruits pour une gorgée rafraîchissante."
        },
        "photo": "https://betterresto.s3.us-west-1.wasabisys.com/production/13382/2025_10_27_00_20_50_068_15b11b3938.jpg"
      },
      {
        "slug": "strawberry-mocktail",
        "price": 7.99,
        "heat": 0,
        "name": {
          "en": "Strawberry Mocktail",
          "fr": "Cocktail sans alcool aux fraises"
        },
        "desc": {
          "en": "Sweet strawberries blended with citrus notes, sparkling twist, and fruity jelly, served icy cold",
          "fr": "Des fraises sucrées mêlées à des notes d'agrumes, une touche pétillante et une gelée de fruits, servies glacées."
        },
        "photo": "https://betterresto.s3.us-west-1.wasabisys.com/production/13382/2025_10_27_00_20_50_017_da1fd36c21.jpg"
      }
    ]
  },
  {
    "slug": "desserts",
    "name": {
      "en": "Desserts",
      "fr": "Desserts"
    },
    "items": [
      {
        "slug": "tiramisu-cake",
        "price": 6.99,
        "heat": 0,
        "name": {
          "en": "Tiramisu Cake",
          "fr": "Gâteau Tiramisu"
        },
        "desc": {
          "en": "Indulge in our classic Tiramisu Cake, a rich layering of espresso-soaked ladyfingers, creamy mascarpone filling, and a light dusting of cocoa powder.",
          "fr": "Laissez"
        },
        "photo": "https://betterresto.s3.us-west-1.wasabisys.com/production/13382/2025_10_27_00_20_50_050_862f63713c.jpg"
      },
      {
        "slug": "ruby-cheese-cake",
        "price": 6.99,
        "heat": 0,
        "name": {
          "en": "Ruby Cheese Cake",
          "fr": "Gâteau ruby au fromage"
        },
        "desc": {
          "en": "Experience the luxurious Cheese Ruby Cake, featuring velvety cream cheese layers with a vibrant ruby red glaze, perfect for a decadent treat.",
          "fr": "Découvrez le luxueux Cheese Ruby Cake, composé de couches onctueuses de fromage frais et d'un glaçage rouge rubis éclatant, parfait pour une pause gourmande."
        },
        "photo": "https://betterresto.s3.us-west-1.wasabisys.com/production/13382/2025_10_27_00_20_50_079_90fedec653.jpg"
      },
      {
        "slug": "double-chocolate-cake",
        "price": 6.99,
        "heat": 0,
        "name": {
          "en": "Double Chocolate Cake",
          "fr": "Gâteau Double Chocolat"
        },
        "desc": {
          "en": "",
          "fr": "Un gâteau double chocolat riche et moelleux, garni d'un glaçage crémeux au chocolat pour un plaisir chocolaté ultime."
        },
        "photo": "https://betterresto.s3.us-west-1.wasabisys.com/production/13382/2025_10_27_00_20_50_018_6e842dcb61.jpg"
      },
      {
        "slug": "chocolate-mousse-cake",
        "price": 6.99,
        "heat": 0,
        "name": {
          "en": "Chocolate Mousse Cake",
          "fr": "Gâteau mousse au chocolat"
        },
        "desc": {
          "en": "Light and airy mousse layers in flavors like chocolate or raspberry, garnished with fresh berries. Elegant and melt-in-your-mouth.",
          "fr": "Un gâteau mousse au chocolat décadent, composé d'une mousse légère et à une base de chocolat riche et moelleuse, le tout recouvert d'un glaçage au chocolat lisse et brillant."
        },
        "photo": "https://betterresto.s3.us-west-1.wasabisys.com/production/13382/2025_10_27_00_20_50_014_be7c40bf1b.jpg"
      }
    ]
  },
  {
    "slug": "beverages",
    "name": {
      "en": "Beverages",
      "fr": "Boissons"
    },
    "items": [
      {
        "slug": "water",
        "price": 1.99,
        "heat": 0,
        "name": {
          "en": "Water",
          "fr": "Eau"
        },
        "desc": {
          "en": "",
          "fr": ""
        },
        "photo": "https://betterresto.s3.us-west-1.wasabisys.com/production/13382/2025_10_27_00_20_50_065_ff658382f3.jpg"
      },
      {
        "slug": "sparkling-water",
        "price": 3.99,
        "heat": 0,
        "name": {
          "en": "Sparkling Water",
          "fr": "Eau pétillante"
        },
        "desc": {
          "en": "Carbonated natural spring water",
          "fr": ""
        },
        "photo": "https://betterresto.s3.us-west-1.wasabisys.com/production/13382/2025_10_27_00_20_50_033_3d36dd7ec0.jpg"
      },
      {
        "slug": "sprite",
        "price": 2.99,
        "heat": 0,
        "name": {
          "en": "Sprite",
          "fr": "Sprite"
        },
        "desc": {
          "en": "soft drink",
          "fr": "boisson gazeuse"
        },
        "photo": "https://betterresto.s3.us-west-1.wasabisys.com/production/13382/2025_10_27_00_20_50_081_15abbaaedd.jpg"
      },
      {
        "slug": "red-bull",
        "price": 4.99,
        "heat": 0,
        "name": {
          "en": "Red Bull",
          "fr": "Red Bull"
        },
        "desc": {
          "en": "Energy Drink",
          "fr": "Energy Drink"
        },
        "photo": "https://betterresto.s3.us-west-1.wasabisys.com/production/13382/2025_10_27_00_20_50_088_d749571420.jpg"
      },
      {
        "slug": "pepsi",
        "price": 2.99,
        "heat": 0,
        "name": {
          "en": "Pepsi",
          "fr": "Pepsi"
        },
        "desc": {
          "en": "Soft Drink",
          "fr": "boisson gazeuse"
        },
        "photo": "https://betterresto.s3.us-west-1.wasabisys.com/production/13382/2025_10_27_00_20_50_015_af0a056445.jpg"
      },
      {
        "slug": "fuze-iced-tea",
        "price": 2.99,
        "heat": 0,
        "name": {
          "en": "Fuze Iced Tea",
          "fr": "Fuze"
        },
        "desc": {
          "en": "Real tea and zesty natural lemon flavour coming together to create an unbelievably bold and refreshing taste",
          "fr": "thé glacé"
        },
        "photo": "https://betterresto.s3.us-west-1.wasabisys.com/production/13382/2025_10_27_00_20_50_049_c3d391ae23.jpg"
      },
      {
        "slug": "canada-dry-ginger-ale",
        "price": 2.99,
        "heat": 0,
        "name": {
          "en": "Canada Dry Ginger Ale",
          "fr": "Gingerale"
        },
        "desc": {
          "en": "Canada Dry Ginger Ale is an unparalleled classic",
          "fr": "Boisson gazeuse"
        },
        "photo": "https://betterresto.s3.us-west-1.wasabisys.com/production/13382/2025_10_27_00_20_50_057_cfc8dd6d67.jpg"
      },
      {
        "slug": "crush",
        "price": 2.99,
        "heat": 0,
        "name": {
          "en": "Crush",
          "fr": "Crush"
        },
        "desc": {
          "en": "soft drinks",
          "fr": "Boisson gazeuse"
        },
        "photo": "https://betterresto.s3.us-west-1.wasabisys.com/production/13382/2025_10_27_00_20_50_054_e8dbc64d09.jpg"
      },
      {
        "slug": "diet-coke",
        "price": 2.99,
        "heat": 0,
        "name": {
          "en": "Diet Coke",
          "fr": "Coke diète"
        },
        "desc": {
          "en": "calorie-free soft drink.",
          "fr": "Boisson gazeuse"
        },
        "photo": "https://betterresto.s3.us-west-1.wasabisys.com/production/13382/2025_10_27_00_20_50_010_c637a0fd10.jpg"
      },
      {
        "slug": "coca-cola",
        "price": 2.99,
        "heat": 0,
        "name": {
          "en": "Coca Cola",
          "fr": "Coke"
        },
        "desc": {
          "en": "Soft Drink",
          "fr": "Boisson gazeuse"
        },
        "photo": "https://betterresto.s3.us-west-1.wasabisys.com/production/13382/2025_10_27_00_20_50_006_a2433e5479.jpg"
      },
      {
        "slug": "coca-cola-zero",
        "price": 2.99,
        "heat": 0,
        "name": {
          "en": "Coca Cola Zero",
          "fr": "Coke zéro"
        },
        "desc": {
          "en": "sugar-free version of Coca-Cola",
          "fr": "Boisson gazeuse"
        },
        "photo": "https://betterresto.s3.us-west-1.wasabisys.com/production/13382/2025_10_27_00_20_50_058_940d970e61.jpg"
      },
      {
        "slug": "7up-zero",
        "price": 2.99,
        "heat": 0,
        "name": {
          "en": "7UP zero",
          "fr": "7up zéro"
        },
        "desc": {
          "en": "7UP® Zero Sugar",
          "fr": "Boisson gazeuse"
        },
        "photo": "https://betterresto.s3.us-west-1.wasabisys.com/production/13382/2025_10_27_00_20_50_048_a5b44a97bb.jpg"
      },
      {
        "slug": "7up",
        "price": 2.99,
        "heat": 0,
        "name": {
          "en": "7UP",
          "fr": "7up"
        },
        "desc": {
          "en": "soft drink",
          "fr": "Boisson gazeuse"
        },
        "photo": "https://betterresto.s3.us-west-1.wasabisys.com/production/13382/2025_10_27_00_20_50_097_d26b15201d.jpg"
      }
    ]
  },
  {
    "slug": "kids-meals",
    "name": {
      "en": "Kids Meals",
      "fr": "Repas pour enfants"
    },
    "items": [
      {
        "slug": "tenders-with-fries",
        "price": 9.99,
        "heat": 0,
        "name": {
          "en": "Tenders With Fries",
          "fr": "Tenders avec frites"
        },
        "desc": {
          "en": "",
          "fr": ""
        },
        "photo": "https://betterresto.s3.us-west-1.wasabisys.com/production/13382/2025_10_27_00_20_50_086_0d1ded1951.jpg"
      }
    ]
  }
] as unknown as Category[];

export const findDish = (s: string): Dish | undefined =>
  MENU.flatMap((c) => c.items).find((d) => d.slug === s);
