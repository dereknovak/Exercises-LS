function prompt(message) {
  let readlineSync = require('readline-sync');
  return readlineSync.question(message);
}

let noun = prompt('Enter a noun: ').toLowerCase();
let verb = prompt('Enter a verb: ').toLowerCase();
let adj = prompt('Enter an adjective: ').toLowerCase();
let adv = prompt('Enter an adverb: ').toLowerCase();

console.log(`Do you ${verb} your ${adj} ${noun} ${adv}? That's hilarious!`);