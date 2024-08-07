function stringy(num) {
  let result = '';
  for (let counter = 1; counter <= num; counter++) {
    result += counter % 2 === 0 ? 0 : 1;
  }

  return result;
}

console.log(stringy(6) === "101010");
console.log(stringy(9) === "101010101");
console.log(stringy(4) === "1010");
console.log(stringy(7) === "1010101");