const textInput = document.querySelector("#validation-input");
let dataLength = textInput.getAttribute("data-length");

textInput.addEventListener("blur", (event) => {

  if (event.currentTarget.value.trim().length === Number(dataLength)) {
    textInput.classList.add("valid")
    textInput.classList.remove("invalid")
  } else {
    textInput.classList.remove("valid")
    textInput.classList.add("invalid")
  }
});