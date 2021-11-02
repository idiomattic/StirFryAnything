export class Ingredient {
  constructor(name, category, state, raw_img_link, prepped_img_link) {
    this.name = name;
    this.category = category;
    this.state = state;
    this.raw_img_link = raw_img_link;
    this.prepped_img_link = prepped_img_link;
    let rawImage = new Image();
    
    rawImage.src = this.raw_img_link;

    this.raw_img = rawImage;
    let preppedImage = new Image();
    
    preppedImage.src = this.prepped_img_link;
    this.prepped_img = preppedImage;
  }

  render(ctx) {
    ctx.drawImage(this.raw_img, 600, 400)
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

export const proteins = INGREDIENTS.filter(ingredient => ingredient.category === 'Protein');
export const vegetables = INGREDIENTS.filter(ingredient => ingredient.category === 'Vegetable');

// idea for later to automate pulling this information ^
// ingredientNames = fs.readdirSync('images')
// ingredientNames.forEach((ingr) => {
//   new Ingredient(ingr);
// })