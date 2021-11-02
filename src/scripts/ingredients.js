export class Ingredient {
  constructor(name, category, state, raw_img, prepped_img) {
    this.name = name;
    this.category = category;
    this.state = state;
    this.raw_img = raw_img;
    this.prepped_img = prepped_img;
  }
}

const INGREDIENTS = [
  new Ingredient('Beef', 'Protein', 'Raw', 'images/raw_beef.PNG', 'images/prepped_beef.PNG'),
  new Ingredient('Bell Pepper', 'Vegetable', 'Raw', 'images/raw_bell_pepper.PNG', 'images/prepped_bell_pepper.PNG'),
  new Ingredient('Broccoli', 'Vegetable', 'Raw', 'images/raw_broccoli.PNG', 'images/prepped_broccoli.PNG'),
  new Ingredient('Chicken', 'Protein', 'Raw', 'images/raw_chicken.PNG', 'images/prepped_chicken.PNG'),
  new Ingredient('Chiles', 'Vegetable', 'Raw', 'images/raw_chiles.PNG', 'images/prepped_chiles.PNG'),
  new Ingredient('Garlic', 'Vegetable', 'Raw', 'images/raw_garlic.PNG', 'images/prepped_garlic.PNG'),
  new Ingredient('Ginger', 'Vegetable', 'Raw', 'images/raw_ginger.PNG', 'images/prepped_ginger.PNG'),
  new Ingredient('Pork', 'Protein', 'Raw', 'images/raw_pork.PNG', 'images/prepped_pork.PNG'),
  new Ingredient('Red Onion', 'Vegetable', 'Raw', 'images/raw_red_onion.PNG', 'images/prepped_red_onion.PNG'),
  new Ingredient('Scallion', 'Vegetable', 'Raw', 'images/raw_scallion.PNG', 'images/prepped_scallion.PNG'),
  new Ingredient('Snap Peas', 'Vegetable', 'Raw', 'images/raw_snap_peas.PNG', 'images/prepped_snap_peas.PNG')  
]

INGREDIENTS.forEach((ingredient) => {
  let rawImage = new Image();
  rawImage.src = ingredient.raw_img;
  ingredient.raw_img = rawImage;
  let preppedImage = new Image();
  preppedImage.src = ingredient.prepped_img;
  ingredient.prepped_img = preppedImage;
})

export const proteins = INGREDIENTS.filter(ingredient => ingredient.category === 'Protein');
export const vegetables = INGREDIENTS.filter(ingredient => ingredient.category === 'Vegetable');

// idea for later to automate pulling this information ^
// ingredientNames = fs.readdirSync('images')
// ingredientNames.forEach((ingr) => {
//   new Ingredient(ingr);
// })