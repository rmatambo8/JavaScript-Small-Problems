let input = Number(prompt('==> Enter the first number'));
let second = Number(prompt('==> Enter the second number:'));
console.log(String(input) + ' + ' +  String(second) + ' = ' + String(input + second));
console.log(String(input) + ' - ' +  String(second) + ' = ' + String(input - second));
console.log(String(input) + ' * ' +  String(second) + ' = ' + String(input * second));
console.log(String(input) + ' / ' +  String(second) + ' = ' + Math.floor(input / second));
console.log(String(input) + ' % ' +  String(second) + ' = ' + String(input % second));
console.log(String(input) + ' ** ' +  String(second) + ' = ' + String(parseFloat(input ** second)));
// const readlineSync = require("readline-sync");// i can use constants as a way to require certain libraries.

// console.log("Enter the first number:"); // logged value to the screen
// let firstNumber = Number(readlineSync.prompt());
// console.log("Enter the second number:");
// let secondNumber = Number(readlineSync.prompt());

// console.log(`${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber}`);
// console.log(`${firstNumber} - ${secondNumber} = ${firstNumber - secondNumber}`);
// console.log(`${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber}`);
// console.log(`${firstNumber} / ${secondNumber} = ${Math.floor(firstNumber / secondNumber)}`);
// console.log(`${firstNumber} % ${secondNumber} = ${firstNumber % secondNumber}`);
// console.log(
//   `${firstNumber} ** ${secondNumber} = ${Math.pow(firstNumber, secondNumber)}`
// );