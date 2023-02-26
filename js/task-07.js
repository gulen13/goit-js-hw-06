const rangeInput = document.querySelector("#font-size-control")
const textArea = document.querySelector("#text")

textArea.style.fontSize = `${rangeInput.value}px`

rangeInput.addEventListener("input", () => {
  textArea.style.fontSize = `${rangeInput.value}px`
})