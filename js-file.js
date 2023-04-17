function enterNumber() {
    textField = document.getElementById("numberscreen")
    buttons = document.getElementsByClassName("btn")
  
    // Add click event listener to all button elements and insert their inner text as value to the text field
    Array.prototype.forEach.call (buttons, (button) => {
      button.addEventListener("click", () => {
        textField.value += button.innerText
      })
    })
}

document.addEventListener("DOMContentLoaded", enterNumber);




