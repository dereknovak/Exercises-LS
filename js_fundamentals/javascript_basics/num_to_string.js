function integerToString(num) {
  if (!num) return '0';

  const NUMS = '0123456789';
  let digits = [];

  let divisor = 10;
  let remainder = num % divisor;
  digits.push(remainder);
  divisor *= 10;

  do {
    remainder = num % divisor;
    digits.push(Math.floor(remainder / (divisor / 10)));
    divisor *= 10;
  } while ((num - remainder) > 0);

  let stringifiedNum = '';
  digits.reverse().forEach(num => {
    stringifiedNum += NUMS[num];
  });

  return stringifiedNum;
}

console.log(integerToString(4321) == "4321");
console.log(integerToString(0) == "0");
console.log(integerToString(5000) == "5000");