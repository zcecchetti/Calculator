// Functions to perform math

function add (num1, num2) {
    return result = num1 + num2;
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
    displayItems.textContent = answer;
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
};

numOne.addEventListener("click", addOne);
numTwo.addEventListener("click", addTwo);
numThree.addEventListener("click", addThree);
numFour.addEventListener("click", addFour);
numFive.addEventListener("click", addFive);
numSix.addEventListener("click", addSix);
numSeven.addEventListener("click", addSeven);
numEight.addEventListener("click", addEight);
numNine.addEventListener("click", addNine);
numZero.addEventListener("click", addZero);
numDot.addEventListener("click", addDot);
clear.addEventListener("click", clearDisplay);

// Perform math functions

const executeMath = document.getElementById("execute");
