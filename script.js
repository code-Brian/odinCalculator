const numButtons = document.querySelectorAll('[data-number]');

numButtons.forEach((button) =>
    button.addEventListener('click', () => appendNumber(button.textContent))   
)

let operator;
let currentOperation = null;
let shouldResetScreen = false;

function appendNumber(number) {
    if (currentOperationScreen.textContent === '0' || shouldResetScreen)
      resetScreen()
    currentOperationScreen.textContent += number
    console.log(currentOperationScreen.textContent)
  }

function resetScreen() {
    currentOperationScreen.textContent = '';
    shouldResetScreen = false;
}
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
// this code snippet will automatically add commas as needed :)
// function numberWithCommas(x) {
//  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
// }

// for rounding, keep toFixed() in mind as a possibility