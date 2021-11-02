import Star from './space'
import {printer} from '../index'
import {INGREDIENTS, proteins, vegetables} from './ingredients';

export default class Game {
  constructor(canvas, context) {
    this.canvas = canvas;
    this.ctx = context;
    this.startGame();
  }

  startGame() {
    this.render()
    this.level = 1;
    window.addEventListener('keypress', (key) => {
      if (key.key === "Enter") {
        this.level1();
      }
    }, false)
  }
  
  render() {
    Star.render.bind(this)();
  }

  level1() {
    if (this.level !== 1) { this.startGame() };
    let firstDirs = printer('Select ingredients to cook!')
    firstDirs.style.top = "25%";

    // this.buildLists();
    this.renderIngredients();
  }

  renderIngredients() {
    INGREDIENTS.forEach((ingredient) => {
      ingredient.render(this.canvas, this.ctx);
    }, this)
  }

  // buildLists() {
  //   const container = document.getElementById('game-container');
  //   let veggieList = document.createElement('ul');
  //   veggieList.setAttribute('class', 'veggieList');
  //   vegetables.forEach((veggie) => {
  //     let veggieEl = document.createElement('li');
  //     veggieEl.setAttribute('id', `${veggie.name}`);
  //     let veggieImg = document.createElement('img');
  //     veggieImg.setAttribute('src', `${veggie.raw_img_link}`);
  //     veggieImg.setAttribute('alt', `${veggie.name}`);
  //     veggieEl.appendChild(veggieImg);
  //     veggieList.appendChild(veggieEl);
  //   })
  //   container.appendChild(veggieList);

  //   let proteinList = document.createElement('ul');
  //   proteinList.setAttribute('class', 'proteinList');
  //   proteins.forEach((protein) => {
  //     let proteinEl = document.createElement('li');
  //     proteinEl.setAttribute('id', `${protein.name}`);
  //     let proteinImg = document.createElement('img');
  //     proteinImg.setAttribute('src', `${protein.raw_img_link}`);
  //     proteinImg.setAttribute('alt', `${protein.name}`);
  //     proteinEl.appendChild(proteinImg);
  //     proteinList.appendChild(proteinEl);
  //   })
  //   container.appendChild(proteinList);
  // }
}
