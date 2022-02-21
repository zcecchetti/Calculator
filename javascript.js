// Functions to perform math

function add (num1, num2) {
    return result = +num1 + +num2;
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
    let answer = operator(num1, num2);
    numCounter = 1;
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

    displayItems.textContent += "1";
};

function addTwo() {

    displayItems.textContent += "2";
};

function addThree() {

    displayItems.textContent += "3";
};

function addFour() {

    displayItems.textContent += "4";
};

function addFive() {

    displayItems.textContent += "5";
};

function addSix() {

    displayItems.textContent += "6";
};

function addSeven() {

    displayItems.textContent += "7";
};

function addEight() {

    displayItems.textContent += "8";
};

function addNine() {

    displayItems.textContent += "9";
};

function addZero() {

    displayItems.textContent += "0";
};

function addDot() {

    displayItems.textContent += ".";
};

function clearDisplay() {

    displayItems.textContent = "";
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
        num1 = displayItems.textContent;
    } else {
        num2 = displayItems.textContent;
    };
};

function checkCounter() {

    if (numCounter === 2) {
        operate(num1, operator, num2);
        numCounter = 1;
    };
};

const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const product = document.getElementById("multiply");
const division = document.getElementById("divide");
const remainder = document.getElementById("remainder");
const power = document.getElementById("power");
const negate = document.getElementById("negative");

plus.addEventListener("click", () => {
    displayItems.textContent = "";
    numCounter++;
    operator = add;
});

const executeMath = document.getElementById("execute");

executeMath.addEventListener("click", () => {

    num1 = operate(num1, operator, num2);
    num2 = null;
    displayItems.textContent = num1;
});
