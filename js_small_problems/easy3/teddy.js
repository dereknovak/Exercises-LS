function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let age = getRandomNum(20, 200);
console.log(`Teddy is ${age} years old!`);