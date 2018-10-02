let UIController = require('./UIController');
module.exports = {
    enterNumber: (num) => {
        if (document.querySelector(UIController.DOMelements.mainScreen).textContent === "0") {
            if (num == ".") {
                return "0."
            }
            else {
                return num;
            }
        } else {
            return document.querySelector(UIController.DOMelements.mainScreen).textContent + num;
        }
    },

    changeToFloat: () => {
        if (document.querySelector(UIController.DOMelements.mainScreen).textContent.search(/\./g) > -1) {
            console.log('Don\'t cheat!');
            return document.querySelector(UIController.DOMelements.mainScreen).textContent;

        }
       else {
           return document.querySelector(UIController.DOMelements.mainScreen).textContent + ".";
       }

    },

    changeToNegative: () => {
        return "-"
    },

    updateMainScreen: (arg) => {
        document.querySelector(UIController.DOMelements.mainScreen).textContent = arg;
    },

    updateSubScreen: (arg) => {
        document.querySelector(UIController.DOMelements.subScreen).textContent = arg;
    },

    addition: (firstNumber, secoundNumber) => {
        if ((parseFloat(firstNumber) + parseFloat(secoundNumber) > 999999999)) {
            return (parseFloat(firstNumber) + parseFloat(secoundNumber)).toPrecision(8);
        } 
        else {
            return Math.round((parseFloat(firstNumber) + parseFloat(secoundNumber)) * 10000) / 10000;
        }
    },

    subtraction: (firstNumber, secoundNumber) => {
        if ((parseFloat(firstNumber) - parseFloat(secoundNumber) > 999999999)) {
            return (parseFloat(firstNumber) - parseFloat(secoundNumber)).toPrecision(8);
        } 
        else {
            return Math.round((parseFloat(firstNumber) - parseFloat(secoundNumber)) * 10000) / 10000;
        }
    },

    multiplication: (firstNumber, secoundNumber) => {
        if ((parseFloat(firstNumber) * parseFloat(secoundNumber) > 999999999)) {
            return (parseFloat(firstNumber) * parseFloat(secoundNumber)).toPrecision(8);
        } 
        else {
            return Math.round((parseFloat(firstNumber) * parseFloat(secoundNumber)) * 10000) / 10000;
        }
    },

    division: (firstNumber, secoundNumber) => {
        if ((parseFloat(firstNumber) / parseFloat(secoundNumber) > 999999999)) {
            return (parseFloat(firstNumber) / parseFloat(secoundNumber)).toPrecision(8);
        } 
        else {
            return Math.round((parseFloat(firstNumber) / parseFloat(secoundNumber)) * 10000) / 10000;
        }
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