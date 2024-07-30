function prompt(message) {
  let rlSync = require('readline-sync');
  return rlSync.question('==> ' + message);
}

function output(value) {
  console.log('==> ' + value);
}

let num1 = parseInt(prompt('Enter the first number:\n'));
let num2 = parseInt(prompt('Enter the second number:\n'));

output(`${num1} + ${num2} = ${num1 + num2}`);
output(`${num1} - ${num2} = ${num1 - num2}`);
output(`${num1} * ${num2} = ${num1 * num2}`);
output(`${num1} / ${num2} = ${Math.floor(num1 / num2)}`);
output(`${num1} % ${num2} = ${num1 % num2}`);
output(`${num1} ** ${num2} = ${num1 ** num2}`);
