const COLORS = [
  'FFFFFF',
  'F5F5F5',
  'FFFAFA',
  'B0E0E6',
  'D3D3D3',
  'E0FFFF',
  'F8F8FF',
  'FF0F8FF',
  'F0FFFF'
]

//think Star Wars lightspeed but toned down
export default class Star {
  constructor(context, posish, size) {
    this.context = context;
    this.x = posish[0];
    this.y = posish[1];
    this.size = size;
    this.color = COLORS[Math.floor(Math.random()*COLORS.length)];
    //take a random float btw 0 and 1, multiply by length of color arr, 
    //truncate, and index into color arr
  }

  //arg ctx comes from this.ctx in game.js
  drawStars(ctx) {
    ctx.fillStyle = '#' + `${this.color}` //needs # !!!!!!!!!
    ctx.fillRect(50, 50, this.size, this.size);
  }

}