import Star from './space'

export default class Game {
  constructor(canvas, context) {
    this.canvas = canvas;
    this.ctx = context;
    this.startGame();
  }

  startGame() {
    this.star = new Star(this.ctx, 50, 50, 10)
    this.render()
  }
  
  render() {
    this.star.drawStars(this.ctx)
  }
}

