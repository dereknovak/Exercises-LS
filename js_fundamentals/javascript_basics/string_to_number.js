function stringToInteger(str) {
  const NUMS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  let digits = str.split('').reverse();
  let multiplier = 1;
  let num = 0;

  digits.forEach((digit, i) => {
    num += (NUMS.indexOf(digit) * multiplier);
    multiplier *= 10;
  });

  return num;
}

console.log(stringToInteger('4321') === 4321);
console.log(stringToInteger('570') === 570);