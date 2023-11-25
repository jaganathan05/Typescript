"use strict";
const num1Element = document.getElementById('num1');
const num2Element = document.getElementById('num2');
const Addbtn = document.getElementById('add');
const numresults = [];
const stringresults = [];
function sum(num1, num2) {
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        return num1 + num2;
    }
    else if (typeof num1 === 'string' && typeof num2 === 'string') {
        return num1 + ' ' + num2;
    }
    return +num1 + +num2 + 5;
}
function printResult(resultObj) {
    console.log(resultObj.val);
}
Addbtn.addEventListener('click', function () {
    const num1 = num1Element.value;
    const num2 = num2Element.value;
    const result = sum(+num1, +num2);
    numresults.push(result);
    console.log(result);
    const stringresult = sum(num1, num2);
    console.log(stringresult);
    stringresults.push(stringresult);
    printResult({ val: result, timestamp: new Date() });
    console.log(numresults, stringresults);
});
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('It Worked!');
    }, 1000);
});
myPromise.then((result) => {
    console.log(result.split('W'));
});
