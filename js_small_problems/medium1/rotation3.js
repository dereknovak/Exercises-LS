/* 

PROBLEM
I: A number
O: A number, fully rotated

RULES
- Rotate 

EXAMPLE
- 735291
1. 352917
2. 329175
3. 321759

ALGORITHM
1. Use a for loop to iterate over number
    - iteration should start at the numbers length and stop at 0
    - Use this value for n
    - Reassign number to its rotated using n as current loop
2. Return number
*/

function maxRotation(number) {
  for (let n = String(number).length; n > 0; n -= 1) {
    number = rotateRightmostDigits(number, n);
  }

  return number;
}

function rotateRightmostDigits(number, n) {
  const digits = String(number);
  const splitPoint = digits.length - n;
  const leftNums = digits.slice(0, splitPoint);
  let rightNums = digits.slice(splitPoint);
  rightNums = rightNums.slice(1) + rightNums[0];

  return Number(leftNums + rightNums);
}

console.log(maxRotation(735291) === 321579);
console.log(maxRotation(3) === 3);
console.log(maxRotation(35) === 53);
console.log(maxRotation(105) === 15); // -- the leading zero gets dropped
console.log(maxRotation(8703529146) === 7321609845);
