// Fichier : base_repas.js
// Valeurs nutritionnelles moyennes pour 100g de produit (CRU / NON CUIT)

const DB = {
  proteins: [
    { name: "Blanc de Poulet", p: 22.0, c: 0.0, l: 1.5, cal: 104 },
    { name: "Escalope de Dinde", p: 24.0, c: 0.0, l: 1.2, cal: 110 },
    { name: "Steak Haché (5% MG)", p: 21.0, c: 0.0, l: 5.0, cal: 129 },
    { name: "Thon en boîte (au naturel)", p: 25.0, c: 0.0, l: 1.0, cal: 110 },
    { name: "Maquereau en boîte (nature)", p: 19.0, c: 0.0, l: 12.0, cal: 184 },
    { name: "Œufs entiers", p: 13.0, c: 1.0, l: 10.0, cal: 145 },
    { name: "Tofu ferme", p: 15.0, c: 2.0, l: 8.0, cal: 140 },
    { name: "Haché végétal (Soja)", p: 16.0, c: 4.0, l: 3.0, cal: 115 }
  ],
  carbs: [
    { name: "Riz Basmati", p: 8.0, c: 78.0, l: 1.0, cal: 350 },
    { name: "Pâtes Complètes", p: 13.0, c: 65.0, l: 2.0, cal: 330 },
    { name: "Semoule", p: 12.0, c: 70.0, l: 2.0, cal: 350 },
    { name: "Flocons d'Avoine", p: 13.0, c: 60.0, l: 7.0, cal: 365 },
    { name: "Pommes de terre", p: 2.0, c: 17.0, l: 0.0, cal: 77 },
    { name: "Lentilles Corail", p: 24.0, c: 48.0, l: 1.0, cal: 330 }
  ],
  veggies: [
    { name: "Brocolis", p: 2.8, c: 4.0, l: 0.4, cal: 34 },
    { name: "Haricots Verts", p: 1.8, c: 4.0, l: 0.1, cal: 25 },
    { name: "Courgettes", p: 1.2, c: 3.0, l: 0.2, cal: 17 },
    { name: "Épinards", p: 2.9, c: 1.0, l: 0.4, cal: 23 },
    { name: "Poêlée paysanne", p: 2.0, c: 5.0, l: 0.5, cal: 35 }
  ],
  fats: [
    { name: "Huile d'Olive", p: 0.0, c: 0.0, l: 100.0, cal: 900 },
    { name: "Beurre de Cacahuète", p: 25.0, c: 16.0, l: 50.0, cal: 588 },
    { name: "Amandes", p: 21.0, c: 20.0, l: 50.0, cal: 580 }
  ],
  snacks: [
    // --- DESSERTS SIMPLES & EFFICACES ---
    // Les macros sont lissées pour 100g du mélange final (environ moitié/moitié)
    { name: "Skyr nature & Rondelles de Banane", p: 5.5, c: 13.5, l: 0.0, cal: 73 },
    { name: "Fromage Blanc 0% & Pomme en dés", p: 4.0, c: 9.0, l: 0.0, cal: 50 },
    { name: "Fromage Blanc 0% & Compote sans sucres ajoutés", p: 4.0, c: 9.0, l: 0.0, cal: 52 },
    { name: "Skyr nature & Fruits Rouges (frais ou surgelés)", p: 5.5, c: 5.0, l: 0.0, cal: 43 },
    { name: "Petit-Suisse 0% & Morceaux de Poire", p: 5.0, c: 8.0, l: 0.0, cal: 52 }
  ]
};
