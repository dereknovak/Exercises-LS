let readlineSync = require('readline-sync');
const sequence = ['1st', '2nd', '3rd', '4th', '5th', 'last'];

let numbers = [];
sequence.forEach(iteration => {
  let num = readlineSync.question(`Enter the ${iteration} number: `);
  numbers.push(num);
});

let lastNum = numbers.splice(numbers.length - 1)[0];
let numbersAsString = '[' + numbers.join(', ') + ']';

if (numbers.includes(lastNum)) {
  console.log(`The number ${lastNum} appears in ${numbersAsString}.`);
} else {
  console.log(`The number ${lastNum} does not appear in ${numbersAsString}.`);
}