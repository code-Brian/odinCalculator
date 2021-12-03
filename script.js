let displayValue = ['0'];

// query selectors here
const display = document.querySelector('#display');
display.textContent = displayValue;

let operator;
let numValue;
let result = 0;

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
let displayString;
// Updates display 
function updateDisplay(numValue) {
    displayValue.push(numValue);
    let displayString = displayValue.toString();
    display.textContent = displayString;
    return displayString;
}
// event listeners here
// All numeric input values
const zero = document.getElementById('zero');
zero.addEventListener('mouseup', () => {
    display.textContent = displayValue;
});

const one = document.getElementById('one');
one.addEventListener('mouseup', () => {
    numValue = "1";
    updateDisplay(numValue);
});

const two = document.getElementById('two');
two.addEventListener('mouseup', () => {
    numValue = "2";
    updateDisplay(numValue);
});

const three = document.getElementById('three');
three.addEventListener('mouseup', () => {
    displayValue += "3";
    display.textContent = displayValue;
});

const four = document.getElementById('four');
four.addEventListener('mouseup', () => {
    displayValue += "4";
    display.textContent = displayValue;
});

const five = document.getElementById('five');
five.addEventListener('mouseup', () => {
    displayValue += "5";
    display.textContent = displayValue;
});

const six = document.getElementById('six');
six.addEventListener('mouseup', () => {
    displayValue += "6";
    display.textContent = displayValue;
});

const seven = document.getElementById('seven');
seven.addEventListener('mouseup', () => {
    displayValue += "7";
    display.textContent = displayValue;
});

const eight = document.getElementById('eight');
eight.addEventListener('mouseup', () => {
    displayValue += "8";
    display.textContent = displayValue;
});

const nine = document.getElementById('nine');
nine.addEventListener('mouseup', () => {
    displayValue += "9";
    display.textContent = displayValue;
});

//operator value inputs
const divChar = document.getElementById('divide');
divChar.addEventListener('mouseup', () => {
    displayValue = '÷';
    display.textContent = displayValue;
});

const multChar = document.getElementById('multiply');
multChar.addEventListener('mouseup', () => {
    displayValue = '×';
    operator = 'multiply';
    display.textContent = displayValue;
});

const subtChar = document.getElementById('subtract');
subtChar.addEventListener('mouseup', () => {
    displayValue = '−';
    operator = 'subtract';
    display.textContent = displayValue;
});

const addChar = document.getElementById('add');
addChar.addEventListener('mouseup', () => {
    displayValue = '+';
    operator = 'add';
    display.textContent = displayValue;
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