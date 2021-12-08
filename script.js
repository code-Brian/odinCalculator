let displayValue = ["0"];

// query selectors here
const display = document.querySelector('#display');
display.textContent = displayValue;

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

let operands = [];

function clearDisplayValue() {
    displayValue = [];
    return displayValue;
}

function clearDisplayNum() {
    displayNum = 0;
    return displayNum;
}

function setOperands(displayNum) {
    operands.push(displayNum);
    return operands;
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

// event listeners here
// All numeric input values
const zero = document.getElementById('zero');
zero.addEventListener('mouseup', () => {
    numValue = "0";
    updateDisplay(numValue);
});

const one = document.getElementById('one');
one.addEventListener('mouseup', () => {
    numValue = "1";
    updateDisplay(numValue);
});
    // event listeners here

const two = document.getElementById('two');
two.addEventListener('mouseup', () => {
    numValue = "2";
    updateDisplay(numValue);
});

const three = document.getElementById('three');
three.addEventListener('mouseup', () => {
    numValue = "3";
    updateDisplay(numValue);
});

const four = document.getElementById('four');
four.addEventListener('mouseup', () => {
    numValue = "4";
    updateDisplay(numValue);
});

const five = document.getElementById('five');
five.addEventListener('mouseup', () => {
    numValue = "5";
    updateDisplay(numValue);
});

const six = document.getElementById('six');
six.addEventListener('mouseup', () => {
    numValue = "6";
    updateDisplay(numValue);;
});

const seven = document.getElementById('seven');
seven.addEventListener('mouseup', () => {
    numValue = "7";
    updateDisplay(numValue);
});

const eight = document.getElementById('eight');
eight.addEventListener('mouseup', () => {
    numValue = "8";
    updateDisplay(numValue);
});

const nine = document.getElementById('nine');
nine.addEventListener('mouseup', () => {
    numValue = "9";
    updateDisplay(numValue);
});

//operator value inputs
const divChar = document.getElementById('divide');
divChar.addEventListener('mouseup', () => {
    operatorValue = '÷';
    operator = 'divide';
    display.textContent = operatorValue;
    setOperands(displayNum);
    clearDisplayNum();
});

const multChar = document.getElementById('multiply');
multChar.addEventListener('mouseup', () => {
    operatorValue = '×';
    operator = 'multiply';
    display.textContent = operatorValue;
    setOperands(displayNum);
    clearDisplayNum();
    clearDisplayValue();
});

const subtChar = document.getElementById('subtract');
subtChar.addEventListener('mouseup', () => {
    operatorValue = '−';
    operator = 'subtract';
    display.textContent = operatorValue;
    setOperands(displayNum)
});

const addChar = document.getElementById('add');
addChar.addEventListener('mouseup', () => {
    operatorValue = '+';
    operator = 'add';
    display.textContent = operatorValue;
    setOperands(displayNum)
    clearDisplayNum();
    clearDisplayValue();
});

const deciChar = document.getElementById('decimal');
deciChar.addEventListener('mouseup', () => {
    displayValue = '∙';
    // will add operator later
    display.textContent = displayValue;
})

const equals = document.getElementById('equals');
equals.addEventListener('mouseup', () => {
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