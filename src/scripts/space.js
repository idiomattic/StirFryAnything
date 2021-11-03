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
];

const stars = [];

export default class Star {
  constructor(context, posish, size) {
    this.context = context;
    this.x = posish[0];
    this.y = posish[1];
    this.speed = 0;
    this.size = size;
    this.color = COLORS[Math.floor(Math.random()*COLORS.length)];
    
  }
  
  //arg ctx comes from this.ctx in game.js
  drawStar(ctx) {
    ctx.beginPath();
    ctx.fillStyle = '#' + `${this.color}`
    ctx.fillRect(this.x, this.y, this.size, this.size);
    // console.log(`x: ${this.x}`)
    // console.log(`y: ${this.y}`)
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
    const centerX = this.context.width / 2;
    const centerY = this.context.height / 2;

    if (this.y === this.context.height * 0.2) { // spawn on top
      if (this.x < centerX) { //TLT
        this.angle = Math.atan((centerY - this.y) / (this.x - centerX)) + Math.PI;
      } else { //TRT
        this.angle = Math.atan((centerY - this.y) / (this.x - centerX));
      }
    } else if (this.y === this.context.height * 0.8) { // spawn on bottom
      if (this.x < centerX) { //BLB
        this.angle = Math.atan((centerY - this.y) / (this.x - centerX)) - Math.PI;
      } else { //BRB
        this.angle = Math.atan((centerY - this.y) / (this.x - centerX));
      }
    } else if (this.x === this.context.width * 0.2) { // spawn on left
      if (this.y < centerY) { //TLL
        this.angle = Math.atan((centerY - this.y) / (this.x - centerX)) + Math.PI;
      } else { //BLL
        this.angle = Math.atan((centerY - this.y) / (this.x - centerX)) - Math.PI;
      }
    } else { // spawn on right
      if (this.y < centerY) { //TRR
        this.angle = Math.atan((centerY - this.y) / (this.x - centerX));
      } else { //BRR
        this.angle = Math.atan((centerY - this.y) / (this.x - centerX));
      }
    }
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
  }

  updatePos() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    stars.forEach((star) => {
      star.speed = 0.1 * Math.random();
      if (star.angle >= 0 && star.angle < 90) {
        star.x = star.x + Math.cos(star.angle) * star.speed;
        star.y = star.y - Math.sin(star.angle) * star.speed;
      } else if (star.angle >= 90 && star.angle < 180) {
        star.x = star.x + Math.cos(star.angle) * star.speed;
        star.y = star.y - Math.sin(star.angle) * star.speed;
      } else if (star.angle < 0 && star.angle >= -90) {
        star.x = star.x + Math.cos(star.angle) * star.speed;
        star.y = star.y - Math.sin(star.angle) * star.speed;
      } else {
        star.x = star.x + Math.cos(star.angle) * star.speed;
        star.y = star.y - Math.sin(star.angle) * star.speed;
      }
      if (star.x < 0 || star.x > this.canvas.width || star.y < 0 || star.y > this.canvas.height) {
        stars.splice(stars.indexOf(star), 1);
      }
      star.size += 0.07 * star.speed;
      star.drawStar(this.ctx);
    }, this)
  }
  
  move() {
    Star.prototype.updatePos.bind(this)();
    requestAnimationFrame(Star.prototype.move.bind(this));
  }

  static render() {
    Star.prototype.generateStars.bind(this)(10);
    Star.prototype.move.bind(this)();
    // requestAnimationFrame(this.render);
    setInterval(() => {
      Star.prototype.generateStars.bind(this)(1 + Math.random()*10);
      Star.prototype.move.bind(this)();
    }, 300 + Math.random()*1000)
  }
}