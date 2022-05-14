function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector('body');
const button = document.querySelector('.change-color');
const span = document.querySelector('.color');

button.addEventListener('click', onButtonClick);

function onButtonClick(currentColor) {
  currentColor = getRandomHexColor();
  body.style.backgroundColor = currentColor;
  span.textContent = currentColor;
}
