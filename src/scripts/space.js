import Game from './game'

const COLORS = [
  'FFFFFF',
  'F5F5F5',
  'FFFAFA',
  'B0E0E6',
  'D3D3D3',
  'E0FFFF',
  'F8F8FF',
  'F0FFFF',
  '87CEFA',
  '00CDCD',
  '79CDCD',
  'E5FAFA'
]

//think Star Wars lightspeed but toned down
export default class Star {
  constructor(context, posish, size) {
    this.context = context;
    this.x = posish[0];
    this.y = posish[1];
    this.size = size;
    this.color = COLORS[Math.floor(Math.random()*COLORS.length)];
    
  }
  
  //arg ctx comes from this.ctx in game.js
  drawStar(ctx) {
    ctx.fillStyle = '#' + `${this.color}`
    ctx.fillRect(this.x, this.y, this.size, this.size);
    // this.generateStarPosish()
  }
  
  generateStarPosish() {
    let width = this.canvas.width;
    let height = this.canvas.height;
    let randy = Math.random();
    let x = null;
    let y = null;
    if (randy < 0.5) {
      x = (width * 0.2) + Math.random() * (width * 0.6);
      y = Math.random() < 0.5 ? height * 0.2 : height * 0.8;
    } else {
      y = (height * 0.2) + Math.random() * (height * 0.6);
      x = Math.random() < 0.5 ? width * 0.2 : width * 0.8;
    }
    return [x, y];
    console.log(this);
  }
  

  generateStars(n) {
    const stars = [];
    for (let i = 0; i < n; i++) {
      let posish = Star.prototype.generateStarPosish.bind(this)();
      stars.push(new Star(this.canvas, posish, (5 + 10 * Math.random())))
    }
    return stars;
  }
  
  static render() {
    const startStars = Star.prototype.generateStars.bind(this)(10);
    startStars.forEach((star) => {
      star.drawStar(this.ctx);
    }, this)
  }
}