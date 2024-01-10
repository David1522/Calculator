const operators = ['%', '/', '*', '+', '-'];
const operationContainer = document.getElementById('operation');
const stageContainer = document.getElementById('stage');
const equal = document.getElementById('equal-btn');
equal.addEventListener('click', () => {checkOperation()});

const numberBtn = document.querySelectorAll('.num-btn');
numberBtn.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    switchNumDeclaration === false ? numDeclaration(e.target.innerText, 0) : numDeclaration(e.target.innerText, 1);
  });
});

const operatorBtn = document.querySelectorAll('.operation-btn');
operatorBtn.forEach((btn) => {btn.addEventListener('click', (e) => {concatenate(e.target.innerText)})});


let firstNum = "";
let secondNum = "";
let operator = "";
let switchNumDeclaration = false;
let operation = "";

function concatenate (btnClicked) {
  console.log(firstNum);
  if (switchNumDeclaration === false) {
    if (firstNum) {
      operator = btnClicked;
      stageContainer.innerText = `${firstNum} ${btnClicked}`;
      operationContainer.innerText = "";
      switchNumDeclaration = true;
    } else {
      operationContainer.innerHTML = '<p class="alert">Please enter a digit first</p>';
    }
  } else {
    checkOperation()
    operate();
  }
}

function numDeclaration (character, num) {
  if (num === 0) {
    firstNum += character;
    operationContainer.innerText = `${firstNum}`;
    console.log(firstNum);
  } else {
    secondNum += character;
    operationContainer.innerText = `${secondNum}`;
  }
}

function checkOperation () {
  console.log('checkOperation function called');
  if (secondNum) {
    operate();
  } else {
    operationContainer.innerHTML = '<p class="alert">Please enter a digit first</p>';
  }
}

function operate () {
  console.log('operate function called', typeof(operator));

  if (operator == '+') {
    const output = parseInt(firstNum) + parseInt(secondNum);
    operationContainer.innerText = `${output}`;
    firstNum = String.toString(output);
    operator = "";
    secondNum = "";
  } else if (operator == '-') {
    const output = parseInt(firstNum) - parseInt(secondNum);
    operationContainer.innerText = `${output}`;
    firstNum = String.toString(output);
    operator = "";
    secondNum = "";
  } else if (operator == 'X') {
    const output = parseInt(firstNum) * parseInt(secondNum);
    operationContainer.innerText = `${output}`;
    firstNum = String.toString(output);
    operator = "";
    secondNum = "";
  } else if (operator == '/') {
    const output = parseInt(firstNum) / parseInt(secondNum);
    operationContainer.innerText = `${output}`;
    firstNum = String.toString(output);
    operator = "";
    secondNum = "";
    console.log('Completed!')
  } else if (operator == '%') {
    const output = parseInt(firstNum) % parseInt(secondNum);
    operationContainer.innerText = `${output}`;
    firstNum = String.toString(output);
    operator = "";
    secondNum = "";
    console.log('Completed!')
  }
}