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
    setTimeout(function(){printer('and click again to remove them.')}, 5000)
    setTimeout(function(){
      printer('Click here to advance when ready.');
      let advanceMessage = document.getElementById('message')
      advanceMessage.addEventListener('click', Game.prototype.enterLevel2.bind(this))
    }.bind(this), 12000)
    const container = document.getElementById('game-container');
    this.buildTray(container)
    let lists = this.buildLists(container);
  }

  level2() {
    this.level++;
    if (this.level !== 2) { this.startGame() };
    printer('Choose ingredients from your tray to begin preparing')
    setTimeout(function(){printer('then drag your cursor across to cut them.')}, 5000)
  }
  
  level3() {
    this.level++;
    if (this.level !== 3) { this.startGame() };
    printer('')
    this.showCompletedMeal();
    setTimeout(this.renderRecipe(this.ingredientsArr), 8000)
    // debugger
  }

  
  enterLevel2() {
    const chosenIngredients = document.getElementById('chosen-ingredients');
    if (chosenIngredients.getElementsByTagName('li').length > 1) {
      Game.prototype.removeLists();
      Game.prototype.removeL1Events();
      Game.prototype.placeBoard();
      Game.prototype.addL2Events.bind(this)();
      Game.prototype.level2.bind(this)();
    };
  }
  
  enterLevel3() {
    console.log('in enterLevel3');
    this.level3();
  }

  showCompletedMeal() {
    let ingrUl = document.getElementById('chosen-ingredients');
    document.getElementById('tray').removeChild(ingrUl);
    const trayPic = document.getElementById('tray-pic');
    let protein = this.ingredientsArr.filter(ingr => ingr.category === 'Protein')[0];
    printer('Thank you for playing!')
    if (protein.name === 'Pork') {
      trayPic.setAttribute('src', 'images/completed_pork.png');
    } else if (protein.name === 'Chicken') {
      trayPic.setAttribute('src', 'images/completed_chicken.png');
    } else if (protein.name === 'Beef') {
      trayPic.setAttribute('src', 'images/completed_beef.png');
    }
    // if (this.)
  }

  renderRecipe(ingredients) {
    const recipeModal = document.createElement('div');
    recipeModal.setAttribute('class', 'modal');
    recipeModal.setAttribute('id', 'modal');
    const modalHeader = document.createElement('div');
    modalHeader.setAttribute('class', 'modal-header');
    recipeModal.appendChild(modalHeader);
    const title = document.createElement('div')
    title.setAttribute('class', 'title')
    title.innerHTML = 'title'
    modalHeader.appendChild(title);
    const modalBody = document.createElement('ul');
    modalBody.setAttribute('class', 'modal-body');

    const ingrInfo = this.recipeIngrs();
    ingrInfo.forEach((ingr) => {
      let ingrItem = document.createElement('li');
      ingrItem.setAttribute('class', 'ingredient');
      ingrItem.innerHTML = ingr;
      modalBody.appendChild(ingrItem);
    })

    // ingredients.forEach((ingr) => {
    //   let ingrItem = document.createElement('li');
    //   ingrItem.setAttribute('class', 'ingredient');
    //   ingrItem.innerHTML = `${ingr.name}`;
    //   modalBody.appendChild(ingrItem);
    // })
    recipeModal.appendChild(modalBody);
    document.getElementById('game-container').appendChild(recipeModal)
  }

  recipeIngrs() {
    ingrList = ingredients.map((ingr) => {
      if (ingr.name === 'Chicken') {
        `0.5lbs ${ingr.name}, Thigh Preferably`
      } else if (ingr.name === 'Pork' || ingr.name === 'Beef') {
        `0.5lbs Lean ${ingr.name}`
      } else if (ingr.category === 'Vegetable') {
        `2 Pieces ${ingr.name}`
      }
    })
    return ingrList
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
    e.currentTarget.onmouseover = null;
    e.currentTarget.onmouseout = null;
    const boardList = document.getElementById('board-list');
    e.target.setAttribute('src', 'images/explosion.png');
    e.target.style.width = '200px'
    setTimeout(Game.prototype.swapImage.bind(this, e), 1500)
  }

  swapImage(e) {
    const boardList = document.getElementById('board-list');
    const chosenList = document.getElementById('chosen-ingredients');
    let liID = e.target.parentElement.id;
    let ingrInst = this.ingredientsArr.filter(ingr => ingr.name === liID)[0];
    if (ingrInst === undefined) {
      printer('Something went wrong.  Apologies');
      setTimeout(this.startGame(), 5000)
    }
    ingrInst.state = 'Prepped';
    let newUrl = ingrInst.prepped_img_link;
    e.target.setAttribute('src', newUrl);
    if (e.target.parentElement.classList.contains('Protein')) {
      e.target.parentElement.style.width = '150px';
    } else {
      e.target.parentElement.style.width = '90px';
    }
    setTimeout(() => {
      if (e.target.parentElement.classList.contains('Protein')) {
        e.target.parentElement.style.width = '70px';
      } else {
        e.target.parentElement.style.width = '50px';
      }
      boardList.removeChild(e.target.parentElement);
      chosenList.appendChild(e.target.parentElement);
      let rawCount = this.ingredientsArr.filter(ingr => ingr.state === 'Raw').length
      if (rawCount === 0) {
        setTimeout(() => {
          this.removeBoard();
          printer('');
          // printer2('Get ready to stir fry!', '50%', '50%');
          this.enterLevel3();
        }, 2000)
      }
    }, 1500);
  }

  removeBoard() {
    const board = document.getElementById('board-div');
    const container = document.getElementById('game-container');
    container.removeChild(board);
  }

}
