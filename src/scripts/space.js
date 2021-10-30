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
  drawStars(ctx) {
    ctx.fillStyle = '#' + `${this.color}`
    ctx.fillRect(this.x, this.y, this.size, this.size);
  }

}