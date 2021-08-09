const defaultResult = 0;
let currentResult = defaultResult;

function getUserInput() {
    return parseInt(userInput.value);
}

function createOutput(initialValue, operator, finalValue) {
    outputResult(currentResult, `${initialValue} ${operator} ${finalValue}`);
}

function calculateResult(calculationType) {
    const userNumber = getUserInput();
    const initialValue = currentResult;
    let mathOperator = calculationType.path[0].innerHTML;
    console.log(calculationType.path[0].innerHTML)

    if (mathOperator === '+') {
        currentResult += userNumber;
    } else if (mathOperator === '-') {
        currentResult -= userNumber;
    } else if (mathOperator === '*') {
        currentResult *= userNumber;
    } else {
        currentResult /= userNumber;
    }
    createOutput(initialValue, mathOperator, currentResult);
}

function add() {
    const userNumber = getUserInput();
    const initialValue = currentResult;
    currentResult += userNumber;
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

addBtn.addEventListener('click', calculateResult);
subtractBtn.addEventListener('click', calculateResult);
multiplyBtn.addEventListener('click', calculateResult);
divideBtn.addEventListener('click', calculateResult);

