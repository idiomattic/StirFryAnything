import Star from './space'

export default class Game {
  constructor(canvas, context) {
    this.canvas = canvas;
    this.ctx = context;
    this.startGame();
  }

  startGame() {
    this.render()
    const ingredients = [];
    
  }
  
  render() {
    Star.render.bind(this)();
  }

}
