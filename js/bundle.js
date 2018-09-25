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
},{"./functions":2}]},{},[3,2,1]);
