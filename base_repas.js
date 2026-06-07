// base_repas.js — Base de données de fiches repas complètes
// Recomp Coach · Macros calculées pour les portions indiquées
// batch: true = compatible préparation en lot (batch cooking)
// prepTime = minutes de préparation active (hors cuisson passive)

const MEALS_DB = {

  // ─── PETITS DÉJEUNERS ────────────────────────────────────────────────────────
  petit_dejeuner: [
    {
      id: "pdj-1",
      name: "Overnight Oats Banane & Cacahuète",
      prepTime: 5,
      batch: true,
      batchNote: "Prépare 5 bocaux le dimanche soir. Conserve 4 jours au frigo — ajoute la banane au moment de manger.",
      goals: ["recomp", "muscle"],
      vegetarian: true,
      calories: 566,
      protein: 32,
      carbs: 79,
      fat: 14,
      ingredients: [
        { item: "Flocons d'avoine", amount: "80g" },
        { item: "Skyr nature", amount: "150g" },
        { item: "Banane", amount: "100g" },
        { item: "Beurre de cacahuète naturel", amount: "15g" }
      ],
      recipe: "La veille : mélanger les flocons et le skyr dans un bocal. Fermer et réfrigérer une nuit. Le matin : ajouter la banane en rondelles et le beurre de cacahuète.",
      tip: "Beurre de cacahuète = arachides uniquement. Zéro huile de palme, zéro sucre ajouté."
    },
    {
      id: "pdj-2",
      name: "Bowl Skyr Fruits Rouges & Granola",
      prepTime: 3,
      batch: false,
      goals: ["recomp", "muscle", "cut"],
      vegetarian: true,
      calories: 390,
      protein: 27,
      carbs: 52,
      fat: 8,
      ingredients: [
        { item: "Skyr nature", amount: "200g" },
        { item: "Fruits rouges (frais ou surgelés)", amount: "100g" },
        { item: "Granola nature sans sucres ajoutés", amount: "40g" },
        { item: "Miel", amount: "10g" }
      ],
      recipe: "Verser le skyr dans un bol. Disposer les fruits rouges. Saupoudrer le granola. Finir avec le miel.",
      tip: "Fruits rouges surgelés décongelés la veille = moins chers que frais, aussi bons."
    },
    {
      id: "pdj-3",
      name: "Omelette Épinards & Fromage Râpé",
      prepTime: 10,
      batch: false,
      goals: ["recomp", "muscle", "cut"],
      vegetarian: true,
      calories: 518,
      protein: 40,
      carbs: 10,
      fat: 36,
      ingredients: [
        { item: "Œufs entiers", amount: "4 œufs" },
        { item: "Épinards frais", amount: "80g" },
        { item: "Fromage râpé allégé", amount: "30g" },
        { item: "Huile d'olive", amount: "5g" },
        { item: "Sel, poivre, paprika", amount: "QS" }
      ],
      recipe: "Battre les œufs avec sel et paprika. Faire tomber les épinards 2 min dans la poêle huilée. Verser les œufs, laisser prendre à feu moyen. Parsemer le fromage, plier.",
      tip: "Option low-carb le matin — idéal si tu veux économiser tes glucides pour le déjeuner."
    },
    {
      id: "pdj-4",
      name: "Porridge Avoine Myrtilles & Amandes",
      prepTime: 7,
      batch: true,
      batchNote: "Cuis une grande quantité d'avoine le dimanche. Réchauffe en 2 min au micro-ondes avec un peu d'eau.",
      goals: ["recomp", "muscle"],
      vegetarian: true,
      calories: 582,
      protein: 32,
      carbs: 75,
      fat: 17,
      ingredients: [
        { item: "Flocons d'avoine", amount: "80g" },
        { item: "Lait demi-écrémé ou lait d'amande", amount: "200ml" },
        { item: "Skyr nature", amount: "100g" },
        { item: "Myrtilles (fraîches ou surgelées)", amount: "80g" },
        { item: "Amandes effilées", amount: "15g" }
      ],
      recipe: "Porter le lait à frémissement, ajouter les flocons, cuire 3 min en remuant. Hors du feu, incorporer le skyr. Garnir de myrtilles et d'amandes.",
      tip: "Le skyr s'incorpore hors du feu — sinon il tranche. Texture crémeuse garantie."
    },
    {
      id: "pdj-5",
      name: "Pain Complet Beurre de Cacahuète & Skyr",
      prepTime: 3,
      batch: false,
      goals: ["recomp", "muscle"],
      vegetarian: true,
      calories: 544,
      protein: 31,
      carbs: 68,
      fat: 18,
      ingredients: [
        { item: "Pain complet (2 tranches)", amount: "80g" },
        { item: "Beurre de cacahuète naturel", amount: "30g" },
        { item: "Skyr nature", amount: "150g" },
        { item: "Banane", amount: "80g" }
      ],
      recipe: "Toaster le pain. Tartiner le beurre de cacahuète. Servir avec le skyr et la banane à côté.",
      tip: "3 min chrono. Zéro excuse pour sauter le petit-déjeuner."
    },
    {
      id: "pdj-6",
      name: "Scramble Blancs d'Œuf & Toast Complet",
      prepTime: 8,
      batch: false,
      goals: ["cut"],
      vegetarian: true,
      calories: 315,
      protein: 34,
      carbs: 20,
      fat: 10,
      ingredients: [
        { item: "Blancs d'œufs", amount: "6 blancs (180g)" },
        { item: "Œuf entier", amount: "1 œuf" },
        { item: "Pain complet (1 tranche)", amount: "40g" },
        { item: "Épinards frais", amount: "50g" },
        { item: "Huile d'olive", amount: "3g" }
      ],
      recipe: "Battre les blancs avec l'œuf entier. Faire tomber les épinards dans la poêle huilée. Ajouter les œufs, cuire à feu doux en remuant doucement. Servir sur la tranche toastée.",
      tip: "Option cut : moins de jaunes = moins de lipides. Garde les jaunes pour un autre repas."
    },
    {
      id: "pdj-7",
      name: "Toast Avocat Œuf Poché",
      prepTime: 10,
      batch: false,
      goals: ["recomp", "muscle"],
      vegetarian: true,
      calories: 484,
      protein: 22,
      carbs: 34,
      fat: 29,
      ingredients: [
        { item: "Pain complet (2 tranches)", amount: "60g" },
        { item: "Avocat", amount: "100g (½ avocat)" },
        { item: "Œufs entiers", amount: "2 œufs" },
        { item: "Jus de citron", amount: "½ citron" },
        { item: "Sel, poivre, flocons de piment (optionnel)", amount: "QS" }
      ],
      recipe: "Toaster le pain. Écraser l'avocat avec le jus de citron, sel et poivre. Étaler sur les toasts. Pocher les œufs : eau frémissante + filet de vinaigre, 3 min. Poser sur les toasts.",
      tip: "Pour un œuf poché propre : casser l'œuf dans un ramequin avant de le glisser dans l'eau."
    }
  ],

  // ─── DÉJEUNERS ────────────────────────────────────────────────────────────────
  dejeuner: [
    {
      id: "dej-1",
      name: "Bowl Poulet Riz Brocolis",
      prepTime: 25,
      batch: true,
      batchNote: "Cuisine 750g de poulet + 400g de riz (cru) le dimanche. 5 portions au frigo — 4 jours max.",
      goals: ["recomp", "muscle", "cut"],
      vegetarian: false,
      calories: 594,
      protein: 45,
      carbs: 70,
      fat: 14,
      ingredients: [
        { item: "Blanc de poulet (cru)", amount: "150g" },
        { item: "Riz basmati (cru)", amount: "80g" },
        { item: "Brocolis", amount: "200g" },
        { item: "Huile d'olive", amount: "10g" },
        { item: "Sauce soja, ail en poudre, paprika", amount: "QS" }
      ],
      recipe: "Cuire le riz (eau ×2, 12 min à feu doux). Brocolis vapeur 8 min — rester croquants. Griller le poulet assaisonné 6-7 min par côté. Assembler en bowl.",
      tip: "En batch : assaisonne le poulet avec sauce soja + ail avant. La saveur s'installe mieux."
    },
    {
      id: "dej-2",
      name: "Pasta Complètes Thon Tomate",
      prepTime: 15,
      batch: true,
      batchNote: "Cuis les pâtes pour 5 jours. Le thon s'ajoute froid à la boîte — zéro réchauffage.",
      goals: ["recomp", "muscle", "cut"],
      vegetarian: false,
      calories: 539,
      protein: 52,
      carbs: 57,
      fat: 12,
      ingredients: [
        { item: "Pâtes complètes (crues)", amount: "80g" },
        { item: "Thon en boîte au naturel", amount: "160g (1 grosse boîte)" },
        { item: "Tomates cerises", amount: "150g" },
        { item: "Huile d'olive", amount: "8g" },
        { item: "Basilic, origan, citron", amount: "QS" }
      ],
      recipe: "Cuire les pâtes al dente. Égoutter le thon. Mélanger pâtes, thon, tomates cerises, huile et citron. Assaisonner.",
      tip: "Chaud ou froid — parfait en Tupperware pour emporter en stage."
    },
    {
      id: "dej-3",
      name: "Bowl Dinde Semoule & Ratatouille",
      prepTime: 30,
      batch: true,
      batchNote: "La ratatouille se fait en grande quantité — 5 jours au frigo, se congèle très bien.",
      goals: ["recomp", "muscle", "cut"],
      vegetarian: false,
      calories: 562,
      protein: 50,
      carbs: 63,
      fat: 12,
      ingredients: [
        { item: "Escalope de dinde (crue)", amount: "160g" },
        { item: "Semoule fine", amount: "70g" },
        { item: "Courgette", amount: "100g" },
        { item: "Poivron rouge", amount: "100g" },
        { item: "Pulpe de tomate en boîte", amount: "100g" },
        { item: "Huile d'olive", amount: "8g" },
        { item: "Cumin, ail, herbes de Provence", amount: "QS" }
      ],
      recipe: "Couper les légumes en dés, faire revenir 5 min avec l'huile. Ajouter la pulpe de tomate + épices, mijoter 15 min. Semoule : eau bouillante 1:1, couvrir 5 min. Griller la dinde. Assembler.",
      tip: "La ratatouille est meilleure le lendemain — fais-en toujours une grande casserole."
    },
    {
      id: "dej-4",
      name: "Dal Lentilles Corail & Poulet",
      prepTime: 25,
      batch: true,
      batchNote: "Les lentilles corail cuisent en 15 min et se conservent 4 jours. S'améliorent avec le temps.",
      goals: ["recomp", "muscle", "cut"],
      vegetarian: false,
      calories: 533,
      protein: 53,
      carbs: 49,
      fat: 9,
      ingredients: [
        { item: "Blanc de poulet (cru)", amount: "130g" },
        { item: "Lentilles corail (sèches)", amount: "100g" },
        { item: "Épinards surgelés", amount: "100g" },
        { item: "Bouillon de légumes", amount: "350ml" },
        { item: "Cumin, curcuma, ail", amount: "QS" },
        { item: "Huile d'olive", amount: "5g" }
      ],
      recipe: "Rincer les lentilles. Cuire dans le bouillon avec cumin, curcuma, ail 15 min — elles fondent naturellement. Ajouter les épinards 3 min avant la fin. Griller le poulet séparément. Servir le poulet tranché sur le dal.",
      tip: "Dal trop épais ? Un peu d'eau chaude suffit. Les lentilles corail ne nécessitent aucun mixeur."
    },
    {
      id: "dej-5",
      name: "Steak Haché Pommes de Terre & Haricots Verts",
      prepTime: 25,
      batch: true,
      batchNote: "Cuis 1 kg de pommes de terre d'un coup — elles se réchauffent au micro-ondes en 2 min.",
      goals: ["recomp", "muscle"],
      vegetarian: false,
      calories: 560,
      protein: 45,
      carbs: 49,
      fat: 17,
      ingredients: [
        { item: "Steak haché 5% MG", amount: "180g" },
        { item: "Pommes de terre", amount: "250g" },
        { item: "Haricots verts (surgelés)", amount: "150g" },
        { item: "Moutarde de Dijon", amount: "10g" },
        { item: "Sel, poivre, herbes de Provence", amount: "QS" }
      ],
      recipe: "Pommes de terre vapeur 20 min. Haricots verts vapeur 8 min. Steak haché 3-4 min par côté à feu vif. Accompagner de moutarde.",
      tip: "Le steak haché congelé cuit directement sans décongélation — pratique en dernière minute."
    },
    {
      id: "dej-6",
      name: "Pokébowl Thon Riz & Crudités",
      prepTime: 10,
      batch: true,
      batchNote: "Le riz cuit se conserve 4 jours. Le thon s'ajoute à froid — zéro cuisson le midi.",
      goals: ["recomp", "cut"],
      vegetarian: false,
      calories: 536,
      protein: 48,
      carbs: 76,
      fat: 5,
      ingredients: [
        { item: "Riz basmati (cru)", amount: "80g" },
        { item: "Thon en boîte au naturel", amount: "150g" },
        { item: "Concombre", amount: "100g" },
        { item: "Carotte râpée", amount: "80g" },
        { item: "Sauce soja", amount: "15ml" },
        { item: "Vinaigre de riz ou citron", amount: "10ml" },
        { item: "Graines de sésame", amount: "5g" }
      ],
      recipe: "Cuire le riz (peut se manger froid). Couper le concombre. Égoutter le thon. Assembler en bowl. Mélanger sauce soja + vinaigre et verser. Parsemer de sésame.",
      tip: "Pokébowl maison pour une fraction du prix — en Tupperware, c'est top pour le bureau."
    },
    {
      id: "dej-7",
      name: "Salade Poulet Quinoa & Avocat",
      prepTime: 15,
      batch: false,
      goals: ["recomp", "muscle"],
      vegetarian: false,
      calories: 504,
      protein: 43,
      carbs: 34,
      fat: 22,
      ingredients: [
        { item: "Blanc de poulet grillé (cru)", amount: "140g" },
        { item: "Quinoa (cru)", amount: "60g" },
        { item: "Avocat", amount: "80g (½ avocat)" },
        { item: "Tomates cerises", amount: "100g" },
        { item: "Salade verte", amount: "50g" },
        { item: "Huile d'olive + citron", amount: "5g + ½ citron" }
      ],
      recipe: "Cuire le quinoa 12 min dans 2× son volume d'eau. Griller le poulet. Assembler. Assaisonner huile + citron.",
      tip: "L'avocat apporte les bons lipides — pas besoin de vinaigrette grasse en plus."
    },
    {
      id: "dej-8",
      name: "Burger Maison Dinde & Pain Complet",
      prepTime: 15,
      batch: false,
      goals: ["recomp", "muscle"],
      vegetarian: false,
      calories: 515,
      protein: 51,
      carbs: 49,
      fat: 10,
      ingredients: [
        { item: "Haché de dinde (cru)", amount: "180g" },
        { item: "Pain complet (2 tranches ou pain burger)", amount: "80g" },
        { item: "Tomate (rondelles)", amount: "80g" },
        { item: "Salade verte", amount: "30g" },
        { item: "Fromage allégé (1 tranche)", amount: "20g" },
        { item: "Moutarde de Dijon", amount: "10g" }
      ],
      recipe: "Former un steak avec le haché de dinde. Cuire 5-6 min par côté. Toaster le pain. Assembler avec salade, tomate, fromage et moutarde.",
      tip: "Haché de dinde = aussi protéiné que le bœuf, beaucoup moins gras. Très sous-estimé."
    },
    {
      id: "dej-9",
      name: "Wrap Poulet Houmous Roquette",
      prepTime: 10,
      batch: false,
      goals: ["recomp", "muscle", "cut"],
      vegetarian: false,
      calories: 464,
      protein: 39,
      carbs: 50,
      fat: 12,
      ingredients: [
        { item: "Tortilla blé complet (grande)", amount: "80g" },
        { item: "Blanc de poulet grillé (cru)", amount: "130g" },
        { item: "Houmous", amount: "40g" },
        { item: "Roquette", amount: "30g" },
        { item: "Tomates cerises", amount: "80g" },
        { item: "Citron, sel, poivre", amount: "QS" }
      ],
      recipe: "Griller le poulet et le couper en lamelles. Étaler le houmous sur la tortilla. Ajouter le poulet, la roquette et les tomates. Rouler serré et couper en deux.",
      tip: "Prépare les lamelles de poulet en batch — tu montes 5 wraps différents en 3 min chacun."
    },
    {
      id: "dej-10",
      name: "Salade Pois Chiches Thon (Zéro cuisson)",
      prepTime: 5,
      batch: false,
      goals: ["recomp", "muscle", "cut"],
      vegetarian: false,
      calories: 533,
      protein: 48,
      carbs: 45,
      fat: 16,
      ingredients: [
        { item: "Pois chiches en boîte (égouttés)", amount: "200g" },
        { item: "Thon en boîte au naturel", amount: "130g" },
        { item: "Tomates cerises", amount: "100g" },
        { item: "Oignon rouge", amount: "50g" },
        { item: "Huile d'olive", amount: "10g" },
        { item: "Jus de citron, sel, cumin", amount: "QS" }
      ],
      recipe: "Rincer et égoutter les pois chiches. Égoutter le thon. Couper les tomates et l'oignon rouge. Mélanger tout dans un bol. Assaisonner avec huile, citron et cumin.",
      tip: "Zéro cuisson, zéro vaisselle ou presque. 5 min montre en main. Parfait les jours sans temps."
    },
    {
      id: "dej-11",
      name: "Quesadilla Dinde Fromage",
      prepTime: 8,
      batch: false,
      goals: ["recomp", "muscle"],
      vegetarian: false,
      calories: 481,
      protein: 46,
      carbs: 43,
      fat: 13,
      ingredients: [
        { item: "Tortillas blé complet (2 petites)", amount: "80g" },
        { item: "Émincé de dinde (cru)", amount: "130g" },
        { item: "Fromage râpé allégé", amount: "40g" },
        { item: "Poivron rouge", amount: "50g" },
        { item: "Épices mexicaines ou cumin", amount: "QS" }
      ],
      recipe: "Faire revenir la dinde émincée avec le poivron et les épices 5 min. Poser une tortilla dans la poêle sèche, garnir avec dinde + fromage, couvrir avec la 2e tortilla. Cuire 2 min par côté jusqu'à dorure.",
      tip: "Appuie légèrement avec une spatule pendant la cuisson — le fromage soude les deux tortillas."
    },
    {
      id: "dej-12",
      name: "Riz Sauté Œufs & Légumes Soja",
      prepTime: 10,
      batch: true,
      batchNote: "Utilise du riz déjà cuit (batch du dimanche). Le sauté se fait en 5 min avec du riz froid.",
      goals: ["recomp", "muscle"],
      vegetarian: true,
      calories: 603,
      protein: 35,
      carbs: 63,
      fat: 24,
      ingredients: [
        { item: "Riz basmati (cru)", amount: "60g" },
        { item: "Œufs entiers", amount: "3 œufs" },
        { item: "Pousses de soja (boîte ou frais)", amount: "100g" },
        { item: "Petits pois surgelés", amount: "50g" },
        { item: "Sauce soja", amount: "15ml" },
        { item: "Huile de sésame", amount: "5g" }
      ],
      recipe: "Cuire le riz. Dans un wok ou grande poêle très chaude, faire sauter les petits pois et les pousses de soja 2 min. Ajouter le riz froid et la sauce soja. Pousser tout sur le côté, faire brouiller les œufs dans le centre. Mélanger. Finir avec l'huile de sésame.",
      tip: "Le riz froid est essentiel pour le riz sauté — il ne colle pas. Utilise impérativement le riz de la veille."
    },
    {
      id: "dej-13",
      name: "Sardines Riz & Tomates (Budget ++)",
      prepTime: 10,
      batch: true,
      batchNote: "Le riz se fait en batch. Les sardines s'ajoutent directement à froid depuis la boîte.",
      goals: ["recomp", "muscle", "cut"],
      vegetarian: false,
      calories: 575,
      protein: 37,
      carbs: 68,
      fat: 19,
      ingredients: [
        { item: "Sardines en boîte à l'huile (égouttées)", amount: "150g" },
        { item: "Riz basmati (cru)", amount: "80g" },
        { item: "Tomates cerises", amount: "150g" },
        { item: "Citron", amount: "½ citron" },
        { item: "Persil ou ciboulette", amount: "QS" },
        { item: "Sel, poivre", amount: "QS" }
      ],
      recipe: "Cuire le riz. Ouvrir et égoutter les sardines. Couper les tomates. Assembler riz + sardines + tomates. Arroser de jus de citron. Parsemer d'herbes fraîches.",
      tip: "Les sardines à l'huile d'olive bien égouttées = source d'oméga-3 au prix le plus bas possible. Sous-estimées."
    },
    {
      id: "dej-14",
      name: "Croque Dinde Fromage Express",
      prepTime: 5,
      batch: false,
      goals: ["recomp", "muscle"],
      vegetarian: false,
      calories: 508,
      protein: 42,
      carbs: 46,
      fat: 17,
      ingredients: [
        { item: "Pain complet (3 tranches)", amount: "100g" },
        { item: "Tranches de dinde (charcuterie nature)", amount: "120g" },
        { item: "Fromage râpé", amount: "40g" },
        { item: "Moutarde de Dijon", amount: "5g" }
      ],
      recipe: "Passer les tranches de pain au grille-pain. Tartiner de moutarde. Poser la dinde et le fromage râpé. Passer 2 min au four ou micro-ondes (position grill) pour faire fondre le fromage.",
      tip: "5 min, une seule poêle ou micro-ondes. Meilleur que n'importe quel sandwich du commerce."
    },
    {
      id: "dej-15",
      name: "Bowl Édamame Riz Thon & Avocat",
      prepTime: 10,
      batch: true,
      batchNote: "Riz en batch. Édamame à décongeler 5 min dans l'eau chaude. Thon à froid — assemblage 3 min.",
      goals: ["recomp", "muscle"],
      vegetarian: false,
      calories: 602,
      protein: 49,
      carbs: 70,
      fat: 14,
      ingredients: [
        { item: "Riz basmati (cru)", amount: "75g" },
        { item: "Thon en boîte au naturel", amount: "120g" },
        { item: "Édamame (surgelés)", amount: "100g" },
        { item: "Avocat", amount: "50g" },
        { item: "Sauce soja", amount: "15ml" },
        { item: "Graines de sésame", amount: "5g" }
      ],
      recipe: "Cuire le riz. Décongeler les édamame à l'eau chaude. Égoutter le thon. Assembler en bowl. Couper l'avocat en dés. Assaisonner de sauce soja et parsemer de sésame.",
      tip: "Les édamame apportent un double bonus : fibres + protéines végétales en complément du thon."
    },
    {
      id: "dej-16",
      name: "Soupe Lentilles Épinards Express",
      prepTime: 20,
      batch: true,
      batchNote: "Se conserve 5 jours au frigo, se congèle parfaitement. Fais-en 4-5 portions en une seule fois.",
      goals: ["recomp", "cut"],
      vegetarian: true,
      calories: 380,
      protein: 22,
      carbs: 52,
      fat: 8,
      ingredients: [
        { item: "Lentilles corail (sèches)", amount: "80g" },
        { item: "Épinards surgelés", amount: "100g" },
        { item: "Carotte", amount: "100g" },
        { item: "Oignon", amount: "80g" },
        { item: "Bouillon de légumes", amount: "600ml" },
        { item: "Huile d'olive", amount: "8g" },
        { item: "Cumin, curry doux, sel", amount: "QS" }
      ],
      recipe: "Faire revenir l'oignon émincé 3 min. Ajouter les carottes en dés, les lentilles, le bouillon et les épices. Cuire 15 min. Ajouter les épinards, cuire encore 3 min. Mixer ou laisser tel quel selon préférence.",
      tip: "Léger mais rassasiant grâce aux lentilles. Ajoute un œuf poché sur le dessus pour booster les protéines."
    },
    {
      id: "dej-17",
      name: "Bolognaise Légère Pâtes Complètes",
      prepTime: 25,
      batch: true,
      batchNote: "Fais 1 kg de haché + sauce tomate le dimanche — 5 portions. Se réchauffe en 3 min, congèle parfaitement.",
      goals: ["recomp", "muscle", "cut"],
      vegetarian: false,
      calories: 565,
      protein: 48,
      carbs: 58,
      fat: 13,
      ingredients: [
        { item: "Haché de bœuf ou dinde 5% MG", amount: "170g" },
        { item: "Pâtes complètes (crues)", amount: "75g" },
        { item: "Pulpe de tomates en boîte", amount: "150g" },
        { item: "Oignon", amount: "60g" },
        { item: "Ail (2 gousses)", amount: "QS" },
        { item: "Huile d'olive", amount: "5g" },
        { item: "Origan, sel, poivre", amount: "QS" }
      ],
      recipe: "Faire revenir l'oignon et l'ail haché 3 min dans l'huile. Ajouter le haché, cuire 8 min en émiettant. Verser la pulpe de tomates + origan, mijoter 10 min à feu doux. Cuire les pâtes al dente. Mélanger.",
      tip: "Haché de dinde 5% = aussi protéiné, moins cher et moins gras que le bœuf. Parfait pour la bolognaise en batch."
    },
    {
      id: "dej-18",
      name: "Dinde Riz Sauce Tomate Express",
      prepTime: 20,
      batch: true,
      batchNote: "Cuis 800g de dinde + riz + sauce tomate le dimanche. 5 Tupperware prêts. Se congèle très bien.",
      goals: ["recomp", "muscle", "cut"],
      vegetarian: false,
      calories: 498,
      protein: 50,
      carbs: 55,
      fat: 8,
      ingredients: [
        { item: "Escalope ou haché de dinde", amount: "170g" },
        { item: "Riz basmati (cru)", amount: "70g" },
        { item: "Pulpe de tomates en boîte", amount: "120g" },
        { item: "Poivron rouge", amount: "80g" },
        { item: "Oignon", amount: "60g" },
        { item: "Huile d'olive", amount: "5g" },
        { item: "Paprika, cumin, sel, poivre", amount: "QS" }
      ],
      recipe: "Cuire le riz. Faire revenir oignon + poivron 4 min. Ajouter la dinde en dés, cuire 6 min. Verser la pulpe de tomates + épices, mijoter 8 min. Servir sur le riz.",
      tip: "Un des plats les plus simples, les plus reproductibles et les moins chers de la liste. Maîtrise cette recette et tu tiens toute ta semaine."
    },
    {
      id: "dej-19",
      name: "Haché 5% Ratatouille & Riz",
      prepTime: 30,
      batch: true,
      batchNote: "La ratatouille se fait en grande casserole — 5 jours au frigo. Cuis 1 kg de haché + riz le dimanche. Assemble en Tupperware.",
      goals: ["recomp", "muscle"],
      vegetarian: false,
      calories: 542,
      protein: 44,
      carbs: 52,
      fat: 14,
      ingredients: [
        { item: "Haché de bœuf ou dinde 5% MG", amount: "170g" },
        { item: "Riz basmati (cru)", amount: "65g" },
        { item: "Courgette", amount: "120g" },
        { item: "Aubergine", amount: "80g" },
        { item: "Poivron rouge", amount: "80g" },
        { item: "Pulpe de tomates en boîte", amount: "100g" },
        { item: "Huile d'olive", amount: "8g" },
        { item: "Herbes de Provence, ail, sel, poivre", amount: "QS" }
      ],
      recipe: "Couper tous les légumes en dés. Faire revenir avec l'huile et l'ail 5 min à feu vif. Ajouter la pulpe de tomates + herbes de Provence. Mijoter 20 min à couvert. Cuire le riz et le haché séparément. Assembler.",
      tip: "La ratatouille est meilleure réchauffée — fais-la toujours la veille ou le dimanche. Le haché grillé puis ajouté tient mieux que mélangé dès le début."
    }
  ],

  // ─── DÎNERS ───────────────────────────────────────────────────────────────────
  diner: [
    {
      id: "din-1",
      name: "Omelette 4 Œufs Légumes Poêlés",
      prepTime: 10,
      batch: false,
      goals: ["recomp", "muscle", "cut"],
      vegetarian: true,
      calories: 518,
      protein: 40,
      carbs: 10,
      fat: 36,
      ingredients: [
        { item: "Œufs entiers", amount: "4 œufs" },
        { item: "Poêlée de légumes (courgette, poivron, oignon)", amount: "200g" },
        { item: "Fromage râpé allégé", amount: "30g" },
        { item: "Huile d'olive", amount: "5g" },
        { item: "Fines herbes, sel, poivre", amount: "QS" }
      ],
      recipe: "Faire revenir les légumes 5 min dans la poêle huilée. Battre les œufs avec les herbes. Verser sur les légumes, laisser prendre à feu moyen. Ajouter le fromage, plier.",
      tip: "Dîner léger en glucides — idéal les jours de repos. 10 min chrono du frigo à l'assiette."
    },
    {
      id: "din-2",
      name: "Maquereau Riz & Haricots Verts",
      prepTime: 15,
      batch: true,
      batchNote: "Riz et haricots en batch. Le maquereau s'ajoute à froid directement depuis la boîte.",
      goals: ["recomp", "muscle", "cut"],
      vegetarian: false,
      calories: 592,
      protein: 34,
      carbs: 66,
      fat: 22,
      ingredients: [
        { item: "Maquereau en boîte au naturel", amount: "130g" },
        { item: "Riz basmati (cru)", amount: "75g" },
        { item: "Haricots verts (surgelés)", amount: "180g" },
        { item: "Jus de citron", amount: "½ citron" },
        { item: "Huile d'olive", amount: "5g" },
        { item: "Ciboulette, sel, poivre", amount: "QS" }
      ],
      recipe: "Cuire le riz. Haricots verts vapeur 8 min. Ouvrir et égoutter le maquereau. Assembler, arroser de citron et d'huile.",
      tip: "Le maquereau est l'une des meilleures sources d'oméga-3. Peu cher, zéro préparation. Trop souvent ignoré."
    },
    {
      id: "din-3",
      name: "Poulet Pâtes Courgettes",
      prepTime: 20,
      batch: true,
      batchNote: "Fait-en pour 3-4 portions. Se réchauffe avec un fond d'eau dans la poêle.",
      goals: ["recomp", "muscle"],
      vegetarian: false,
      calories: 499,
      protein: 43,
      carbs: 55,
      fat: 12,
      ingredients: [
        { item: "Blanc de poulet (cru)", amount: "140g" },
        { item: "Pâtes complètes (crues)", amount: "72g" },
        { item: "Courgette", amount: "150g" },
        { item: "Tomates cerises", amount: "100g" },
        { item: "Ail (2 gousses)", amount: "QS" },
        { item: "Huile d'olive", amount: "8g" },
        { item: "Basilic, sel, poivre", amount: "QS" }
      ],
      recipe: "Cuire les pâtes al dente. Faire revenir le poulet en dés avec l'ail 6-8 min. Ajouter les courgettes en rondelles et les tomates 5 min. Mélanger avec les pâtes.",
      tip: "Ne pas couvrir la poêle — les courgettes rendent de l'eau et ça bouille au lieu de rôtir."
    },
    {
      id: "din-4",
      name: "Bowl Tofu Grillé Riz & Épinards",
      prepTime: 20,
      batch: true,
      batchNote: "Tofu mariné 2 jours à l'avance. Riz en batch. Assemble froid ou chaud selon les jours.",
      goals: ["recomp", "muscle", "cut"],
      vegetarian: true,
      calories: 668,
      protein: 43,
      carbs: 67,
      fat: 25,
      ingredients: [
        { item: "Tofu ferme", amount: "200g" },
        { item: "Riz basmati (cru)", amount: "75g" },
        { item: "Épinards frais", amount: "150g" },
        { item: "Sauce soja", amount: "20ml" },
        { item: "Huile de sésame", amount: "5g" },
        { item: "Gingembre râpé, ail", amount: "QS" },
        { item: "Graines de sésame", amount: "5g" }
      ],
      recipe: "Couper le tofu en dés. Mariner 15 min dans sauce soja + gingembre + ail. Griller dans une poêle sèche très chaude 4-5 min par côté jusqu'à dorure. Cuire le riz. Faire tomber les épinards 2 min. Assembler, arroser d'huile de sésame.",
      tip: "Presser le tofu dans un linge propre avant de mariner — il absorbe mieux et dore beaucoup mieux."
    },
    {
      id: "din-5",
      name: "Dinde Patate Douce Rôtie & Brocolis",
      prepTime: 30,
      batch: true,
      batchNote: "Rôtis une plaque entière de patate douce (40 min, 200°C). Base de 3-4 dîners différents.",
      goals: ["recomp", "muscle", "cut"],
      vegetarian: false,
      calories: 481,
      protein: 47,
      carbs: 47,
      fat: 11,
      ingredients: [
        { item: "Escalope de dinde (crue)", amount: "160g" },
        { item: "Patate douce", amount: "200g" },
        { item: "Brocolis", amount: "180g" },
        { item: "Huile d'olive", amount: "8g" },
        { item: "Paprika, thym, sel, poivre", amount: "QS" }
      ],
      recipe: "Four 200°C. Couper la patate en dés, enrober d'huile + paprika + thym. Rôtir 25 min. Brocolis vapeur 8 min. Griller la dinde à la poêle. Assembler.",
      tip: "La patate douce rôtie est incomparable avec la bouillie. Le détail qui change tout."
    },
    {
      id: "din-6",
      name: "Salade Thon Œufs Durs & Légumes",
      prepTime: 12,
      batch: false,
      goals: ["recomp", "cut"],
      vegetarian: false,
      calories: 515,
      protein: 51,
      carbs: 11,
      fat: 30,
      ingredients: [
        { item: "Thon en boîte au naturel", amount: "100g" },
        { item: "Œufs durs", amount: "3 œufs" },
        { item: "Tomates", amount: "150g" },
        { item: "Concombre", amount: "100g" },
        { item: "Olives noires", amount: "20g" },
        { item: "Huile d'olive", amount: "8g" },
        { item: "Vinaigre balsamique", amount: "10ml" }
      ],
      recipe: "Cuire les œufs 9 min à l'eau bouillante, refroidir, écaler. Couper les légumes. Égoutter le thon. Assembler et assaisonner.",
      tip: "Dîner zéro glucides — idéal les jours de repos. Style niçoise maison."
    },
    {
      id: "din-7",
      name: "Saumon Vapeur Riz & Haricots Verts",
      prepTime: 20,
      batch: false,
      goals: ["recomp", "muscle"],
      vegetarian: false,
      calories: 615,
      protein: 39,
      carbs: 65,
      fat: 20,
      ingredients: [
        { item: "Pavé de saumon (avec peau)", amount: "150g" },
        { item: "Riz basmati (cru)", amount: "75g" },
        { item: "Haricots verts", amount: "160g" },
        { item: "Citron (rondelles)", amount: "½ citron" },
        { item: "Aneth ou persil, sel, poivre", amount: "QS" }
      ],
      recipe: "Cuire le riz. Haricots verts vapeur 8 min. Saumon vapeur 10 min ou à la poêle antiadhésive sans matière grasse 4 min par côté. Servir avec le citron.",
      tip: "Vapeur = meilleure conservation des oméga-3 que la friture. Aneth + citron, le duo classique."
    },
    {
      id: "din-8",
      name: "Velouté Lentilles & Œufs Pochés",
      prepTime: 20,
      batch: true,
      batchNote: "Le velouté se conserve 5 jours et se congèle parfaitement. Les œufs pochés se font minute.",
      goals: ["recomp", "cut"],
      vegetarian: true,
      calories: 450,
      protein: 34,
      carbs: 45,
      fat: 12,
      ingredients: [
        { item: "Lentilles corail (sèches)", amount: "80g" },
        { item: "Carotte", amount: "100g" },
        { item: "Oignon", amount: "80g" },
        { item: "Bouillon de légumes", amount: "500ml" },
        { item: "Œufs entiers", amount: "2 œufs" },
        { item: "Huile d'olive", amount: "8g" },
        { item: "Cumin, curry, sel", amount: "QS" }
      ],
      recipe: "Faire revenir l'oignon 3 min. Ajouter carottes en dés, lentilles, bouillon + épices. Cuire 15 min. Mixer. Pocher les œufs séparément (eau frémissante + vinaigre, 3 min). Poser les œufs sur le velouté.",
      tip: "Le velouté seul suffit à nourrir — les œufs pochés dessus, c'est la touche qui change le niveau."
    },
    {
      id: "din-9",
      name: "Omelette Champignons & Jambon",
      prepTime: 8,
      batch: false,
      goals: ["recomp", "muscle", "cut"],
      vegetarian: false,
      calories: 485,
      protein: 44,
      carbs: 7,
      fat: 31,
      ingredients: [
        { item: "Œufs entiers", amount: "4 œufs" },
        { item: "Champignons de Paris frais", amount: "150g" },
        { item: "Jambon blanc (dinde ou porc maigre)", amount: "60g" },
        { item: "Huile d'olive", amount: "5g" },
        { item: "Persil, sel, poivre", amount: "QS" }
      ],
      recipe: "Trancher les champignons, les faire sauter à feu vif 4 min jusqu'à évaporation de l'eau. Baisser le feu, ajouter le jambon en dés. Battre les œufs, verser, cuire à feu moyen. Plier.",
      tip: "Dîner le plus rapide de la liste. Les champignons donnent une saveur umami qui compense l'absence de sauce."
    },
    {
      id: "din-10",
      name: "Wrap Dinde Tzatziki Express",
      prepTime: 10,
      batch: false,
      goals: ["recomp", "cut"],
      vegetarian: false,
      calories: 441,
      protein: 42,
      carbs: 45,
      fat: 9,
      ingredients: [
        { item: "Tortilla blé complet (grande)", amount: "80g" },
        { item: "Escalope de dinde grillée (crue)", amount: "130g" },
        { item: "Tzatziki du commerce", amount: "80g" },
        { item: "Salade verte", amount: "30g" },
        { item: "Tomates (rondelles)", amount: "50g" }
      ],
      recipe: "Griller la dinde et la couper en lamelles. Étaler le tzatziki sur la tortilla. Ajouter salade, tomates et dinde. Rouler.",
      tip: "Le tzatziki fait office de sauce ET de lipides — pas besoin d'ajouter de l'huile."
    },
    {
      id: "din-11",
      name: "Bowl Maquereau Brocolis Riz",
      prepTime: 10,
      batch: true,
      batchNote: "Riz et brocolis en batch du dimanche. Le maquereau s'ajoute à froid en 30 secondes.",
      goals: ["recomp", "muscle", "cut"],
      vegetarian: false,
      calories: 578,
      protein: 37,
      carbs: 68,
      fat: 17,
      ingredients: [
        { item: "Maquereau en boîte au naturel", amount: "130g" },
        { item: "Riz basmati (cru)", amount: "75g" },
        { item: "Brocolis", amount: "200g" },
        { item: "Sauce soja", amount: "10ml" },
        { item: "Citron, sel, poivre", amount: "QS" }
      ],
      recipe: "Cuire le riz. Brocolis vapeur 8 min. Ouvrir le maquereau, égoutter. Assembler en bowl, arroser de sauce soja et de citron.",
      tip: "Version encore plus rapide que le repas complet du midi — parfait si tu rentres tard."
    },
    {
      id: "din-12",
      name: "Œufs Brouillés Saumon Fumé",
      prepTime: 8,
      batch: false,
      goals: ["recomp", "muscle"],
      vegetarian: false,
      calories: 480,
      protein: 47,
      carbs: 3,
      fat: 31,
      ingredients: [
        { item: "Œufs entiers", amount: "3 œufs" },
        { item: "Saumon fumé", amount: "80g" },
        { item: "Fromage frais allégé (type Philadelphia light)", amount: "30g" },
        { item: "Ciboulette fraîche", amount: "QS" },
        { item: "Huile d'olive", amount: "5g" },
        { item: "Poivre noir, citron", amount: "QS" }
      ],
      recipe: "Battre les œufs. Les cuire à feu très doux dans la poêle huilée en remuant constamment — texture crémeuse, pas sèche. Hors du feu, incorporer le fromage frais. Servir sur le saumon fumé avec la ciboulette.",
      tip: "Œufs brouillés lents = texture crémeuse. La précipitation donne des œufs en caoutchouc. Pas de feu fort."
    },
    {
      id: "din-13",
      name: "Steak Haché Œuf au Plat & Pain Complet",
      prepTime: 10,
      batch: false,
      goals: ["recomp", "muscle"],
      vegetarian: false,
      calories: 568,
      protein: 53,
      carbs: 30,
      fat: 26,
      ingredients: [
        { item: "Steak haché 5% MG", amount: "150g" },
        { item: "Œufs entiers", amount: "2 œufs" },
        { item: "Pain complet (1 tranche)", amount: "50g" },
        { item: "Salade verte + tomates", amount: "200g" },
        { item: "Huile d'olive", amount: "5g" },
        { item: "Sel, poivre, moutarde", amount: "QS" }
      ],
      recipe: "Cuire le steak 3-4 min par côté. Dans la même poêle, cuire les œufs au plat. Toaster le pain. Servir avec la salade assaisonnée.",
      tip: "Le classique étudiant sous toutes ses formes. Simple, efficace, pas cher. Zéro prétention, 100% efficace."
    },
    {
      id: "din-14",
      name: "Gratin Courgettes Thon (Four)",
      prepTime: 20,
      batch: true,
      batchNote: "Se réchauffe très bien le lendemain. Prépare un grand plat pour 2 portions.",
      goals: ["recomp", "cut"],
      vegetarian: false,
      calories: 473,
      protein: 60,
      carbs: 11,
      fat: 22,
      ingredients: [
        { item: "Thon en boîte au naturel", amount: "160g" },
        { item: "Courgettes", amount: "300g" },
        { item: "Œuf entier", amount: "1 œuf" },
        { item: "Fromage râpé", amount: "30g" },
        { item: "Crème légère 15% MG", amount: "30g" },
        { item: "Ail, herbes de Provence, sel, poivre", amount: "QS" }
      ],
      recipe: "Four 180°C. Couper les courgettes en rondelles fines. Égoutter le thon. Mélanger œuf + crème + ail. Dans un plat à gratin : alterner courgettes + thon. Verser le mélange œuf-crème. Parsemer de fromage. Cuire 20 min.",
      tip: "Dîner protéiné et léger en glucides — parfait les jours de repos ou cut. Se fait facilement pendant que tu travailles."
    },
    {
      id: "din-15",
      name: "Soupe Miso Tofu & Édamame",
      prepTime: 5,
      batch: false,
      goals: ["cut", "recomp"],
      vegetarian: true,
      calories: 445,
      protein: 44,
      carbs: 19,
      fat: 21,
      ingredients: [
        { item: "Tofu ferme", amount: "200g" },
        { item: "Édamame (surgelés)", amount: "100g" },
        { item: "Pâte de miso (ou 2 sachets miso instant)", amount: "20g" },
        { item: "Champignons de Paris", amount: "50g" },
        { item: "Eau chaude", amount: "500ml" },
        { item: "Sauce soja", amount: "10ml" }
      ],
      recipe: "Faire bouillir l'eau. Diluer le miso dans un peu d'eau chaude. Couper le tofu en cubes. Décongeler les édamame 3 min dans l'eau chaude. Assembler dans un bol : miso + tofu + édamame + champignons. Ajouter la sauce soja.",
      tip: "5 min, zéro cuisson complexe. La pâte de miso froide en supermarché asiatique vaut largement les sachets instantanés."
    },
    {
      id: "din-16",
      name: "Pâtes Saumon Fumé Crème Légère",
      prepTime: 15,
      batch: false,
      goals: ["recomp", "muscle"],
      vegetarian: false,
      calories: 545,
      protein: 38,
      carbs: 60,
      fat: 16,
      ingredients: [
        { item: "Pâtes complètes (crues)", amount: "75g" },
        { item: "Saumon fumé", amount: "80g" },
        { item: "Crème légère 15% MG", amount: "60g" },
        { item: "Citron (zeste + jus)", amount: "½ citron" },
        { item: "Aneth ou ciboulette", amount: "QS" },
        { item: "Poivre noir", amount: "QS" }
      ],
      recipe: "Cuire les pâtes al dente. Faire chauffer la crème à feu doux. Couper le saumon fumé en lamelles. Égoutter les pâtes, mélanger avec la crème et le saumon. Ajouter le zeste et le jus de citron. Parsemer d'herbes.",
      tip: "La chaleur des pâtes suffit à cuire légèrement le saumon — ne pas trop chauffer pour garder la texture."
    }
  ],

  // ─── COLLATIONS ───────────────────────────────────────────────────────────────
  collation: [
    {
      id: "col-1",
      name: "Skyr & Fruits Rouges",
      prepTime: 2,
      batch: false,
      goals: ["recomp", "muscle", "cut"],
      vegetarian: true,
      calories: 166,
      protein: 23,
      carbs: 16,
      fat: 1,
      ingredients: [
        { item: "Skyr nature", amount: "200g" },
        { item: "Fruits rouges (frais ou surgelés)", amount: "80g" }
      ],
      recipe: "Verser le skyr dans un bol. Ajouter les fruits rouges. C'est prêt.",
      tip: "Idéale post-entraînement : protéines rapides, glucides simples. Moins de 5 min."
    },
    {
      id: "col-2",
      name: "Fromage Blanc & Compote Pomme",
      prepTime: 2,
      batch: false,
      goals: ["recomp", "muscle", "cut"],
      vegetarian: true,
      calories: 124,
      protein: 15,
      carbs: 16,
      fat: 0,
      ingredients: [
        { item: "Fromage blanc 0%", amount: "200g" },
        { item: "Compote sans sucres ajoutés", amount: "80g" }
      ],
      recipe: "Mélanger. Consommer froid.",
      tip: "Toujours compote sans sucres ajoutés — les versions classiques ajoutent 8-10g de sucre inutiles."
    },
    {
      id: "col-3",
      name: "Skyr Banane & Amandes",
      prepTime: 2,
      batch: false,
      goals: ["recomp", "muscle"],
      vegetarian: true,
      calories: 255,
      protein: 21,
      carbs: 27,
      fat: 8,
      ingredients: [
        { item: "Skyr nature", amount: "150g" },
        { item: "Banane", amount: "80g" },
        { item: "Amandes", amount: "15g" }
      ],
      recipe: "Couper la banane en rondelles. Verser sur le skyr. Ajouter les amandes.",
      tip: "Plus calorique — parfait après une longue séance ou un jour très actif."
    },
    {
      id: "col-4",
      name: "Œufs Durs & Thon Boîte",
      prepTime: 10,
      batch: true,
      batchNote: "Cuis 6-8 œufs durs le dimanche. Conserve 5 jours au frigo non écalés — prêts à emporter.",
      goals: ["recomp", "muscle", "cut"],
      vegetarian: false,
      calories: 262,
      protein: 36,
      carbs: 1,
      fat: 13,
      ingredients: [
        { item: "Œufs durs", amount: "2 œufs" },
        { item: "Thon en boîte au naturel", amount: "80g" }
      ],
      recipe: "Cuire les œufs 9 min dans l'eau bouillante. Refroidir à l'eau froide. Égoutter le thon. Saler légèrement.",
      tip: "Collation ultra-protéinée portable. Aussi simple que c'est efficace."
    },
    {
      id: "col-5",
      name: "Fromage Blanc Pomme & Cannelle",
      prepTime: 3,
      batch: false,
      goals: ["recomp", "muscle", "cut"],
      vegetarian: true,
      calories: 115,
      protein: 12,
      carbs: 19,
      fat: 0,
      ingredients: [
        { item: "Fromage blanc 0%", amount: "150g" },
        { item: "Pomme", amount: "100g" },
        { item: "Cannelle", amount: "1 pincée" }
      ],
      recipe: "Couper la pomme en petits dés. Mélanger avec le fromage blanc. Saupoudrer de cannelle.",
      tip: "La cannelle aide à stabiliser la glycémie. Bon réflexe sur une collation en milieu d'après-midi."
    }
  ]
};

// ─── SÉLECTION INTELLIGENTE ───────────────────────────────────────────────────
// Filtre par objectif + batch cooking, évite les répétitions dans la semaine

function selectMeal(type, usedIds, goal, batchOnly) {
  var pool = MEALS_DB[type] || [];

  var filtered = pool.filter(function(m) {
    return m.goals.indexOf(goal) !== -1;
  });
  if (!filtered.length) filtered = pool;

  if (batchOnly) {
    var batchFiltered = filtered.filter(function(m) { return m.batch; });
    if (batchFiltered.length) filtered = batchFiltered;
  }

  var fresh = filtered.filter(function(m) { return usedIds.indexOf(m.id) === -1; });
  var candidates = fresh.length ? fresh : filtered;

  return candidates[Math.floor(Math.random() * candidates.length)];
}

// Backward compatibility
const DB = {
  proteins: [
    { name: "Blanc de Poulet", p: 22.0, c: 0.0, l: 1.5, cal: 104 },
    { name: "Escalope de Dinde", p: 24.0, c: 0.0, l: 1.2, cal: 110 },
    { name: "Steak Haché (5% MG)", p: 21.0, c: 0.0, l: 5.0, cal: 129 },
    { name: "Thon en boîte (au naturel)", p: 25.0, c: 0.0, l: 1.0, cal: 110 },
    { name: "Maquereau en boîte (nature)", p: 19.0, c: 0.0, l: 12.0, cal: 184 },
    { name: "Œufs entiers", p: 13.0, c: 1.0, l: 10.0, cal: 145 },
    { name: "Tofu ferme", p: 15.0, c: 2.0, l: 8.0, cal: 140 }
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
    { name: "Épinards", p: 2.9, c: 1.0, l: 0.4, cal: 23 }
  ],
  fats: [
    { name: "Huile d'Olive", p: 0.0, c: 0.0, l: 100.0, cal: 900 },
    { name: "Beurre de Cacahuète", p: 25.0, c: 16.0, l: 50.0, cal: 588 },
    { name: "Amandes", p: 21.0, c: 20.0, l: 50.0, cal: 580 }
  ],
  snacks: [
    { name: "Skyr nature & Rondelles de Banane", p: 5.5, c: 13.5, l: 0.0, cal: 73 },
    { name: "Fromage Blanc 0% & Pomme en dés", p: 4.0, c: 9.0, l: 0.0, cal: 50 }
  ]
};
