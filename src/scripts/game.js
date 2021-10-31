import Star from './space'

export default class Game {
  constructor(canvas, context) {
    this.canvas = canvas;
    this.ctx = context;
    this.startGame();
  }

  startGame() {

    // this.star = new Star(this.ctx, [50, 50], 10)
    this.render()
  }
  
  render() {
    // context is canvas object here and within forEach
    const startStars = this.generateStars(50);
    startStars.forEach((star) => {
      star.drawStars(this.ctx);
    })
  }

  generateStars(n) {
    const stars = [];
    for (let i = 0; i < n; i++) {
      let posish = generateStarPosish.call(this.ctx)
      stars.push(new Star(this.ctx, posish, (5 + 10 * Math.random())))
    }
    return(stars)
  }

}

function generateStarPosish() {
  let width = this.canvas.width;
  let height = this.canvas.height;
  let bigRandy = Math.random(); // randy is the boss
  let x = null;
  let y = null;
  if (bigRandy < 0.5) {
    x = (width  * 0.2) + (width * 0.6) * Math.random();
    let littleRandy = Math.random();
    y = littleRandy < 0.5 ? height * 0.2 : height * 0.8;
  } else {
    y = (height  * 0.2) + (height * 0.6) * Math.random();
    let littleRandy = Math.random();
    x = littleRandy < 0.5 ? width * 0.2 : width * 0.8;
  }
  return [x, y]
}

