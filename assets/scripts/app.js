const defaultResult = 0;
let currentResult = defaultResult;

function getUserInput() {
    return parseInt(userInput.value);
}

function createOutput(initialValue, operator, finalValue) {
    outputResult(currentResult, `${initialValue} ${operator} ${finalValue}`);
}

function add() {
    const userNumber = getUserInput();
    const initialValue = currentResult;
    currentResult = currentResult + userNumber;
    createOutput(initialValue, '+', currentResult);
}

function subtract() {
    const userNumber = getUserInput();
    const initialValue = currentResult;
    currentResult = currentResult - userNumber;
    createOutput(initialValue, '-', currentResult);
}
function multiply() {
    const userNumber = getUserInput();
    const initialValue = currentResult;
    currentResult = currentResult * userNumber;
    createOutput(initialValue, '*', currentResult);
}
function divide() {
    const userNumber = getUserInput();
    const initialValue = currentResult;

    if(userNumber === 0) {
        currentResult = 0;
        outputResult(currentResult, `Invalid Division by 0`);
        return;
    } else {
        currentResult = currentResult / userNumber;
    }
    createOutput(initialValue, '/', currentResult);
}


addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);

