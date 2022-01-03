export class Ingredient {
  constructor(name, category, description, state, raw_img_link, prepped_img_link) {
    this.name = name;
    this.category = category;
    this.state = state;
    this.description = description
    this.raw_img_link = raw_img_link;
    this.prepped_img_link = prepped_img_link;
  }

}

export const INGREDIENTS = [
  new Ingredient('Beef', 'Protein', '0.5lbs Lean Beef, cut into thin sheets', 'Raw', 'https://res.cloudinary.com/dsumtpkns/image/upload/v1641238042/raw_beef_kv8nmv.png', 'https://res.cloudinary.com/dsumtpkns/image/upload/v1641238027/prepped_beef_fhifto.png'),
  // new Ingredient('Beef', 'Protein', '0.5lbs Lean Beef, cut into thin sheets', 'Raw', 'images/raw_beef.PNG', 'images/prepped_beef.PNG'),
  new Ingredient('Bell Pepper', 'Vegetable', '1 Red Bell Pepper, cut into slivers', 'Raw', 'https://res.cloudinary.com/dsumtpkns/image/upload/v1641238045/raw_bell_pepper_kolskp.png', 'https://res.cloudinary.com/dsumtpkns/image/upload/v1641238032/prepped_bell_pepper_jwhame.png'),
  // new Ingredient('Bell Pepper', 'Vegetable', '1 Red Bell Pepper, cut into slivers', 'Raw', 'images/raw_bell_pepper.PNG', 'images/prepped_bell_pepper.PNG'),
  new Ingredient('Broccoli', 'Vegetable', 'Half a head of Broccoli, tender parts only, blanched', 'Raw', 'https://res.cloudinary.com/dsumtpkns/image/upload/c_scale,h_832/v1641238053/raw_broccoli_sklm4y.png', 'https://res.cloudinary.com/dsumtpkns/image/upload/v1641238036/prepped_broccoli_tcun3e.png'),
  // new Ingredient('Broccoli', 'Vegetable', 'Half a head of Broccoli, tender parts only, blanched', 'Raw', 'images/raw_broccoli.PNG', 'images/prepped_broccoli.PNG'),
  new Ingredient('Chicken', 'Protein', '0.5lbs Chicken thigh or breast, cut into small cubes', 'Raw', 'https://res.cloudinary.com/dsumtpkns/image/upload/v1641238043/raw_chicken_rc2y4l.png', 'https://res.cloudinary.com/dsumtpkns/image/upload/v1641238020/prepped_chicken_ifn3tr.png'),
  // new Ingredient('Chicken', 'Protein', '0.5lbs Chicken thigh or breast, cut into small cubes', 'Raw', 'images/raw_chicken.PNG', 'images/prepped_chicken.PNG'),
  new Ingredient('Chiles', 'Vegetable', '2 Chiles, cut into slivers or diamonds', 'Raw', 'https://res.cloudinary.com/dsumtpkns/image/upload/v1641238044/raw_chiles_tedsq4.png', 'https://res.cloudinary.com/dsumtpkns/image/upload/v1641238016/prepped_chiles_yt12om.png'),
  // new Ingredient('Chiles', 'Vegetable', '2 Chiles, cut into slivers or diamonds', 'Raw', 'images/raw_chiles.PNG', 'images/prepped_chiles.PNG'),
  new Ingredient('Garlic', 'Vegetable', '3 Cloves Garlic, minced', 'Raw', 'https://res.cloudinary.com/dsumtpkns/image/upload/v1641238050/raw_garlic_ssnqhn.png', 'https://res.cloudinary.com/dsumtpkns/image/upload/v1641238017/prepped_garlic_ugirtu.png'),
  // new Ingredient('Garlic', 'Vegetable', '3 Cloves Garlic, minced', 'Raw', 'images/raw_garlic.PNG', 'images/prepped_garlic.PNG'),
  new Ingredient('Ginger', 'Vegetable', '1 inch Ginger, minced', 'Raw', 'https://res.cloudinary.com/dsumtpkns/image/upload/v1641238052/raw_ginger_wbghed.png', 'https://res.cloudinary.com/dsumtpkns/image/upload/v1641238030/prepped_ginger_hvrhb6.png'),
  // new Ingredient('Ginger', 'Vegetable', '1 inch Ginger, minced', 'Raw', 'images/raw_ginger.PNG', 'images/prepped_ginger.PNG'),
  new Ingredient('Pork', 'Protein', '0.5lbs Lean Pork, cut into slivers', 'Raw', 'https://res.cloudinary.com/dsumtpkns/image/upload/c_scale,h_531/v1641238057/raw_pork_snp48x.png', 'https://res.cloudinary.com/dsumtpkns/image/upload/v1641238038/prepped_pork_slxtwd.png'),
  // new Ingredient('Pork', 'Protein', '0.5lbs Lean Pork, cut into slivers', 'Raw', 'images/raw_pork.PNG', 'images/prepped_pork.PNG'),
  new Ingredient('Onion', 'Vegetable', '1/4 Red Onion or a Small Shallot, cut into slivers', 'Raw', 'https://res.cloudinary.com/dsumtpkns/image/upload/v1641238052/raw_red_onion_xmh8n9.png', 'https://res.cloudinary.com/dsumtpkns/image/upload/v1641238029/prepped_red_onion_xcoxaf.png'),
  // new Ingredient('Onion', 'Vegetable', '1/4 Red Onion or a Small Shallot, cut into slivers', 'Raw', 'images/raw_red_onion.PNG', 'images/prepped_red_onion.PNG'),
  new Ingredient('Scallion', 'Vegetable', '3 Scallion Whites, cut into 1 inch sections', 'Raw', 'https://res.cloudinary.com/dsumtpkns/image/upload/v1641238007/raw_scallion_dpeyzg.png', 'https://res.cloudinary.com/dsumtpkns/image/upload/v1641238040/prepped_scallion_pgupfk.png'),
  // new Ingredient('Scallion', 'Vegetable', '3 Scallion Whites, cut into 1 inch sections', 'Raw', 'images/raw_scallion.PNG', 'images/prepped_scallion.PNG'),
  new Ingredient('Snap Peas', 'Vegetable', 'Handful of Snap Peas, trimmed and cut in half diagonally', 'Raw', 'https://res.cloudinary.com/dsumtpkns/image/upload/v1641238002/raw_snap_peas_v5yuxl.png', 'https://res.cloudinary.com/dsumtpkns/image/upload/v1641238036/prepped_snap_peas_qxpbvb.png')  
  // new Ingredient('Snap Peas', 'Vegetable', 'Handful of Snap Peas, trimmed and cut in half diagonally', 'Raw', 'images/raw_snap_peas.PNG', 'images/prepped_snap_peas.PNG')  
]

export const proteins = INGREDIENTS.filter(ingredient => ingredient.category === 'Protein');
export const vegetables = INGREDIENTS.filter(ingredient => ingredient.category === 'Vegetable');

// idea for later to automate pulling this information ^
// ingredientNames = fs.readdirSync('images')
// ingredientNames.forEach((ingr) => {
//   new Ingredient(ingr);
// })