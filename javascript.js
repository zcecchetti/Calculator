// Functions to perform math

function add (num1, num2) {
    return result = +`${num1}` + +`${num2}`;
};

function subtract (num1, num2) {
    return result = num1 - num2;
};

function divide (num1, num2) {
    return result = num1/num2;
};

function multiply (num1, num2) {
    return result = num1 * num2;
};

function powerOf (num1, num2) {
    return result = num1 ** num2;
};

function remainderOf (num1, num2) {
    return result = num1 % num2;
};

function negativeOf (num1) {
    return result = 0 - num1;
};

function operate (num1, operator, num2) {

    if (operator == null) {
        operator = add;
    };
    if (num2 == null) {
        num2 = 0;
    };
    let answer = operator(num1, num2);
    numCounter = 1;
    operatorLastPushed = true;
    if (answer == null || answer === Infinity || isNaN(answer)) {
        answer = "ERROR";
    };

    let answerString = answer.toString();
    if (answerString.length > 13) {
        let bigAnswer = limitLength(answer);
        return bigAnswer;
    };

    return answer;
};

// Populate selected button in display

const numOne = document.getElementById("1");
const numTwo = document.getElementById("2");
const numThree = document.getElementById("3");
const numFour = document.getElementById("4");
const numFive = document.getElementById("5");
const numSix = document.getElementById("6");
const numSeven = document.getElementById("7");
const numEight = document.getElementById("8");
const numNine = document.getElementById("9");
const numZero = document.getElementById("0");
const numDot = document.getElementById("dot");
const displayItems = document.getElementById("displayItems");
const clear = document.getElementById("clear");

function addOne() {

    if (operatorLastPushed === true || displayItems.textContent === "0") {
        displayItems.textContent = "1";
        operatorLastPushed = false;
    } else {
        displayItems.textContent += "1";
    }
};

function addTwo() {

    if (operatorLastPushed === true || displayItems.textContent === "0") {
        displayItems.textContent = "2";
        operatorLastPushed = false;
    } else {
        displayItems.textContent += "2";
    };
};

function addThree() {

    if (operatorLastPushed === true || displayItems.textContent === "0") {
        displayItems.textContent = "3";
        operatorLastPushed = false;
    } else {
        displayItems.textContent += "3";
    };
};

function addFour() {

    if (operatorLastPushed === true || displayItems.textContent === "0") {
        displayItems.textContent = "4";
        operatorLastPushed = false;
    } else {
        displayItems.textContent += "4";
    };
};

function addFive() {

    if (operatorLastPushed === true || displayItems.textContent === "0") {
        displayItems.textContent = "5";
        operatorLastPushed = false;
    } else {
        displayItems.textContent += "5";
    };
};

function addSix() {

    if (operatorLastPushed === true || displayItems.textContent === "0") {
        displayItems.textContent = "6";
        operatorLastPushed = false;
    } else {
        displayItems.textContent += "6";
    };
};

function addSeven() {

    if (operatorLastPushed === true || displayItems.textContent === "0") {
        displayItems.textContent = "7";
        operatorLastPushed = false;
    } else {
        displayItems.textContent += "7";
    };
};

function addEight() {

    if (operatorLastPushed === true || displayItems.textContent === "0") {
        displayItems.textContent = "8";
        operatorLastPushed = false;
    } else {
        displayItems.textContent += "8";
    };
};

function addNine() {

    if (operatorLastPushed === true || displayItems.textContent === "0") {
        displayItems.textContent = "9";
        operatorLastPushed = false;
    } else {
        displayItems.textContent += "9";
    };
};

function addZero() {

    if (operatorLastPushed === true || displayItems.textContent === "0") {
        displayItems.textContent = "0";
        operatorLastPushed = false;
    } else {
        displayItems.textContent += "0";
    };
};

function addDot() {

    let isDotPreset = dotPresent();
    if (isDotPreset === true) {
        return;
    };
    if (operatorLastPushed === true || displayItems.textContent === "0") {
        displayItems.textContent = "0.";
        operatorLastPushed = false;
    } else {
        displayItems.textContent += ".";
    };
};

function dotPresent() {

    if (operatorLastPushed === false) {
        return displayItems.textContent.includes(".");
    } else {
        return;
    };
};

// Pressing clear once will clear current input, pressing twice will reset calculator

let clearCounter = 0;

function clearDisplay() {

    displayItems.textContent = "0";
    num1 = null;
    num2 = null;
    numCounter = 0;
    clearCounter = 0;
};

function clearEntry() {

    displayItems.textContent = "0";
    assignInput();
    clearCounter = 1;
}

numOne.addEventListener("click", () => {
    addOne();
    assignInput();
    clearCounter = 0;
});
numTwo.addEventListener("click", () => {
    addTwo();
    assignInput();
    clearCounter = 0;
});
numThree.addEventListener("click", () => {
    addThree();
    assignInput();
    clearCounter = 0;
});
numFour.addEventListener("click", () => {
    addFour();
    assignInput();
    clearCounter = 0;
});
numFive.addEventListener("click", () => {
    addFive();
    assignInput();
    clearCounter = 0;
});
numSix.addEventListener("click", () => {
    addSix();
    assignInput();
    clearCounter = 0;
});
numSeven.addEventListener("click", () => {
    addSeven();
    assignInput();
    clearCounter = 0;
});
numEight.addEventListener("click", () => {
    addEight();
    assignInput();
    clearCounter = 0;
});
numNine.addEventListener("click", () => {
    addNine();
    assignInput();
    clearCounter = 0;
});
numZero.addEventListener("click", () =>{
    addZero();
    assignInput();
    clearCounter = 0;
});
numDot.addEventListener("click", () => {
    addDot();
    assignInput();
    clearCounter = 0;
});
clear.addEventListener("click", () => {

    if (clearCounter === 1) {
        clearDisplay()
    } else {
        clearEntry();
    };
});

// Perform math functions

let num1 = null;
let num2 = null;
let numCounter = 0; // Determines when to combine num1 and num2
let operator;

function assignInput() {

    if (numCounter === 0) {
        num1 = Number(displayItems.textContent);
    } else {
        num2 = Number(displayItems.textContent);
    }
};

function checkCounter() {

    if (numCounter === 1) {
        num2 = null;
    } else if (numCounter === 2) {
        num1 = operate(num1, operator, num2);
        displayItems.textContent = num1;
    };
};

const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const product = document.getElementById("multiply");
const division = document.getElementById("divide");
const remainder = document.getElementById("remainder");
const power = document.getElementById("power");
const negate = document.getElementById("negative");

let operatorLastPushed = false; // Tells whether the last button pressed by user was an operator or execute

plus.addEventListener("click", () => {
    
    numCounter++;
    checkCounter();
    operator = add;
    operatorLastPushed = true;
    clearCounter = 0;
});

minus.addEventListener("click", () => {
    
    numCounter++;
    checkCounter();
    operator = subtract;
    operatorLastPushed = true;
    clearCounter = 0;
});

product.addEventListener("click", () => {
    
    numCounter++;
    checkCounter();
    operator = multiply;
    operatorLastPushed = true;
    clearCounter = 0;
});

division.addEventListener("click", () => {
    
    numCounter++;
    checkCounter();
    operator = divide;
    operatorLastPushed = true;
    clearCounter = 0;
});

power.addEventListener("click", () => {
    
    numCounter++;
    checkCounter();
    operator = powerOf;
    operatorLastPushed = true;
    clearCounter = 0;
});

remainder.addEventListener("click", () => {
    
    numCounter++;
    checkCounter();
    operator = remainderOf;
    operatorLastPushed = true;
    clearCounter = 0;
});

negate.addEventListener("click", () => {
    
    let tempNum = negativeOf(displayItems.textContent);
    displayItems.textContent = tempNum;
    assignInput();
    operatorLastPushed = true;
    clearCounter = 0;
});

const executeMath = document.getElementById("execute");

executeMath.addEventListener("click", () => {

    num1 = operate(num1, operator, num2);
    displayItems.textContent = num1;
    numCounter--;
    clearCounter = 0;
});

// Limit length of answer populated in display and limit number of decimal places

function limitLength(answer) {

    let newLength = Number.parseFloat(answer).toExponential(7);
    newLength *= 1; // Convert string to number
    return parseFloat(newLength.toFixed(100)); // .toFixed(100) limits smallest number to around 1 x 10^(-100)
};  
