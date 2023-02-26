const input = document.querySelector('#name-input')
const helloSpan = document.querySelector('#name-output')

input.addEventListener("input", (event) => {
  helloSpan.textContent = event.currentTarget.value.trim();

  if (event.target.value === '') {
    helloSpan.textContent = 'Anonymous'
  }

});