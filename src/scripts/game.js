import Star from './space'

export default class Game {
  constructor(canvas, context) {
    this.canvas = canvas;
    this.ctx = context;
    this.startGame();
  }

  startGame() {
    this.render()
  }
  
  render() {
    Star.render.bind(this)();
  }

}
