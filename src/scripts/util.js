export default function printer(message) {
  let existingDiv = document.querySelector('#game-container>div');
  if (existingDiv) {existingDiv.remove()};
  const container = document.getElementById('game-container');
  let text = document.createElement('div');
  text.setAttribute('id', 'message');
  text.innerHTML = message;
  container.appendChild(text);
  return text;
}