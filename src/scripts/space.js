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

const stars = [];

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
    ctx.beginPath();
    ctx.fillStyle = '#' + `${this.color}`
    ctx.fillRect(this.x, this.y, this.size, this.size);
    console.log(this.x, this.y)
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
  }
  
  generateVelo() {
    let centerX = this.context.width / 2;
    let centerY = this.context.height / 2;
    this.angle = Math.atan((centerY - this.y) / (this.x - centerX)) * 180 / Math.PI;
  }

  generateStars(n) {
    for (let i = 0; i < n; i++) {
      let posish = Star.prototype.generateStarPosish.bind(this)();
      let newStar = new Star(this.canvas, posish, (5 + 10 * Math.random()));
      newStar.generateVelo();
      stars.push(newStar);
    }
    stars.forEach((star) => {
      star.drawStar(this.ctx);
    }, this);
    console.log('drew it once')
  }

  updatePos() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    stars.forEach((star) => {
      let speed = Math.random() * 50;
      star.x = star.x + Math.cos(star.angle) * speed;
      star.y = star.y + Math.sin(star.angle) * speed;
      star.drawStar(this.ctx);
      console.log('drew it a second time')
    }, this)
  }
  
  move() {
    // debugger
    // this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
    Star.prototype.updatePos.bind(this)();
    // requestAnimationFrame(Star.prototype.move);
  }

  static render() {
    Star.prototype.generateStars.bind(this)(10);
    Star.prototype.move.bind(this)();
    // setInterval(Star.prototype.move.bind(this)(), 1000)
    
  }
}