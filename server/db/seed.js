const db = require("./db");
const { Recipe, Ingredient } = require("./");

const dummyRecipes = [
    { name: "Turkey Dinner", timeToMake: 20000, author: "Louis" }, // => Promise<create new recipe> 
    { name: "Turkey Soup", timeToMake: 40000, author: "Izzy" },
    { name: "Cornbread", timeToMake: 30000, author: "Ben" },
    { name: "Brussel Sprouts", timeToMake: 20000 },
    { name: "Stuffing", timeToMake: 40000, author: "Izzy" },
    { name: "Mac N Cheese", timeToMake: 50000, author: "Mae" },
    { name: "Cranberry Sauce", timeToMake: 50000 },
];

const dummyIngredients = [
    { name: "Turkey" }, // => Promise<create new recipe> 
    { name: "Gravey" },
    { name: "Corn" },
    { name: "Soup" },
    { name: "Butter" },
];

const seed = async () => {
    // Clear out any old data
    await db.sync({ force: true });

    console.log("CREATING RECIPES...");
    const [turkeyDin, turkeySoup, cornbread] = await Promise.all(dummyRecipes.map(recipe => Recipe.create(recipe)));
    console.log("DONE CREATING RECIPES...");

    console.log("CREATING INGREDIENTS...");
    const [turkey, gravey, corn, soup, butter] = await Promise.all(dummyIngredients.map(ingredient => Ingredient.create(ingredient)));
    console.log("DONE CREATING INGREDIENTS...");

    console.log("ADDING INGREDIENTS TO RECIPES...");
    turkeyDin.addIngredients([turkey, gravey]);
    turkeySoup.addIngredients([turkey, soup]);
    cornbread.addIngredients([corn, butter]);
    console.log("DONE ADDING INGREDIENTS TO RECIPES...");

    console.log("DONE RUNNING SEED...");
};

seed();