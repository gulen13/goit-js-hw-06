let counterValue = 0;
const btnDecrement = document.querySelector(`button[data-action="decrement"]`);
const btnIncrement = document.querySelector(`button[data-action="increment"]`);
const spanValue = document.querySelector("#value");

const valueDecrement = (event) => {
  counterValue -= 1;
  spanValue.textContent = counterValue;
}
btnDecrement.addEventListener("click", valueDecrement)

const valueIncrement = (event) => {
  counterValue += 1;
  spanValue.textContent = counterValue;
}
btnIncrement.addEventListener("click", valueIncrement)