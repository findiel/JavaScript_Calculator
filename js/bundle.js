(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
//TO DO: shortercode --> screenContext
let screenContext = document.querySelector('.output__score').textContent;
module.exports = {
    enterNumber: (num) => {
        if (document.querySelector('.output__score').textContent === "0") {
            return num;
        } else {
            return document.querySelector('.output__score').textContent + num;
        }
    },

    updateScreen: (arg) => {
        document.querySelector('.output__score').textContent = arg;
    },

    delete: () => {
        document.querySelector('.output__score').textContent = "0";
    },

    removeLast: () => {
        let currNumber = document.querySelector('.output__score').textContent;
        if (currNumber.length < 2) {
            return "0";
        } else {
            return currNumber.substring(0, currNumber.length - 1);
        }
    }       
}
},{}],2:[function(require,module,exports){
//IMPORTS
let functions = require('./functions');

//REAL SCRIPT
let clickCounter = 0;
document.addEventListener('click', e => {
    try {
        let firstNumber, secondNumber;
        let nodeValue = e.srcElement.attributes.value.nodeValue;
        if (isNaN(parseInt(nodeValue))) {
            if (nodeValue === 'remove-all') {
                functions.delete();
            } else if (nodeValue === 'remove-last') {
                let newNumber = functions.removeLast();
                functions.updateScreen(newNumber);
            } else if (nodeValue === 'plus') {
                clickCounter++;
            }
            console.log("false!");
        } else {
            if (document.querySelector('.output__score').textContent.length > 12) {
                throw "Number Limit Error";
            } else {
                if (clickCounter === 0 ) {
                    let firstNumber = functions.enterNumber(nodeValue);
                    functions.updateScreen(firstNumber);
                    console.log(`First Number: ${firstNumber}`);
                } else {
                    let secondNumber = functions.enterNumber(nodeValue);
                    functions.updateScreen(secondNumber);
                    console.log(`Second Number: ${secondNumber}`);
                }
            }
        }
    }
    catch(err) {
        console.log(err);
    }
})
},{"./functions":1}]},{},[2,1]);
