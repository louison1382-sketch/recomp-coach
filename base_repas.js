// Fichier : base_repas.js
// Cette variable globale sera lue par ton application principale.

const baseRepas = [
  {
    name: "Déjeuner : Filet de Pageot rôti et patates douces",
    time: "12:30",
    calories: 458,
    protein: 43,
    carbs: 40,
    fat: 14,
    ingredients: [
      { item: "Filet de Pageot", amount: "200g", cal: 200, p: 40, c: 0, l: 4 },
      { item: "Patate douce", amount: "200g", cal: 168, p: 3, c: 40, l: 0 },
      { item: "Huile d'olive", amount: "10g", cal: 90, p: 0, c: 0, l: 10 }
    ],
    recipe: "Préchauffer le four à 180°C. Couper la patate douce en cubes, mélanger avec la moitié de l'huile et enfourner 20 min. Ajouter le filet de pageot badigeonné du reste d'huile, cuire 10-12 min supplémentaires selon l'épaisseur."
  },
  {
    name: "Dîner : Sar en croûte de sel et riz basmati",
    time: "19:30",
    calories: 489,
    protein: 45,
    carbs: 66,
    fat: 5,
    ingredients: [
      { item: "Sar (ou Daurade) vidé", amount: "200g (part comestible)", cal: 180, p: 38, c: 0, l: 3 },
      { item: "Riz basmati cuit", amount: "200g", cal: 260, p: 5, c: 56, l: 0 },
      { item: "Ratatouille ou légumes du soleil", amount: "200g", cal: 49, p: 2, c: 10, l: 2 }
    ],
    recipe: "Enfouir le sar dans du gros sel mélangé à un peu d'eau et de blancs d'œufs. Cuire au four à 200°C pendant 25-30 min. Casser la croûte, récupérer les filets et servir avec le riz et les légumes chauds."
  },
  {
    name: "Collation : Cannelés Protéinés (Fitness version)",
    time: "16:30",
    calories: 178,
    protein: 25,
    carbs: 6,
    fat: 6,
    ingredients: [
      { item: "Whey isolate vanille", amount: "20g", cal: 80, p: 16, c: 1, l: 1 },
      { item: "Œuf entier", amount: "1", cal: 75, p: 6, c: 0, l: 5 },
      { item: "Lait écrémé", amount: "100ml", cal: 23, p: 3, c: 5, l: 0 }
    ],
    recipe: "Mélanger la whey, l'œuf, et le lait (ajouter un peu d'édulcorant ou d'extrait de rhum/vanille si désiré). Verser dans des moules à cannelés en silicone. Cuire à 200°C pendant 15-20 minutes. Laisser refroidir pour la texture."
  },
  {
    name: "Déjeuner : Poulet grillé et quinoa",
    time: "12:30",
    calories: 536,
    protein: 56,
    carbs: 52,
    fat: 12,
    ingredients: [
      { item: "Blanc de poulet", amount: "200g", cal: 220, p: 46, c: 0, l: 4 },
      { item: "Quinoa cuit", amount: "200g", cal: 240, p: 8, c: 42, l: 4 },
      { item: "Légumes verts vapeur", amount: "200g", cal: 40, p: 2, c: 10, l: 0 },
      { item: "Huile d'olive (cuisson)", amount: "4g", cal: 36, p: 0, c: 0, l: 4 }
    ],
    recipe: "Faire revenir le poulet coupé en dés à la poêle avec l'huile d'olive. Assaisonner avec des herbes de Provence. Servir avec le quinoa et les légumes verts."
  }
];
