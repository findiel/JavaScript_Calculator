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