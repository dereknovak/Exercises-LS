/* 

PROBLEM
I: A number with 'n', the number of digits we are searching for
O: A number with 'n', the iteration of the sequence it takes to get to the input number length

- Fibonacci sequence:
    - Start with [1, 1]
    - Following numbers are the sum of the previous 2
        - [1, 1, 2] => 1 + 1 = 2
        - [1, 1, 2, 3] => 1 + 2 = 3
        - [1, 1, 2, 3, 5] => 2 + 3 = 5
- Need to find the first occurrence of the specified number of digits
    - If 2n, then first occurrence of a 2 digit number
    - If 3n, then first occurrence of a 3 digit number
- Once found, need to return the length of the sequence
    - If it is the 5th number, return 5n

QUESTIONS
- What if it skips the digit length? Not sure if possible, but should I return 1 less or 1 more?

DATA STRUCTURE
- An array to hold all of the numbers in the sequence

ALGORITHM
1. Initialize the sequence to [1, 1]
2. Continue adding to sequence until a digit with (input) length is found
    - Use a while loop
    - Declare a currentDigit to the sum of the last 2 nums of sequence
    - Add this value to the sequence
    - Check if its length matches the argument
        - Convert to string, then use length property
        - If it is greater than or equal to it, break from the loop
3. Return the length of the sequence
*/

function findFibonacciIndexByLength(numLength) {
  const sequence = [1n, 1n];
  
  while (true) {
    const currentNum = sequence.slice(sequence.length - 2).reduce(sum);
    sequence.push(currentNum);
    if (String(currentNum).length >= numLength) break;
  }

  return BigInt(sequence.length);
}

const sum = (x, y) => x + y;

// TEST CASES

console.log(findFibonacciIndexByLength(2n) === 7n);    // 1 1 2 3 5 8 13
console.log(findFibonacciIndexByLength(3n) === 12n);   // 1 1 2 3 5 8 13 21 34 55 89 144
console.log(findFibonacciIndexByLength(10n) === 45n);
console.log(findFibonacciIndexByLength(16n) === 74n);
console.log(findFibonacciIndexByLength(100n) === 476n);
// console.log(findFibonacciIndexByLength(1000n) === 4782n);
// console.log(findFibonacciIndexByLength(10000n) === 47847n);