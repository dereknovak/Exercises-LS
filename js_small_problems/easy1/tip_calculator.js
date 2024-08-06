function prompt(message) {
  let rlSync = require('readline-sync');
  return rlSync.question(message);
}

function percentToDecimal(percent) {
  return percent / 100;
}

let bill = parseInt(prompt('What is the bill? '));
let tipPercentage = parseInt(prompt('What is the tip percentage? '));
let tipAmount = (bill * percentToDecimal(tipPercentage));
let total = (bill + tipAmount);

console.log(`The tip is $${tipAmount.toFixed(2)}`);
console.log(`The total is $${total.toFixed(2)}`);