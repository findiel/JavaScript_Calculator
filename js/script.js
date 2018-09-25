//IMPORTS
let functions = require('./functions');

//REAL SCRIPT
let clickCounter = 0;
let globalVariables = {
    equation: null,
    firstNumber: null,
    secondNumber: null,
    score: null
}
document.addEventListener('click', e => {
    try {
        let nodeValue = e.srcElement.attributes.value.nodeValue;
        if (isNaN(parseInt(nodeValue))) {
            if (nodeValue === 'remove-all') {
                functions.delete();
            } else if (nodeValue === 'remove-last') {
                let newNumber = functions.removeLast();
                functions.updateScreen(newNumber);
            } else if (nodeValue === 'plus') {
                clickCounter++;
                functions.updateScreen("0");
                globalVariables.equation = '+';
            } else if (nodeValue === 'equal') {
                if (globalVariables.equation === '+') {
                    globalVariables.score = parseInt(globalVariables.firstNumber) + parseInt(globalVariables.secondNumber);
                    functions.updateScreen(globalVariables.score);
                }
            }
            console.log("false!");
        } else {
            if (document.querySelector('.output__score').textContent.length > 12) {
                throw "Number Limit Error";
            } else {
                if (clickCounter === 0 ) {
                    globalVariables.firstNumber = functions.enterNumber(nodeValue);
                    functions.updateScreen(globalVariables.firstNumber);
                    console.log(`First Number: ${globalVariables.firstNumber}`);
                } else {
                    globalVariables.secondNumber = functions.enterNumber(nodeValue);
                    functions.updateScreen(globalVariables.secondNumber);
                    console.log(`Second Number: ${globalVariables.secondNumber}`);
                }
            }
        }
    }
    catch(err) {
        console.log(err);
    }
})