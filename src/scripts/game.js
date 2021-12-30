import Star from './space'
import {printer, printer2} from './util'
import {INGREDIENTS, proteins, vegetables} from "./ingredients"

export default class Game {
  constructor(canvas, context) {
    this.canvas = canvas;
    this.ctx = context;
    this.vegMode = false
    this.startGame();
    this.ingredientsArr = [];
    this.ingredientsCount = 0
    this.proteinChosen = false
  }

  startGame() {
    this.render()
    let hello = printer('Press Enter to Begin')
    hello.style.top = "50%";
    this.level = 1;

    const vegModeSwitch = document.getElementById('veg-mode')
    vegModeSwitch.addEventListener('change', e => {
      this.vegMode = !this.vegMode
    })

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
    document.getElementById('checkbox').disabled = true
    if (this.level !== 1) { this.startGame() }
    printer('')
    setTimeout(function(){
      printer('Click here to advance when ready.');
      let advanceMessage = document.getElementById('message')
      advanceMessage.classList.toggle('clickable')
      advanceMessage.addEventListener('click', Game.prototype.enterLevel2.bind(this))
    }.bind(this), 5000)
    const container = document.getElementById('game-container');
    this.buildTray(container)
    let lists = this.buildLists(container);
  }

  level2() {
    this.level++;
    if (this.level !== 2) { this.startGame() };
    printer('')
  }
  
  level3() {
    this.level++;
    if (this.level !== 3) { this.startGame() }
    printer('')
    if (this.ingredientsArr.filter(ingr => ingr.category === 'Protein').length > 0) {
      this.showCompletedMeal();
      setTimeout(this.renderRecipe.bind(this), 3000)
    } else {
      setTimeout(this.renderRecipe.bind(this), 1000)
    }
  }
  
  
  enterLevel2() {
    let advanceMessage = document.getElementById('message')
    advanceMessage.classList.toggle('clickable')
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
    document.getElementById('chosen-ingredients').classList.toggle('hidden')
    printer('Cooking up your recipe!')
    printer2('')
    this.displayVideo();
  }
  
  displayVideo() {
    document.getElementById('tray').classList.toggle('hidden')
    const videoWrapper = document.getElementById('videowrapper')
    videoWrapper.classList.toggle('hidden')
    setTimeout(() => {
      videoWrapper.classList.toggle('hidden')
      setTimeout(this.level3.bind(this), 100);
    }, 8000)
  }
  
  showCompletedMeal() {
    let ingrUl = document.getElementById('chosen-ingredients');
    let trayDiv = document.getElementById('tray');
    trayDiv.removeChild(document.getElementById('tray-pic'));
    const trayPic = document.createElement('img');
    trayDiv.removeChild(ingrUl);
    trayPic.setAttribute('src', 'images/sheet_pan.PNG');
    trayPic.setAttribute('id', 'tray-pic');
    trayDiv.appendChild(trayPic);
    let protein = this.ingredientsArr.filter(ingr => ingr.category === 'Protein')[0];
    if (protein.name === 'Pork') {
      trayPic.setAttribute('src', 'images/completed_pork.png');
    } else if (protein.name === 'Chicken') {
      trayPic.setAttribute('src', 'images/completed_chicken.png');
    } else if (protein.name === 'Beef') {
      trayPic.setAttribute('src', 'images/completed_beef.png');
    }
    trayDiv.classList.toggle('hidden')
    trayPic.setAttribute('class', 'completed')
  }

  renderRecipe() {
    // printer('Thank you for playing!')
    const recipeModal = document.createElement('div');
    recipeModal.setAttribute('class', 'modal');
    recipeModal.setAttribute('id', 'modal');
    const modalHeader = document.createElement('div');
    modalHeader.setAttribute('class', 'modal-header');
    recipeModal.appendChild(modalHeader);
    const title = document.createElement('div')
    title.setAttribute('class', 'title')
    let chosenProtein = this.ingredientsArr.filter(ingr => ingr.category === 'Protein')[0];
    let mainVegetables = this.ingredientsArr.filter(ingr => ingr.category === 'Vegetable').filter(ingr => ingr.name !== 'Ginger' && ingr.name !== 'Garlic');
    let vegNames = [];
    mainVegetables.forEach(veg => vegNames.push(veg.name));
    let marinade
    let prepProteinStep = document.createElement('li')
    let marinadeStep = document.createElement('li')
    prepProteinStep.setAttribute('class', 'instructions');
    marinadeStep.setAttribute('class', 'instructions');
    if (chosenProtein) {
      title.innerHTML = `${chosenProtein.name} with ${vegNames.join(' and ')}`
      prepProteinStep.innerHTML = `Trim and cut ${chosenProtein.name} accordingly.`
      marinadeStep.innerHTML = `Mix ${chosenProtein.name} with marinade ingredients, oil last, and set aside.`
      if (chosenProtein.name === 'Beef') {
        marinade = '1/4tsp salt, 1/2tsp sugar, 1/2tsp corn starch, 1/2tsp baking soda, 1/2tsp Shaoxing cooking wine, 1/4tsp light soy sauce, 1/4tsp dark soy sauce (optional), 1/2tsp neutral oil'
      } else {
        marinade = '1/4tsp salt, 1/2tsp sugar, 1/2tsp corn starch, 1/2tsp Shaoxing cooking wine, 1/4tsp light soy sauce, 1/4tsp dark soy sauce (optional), 1/2tsp neutral oil'
      }
    } else {
      let numVeggies = vegNames.length
      let veggies = vegNames.slice(0, numVeggies - 1).join(', ') + ' and ' + vegNames.slice(numVeggies - 1).join('');
      title.innerHTML = `Stir Fried ${veggies}`
    }
    modalHeader.appendChild(title);
    const modalBody = document.createElement('ul');
    modalBody.setAttribute('class', 'modal-body');

    const ingrInfo = this.recipeIngrs();
    ingrInfo.forEach(ingr => {
      let ingrItem = document.createElement('li');
      ingrItem.setAttribute('class', 'ingredient');
      ingrItem.innerHTML = ingr;
      modalBody.appendChild(ingrItem);
      if (ingr.charAt(0) === '0') {
        let ingrItem = document.createElement('li');
        ingrItem.setAttribute('class', 'ingredient');
        ingrItem.innerHTML = marinade;
        modalBody.appendChild(ingrItem);
      }
    })

    let buffer = document.createElement('li')
    buffer.setAttribute('class', 'buffer')
    buffer.innerHTML = ''
    modalBody.appendChild(buffer)
    
    if (chosenProtein) {
      modalBody.appendChild(prepProteinStep)
      modalBody.appendChild(marinadeStep)
    }
    let prepStep = document.createElement('li')
    prepStep.setAttribute('class', 'instructions')
    prepStep.innerHTML = 'Prep vegetables accordingly.  Stir 2 tsp of corn starch with 1 tbsp of cool water in a small bowl.'
    modalBody.appendChild(prepStep)

    let heating = document.createElement('li')
    heating.setAttribute('class', 'instructions')
    heating.innerHTML = 'Place wok over high heat until very hot.  Add 1-2tbsp oil to coat.  Heat until oil is shimmering.'
    modalBody.appendChild(heating)

    if (chosenProtein) {
      let cookProtein = document.createElement('li')
      cookProtein.setAttribute('class', 'instructions')
      cookProtein.innerHTML = 'Add protein to the wok.  Stir or toss continuously.'
      modalBody.appendChild(cookProtein)
    }

    let cookVeggies = document.createElement('li')
    cookVeggies.setAttribute('class', 'instructions')
    cookVeggies.innerHTML = 'Lower heat to medium.  Add additional oil if dry.  Add large vegetables and cook until desired doneness.'
    modalBody.appendChild(cookVeggies)

    let finish = document.createElement('li')
    finish.setAttribute('class', 'instructions')
    finish.innerHTML = 'Add garlic and/or ginger, if using.  Cook until fragrant.  Add a splash of light soy sauce, then cooking wine around the sides of the wok.'
    modalBody.appendChild(finish)

    let slurry = document.createElement('li')
    slurry.setAttribute('class', 'instructions')
    slurry.innerHTML = 'Stir your corn starch slurry and add to the wok, then toss to coat.'
    modalBody.appendChild(slurry)

    let thanks = document.createElement('li')
    thanks.setAttribute('class', 'thanks')
    thanks.innerHTML = 'Thank you for playing!'
    modalBody.appendChild(thanks)

    recipeModal.appendChild(modalBody);
    document.getElementById('game-container').appendChild(recipeModal)
  }

  recipeIngrs() {
    const recipeInfo = [];
    this.ingredientsArr.forEach(ingr => {
      recipeInfo.push(`${ingr.description}`)
    })
    return recipeInfo;
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
      if ((eTarg.id === 'Garlic' || eTarg.id === 'Ginger') || this.ingredientsCount < 3) {
        printer2('')
        if (eTarg.classList.contains('Protein') && !this.proteinChosen) {
          printer2('')
          parent.removeChild(eTarg);
          eTarg.classList.toggle('chosen');
          this.proteinChosen = true
          eTarg.style.width = '80px';
          chosenList.appendChild(eTarg);
          this.ingredientsArr.push(ingrInst[0]);
          this.ingredientsCount++
        } else if (eTarg.classList.contains('Vegetable')) {
          printer2('')
          parent.removeChild(eTarg);
          eTarg.classList.toggle('chosen');
          eTarg.style.width = '40px';
          chosenList.appendChild(eTarg);
          this.ingredientsArr.push(ingrInst[0]);
          if (eTarg.id !== 'Garlic' && eTarg.id !== 'Ginger') {this.ingredientsCount++}
        } else {
          printer2('Too much protein', '65%')
        }
      } else {
        printer2('Too many ingredients', '65%')
      }
    } else {
      if (eTarg.classList.contains('Protein')) {
        this.proteinChosen = false
      }
      printer2('')
      chosenList.removeChild(eTarg);
      this.ingredientsArr.splice(this.ingredientsArr.indexOf(ingrInst), 1);
      if (eTarg.id !== 'Garlic' && eTarg.id !== 'Ginger') {this.ingredientsCount--}
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
      veggieEl.classList.toggle('clickable')
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
    if (!this.vegMode) {
      proteins.forEach((protein) => {
        let proteinEl = document.createElement('li');
        proteinEl.classList.toggle('clickable')
        proteinEl.setAttribute('class', `${protein.category}`)
        proteinEl.setAttribute('id', `${protein.name}`);
        let proteinImg = document.createElement('img');
        proteinImg.setAttribute('src', `${protein.raw_img_link}`);
        proteinImg.setAttribute('alt', `${protein.name}`);
        proteinEl.onclick = this.togglePos.bind(this);
        proteinEl.appendChild(proteinImg);
        proteinList.appendChild(proteinEl);
      })
    }
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
        e.currentTarget.onmouseout = Game.prototype.prepareIngredient.bind(that);
      }
      boardList.appendChild(eTarg);
    }
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
    // console.log(ingrInst)
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
