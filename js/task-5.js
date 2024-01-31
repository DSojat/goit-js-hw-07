function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function buttonClick(event) {
  if (event.target.type === 'button') {
    const divColor = getRandomHexColor();
    const spanChange = document.querySelector('.color');
    spanChange.textContent = divColor;
    event.currentTarget.style.background = divColor;
  }
}

const widgetChange = document.querySelector('.widget');
widgetChange.addEventListener('click', buttonClick);
