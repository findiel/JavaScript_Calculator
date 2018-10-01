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

//     if (document.querySelector(UIController.DOMelements.mainScreen).textContent.substr(document.querySelector(UIController.DOMelements.mainScreen).textContent.length - 1 === ".")) {
//         return document.querySelector(UIController.DOMelements.mainScreen).textContent;
//     }
//    else {
//        return document.querySelector(UIController.DOMelements.mainScreen).textContent + num;
//    }

    updateScreen: (arg) => {
        document.querySelector(UIController.DOMelements.mainScreen).textContent = arg;
    },

    addition: (firstNumber, secoundNumber) => {
        if ((parseFloat(firstNumber) + parseFloat(secoundNumber) > 999999999)) {
            return (parseFloat(firstNumber) + parseFloat(secoundNumber)).toPrecision(8);
        } 
        else {
            return Math.round((parseFloat(firstNumber) + parseFloat(secoundNumber)) * 100) / 100;
        }
    },

    subtraction: (firstNumber, secoundNumber) => {
        if ((parseFloat(firstNumber) - parseFloat(secoundNumber) > 999999999)) {
            return (parseFloat(firstNumber) - parseFloat(secoundNumber)).toPrecision(8);
        } 
        else {
            return Math.round((parseFloat(firstNumber) - parseFloat(secoundNumber)) * 100) / 100;
        }
    },

    multiplication: (firstNumber, secoundNumber) => {
        if ((parseFloat(firstNumber) * parseFloat(secoundNumber) > 999999999)) {
            return (parseFloat(firstNumber) * parseFloat(secoundNumber)).toPrecision(8);
        } 
        else {
            return Math.round((parseFloat(firstNumber) * parseFloat(secoundNumber)) * 100) / 100;
        }
    },

    division: (firstNumber, secoundNumber) => {
        if ((parseFloat(firstNumber) / parseFloat(secoundNumber) > 999999999)) {
            return (parseFloat(firstNumber) / parseFloat(secoundNumber)).toPrecision(8);
        } 
        else {
            return Math.round((parseFloat(firstNumber) / parseFloat(secoundNumber)) * 100) / 100;
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