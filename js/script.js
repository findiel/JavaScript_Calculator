//IMPORTS
let calcFunctions = require('./calcFunctions');

//REAL SCRIPT
let globalVariables = {
    equation: null,
    firstNumber: null,
    secondNumber: null,
    score: null,
    clickCounter: 0
}
document.addEventListener('click', e => {
    try {
        let nodeValue = e.srcElement.attributes.value.nodeValue;
        if (isNaN(parseInt(nodeValue))) {
            if (nodeValue === 'remove-all') {
                calcFunctions.delete();
                globalVariables.firstNumber = "0";
                globalVariables.secondNumber = "0";
                globalVariables.clickCounter = 0;
            } else if (nodeValue === 'remove-last') {
                let newNumber = calcFunctions.removeLast();
                if (globalVariables.clickCounter === 0) {
                    globalVariables.firstNumber = newNumber;
                    calcFunctions.updateScreen(globalVariables.firstNumber);
                    console.log(`First Number changed to: ${globalVariables.firstNumber}`);
                } else {
                    globalVariables.secondNumber = newNumber;
                    calcFunctions.updateScreen(globalVariables.secondNumber);
                    console.log(`Second Number changed to: ${globalVariables.secondNumber}`);
                }
            } else if (nodeValue === 'plus') {
                globalVariables.clickCounter++;
                calcFunctions.updateScreen("0");
                globalVariables.equation = '+';
            } else if (nodeValue === 'minus') {
                globalVariables.clickCounter++;
                calcFunctions.updateScreen("0");
                globalVariables.equation = '-';
            } else if (nodeValue === 'equal') {
                if (globalVariables.equation === '+') {
                    globalVariables.score = calcFunctions.add(globalVariables.firstNumber, globalVariables.secondNumber);
                    calcFunctions.updateScreen(globalVariables.score);
                    globalVariables.firstNumber = globalVariables.score;
                } else if (globalVariables.equation === '-') {
                    globalVariables.score = calcFunctions.subtraction(globalVariables.firstNumber, globalVariables.secondNumber);
                    calcFunctions.updateScreen(globalVariables.score);
                    globalVariables.firstNumber = globalVariables.score;
                }
            }
        } else {
            if (document.querySelector('.output__score').textContent.length > 12) {
                throw "Number Limit Error";
            } else {
                if (globalVariables.clickCounter === 0 ) {
                    globalVariables.firstNumber = calcFunctions.enterNumber(nodeValue);
                    calcFunctions.updateScreen(globalVariables.firstNumber);
                    console.log(`First Number: ${globalVariables.firstNumber}`);
                } else {
                    globalVariables.secondNumber = calcFunctions.enterNumber(nodeValue);
                    calcFunctions.updateScreen(globalVariables.secondNumber);
                    console.log(`Second Number: ${globalVariables.secondNumber}`);
                }
            }
        }
    }
    catch(err) {
        console.log(err);
    }
})