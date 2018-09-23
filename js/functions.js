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