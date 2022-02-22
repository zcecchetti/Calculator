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

    if (operatorLastPushed === true) {
        displayItems.textContent = "1";
        operatorLastPushed = false;
    } else {
        displayItems.textContent += "1";
    }
};

function addTwo() {

    if (operatorLastPushed === true) {
        displayItems.textContent = "2";
        operatorLastPushed = false;
    } else {
        displayItems.textContent += "2";
    };
};

function addThree() {

    if (operatorLastPushed === true) {
        displayItems.textContent = "3";
        operatorLastPushed = false;
    } else {
        displayItems.textContent += "3";
    };
};

function addFour() {

    if (operatorLastPushed === true) {
        displayItems.textContent = "4";
        operatorLastPushed = false;
    } else {
        displayItems.textContent += "4";
    };
};

function addFive() {

    if (operatorLastPushed === true) {
        displayItems.textContent = "5";
        operatorLastPushed = false;
    } else {
        displayItems.textContent += "5";
    };
};

function addSix() {

    if (operatorLastPushed === true) {
        displayItems.textContent = "6";
        operatorLastPushed = false;
    } else {
        displayItems.textContent += "6";
    };
};

function addSeven() {

    if (operatorLastPushed === true) {
        displayItems.textContent = "7";
        operatorLastPushed = false;
    } else {
        displayItems.textContent += "7";
    };
};

function addEight() {

    if (operatorLastPushed === true) {
        displayItems.textContent = "8";
        operatorLastPushed = false;
    } else {
        displayItems.textContent += "8";
    };
};

function addNine() {

    if (operatorLastPushed === true) {
        displayItems.textContent = "9";
        operatorLastPushed = false;
    } else {
        displayItems.textContent += "9";
    };
};

function addZero() {

    if (operatorLastPushed === true) {
        displayItems.textContent = "0";
        operatorLastPushed = false;
    } else {
        displayItems.textContent += "0";
    };
};

function addDot() {

    if (operatorLastPushed === true) {
        displayItems.textContent = ".";
        operatorLastPushed = false;
    } else {
        displayItems.textContent += ".";
    };
};

function clearDisplay() {

    displayItems.textContent = "0";
    num1 = null;
    num2 = null;
    numCounter = 0;
};

numOne.addEventListener("click", () => {
    addOne();
    assignInput();
});
numTwo.addEventListener("click", () => {
    addTwo();
    assignInput();
});
numThree.addEventListener("click", () => {
    addThree();
    assignInput();
});
numFour.addEventListener("click", () => {
    addFour();
    assignInput();
});
numFive.addEventListener("click", () => {
    addFive();
    assignInput();
});
numSix.addEventListener("click", () => {
    addSix();
    assignInput();
});
numSeven.addEventListener("click", () => {
    addSeven();
    assignInput();
});
numEight.addEventListener("click", () => {
    addEight();
    assignInput();
});
numNine.addEventListener("click", () => {
    addNine();
    assignInput();
});
numZero.addEventListener("click", () =>{
    addZero();
    assignInput();
});
numDot.addEventListener("click", () => {
    addDot();
    assignInput();
});
clear.addEventListener("click", clearDisplay);

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
});

minus.addEventListener("click", () => {
    
    numCounter++;
    checkCounter();
    operator = subtract;
    operatorLastPushed = true;
});

product.addEventListener("click", () => {
    
    numCounter++;
    checkCounter();
    operator = multiply;
    operatorLastPushed = true;
});

division.addEventListener("click", () => {
    
    numCounter++;
    checkCounter();
    operator = divide;
    operatorLastPushed = true;
});

power.addEventListener("click", () => {
    
    numCounter++;
    checkCounter();
    operator = powerOf;
    operatorLastPushed = true;
});

remainder.addEventListener("click", () => {
    
    numCounter++;
    checkCounter();
    operator = remainderOf;
    operatorLastPushed = true;
});

/*

THIS FUNCTION WILL NEED TO BE PERFORMED WITHOUT THE USE OF OPERATE SO THAT IT
CAN BE ACCESSIBLE AT ANY POINT
negate.addEventListener("click", () => {
    
    checkCounter();
    operator = negativeOf;
    operatorLastPushed = true;
});
*/

const executeMath = document.getElementById("execute");

executeMath.addEventListener("click", () => {

    num1 = operate(num1, operator, num2);
    displayItems.textContent = num1;
});

