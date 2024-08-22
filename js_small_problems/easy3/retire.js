let rlSync = require('readline-sync');
let currentAge = Number(rlSync.question('What is your age? '));
let retireAge = Number(rlSync.question('At what age would you like to retire? '));

let currentYear = new Date().getFullYear();
let yearsRemaining = retireAge - currentAge
let retireYear = currentYear + yearsRemaining

console.log(`It's ${currentYear}. You will retire in ${retireYear}.`);
console.log(`You only have ${yearsRemaining} years of work to go!`);