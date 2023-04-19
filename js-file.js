let totalNumber = "";
let useNumber;
let inputOp;
let clearBool = "false";
const lnumber = document.querySelector('.lastnumber');

// Input numbers in text input
document.addEventListener("DOMContentLoaded", enterNumber);

function clearScreen() {
  document.getElementById('numberscreen').value = "";
}

function reset() {
  totalNumber = "";
  useNumber = "";
  inputOp = "";
  clearBool = "false";
  document.getElementById('numberscreen').value = "";
  lnumber.textContent = "";
}

function enterNumber() {
  textField = document.getElementById("numberscreen");
  buttons = document.getElementsByClassName("btn");
  Array.prototype.forEach.call (buttons, (button) => {
    button.addEventListener("click", () => {
      if (clearBool === "false") {
        textField.value += button.innerText
      } else {
        clearScreen();
        textField.value += button.innerText
        clearBool = "false";
      }      
    })
  });
}

function calc() {
  if (inputOp === "+") {
    totalNumber = parseInt(useNumber) + parseInt(document.getElementById('numberscreen').value);
    useNumber = totalNumber;    
  } else if (inputOp === "-") {
    totalNumber = parseInt(useNumber) - parseInt(document.getElementById('numberscreen').value);
    useNumber = totalNumber;    
  } else if (inputOp === "x") {
    totalNumber = parseInt(useNumber) * parseInt(document.getElementById('numberscreen').value);
    useNumber = totalNumber;    
  } else if (inputOp === "÷") {
    totalNumber = parseInt(useNumber) / parseInt(document.getElementById('numberscreen').value);
    useNumber = totalNumber;    
  } else {

  }
}

function addNumber() {
  if (clearBool === "false") {
    calc();
    if (totalNumber === "") {
      useNumber = document.getElementById('numberscreen').value;
    
    }
    if (inputOp != "+") {
      inputOp = "+";
    }
    lnumber.textContent = useNumber + " +";
    clearBool = "true";
    if (totalNumber === "") {
  
    } else {
      document.getElementById('numberscreen').value = totalNumber;
    }
  } else {
    if (inputOp != "+") {
      inputOp = "+";
    }
    lnumber.textContent = useNumber + " +";
  }  
}

function subtractNumber() {
  if (clearBool === "false") {
    calc();
    if (totalNumber === "") {
      useNumber = document.getElementById('numberscreen').value;
    }
    if (inputOp != "-") {
      inputOp = "-";
    }
    lnumber.textContent = useNumber + " -";
    clearBool = "true";
    if (totalNumber === "") {
  
    } else {
    document.getElementById('numberscreen').value = totalNumber;
    }
  } else {
    if (inputOp != "-") {
      inputOp = "-";
    }
    lnumber.textContent = useNumber + " -";
  }
}

function multiplyNumber() {
  if (clearBool === "false") {
    calc();
    if (totalNumber === "") {
      useNumber = document.getElementById('numberscreen').value;
    }
    if (inputOp != "x") {
      inputOp = "x";
    }
    lnumber.textContent = useNumber + " x";
    clearBool = "true";
    if (totalNumber === "") {  

    } else {
      document.getElementById('numberscreen').value = totalNumber;
    }
  } else {
    if (inputOp != "x") {
      inputOp = "x";
    }
    lnumber.textContent = useNumber + " x";
  }  
}

function divideNumber() {
  if (clearBool === "false") {
    calc();
    if (totalNumber === "") {
      useNumber = document.getElementById('numberscreen').value;
    }
    if (inputOp != "÷") {
      inputOp = "÷";
    }
    lnumber.textContent = useNumber + " ÷";
    clearBool = "true";
    if (totalNumber === "") {
  
    } else {
      document.getElementById('numberscreen').value = totalNumber;
    }
  } else {
    if (inputOp != "÷") {
      inputOp = "÷";
    }
    lnumber.textContent = useNumber + " ÷";
  }  
}

function equalNumber() {
  if (clearBool === "false") {
    calc();
    lnumber.textContent = useNumber + " +";
    clearBool = "true";
    if (totalNumber === "") {
  
    } else {
      document.getElementById('numberscreen').value = totalNumber;
    }
  } else {

  }
}




