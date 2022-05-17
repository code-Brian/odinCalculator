let firstOperand = '';
let secondOperand = '';
let currentOperation = null;
let shouldResetScreen = false;

const numButtons = document.querySelectorAll('[data-number]');
const operatorButtons = document.querySelectorAll('[data-operator]');
const clearButton = document.getElementById('clearBtn');
const deleteButton = document.getElementById('deleteBtn');
const decimalButton = document.getElementById('decimalBtn');
const equalsButton = document.getElementById('equalsBtn');
const previousOperationScreen = document.getElementById('previousOperationScreen');
const currentOperationScreen = document.getElementById('currentOperationScreen');

clearButton.addEventListener('click', clear);
deleteButton.addEventListener('click', deleteNumber);
decimalButton.addEventListener('click', appendDecimal);
equalsButton.addEventListener('click', evaluate);


numButtons.forEach((button) =>
    button.addEventListener('click', () => appendNumber(button.textContent))   
);

operatorButtons.forEach((button) =>
    button.addEventListener('click', () => setOperation(button.textContent))
);

function appendDecimal() {
    currentOperationScreen.textContent += ".";
}

function deleteNumber() {
    currentOperationScreen.textContent = currentOperationScreen.textContent
        .toString()
        .slice(0,-1);
}

function clear() {
    currentOperationScreen.textContent = '0';
    previousOperationScreen.textContent = '';
    firstOperand = '';
    secondOperand = '';
    currentOperation = null;
}
function appendNumber(number) {
    if (currentOperationScreen.textContent === '0' || shouldResetScreen) resetScreen()
    currentOperationScreen.textContent += number
    console.log(currentOperationScreen.textContent)
  }

function setOperation(operator) {
    if (currentOperation !== null) evaluate();
    firstOperand = currentOperationScreen.textContent;
    currentOperation = operator;
    previousOperationScreen.textContent = `${firstOperand} ${currentOperation}`;
    shouldResetScreen = true;
}

function evaluate() {
    if (currentOperation === null || shouldResetScreen) return;
    if (currentOperation === '/' && currentOperationScreen === '0') {
        alert("You can't divide by 0! The Universe would explode!");
        return
    }
    secondOperand = currentOperationScreen.textContent;
    currentOperationScreen.textContent = roundResult(
        operate(currentOperation, firstOperand, secondOperand)
    );
    previousOperationScreen.textContent = `${firstOperand} ${currentOperation} ${secondOperand} =`
    currentOperation = null;
}

function resetScreen() {
    currentOperationScreen.textContent = '';
    shouldResetScreen = false;
}

function roundResult(number) {
    return Math.round(number * 100) / 100;
}

function operate(operator, a, b) {
    a = Number(a);
    b = Number(b);
    switch(operator) {
        case '+':
            return add(a,b);
        case '-': 
            return subtract(a,b);
        case '*':
            return multiply(a,b);
        case '/': 
            return divide(a,b);
        default:
            return null;
    }
    
}

function add(a,b) { 
    return a + b;
}

function subtract(a,b) {
    return a - b;
}

function multiply(a,b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

// this code snippet will automatically add commas as needed :)
// function numberWithCommas(x) {
//  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
// }

// for rounding, keep toFixed() in mind as a possibility