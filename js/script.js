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
            //NaN click events
            //1. AC button - deletes all
            if (nodeValue === 'remove-all') {
                calcFunctions.delete();
                globalVariables.firstNumber = "0";
                globalVariables.secondNumber = "0";
                globalVariables.clickCounter = 0;
            }
            //2. CE button - removes last number
            else if (nodeValue === 'remove-last') {
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
            } 
            //3. PLUS button - updating Equation to addition
            else if (nodeValue === 'plus') {
                globalVariables.clickCounter++;
                calcFunctions.updateScreen("0");
                globalVariables.equation = '+';
            } 
            //4. MINUS button - updating Equation to subtraction
            else if (nodeValue === 'minus') {
                globalVariables.clickCounter++;
                calcFunctions.updateScreen("0");
                globalVariables.equation = '-';
            } 
            //5. MULTIPLY button - updating Equation to multplication
            else if (nodeValue === 'multiply') {
                globalVariables.clickCounter++;
                calcFunctions.updateScreen("0");
                globalVariables.equation = '*';
            } 
            //5. DIVIDE button - updating Equation to division
            else if (nodeValue === 'divide') {
                globalVariables.clickCounter++;
                calcFunctions.updateScreen("0");
                globalVariables.equation = '/';
            } 
            //5. DOT button - converting ints to floats
            else if (nodeValue === 'dot') {
                if (globalVariables.clickCounter === 0) {
                    globalVariables.firstNumber = calcFunctions.changeToFloat();
                    calcFunctions.updateScreen(globalVariables.firstNumber);
                    console.log(`First Number changed to float!`);
                }
                else {
                    globalVariables.secondNumber = calcFunctions.changeToFloat();
                    calcFunctions.updateScreen(globalVariables.secondNumber);
                    console.log(`Second Number changed to float!`);
                }
            }
            //X. EQUAL button - executing calc functions depending on equation
            else if (nodeValue === 'equal') {
                // 1. addiotion
                if (globalVariables.equation === '+') {
                    globalVariables.score = calcFunctions.addition(globalVariables.firstNumber, globalVariables.secondNumber);
                    calcFunctions.updateScreen(globalVariables.score);
                    globalVariables.firstNumber = globalVariables.score;
                    globalVariables.clickCounter = 0;
                    console.log(`Score: ${globalVariables.score}`);
                } 
                //2. subtraction
                else if (globalVariables.equation === '-') {
                    globalVariables.score = calcFunctions.subtraction(globalVariables.firstNumber, globalVariables.secondNumber);
                    calcFunctions.updateScreen(globalVariables.score);
                    globalVariables.firstNumber = globalVariables.score;
                }
                //3. multiplication
                else if (globalVariables.equation === '*') {
                    globalVariables.score = calcFunctions.multiplication(globalVariables.firstNumber, globalVariables.secondNumber);
                    calcFunctions.updateScreen(globalVariables.score);
                    globalVariables.firstNumber = globalVariables.score;
                }
                //4. division
                else if (globalVariables.equation === '/') {
                    globalVariables.score = calcFunctions.division(globalVariables.firstNumber, globalVariables.secondNumber);
                    calcFunctions.updateScreen(globalVariables.score);
                    globalVariables.firstNumber = globalVariables.score;
                }
            }
            //Number click events 
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