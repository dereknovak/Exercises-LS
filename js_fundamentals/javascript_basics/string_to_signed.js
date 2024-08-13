function isNegative(str) {
  return str[0] === '-';
}

function stringToSignedInteger(str) {
  const NUMS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  let digits = str.split('').reverse().filter(char => char.match(/[0-9]/));
  let multiplier = 1;
  let num = 0;

  digits.forEach((digit, i) => {
    let incrementValue = (NUMS.indexOf(digit) * multiplier);
    if (isNegative(str)) {
      num -= incrementValue;
    } else {
      num += incrementValue;
    }

    multiplier *= 10;
  });

  return num;
}

console.log(stringToSignedInteger('4321') === 4321);
console.log(stringToSignedInteger('-570') === -570);
console.log(stringToSignedInteger('+100') === 100);