// query selectors here
const display = document.querySelector('#display');

// this switch block may no longer be necessary... will re-evaluate later.
/** 
 switch (operator) {
    case 'add': 
        operator = 'add';
        break;
    case 'subtract': 
        operator = 'subtract';
        break;
    case 'multiply': 
        operator = 'multiply';
        break;
    case 'divide':
        operator = 'divide';
        break;
} */

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
    if ( currentNum != 0) {
        let quotient = a / b;
        return quotient;
    } else {
        throw 'Cannot divide by zero; The universe would implode.';
    }
}

// event listeners here
