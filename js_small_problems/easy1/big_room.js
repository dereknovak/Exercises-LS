function prompt(message) {
  let rlSync = require('readline-sync');
  console.log(message);
  return rlSync.prompt();
}

function metersToFeet(meters) {
  return meters * 10.7639;
}

let type = prompt('Which type of input is being used:').toLowerCase();
let length = parseInt(prompt('Enter the length of the room in meters:'));
let width = parseInt(prompt('Enter the width of the room in meters:'));
let area = length * width;

console.log(`The area of the room is ${area.toFixed(2)} square ${type}.`);