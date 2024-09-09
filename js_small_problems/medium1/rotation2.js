/* 

PROBLEM
I: A number
I: A number, representing the number of rightmost digits that will be rotated
O: A number, representing the number rotated

RULES
- n represents how many digits will be rotated
    - 735291, 3
        - 735(291)
- Rotation means beginning goes to end, and everything else shifts by 1 to left

QUESTIONS
- What if there is a leading 0?
- Will input always be 2 numbers
- What if n = 0?
- What if missing n argument?

EXAMPLE
735291
1. 735291
2. 735219
3. 735912
4. 732915
5. 742913
6. 352917

DATA STRUCTURE
1. Convert number to a string
    - String()
2. Slice out what will be rotated
    - Declare splitPoint to length - n
    - slice number at splitPoint
        - Assign to rightNums
    slice number idx 0 - splitPoint
        - Assign to leftNums
3. Rotate the slice
    - convert to array, rotate, then rejoin
        - to rotate, move beginning to end and shift everything to left by 1
4. Add slice to the non-sliced string
    - Add leftNums and rightNums
    - Convert back to a number
*/

function rotateRightmostDigits(number, n) {
  const digits = String(number);
  const splitPoint = digits.length - n;
  const leftNums = digits.slice(0, splitPoint);
  let rightNums = digits.slice(splitPoint);
  rightNums = rightNums.slice(1) + rightNums[0];

  return Number(leftNums + rightNums);
}

console.log(rotateRightmostDigits(735291, 1) === 735291);
console.log(rotateRightmostDigits(735291, 2) === 735219);
console.log(rotateRightmostDigits(735291, 3) === 735912);
console.log(rotateRightmostDigits(735291, 4) === 732915);
console.log(rotateRightmostDigits(735291, 5) === 752913);
console.log(rotateRightmostDigits(735291, 6) === 352917);