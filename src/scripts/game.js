import Star from './space'
import {printer, printer2} from './util'
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
    let hello = printer('Press Enter to Begin')
    hello.style.top = "50%";
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
    printer('Click ingredients to add them to your tray');
    setTimeout(function(){printer('and click again to remove them.')}, 8000)
    setTimeout(function(){
      printer('Click here to advance when ready.');
      let advanceMessage = document.getElementById('message')
      advanceMessage.addEventListener('click', Game.prototype.enterLevel2.bind(this))
    }.bind(this), 15000)
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

  level2() {
    this.level++;
    if (this.level !== 2) { this.startGame() };
    printer('Choose ingredients from your tray to begin preparing.')
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

  enterLevel2() {
    const chosenIngredients = document.getElementById('chosen-ingredients');
    if (chosenIngredients.getElementsByTagName('li').length > 1) {
      Game.prototype.removeLists();
      Game.prototype.removeL1Events();
      Game.prototype.placeBoard();
      this.boardOccupied = false;
      Game.prototype.addL2Events.bind(this)();
      Game.prototype.level2.bind(this)();
    };
  }
  

  togglePos(e) {
    const chosenList = document.querySelector('#chosen-ingredients');
    let parent = undefined;
    let eTarg = e.currentTarget;
    let ingrInst = INGREDIENTS.filter(ingr => ingr.name === eTarg.id);
    if (eTarg.classList.contains('Vegetable')) {
      parent = document.getElementById('veggieList');
    } else {
      parent = document.getElementById('proteinList');
    }
    if (!eTarg.classList.contains('chosen')) {
      parent.removeChild(eTarg);
      eTarg.classList.toggle('chosen');
      if (eTarg.classList.contains('Protein')) {
        eTarg.style.width = '100px';
      } else {
        eTarg.style.width = '40px';
      }
      chosenList.appendChild(eTarg);
      this.ingredientsArr.push(ingrInst[0]);
    } else {
      chosenList.removeChild(eTarg);
      this.ingredientsArr.splice(this.ingredientsArr.indexOf(ingrInst), 1);
      eTarg.classList.toggle('chosen');
      eTarg.style.width = '100px';
      parent.appendChild(eTarg);
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
      veggieEl.onclick = this.togglePos.bind(this);
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
      proteinEl.onclick = this.togglePos.bind(this);
      proteinEl.appendChild(proteinImg);
      proteinList.appendChild(proteinEl);
    })
    return [veggieList, proteinList];
  }

  removeLists() {
    const container = document.getElementById('game-container');
    const vegList = document.getElementById('veggieList');
    const proList = document.getElementById('proteinList');
    container.removeChild(vegList);
    container.removeChild(proList);
  }

  removeL1Events() {
    let trayEls = document.getElementById('chosen-ingredients').getElementsByTagName('li');
    for (let i = 0; i < trayEls.length; i++) {
      trayEls[i].onclick = null;
    }
  }
  
  placeBoard() {
    const container = document.getElementById('game-container');
    let boardDiv = document.createElement('div');
    container.appendChild(boardDiv);
    boardDiv.setAttribute('id', 'board-div')
    let boardImg = document.createElement('img');
    boardImg.setAttribute('src', 'images/cutting_board.png');
    boardImg.setAttribute('alt', 'cutting board');
    const boardPic = document.createElement('img');
    boardPic.setAttribute('src', 'images/cutting_board.png')
    boardPic.setAttribute('id', 'board');
    boardDiv.appendChild(boardPic);
    const boardList = document.createElement('ul');
    boardList.setAttribute('id', 'board-list');
    boardDiv.appendChild(boardList);
  }

  addL2Events() {
    const trayEls = document.getElementById('chosen-ingredients').getElementsByTagName('li');
    for (let i = 0; i < trayEls.length; i++) {
      trayEls[i].onclick = this.toggleToBoard.bind(this);
    }
  }
  
  toggleToBoard() {
    const boardList = document.getElementById('board-list');
    const chosenList = document.getElementById('chosen-ingredients');
    let eTarg = event.currentTarget;
    if (!eTarg.classList.contains('onboard') && boardList.getElementsByTagName('li').length === 0) {
      chosenList.removeChild(eTarg);
      eTarg.classList.toggle('onboard');
      if (eTarg.classList.contains('Protein')) {
        eTarg.style.width = '150px';
      } else {
        eTarg.style.width = '90px';
      }
      let that = this;
      eTarg.onmouseover = function(e) {
        // debugger
        e.currentTarget.onmouseout = Game.prototype.prepareIngredient.bind(that);
      }
      boardList.appendChild(eTarg);
    } 
    // else if (eTarg.classList.contains('onboard')) {
    //   boardList.removeChild(eTarg);
    //   eTarg.onmouseover = null;
    //   eTarg.classList.toggle('onboard');
    //   if (eTarg.classList.contains('Protein')) {
    //     eTarg.style.width = '100px';
    //   } else {
    //     eTarg.style.width = '40px';
    //   }
    //   chosenList.appendChild(eTarg);
    // }
  }

  prepareIngredient(e) {
    const boardList = document.getElementById('board-list');
    e.target.setAttribute('src', 'images/explosion.png');
    e.target.style.width = '200px'
    // setTimeout(Game.prototype.swapImage(e.target), 2000).bind(e.target)
    setTimeout(Game.prototype.swapImage.bind(this)(), 2000)
  }

  swapImage(e) {
    // e.currentTarget or event.currentTarget are the li
    // this is the game isntance!!
    debugger
  }


}
