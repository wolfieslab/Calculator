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
    if(b === 0) return "ERROR /0";
    return a / b;
}

function operate(operator, a, b) {
    a = Number(a);
    b = Number(b);
    switch (operator) {
        case "+": return add(a, b);
        case "-": return subtract(a, b);
        case "/": return multiply(a, b);
        case "*": return divide(a, b);
        default: return null;
    }
}

const expression = document.querySelector("#expression");
const result = document.querySelector("#result");
const numberButtons = document.querySelectorAll(".num");
const operatorButtons = document.querySelectorAll(".op");
const equals = document.querySelector(".equals");
let resultValue = "0";
let firstNumber = "";
let secondNumber = "";
let currentOperator = null;

numberButtons.forEach(
    btn => btn.addEventListener("click", () => appendNumber(btn.value))
);

operatorButtons.forEach(
    btn => btn.addEventListener("click", () => getOperator(btn.value))
);

equals.addEventListener("click", evaluate);

function getOperator(operator) {
    firstNumber = resultValue;
    clearResult();
    currentOperator = operator;
    
}

function appendNumber(value) {
    if(resultValue === "0") {
        resultValue = value;
    }
    else {
        resultValue += value;
    }
    updateResult();
}

function updateResult() {
    result.textContent = resultValue;
}

function evaluate() {
    if(currentOperator === null) return
    secondNumber = result.textContent;
    let res = operate(currentOperator, firstNumber, secondNumber);
    resultValue = res.toString();
    updateResult();
    currentOperator = null;
}

function clearResult() {
    result.textContent = "0";
    resultValue = "0";
}