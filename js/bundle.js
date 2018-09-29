(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
module.exports = {
    DOMelements: {
        mainScreen: '.output__score',
        subScreen: '.output__equation'
    }
}
},{}],2:[function(require,module,exports){
let UIController = require('./UIController');
module.exports = {
    enterNumber: (num) => {
        if (document.querySelector(UIController.DOMelements.mainScreen).textContent === "0") {
            return num;
        } else {
            return document.querySelector(UIController.DOMelements.mainScreen).textContent + num;
        }
    },

    updateScreen: (arg) => {
        document.querySelector(UIController.DOMelements.mainScreen).textContent = arg;
    },

    add: (firstNumber, secoundNumber) => {
        return parseInt(firstNumber) + parseInt(secoundNumber);
    },

    subtraction: (firstNumber, secoundNumber) => {
        return parseInt(firstNumber) - parseInt(secoundNumber); 
    },

    delete: () => {
        document.querySelector(UIController.DOMelements.mainScreen).textContent = "0";
    },

    removeLast: () => {
        let currNumber = document.querySelector(UIController.DOMelements.mainScreen).textContent;
        if (currNumber.length < 2) {
            return "0";
        } else {
            return currNumber.substring(0, currNumber.length - 1);
        }
    }       
}
},{"./UIController":1}],3:[function(require,module,exports){
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
},{"./calcFunctions":2}]},{},[3,2,1]);
