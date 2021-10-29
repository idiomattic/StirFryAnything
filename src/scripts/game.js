import Star from './space'

export default class Game {
  constructor(canvas, context) {
    this.canvas = canvas;
    this.ctx = context;
    this.startGame();
  }

  startGame() {
    this.star = new Star(this.ctx, 50, 50, 150, 'red')
    this.render()
  }
  
  render() {
    this.star.animate(this.ctx)
  }
}

