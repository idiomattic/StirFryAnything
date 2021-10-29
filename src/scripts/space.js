// import {canvas as mainCanvas, context as mainContext} from "../index"
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
  constructor(context, x, y, size, color) {
    this.context = context;
    this.x = x;
    this.y = y;
    this.size = size;
    this.color = color;
  }

  animate(ctx) {
    this.drawStar(ctx);
  }
  
  drawStar(ctx) {
    console.log(ctx)

    ctx.fillStyle = `${this.color}`;
    ctx.fillRect(50, 50, this.size, this.size);
  }

}