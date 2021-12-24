import Game from './scripts/game'
// import Star from './scripts/space'

const canvas = document.getElementById("game-canvas");
const context = canvas.getContext('2d');
// export {canvas, context}

canvas.width = 1200;
canvas.height = 800;
const center = [canvas.width / 2, canvas.height / 2]

const instructionsModal = document.getElementById('instructions-modal-background')
const instructionsButton = document.getElementById('instructions')
const closeButton = document.getElementById('close-button')

instructionsButton.addEventListener('click', e => {
  instructionsModal.classList.toggle('hidden')
})

closeButton.addEventListener('click', e => {
  instructionsModal.classList.toggle('hidden')
})


addEventListener('load', start);

function start() {
  let inIntro = true;
  const game = new Game(canvas, context);
}