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
    generateStars.call(this.ctx);
  }

}

const stars = [];

function generateStars() {
  let x = Math.random() < 0.5 ? 1 : 2;
  let y = Math.random() < 0.5 ? 1 : 2
  console.log(this);
  // setInterval(() => {
  //   stars.push(new Star(
  //     this.ctx,
  //     x,
  //     y,
  //     size
  //   ))
  // }, 100)
}

