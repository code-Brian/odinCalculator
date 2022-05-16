let displayValue = ["0"];

// query selectors here
const display = document.querySelector('#display');
const numButtons = document.querySelectorAll('[data-number]');
display.textContent = displayValue;

numButtons.forEach((button) =>
    button.addEventListener(click, () => appendNumber(button.textContent))   
)

let operator;
let numValue;
let displayNum;

function operate(operator, a, b) {

    switch(operator) {
        case 'add':
            result = add(a,b);
            break;
        case 'subtract': 
            result = subtract(a,b);
            break;
        case 'multiply':
            result = multiply(a,b);
            break;
        case 'divide': 
            result = divide(a,b);
            break;
    }

    return result;

} 

function add(a,b) { 
    let sum = a + b;
    return sum;
}

function subtract(a,b) {
    let difference = a - b;
    return difference;
}

function multiply(a,b) {
    let product = a * b;
    return product;
}

function divide(a, b) {
    if ( b != 0) {
        let quotient = a / b;
        return quotient;
    } else {
        throw 'Cannot divide by zero; The universe would implode.';
    }
}

function clearDisplayArrays() {
    clearDisplayValue();
    clearDisplayNum();
}

let operands = [];

function clearDisplayValue() {
    displayValue = [];
    return displayValue;
}

function clearDisplayNum() {
    displayNum = 0;
    return displayNum;
}

function setOperandValues(displayNum) {
    operands.push(displayNum);
    return operands;
}

function placeOperands(operands) {
    a = operands[0];
    b = operands[1]; 
}

let displayString;
// Updates display 
function updateDisplay(numValue) {
    displayValue.push(numValue);
    displayNum = Number(displayValue.toString().replace(/,/g, ''));

    console.log(displayNum);
    console.log(typeof displayNum);

    display.textContent = displayNum;
}

// All numeric input values

//operator value inputs
const divChar = document.getElementById('divide');
divChar.addEventListener('mouseup', () => {
    operatorValue = '÷';
    operator = 'divide';
    display.textContent = operatorValue;
    setOperandValues(displayNum);
    clearDisplayArrays();
});

const multChar = document.getElementById('multiply');
multChar.addEventListener('mouseup', () => {
    operatorValue = '×';
    operator = 'multiply';
    display.textContent = operatorValue;
    setOperandValues(displayNum);
    clearDisplayArrays();
});

const subtChar = document.getElementById('subtract');
subtChar.addEventListener('mouseup', () => {
    operatorValue = '−';
    operator = 'subtract';
    display.textContent = operatorValue;
    setOperandValues(displayNum);
    clearDisplayArrays();
});

const addChar = document.getElementById('add');
addChar.addEventListener('mouseup', () => {
    operatorValue = '+';
    operator = 'add';
    display.textContent = operatorValue;
    setOperandValues(displayNum)
    clearDisplayArrays();
});

const deciChar = document.getElementById('decimal');
deciChar.addEventListener('mouseup', () => {
    displayValue = '∙';    clearDisplayNum();
    clearDisplayValue();
    // will add operator later
    display.textContent = displayValue;
})

const equals = document.getElementById('equals');
equals.addEventListener('mouseup', () => {
    setOperandValues(displayNum);
    placeOperands(operands);
    operate(operator, a, b);
    display.textContent = result;
})

const clear = document.getElementById('clear');
clear.addEventListener('mouseup', () => {

});

// this code snippet will automatically add commas as needed :)
// function numberWithCommas(x) {
//  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
// }

// for rounding, keep toFixed() in mind as a possibility