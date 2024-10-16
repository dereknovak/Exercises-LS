/* 

4:25 // 4:44

PROBLEM
I: A number
O: A number, representing the difference of square sums and summed squares

- Calculate the square of the sums
    - Sum the numbers, square the value
- Calculate the sum of the squares
    - Square the nums, sum their values
- Subtract the 2nd from the 1st
- Will always receive a number arg
- Number will always be an integer
- Numbers will be greater than 0
- Includes number

EXAMPLE
3 => 22
(1 + 2 + 3) = 6**2 === 36
(1 + 4 + 9) = 14
36 - 14 === 22

5 => 170
(1 + 2 + 3 + 4 + 5) 15 225
(1 + 4 + 9 + 16 + 25) 55
225 - 55 = 170

DATA STRUCTURE
- An array of numbers leading up to number
    - Transform into squareOfSums
    - Transform into sumOfSquares

5
squareOfSums = [1, 2, 3, 4, 5] sum to 15, square to 225
sumOfSquares = [1, 2, 3, 4, 5] transform to [1, 4, 9, 16, 25], sum to 55
Return squaresOfSums - sumOfSquares

ALGORITHM
1. Capture an array of numbers from 1..given num
    - use allLeadingNumbers HELPER
2. Capture the squareOfSums
    - Use getSquareOfSums HELPER
3. Capture the sumOfSquares
    - Use getSumOfSquares HELPER
4. Return the difference between the 2
    - Return the difference

HELPERS
allLeadingNumbers(maxNumber)
- Initialize numbers to []
- Use a for loop (num is 1, while num <= number)
    - Push num into numbers
- Return numbers

getSquareOfSums(numbers)
- Reduce numbers to sum
- Return the square of sum

getSumOfSquares
- Transform numbers to their squares
- Return reducing the squares to their sum
*/

function sumSquareDifference(maxNumber) {
  const numbers = allLeadingNumbers(maxNumber);
  const squareOfSums = getSquareOfSums(numbers);
  const sumOfSquares = getSumOfSquares(numbers);

  return squareOfSums - sumOfSquares;
}

function allLeadingNumbers(maxNumber) {
  const numbers = [];
  for (let num = 1; num <= maxNumber; num++) {
    numbers.push(num);
  }

  return numbers;
}

const getSquareOfSums = numbers => numbers.reduce(toSum) ** 2;
const getSumOfSquares = numbers => numbers.map(toSquare).reduce(toSum);

const toSquare = num => num ** 2;
const toSum = (a, b) => a + b;

// TEST CASES

// Happy Path
console.log(sumSquareDifference(3) === 22);
console.log(sumSquareDifference(5) === 170);
console.log(sumSquareDifference(1) === 0);

// Additional Test Cases

console.log(sumSquareDifference(10) === 2640);
console.log(sumSquareDifference(100) === 25164150);