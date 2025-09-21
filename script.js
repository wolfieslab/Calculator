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
    if (b === 0) return "ERROR /0";
    return a / b;
}

function percent(a, b) {
    return (a * b) / 100;
}

function operate(operator, a, b) {
    a = Number(a);
    b = Number(b);
    switch (operator) {
        case "+": return add(a, b);
        case "-": return subtract(a, b);
        case "*": return multiply(a, b);
        case "/": return divide(a, b);
        case "%": return percent(a, b);
        default: return null;
    }
}

const expression = document.querySelector("#expression");
const result = document.querySelector("#result");
const numberButtons = document.querySelectorAll(".num");
const operatorButtons = document.querySelectorAll(".op");
const equals = document.querySelector(".equals");
const backspace = document.querySelector(".backspace");
const allClear = document.querySelector(".AC");
const decimal = document.querySelector(".decimal");
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

backspace.addEventListener("click", () => {
    resultValue = resultValue.slice(0, -1) || "0";
    updateResult();
});

allClear.addEventListener("click", clear);

decimal.addEventListener("click", () => {
    if (!resultValue.includes(".")) {
        resultValue += ".";
        updateResult();
    }
});

function getOperator(operator) {
    firstNumber = resultValue;
    clearResult();
    currentOperator = operator;

}

function appendNumber(value) {
    if (resultValue === "0") {
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
    if (currentOperator === null) return
    secondNumber = result.textContent;
    let res = operate(currentOperator, firstNumber, secondNumber);
    res = roundResult(res);
    resultValue = res.toString();
    updateResult();
    currentOperator = null;
}

function roundResult(num) {
    return Math.round(num * 1000) / 1000;
}

function clearResult() {
    result.textContent = "0";
    resultValue = "0";
}

function clear() {
    resultValue = "0";
    firstNumber = "";
    secondNumber = "";
    currentOperator = null;
    updateResult();
}

window.addEventListener("keydown", handleKeyboard);

function handleKeyboard(e) {
    if (e.key >= 0 && e.key <= 9) appendNumber(e.key);
    if (e.key === ".") decimal.click();
    if (e.key === "=" || e.key === "Enter") evaluate();
    if (e.key === "Backspace") backspace.click();
    if (e.key === "Escape") clear();
    if (["+", "-", "*", "/"].includes(e.key)) getOperator(e.key);
}

updateResult();