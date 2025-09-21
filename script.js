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

const result = document.querySelector("#result");
const numberButtons = document.querySelectorAll(".num");
const operatorButtons = document.querySelectorAll(".op")
let resultValue = "0";
let firstNumber = "";
let secondNumber = "";
let currentOperator = null;

numberButtons.forEach(
    btn => btn.addEventListener("click", () => appendNumber(btn.value))
);

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


