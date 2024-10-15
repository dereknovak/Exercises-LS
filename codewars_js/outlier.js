/* 

10:39 // 11:01

PROBLEM
I: An array of integers
O: A number, representing the odd/even outlier

- Outlier
    - All numbers will be either even or odd except 1
        - This 1 number will be the the outlier
- Even numbers are divisible by 2
- Will always receive 1 array as an arg
- No sparse arrays
- Can mutate array
- Could contain string (digits)
    - Convert these to numbers
- Always just one outlier
- If array length is less than 3, return null
- Always integers, no floats
- Could have negative numbers
    - -2 is still even
- If return element is a string, must return string

EXAMPLE
[2, 4, 0, 100, 4, 11, 2602, 36]
Even count is 7
Odd count is 1

DATA STRUCTURE
- Arrays of oddIntegers and evenIntegers
    - Whichever has a length of 1, return that element

[-2, 4, 0, 100, 4, '11', 2602, 36] // '11'
evenNumbers = [-2, 4, 0, 100, 4, 2602, 36]
oddNumbers = ['11']
Return first element of whichever has 1 element

ALGORITHM
1. Validate the input
    - If the array length is less than 3, return null
2. Capture even and odd numbers
    - Initialize evenNumbers to []
    - Initialize oddNumbers to []
    - Iterate through numbers (forEach)
        - If currentNum is a string, convert to number (testingNum)
        - If testingNum isEven HELPER
            - Push currentNum to evenNumbers
        - Otherwise
            - Push currentNum to oddNumbers
3. Return the first element of whichever array has a length of 1
    - If evenNumbers length is 1
        - Return the first element of evenNumbers
    - Otherwise
        - Return the first element of oddNumbers

HELPERS
isEven(num)
- Num % 2 === 0 (absolute value)

*/

function outlier(numbers) {
  if (numbers.length < 3) return null;

  const evenNumbers = [];
  const oddNumbers = [];

  numbers.forEach(currentNum => {
    let testingNum = typeof currentNum === 'string' ? Number(currentNum) : currentNum;

    if (isEven(testingNum)) {
      evenNumbers.push(currentNum);
    } else {
      oddNumbers.push(currentNum);
    }
  });

  return evenNumbers.length === 1 ? evenNumbers[0] : oddNumbers[0];
}

const isEven = num => Math.abs(num % 2) === 0;

// TEST CASES

// Happy Path
console.log(outlier([2, 4, 0, 100, 4, 11, 2602, 36]) === 11);
console.log(outlier([3, 5, 11, 21, 14, 17, 37]) === 14);

// Strings
console.log(outlier(['2', 4, 0, 100, 4, '11', 2602, 36]) === '11');
console.log(outlier(['2', 4, 0, 100, 4, 11, 2602, 36]) === 11);

// Negatives
console.log(outlier([2, 5, -4, 6]) === 5);

// // Everything
console.log(outlier([-2, 4, 0, 100, 4, '11', 2602, 36]) === '11');

// Not enough elements
console.log(outlier([]) === null);
console.log(outlier([3]) === null);
console.log(outlier([3, 2]) === null);

// Additional Test Cases

console.log(outlier([160, 3, 1719, 19, 11, 13, -21])  === 160);