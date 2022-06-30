const numberButtons = document.querySelectorAll('.number');
const operationButtons = document.querySelectorAll('.operator');
const additionalButtons = document.querySelectorAll('.additional');

const display = document.getElementById('mainD');
const historyD = document.getElementById('history');

let mainNumber = 0;
let history = '';
let calculated = false;


function operate(numOne, numTwo, operator) {
    switch (operator) {
        case '*':
            display.textContent = multiply(numOne, numTwo);
            break;
        case '/':
            display.textContent = divide(numOne, numTwo);
            break;
        case '+':
            display.textContent = add(numOne, numTwo);
        break;
        case '-':
            display.textContent = subtract(numOne, numTwo);
        break;
        default:
            break;
    }
    calculated = true;
    historyD.textContent = '0';
    history = '';
    mainNumber = Number(display.textContent);
}

function add(numOne, numTwo) {
    return numOne + numTwo;
}

function subtract(numOne, numTwo) {
    return numOne - numTwo;
}

function multiply(numOne, numTwo) {
    return numOne * numTwo;
}

function divide(numOne, numTwo) {
    return (numOne / numTwo).toFixed(3);
}

operationButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        switch(e.target.textContent)
        {
            case '=':
                operate(Number(history.slice(0, -2)), mainNumber, history.slice(-1))
                return;
            default:
                //historyD.textContent =  historyD.textContent.slice(0, -1) + e.target.textContent;
                break;
        }
        const newHistory = `${display.textContent} ${e.target.textContent}`;
        historyD.textContent = history = newHistory;
        history = newHistory;
        display.textContent = mainNumber = 0;
    });
});

numberButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        if(display.textContent == '0')
            display.textContent = '';
        display.textContent += e.target.textContent;
        mainNumber = Number(display.textContent);
    });
});


additionalButtons.forEach((button) => {
    switch (button.textContent) {
        case 'CE':
            button.addEventListener('click', (e) => {
                mainNumber = 0;
                display.textContent = '0';
            });
            break;
        case 'C':
            button.addEventListener('click', (e) => {
                mainNumber = 0;
                display.textContent = '0';
                historyD.textContent = '0';
                history = '0';
            });
            break;
    
        default:
            break;
    }
    
});