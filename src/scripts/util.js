export function printer(message) {
  // debugger
  let existingMessage = document.querySelector('#message');
  if (existingMessage) {existingMessage.remove()};
  const container = document.getElementById('game-container');
  let text = document.createElement('div');
  text.setAttribute('id', 'message');
  text.innerHTML = message;
  container.appendChild(text);
  return text;
}

export function printer2(message, top, left) {
  const container = document.getElementById('game-container');
  let subMessage = document.createElement('div');
  subMessage.setAttribute('id', 'subMessage');
  subMessage.innerHTML = message;
  container.appendChild(subMessage);
  subMessage.style.top = top;
  subMessage.style.left = left;
  return subMessage;
}