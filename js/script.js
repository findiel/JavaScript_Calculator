//IMPORTS
let calcFunctions = require('./calcFunctions');
let UIController = require('./UIController');

//REAL SCRIPT
let globalVariables = {
    equation: null,
    firstNumber: null,
    secondNumber: null,
    score: null,
    clickCounter: 0
}

//TODO:
//2. Updating sub screen
//3. Add key events
document.addEventListener('click', e => {
    try {
        let nodeValue = e.srcElement.attributes.value.nodeValue;
        if (isNaN(parseInt(nodeValue))) {
            //NaN click events
            //1. AC button - deletes all
            if (nodeValue === 'remove-all') {
                calcFunctions.delete();
                globalVariables.firstNumber = '0';
                globalVariables.secondNumber = '0';
                globalVariables.clickCounter = 0;
            }
            //2. CE button - removes last number
            else if (nodeValue === 'remove-last') {
                let newNumber = calcFunctions.removeLast();
                if (globalVariables.clickCounter === 0) {
                    globalVariables.firstNumber = newNumber;
                    calcFunctions.updateMainScreen(globalVariables.firstNumber);
                    console.log(`First Number changed to: ${globalVariables.firstNumber}`);
                } else {
                    globalVariables.secondNumber = newNumber;
                    calcFunctions.updateMainScreen(globalVariables.secondNumber);
                    console.log(`Second Number changed to: ${globalVariables.secondNumber}`);
                }
            } 
            //3. PLUS button - updating Equation to addition
            else if (nodeValue === 'plus') {
                globalVariables.clickCounter++;
                calcFunctions.updateMainScreen('0');
                globalVariables.equation = '+';
            } 
            //4. MINUS button - updating Equation to subtraction / adding a negative number
            else if (nodeValue === 'minus') {
                if (document.querySelector(UIController.DOMelements.mainScreen).textContent === '0') {
                    if (globalVariables.clickCounter === 0) {
                        globalVariables.firstNumber = calcFunctions.changeToNegative();
                        calcFunctions.updateMainScreen(globalVariables.firstNumber);
                    }
                    else {
                        globalVariables.secondNumber = calcFunctions.changeToNegative();
                        calcFunctions.updateMainScreen(globalVariables.secondNumber);
                    }
                }
                else {
                    globalVariables.clickCounter++;
                    calcFunctions.updateMainScreen('0');
                    globalVariables.equation = '-';
                }
            } 
            //5. MULTIPLY button - updating Equation to multplication
            else if (nodeValue === 'multiply') {
                globalVariables.clickCounter++;
                calcFunctions.updateMainScreen('0');
                globalVariables.equation = '*';
            } 
            //5. DIVIDE button - updating Equation to division
            else if (nodeValue === 'divide') {
                globalVariables.clickCounter++;
                calcFunctions.updateMainScreen('0');
                globalVariables.equation = '/';
            } 
            //5. DOT button - converting ints to floats
            else if (nodeValue === 'dot') {
                if (globalVariables.clickCounter === 0) {
                    globalVariables.firstNumber = calcFunctions.changeToFloat();
                    calcFunctions.updateMainScreen(globalVariables.firstNumber);
                    console.log(`First Number changed to float!`);
                }
                else {
                    globalVariables.secondNumber = calcFunctions.changeToFloat();
                    calcFunctions.updateMainScreen(globalVariables.secondNumber);
                    console.log(`Second Number changed to float!`);
                }
            }
            //6. EQUAL button - executing calc functions depending on equation
            else if (nodeValue === 'equal') {
                // 1. addiotion
                if (globalVariables.equation === '+') {
                    globalVariables.score = calcFunctions.addition(globalVariables.firstNumber, globalVariables.secondNumber);
                    calcFunctions.updateMainScreen(globalVariables.score);
                    globalVariables.firstNumber = globalVariables.score;
                    console.log(`Score: ${globalVariables.score}`);
                } 
                //2. subtraction
                else if (globalVariables.equation === '-') {
                    globalVariables.score = calcFunctions.subtraction(globalVariables.firstNumber, globalVariables.secondNumber);
                    calcFunctions.updateMainScreen(globalVariables.score);
                    globalVariables.firstNumber = globalVariables.score;
                    console.log(`Score: ${globalVariables.score}`);
                }
                //3. multiplication
                else if (globalVariables.equation === '*') {
                    globalVariables.score = calcFunctions.multiplication(globalVariables.firstNumber, globalVariables.secondNumber);
                    calcFunctions.updateMainScreen(globalVariables.score);
                    globalVariables.firstNumber = globalVariables.score;
                    console.log(`Score: ${globalVariables.score}`);
                }
                //4. division
                else if (globalVariables.equation === '/') {
                    globalVariables.score = calcFunctions.division(globalVariables.firstNumber, globalVariables.secondNumber);
                    calcFunctions.updateMainScreen(globalVariables.score);
                    globalVariables.firstNumber = globalVariables.score;
                    console.log(`Score: ${globalVariables.score}`);
                }
                globalVariables.clickCounter = 0;
            }
            //Number click events 
        } else {
            if (document.querySelector('.output__score').textContent.length > 12) {
                throw 'Number Limit Error';
            } else {
                if (globalVariables.clickCounter === 0 ) {
                    globalVariables.firstNumber = calcFunctions.enterNumber(nodeValue);
                    calcFunctions.updateMainScreen(globalVariables.firstNumber);
                    console.log(`First Number: ${globalVariables.firstNumber}`);
                } else {
                    globalVariables.secondNumber = calcFunctions.enterNumber(nodeValue);
                    calcFunctions.updateMainScreen(globalVariables.secondNumber);
                    console.log(`Second Number: ${globalVariables.secondNumber}`);
                }
            }
        }
    }
    catch(err) {
        console.log(err);
    }
})