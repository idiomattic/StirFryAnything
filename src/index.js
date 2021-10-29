import Game from './scripts/game'
import Star from './scripts/space'

const canvas = document.getElementById("game-canvas");
const context = canvas.getContext('2d');
// export {canvas, context}

canvas.width = 900;
canvas.height = 600;

new Game(canvas, context);
