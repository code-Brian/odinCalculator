let operator = prompt("Select your operator: add, subtract, divide, or multiply", '');

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
}

currentNum = 20;
nextNum = 2;
let result = 0;

function operate(operator, currentNum, nextNum) {

    switch(operator) {
        case 'add':
            result = currentNum + nextNum;
            break;
        case 'subtract': 
            result = currentNum - nextNum;
            break;
        case 'multiply':
            result = currentNum * nextNum;
            break;
        case 'divide': 
            if (nextNum === 0) {
                throw  'Cannot divide by zero. Do you want the universe to explode!??!?';
            }
            result = currentNum / nextNum;
            break;
    }

    return result;

}