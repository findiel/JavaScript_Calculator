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
                    //TODO: Fix it
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