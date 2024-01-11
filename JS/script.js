const operatorsArray = {
  '%' : function (a, b) {return a % b},
  '/' : function (a, b) {return a / b},
  'X' : function (a, b) {return a * b},
  '+' : function (a, b) {return a + b},
  '-' : function (a, b) {return a - b}
};
const stageContainer = document.getElementById('stage');
const inputContainer = document.getElementById('input');
const clearButton = document.querySelectorAll('.special-btn');
const numberButton = document.querySelectorAll('.num-btn');
const operatorButton = document.querySelectorAll('.operation-btn');
const equalButton = document.getElementById('equal-btn');

let firstNum = "";
let secondNum = "";
let operator = "";
let switchDeclaration = false;

numberButton.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    switchDeclaration === false ? numDeclaration(e.target.innerText, 0) : numDeclaration(e.target.innerText, 1);
  });
});

operatorButton.forEach((btn) => {btn.addEventListener('click', (e) => {concatenate(e.target.innerText)})});

equalButton.addEventListener('click', () => {checkOperation()});

clearButton.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    e.target.innerText == "C" ? goBack(switchDeclaration) : clearCalculator();
  });
});

function numDeclaration (character, num) {
  if (num === 0) {
    firstNum += character;
    inputContainer.innerText = `${firstNum}`;
  } else {
    secondNum += character;
    inputContainer.innerText = `${secondNum}`;
  }
}

function concatenate (btnClicked) {
  if (switchDeclaration === false) {
    if (firstNum) {
      operator = btnClicked;
      stageContainer.innerText = `${firstNum} ${btnClicked}`;
      inputContainer.innerText = "";
      switchDeclaration = true;
    } else {
      inputContainer.innerHTML = '<p class="alert">Please enter a digit first</p>';
    }
  } else {
    checkOperation();
  }
}

function checkOperation () {
  if (secondNum) {
    stageContainer.innerText += ` ${secondNum} =`;
    calculate();
  } else {
    inputContainer.innerHTML = '<p class="alert">Please enter a digit first</p>';
  }
}

function calculate () {
  const output = operatorsArray[operator](Number(firstNum), Number(secondNum));
  inputContainer.innerText = `${output}`;
  firstNum = output.toString();
  secondNum = "";
  operator = "";
  switchDeclaration = false;
}

function goBack (conditional) {
  conditional === false ? firstNum = firstNum.slice(0, -1) : secondNum = secondNum.slice(0, -1);
  inputContainer.innerText = (inputContainer.innerText).slice(0, -1)
}

function clearCalculator () {
  inputContainer.innerText = "0";
  stageContainer.innerText = "";
  firstNum = "";
  secondNum = "";
  operator = "";
  switchDeclaration = false;
}