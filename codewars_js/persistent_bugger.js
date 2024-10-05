/* 

10:32 // 10:57

PROBLEM
I: A positive integer
O: An integer,representing the number of times you multiple a number by its digits until a single digit is returned

RULES
- All numbers will be integers and positive
- If already a single digit, return 0

EXAMPLE
39
3 * 9 = 27 (1)
2 * 7 = 14 (2)
1 * 4 = 4 (3)

999
9 * 9 * 9 = 729
7 * 2 * 9 = 126
1 * 2 * 6 = 12
1 * 2 = 2 (4)

12345
1 * 2 * 3 * 4 * 5 = 120
1 * 2 * 0 = 0 (2)

DATA STRUCTURE
- An array to reduce to product
    - Split the digits into an array

999
    iterations = 4
    currentNum = 2
    [9 9 9](product) = 729
    [7 2 9](product) = 126
    [1 2 6](product) = 12
    [1 2](product) = 2

ALGORITHM
1. Find the number of iterations of multiplying until a single digit
    - Initialize currentNum to num
    - Initialize iterations to 0
    - Use while loop (while currentNum's length is greater than 1)
        - Increment iterations by 1
        - Split currentNum to digits
        - Find the product of digits
            - Reassign current num to the product
2. Return iterations
*/

function persistence(number) {
  let currentNum = number;
  let iterations = 0;

  while (String(currentNum).length > 1) {
    iterations += 1;
    currentNum = [...String(currentNum)].map(Number).reduce(product);
  }

  return iterations;
}

const product = (a, b) => a * b;

// TEST CASES

console.log(persistence(39) === 3);
console.log(persistence(999) === 4);
console.log(persistence(12345) === 2);
console.log(persistence(8) === 0);
console.log(persistence(25) === 2);
console.log(persistence(123456789) === 2);