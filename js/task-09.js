function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnbuttonChangeColor = document.querySelector('.change-color')
const backgroundColorSpan = document.querySelector('.color')
const body = document.querySelector('body')

btnbuttonChangeColor.addEventListener('click', (event) => {
  let color = getRandomHexColor()
  console.log(color);
  body.style.backgroundColor = color
  backgroundColorSpan.textContent = color
})