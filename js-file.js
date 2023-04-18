let totalNumber = "";
let useNumber;
let inputOp;

// Input numbers in text input
function enterNumber() {
    textField = document.getElementById("numberscreen")
    buttons = document.getElementsByClassName("btn")
  

    Array.prototype.forEach.call (buttons, (button) => {
      button.addEventListener("click", () => {
        textField.value += button.innerText
      })
    })
}

document.addEventListener("DOMContentLoaded", enterNumber);

function clearScreen() {
  document.getElementById('numberscreen').value = "";
}

function calc() {
  if (inputOp === "+") {
    totalNumber = parseInt(useNumber) + parseInt(document.getElementById('numberscreen').value);
    useNumber = totalNumber;
    alert(totalNumber);
  } else if (inputOp === "-") {
    totalNumber = parseInt(useNumber) - parseInt(document.getElementById('numberscreen').value);
    useNumber = totalNumber;
    alert(totalNumber);
  } else if (inputOp === "x") {
    totalNumber = parseInt(useNumber) * parseInt(document.getElementById('numberscreen').value);
    useNumber = totalNumber;
    alert(totalNumber);
  } else if (inputOp === "÷") {
    totalNumber = parseInt(useNumber) / parseInt(document.getElementById('numberscreen').value);
    useNumber = totalNumber;
    alert(totalNumber);
  } else {

  }
}

function addNumber() {
  calc();
  if (totalNumber === "") {
    useNumber = document.getElementById('numberscreen').value;
  }
  if (inputOp != "+") {
    inputOp = "+";
  }
  clearScreen();
}

function subtractNumber() {
  calc();
  if (totalNumber === "") {
    useNumber = document.getElementById('numberscreen').value;
  }
  if (inputOp != "-") {
    inputOp = "-";
  }
  clearScreen();
}

function multiplyNumber() {
  calc();
  if (totalNumber === "") {
    useNumber = document.getElementById('numberscreen').value;
  }
  if (inputOp != "x") {
    inputOp = "x";
  }
  clearScreen();
}

function divideNumber() {
  calc();
  if (totalNumber === "") {
    useNumber = document.getElementById('numberscreen').value;
  }
  if (inputOp != "÷") {
    inputOp = "÷";
  }
  clearScreen();
}

function equalNumber() {
  calc();
}




