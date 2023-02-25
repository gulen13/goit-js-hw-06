const rangeInput = document.querySelector("#font-size-control")
const textArea = document.querySelector("#text")

rangeInput.addEventListener("input", (event) => {
  textArea.style.fontSize = `${event.target.value}px`
})