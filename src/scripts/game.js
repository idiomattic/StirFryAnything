import Star from './space'
import printer from './util'
import {INGREDIENTS, proteins, vegetables} from "./ingredients"

export default class Game {
  constructor(canvas, context) {
    this.canvas = canvas;
    this.ctx = context;
    this.startGame();
    this.ingredientsArr = [];
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
    let firstDirs = printer('Click ingredients to add them to your tray');
    firstDirs.style.top = "23%";
    const container = document.getElementById('game-container');
    this.buildTray(container)
    let lists = this.buildLists(container);
    // let numVeggiesLeft = lists[0].getElementsByTagName('li').length;
    // let numProteinsLeft = lists[1].getElementsByTagName('li').length;
    // if (numVeggiesLeft < 4) {
    //   let error = printer('Too many vegetables!');
    //   error.style.top = '23%';
    //   error.style.color = 'red';
    //   error.style.fontWeight = '100';
    // }
    // if (numProteinsLeft < 2) {
    //   let error = printer('Save some protein for the rest of us!');
    //   error.style.top = '23%';
    //   error.style.color = 'red';
    //   error.style.fontWeight = '100';  
    // }
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
  

  togglePos(e) {
    const ingredientsArr = [];
    const chosenList = document.querySelector('#chosen-ingredients');
    let parent = undefined;
    let ingrInst = INGREDIENTS.filter(ingr => ingr.name === this.id);
    if (this.classList.contains('Vegetable')) {
      parent = document.getElementById('veggieList');
    } else {
      parent = document.getElementById('proteinList');
    }
    if (!this.classList.contains('chosen')) {
      parent.removeChild(this);
      this.classList.toggle('chosen');
      if (this.classList.contains('Protein')) {
        this.style.width = '100px';
      } else {
        this.style.width = '40px';
      }
      chosenList.appendChild(this);
      // debugger
      console.log(e.target)
      console.log(e.currentTarget)
      console.log(this)
      ingredientsArr.push(ingrInst[0]);
      console.log(ingredientsArr)
    } else {
      chosenList.removeChild(this);
      ingredientsArr.splice(ingredientsArr.indexOf(ingrInst), 1);
      console.log(ingredientsArr)
      this.classList.toggle('chosen');
      this.style.width = '100px';
      parent.appendChild(this);
    }
  }
      
  buildLists(container) {
    let veggieList = document.createElement('ul');
    veggieList.setAttribute('id', 'veggieList');
    container.appendChild(veggieList);
    vegetables.forEach((veggie) => {
      let veggieEl = document.createElement('li');
      veggieEl.setAttribute('class', `${veggie.category}`)
      veggieEl.setAttribute('id', `${veggie.name}`);
      let veggieImg = document.createElement('img');
      veggieImg.setAttribute('src', `${veggie.raw_img_link}`);
      veggieImg.setAttribute('alt', `${veggie.name}`);
      veggieEl.addEventListener('click', this.togglePos.bind(veggieEl));
      veggieEl.appendChild(veggieImg);
      veggieList.appendChild(veggieEl);
    })
    
    let proteinList = document.createElement('ul');
    proteinList.setAttribute('id', 'proteinList');
    container.appendChild(proteinList);
    proteins.forEach((protein) => {
      let proteinEl = document.createElement('li');
      proteinEl.setAttribute('class', `${protein.category}`)
      proteinEl.setAttribute('id', `${protein.name}`);
      let proteinImg = document.createElement('img');
      proteinImg.setAttribute('src', `${protein.raw_img_link}`);
      proteinImg.setAttribute('alt', `${protein.name}`);
      proteinImg.addEventListener('click', this.togglePos.bind(proteinEl));
      proteinEl.appendChild(proteinImg);
      proteinList.appendChild(proteinEl);
    })
    return [veggieList, proteinList];
  }
}
