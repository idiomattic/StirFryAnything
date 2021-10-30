import Star from './space'

export default class Game {
  constructor(canvas, context) {
    this.canvas = canvas;
    this.ctx = context;
    this.startGame();
  }

  startGame() {

    this.star = new Star(this.ctx, [50, 50], 10)
    this.render()
  }
  
  render() {
    this.star.drawStars(this.ctx)
    this.generateStars()
  }

  generateStars() {
    const stars = [];
    for (let i = 0; i < 10; i++) {
      let posish = generateStarPosish.call(this.ctx)
      stars.push(new Star(this.ctx, posish, 10))
    }
    console.log(stars)
  }

}

const stars = [];

function generateStarPosish() {
  let width = this.canvas.width;
  let height = this.canvas.height;
  let bigRandy = Math.random(); // randy is the boss
  let x = null;
  let y = null;
  if (bigRandy < 0.5) {
    // want random x in bounds of 20%-80% canvas box
    x = (width  * 0.2) + (width * 0.6) * Math.random();
    // want y fixed to top or bottom
    let littleRandy = Math.random();
    y = littleRandy < 0.5 ? height * 0.2 : height * 0.8;
  } else {
    // want random y in bounds of canvas box
    y = (height  * 0.2) + (height * 0.6) * Math.random();
    // want x fixed to left or right
    let littleRandy = Math.random();
    x = littleRandy < 0.5 ? width * 0.2 : width * 0.8;
  }
  return [x, y]

  // local ctx is the canvas
  // setInterval(() => {
  //   stars.push(new Star(
  //     this.ctx,
  //     x,
  //     y,
  //     size
  //   ))
  // }, 100)
}

