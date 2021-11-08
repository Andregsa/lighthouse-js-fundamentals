const chooseRecipe = function (bakeryA, bakeryB, recipes) {
  // Code here!

  for (let recipe of recipes) {
    //Assign the array of ingredients returned from ingredientCcheck function
    //and lastly sort to be easier to compare both arrays

    let ingredientsBakeryA = ingredientCheck(
      bakeryA,
      recipe.ingredients
    ).sort();

    let ingredientsBakeryB = ingredientCheck(
      bakeryB,
      recipe.ingredients
    ).sort();

    if (ingredientsBakeryA.length > 0 && ingredientsBakeryB.length > 0) {
      //check if both bakeries has at least one ingredient
      if (ingredientsBakeryA.length >= ingredientsBakeryB.length) {
        //Check which array of bakeryA or B is bigger
        for (let i = 0; i < ingredientsBakeryA.length; i++) {
          if (ingredientsBakeryA[i] !== ingredientsBakeryB[0])
            //Loop through the array and check if it defer from the first element of BakeryB array
            return recipe.name;
        }
      } else if (ingredientsBakeryB.length >= ingredientsBakeryA.length) {
        for (let i = 0; i < ingredientsBakeryB.length; i++) {
          if (ingredientsBakeryB[i] !== ingredientsBakeryA[0])
            return recipe.name;
        }
      }
    }
  }

  return "Unfortunately there is no enough ingredients for these recipes";
};

//function to check if what the restaurant has matches with recipes ingredients
const ingredientCheck = (bakery, ingredients) => {
  let recipeIngredients = [];

  for (let bakeIng of bakery) {
    if (ingredients.includes(bakeIng)) {
      recipeIngredients.push(bakeIng);
    }
  }

  return recipeIngredients;
};

let bakeryA = ["saffron", "eggs", "tomato paste", "coconut", "custard"];
let bakeryB = ["milk", "butter", "cream cheese"];
let recipes = [
  {
    name: "Coconut Sponge Cake",
    ingredients: ["coconut", "cake base"],
  },
  {
    name: "Persian Cheesecake",
    ingredients: ["saffron", "cream cheese"],
  },
  {
    name: "Custard Surprise",
    ingredients: ["custard", "ground beef"],
  },
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

bakeryA = ["potatoes", "bay leaf", "raisins"];
bakeryB = ["red bean", "dijon mustard", "apples"];
recipes = [
  {
    name: "Potato Ganache",
    ingredients: ["potatoes", "chocolate"],
  },
  {
    name: "Sweet Fish",
    ingredients: ["anchovies", "honey"],
  },
  {
    name: "Nima's Famous Dijon Raisins",
    ingredients: ["dijon mustard", "raisins"],
  },
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));
