const choices = { s: 'sum', p: 'product' }
let rlSync = require('readline-sync');

function prompt(message) {
  return rlSync.question(message);
}

let maxNum = parseInt(prompt('Please enter an integer greater than 0: '));
let pressedKey = rlSync.keyIn('Enter "s" to computer the sum, or "p" to compute the product. ', { limit: 'sp' });

let result;
switch (pressedKey) {
  case 's':
    result = 0;
    for (let num = 1; num <= maxNum; num++) {
      result += num;
    }

    break;
  case 'p':
    result = 1;
    for (let num = 1; num <= maxNum; num++) {
      result *= num;
    }

    break;    
}

console.log('');
console.log(`The ${choices[pressedKey]} of the integers between 1 and ${maxNum} is ${result}.`);
    