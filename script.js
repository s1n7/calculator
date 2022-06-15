
//math operations
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b; 
}

function divide(a, b) {
    return a / b;
}


//operator function 
function operate(a, operator, b) {
    if (operator === "+") {
        return add(a, b);
    } else if (operator === "-") {
        return subtract(a, b);
    } else if (operator === "*") {
        return multiply(a, b);
    } else if (operator === "/") {
        return divide(a, b);
    } else {
        return;
    }
}


let displayValue = ""; //current display value
let operatorValue = "";
let operandA = "";
let operandB = "";

//select html elements
const buttons = document.querySelectorAll('button');
const display = document.querySelector('.display');

//event listener
buttons.forEach(button => { button.addEventListener('click', function(e) {
    if(e.target.id == '0' || e.target.id == '1' || e.target.id == '2' || e.target.id == '3' || e.target.id == '4'
    || e.target.id == '5' || e.target.id == '6' || e.target.id == '7' || e.target.id == '8' || e.target.id == '9'){
        displayValue = displayValue.concat(e.target.id);
        display.textContent = displayValue;
    }

    if(e.target.id == '+' || e.target.id == '-' || e.target.id == '*' || e.target.id == '/'){
        operatorValue = e.target.id;
        operandA = displayValue;
        displayValue = "";
        display.textContent = "";
    }

    if(e.target.id == '=') {
        operandB = displayValue;
        const result = operate(Number(operandA), operatorValue, Number(operandB));
        display.textContent = result;
        displayValue = result;
    }

}) });
