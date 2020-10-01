// What is your age? 30
// At what age would you like to retire? 70

// It's 2017. You will retire in 2057.
// You have only 40 years of work to go!

let age = parseInt(prompt('What is your age?'), 10);
const TODAY = new Date();

let currentYear = TODAY.getFullYear();
let retirementAge = (prompt('At what age would you like to retire?'));
let retirementYear = currentYear + retirementAge - age;

console.log(`It's ${currentYear}. You will retire in ${retirementYear}`)
console.log(`You have only ${retirementYear - currentYear} years of work to go!`);