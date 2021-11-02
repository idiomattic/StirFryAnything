import Star from './space'
import printer from './util'
import {INGREDIENTS, proteins, vegetables} from "./ingredients"

export default class Game {
  constructor(canvas, context) {
    this.canvas = canvas;
    this.ctx = context;
    this.startGame();
  }

  startGame() {
    this.render()
    printer('Press Enter to Begin')
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
    let firstDirs = printer('Click ingredients to add them to your tray')
    firstDirs.style.top = "23%";
    const container = document.getElementById('game-container');
    this.buildTray(container)
    this.buildLists(container);

  }

  buildTray(container) {
    const trayDiv = document.createElement('div');
    trayDiv.setAttribute('id', 'tray');
    const trayPic = document.createElement('img');
    trayPic.setAttribute('src', 'images/sheet_pan.PNG');
    trayPic.setAttribute('id', 'tray-pic');
    trayDiv.appendChild(trayPic);
    const chosenIngredients = document.createElement('ul');
    chosenIngredients.setAttribute('id', 'chosen-ingredients');
    trayDiv.appendChild(chosenIngredients);
    container.appendChild(trayDiv);
  }

  togglePos() {
    const chosenList = document.querySelector('#chosen-ingredients');
    const parent = this.classList.contains('Vegetable') ? 
      document.querySelector('.veggieList') : document.querySelector('.proteinList');
    if (!this.classList.contains('chosen')) {
      parent.removeChild(this);
      this.classList.toggle('chosen');
      chosenList.appendChild(this);
    } else {
      chosenList.removeChild(this);
      this.classList.toggle('chosen');
      parent.appendChild(this);
    }
  }
      
  buildLists(container) {
    // const container = document.getElementById('game-container');
    let veggieList = document.createElement('ul');
    veggieList.setAttribute('class', 'veggieList');
    vegetables.forEach((veggie) => {
      let veggieEl = document.createElement('li');
      veggieEl.setAttribute('class', `${veggie.category}`)
      veggieEl.setAttribute('id', `${veggie.name}`);
      let veggieImg = document.createElement('img');
      veggieImg.setAttribute('src', `${veggie.raw_img_link}`);
      veggieImg.setAttribute('alt', `${veggie.name}`);
      veggieImg.addEventListener('click', this.togglePos.bind(veggieEl)());
      veggieEl.appendChild(veggieImg);
      veggieList.appendChild(veggieEl);
    })
    container.appendChild(veggieList);
    
    let proteinList = document.createElement('ul');
    proteinList.setAttribute('class', 'proteinList');
    proteins.forEach((protein) => {
      let proteinEl = document.createElement('li');
      proteinEl.setAttribute('class', `${protein.category}`)
      proteinEl.setAttribute('id', `${protein.name}`);
      let proteinImg = document.createElement('img');
      proteinImg.setAttribute('src', `${protein.raw_img_link}`);
      proteinImg.setAttribute('alt', `${protein.name}`);
      proteinImg.addEventListener('click', function(e) {
        console.log('clicked prot');
      });
      proteinEl.appendChild(proteinImg);
      proteinList.appendChild(proteinEl);
    })
    container.appendChild(proteinList);
  }
}
