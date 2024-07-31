function prompt(message) {
  let rlSync = require('readline-sync');
  return rlSync.question(message);
}

let phrase = prompt('Please enter a phrase: ');
let spacelessPhrase = phrase.split(' ').join('');
let alphabetPhrase = phrase.split('').map(letter => letter.match(/[a-z]/i)).join('');

console.log(`There are ${alphabetPhrase.length} characters in "${phrase}".`);