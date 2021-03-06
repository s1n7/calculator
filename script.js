
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
let result;

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
        if(operandA){   //operate current operation first before doing the next one
            operandB = displayValue;
            result = operate(Number(operandA), operatorValue, Number(operandB));
            if(result % 1 !== 0) {
                result = +(Math.round(result + "e+8")  + "e-8");
            }
            display.textContent = result;
            operandA = result;  //operandA for the next operation
            displayValue = "";  //clear displayValue
            operatorValue = e.target.id;    //set selected operator for next operation
        } else {
            operatorValue = e.target.id;
            operandA = displayValue;
            displayValue = "";
            result = undefined; //this way the delete button resets the display to 0
        }
    }

    if(e.target.id == '=') {
        operandB = displayValue;
        result = operate(Number(operandA), operatorValue, Number(operandB));
        if(result % 1 !== 0) {
            result = +(Math.round(result + "e+8")  + "e-8");
        }
        display.textContent = result;   
        operandA = result;
        displayValue = "";
    }

    if(e.target.id == 'delete') {
        if (!result) {
            displayValue = String(displayValue);
            displayValue = displayValue.slice(0, -1);
            display.textContent = displayValue;
        } else {
            reset();
        }
    }

    if(e.target.id == 'clear'){
        reset();
    }

}) });


function reset() {
    display.textContent = "";
    displayValue = ""; 
    operatorValue = "";
    operandA = "";
    operandB = "";
    result = undefined;
}
