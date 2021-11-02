import Game from './scripts/game'
// import Star from './scripts/space'

const canvas = document.getElementById("game-canvas");
const context = canvas.getContext('2d');
// export {canvas, context}

canvas.width = 1200;
canvas.height = 800;
const center = [canvas.width / 2, canvas.height / 2]

addEventListener('load', start);
// addEventListener('DOMContentLoaded', start);

function start() {
  let inIntro = true;
  const game = new Game(canvas, context);
}