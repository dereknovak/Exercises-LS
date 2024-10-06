/* 

11:28 // 11:54

PROBLEM
I: An array of numbers
I: An array of numbers
O: A number, representing the mean of pairs squared

- Squares mean raise to the power of 2
- If arrays are not equal length, return null
- Number can be a float
- Each element is paired with element with same index of other array
- Need to find the abs value of the number pairs
- Will always receive array arguments
- Always at least one value in array
- Can have negative numbers
- Can have 0
- Always numbers for elements, but no floats

DATA STRUCTURE
- An array for the square results
    - Find the sum of this array
    - Divide that sum by the length of one array

[1, 2, 3], [4, 5, 6]
[9, 9, 9]
[1, 4]
abs = 3^2 = 9
[2, 5]
abs = 3^2 = 9
[3, 6]
abs = 3^2 = 9
sum = 27 / 3 => 9

APPLICATION
[1, 2, 3], [4, 5, 6]
squares = [9, 9, 9]
1, 4
abs = 3 => 9
2, 5
abs = 3 => 9
3, 6
abs = 3 => 9
sum = 27 / 3 => 9

ALGORITHM
1. Valid input
    - If array lengths are not the same, return null
2. Find the square/abs of index pairs
    - Initialize squares to []
    - Use a for loop (zero idx, while its less than length of arr)
        - Use calculateAbsSquare HELPER
            - Push value to squares
3. Find the sum of the all of the pairs
    - Reduce to the sum (HELPER) (sum)
4. Divide the sum by the length of sums
5. Return this value

HELPERS
calculateAbsSquare(num1, num2)
- initialize abs to absolute value of num1/num2
- return square of this value
*/

function meanSquare(arr1, arr2) {
  if (arr1.length !== arr2.length) return null;

  const squares = [];
  for (let i = 0; i < arr1.length; i++) {
    let num1 = arr1[i];
    let num2 = arr2[i];

    squares.push(calculateAbsSquare(num1, num2));
  }

  return squares.reduce(sum) / arr1.length;
}

const calculateAbsSquare = (num1, num2) => Math.abs(num1 - num2) ** 2;
const sum = (a, b) => a + b;

// TEST CASES 

console.log(meanSquare([1, 2, 3], [4, 5, 6]) === 9);
console.log(meanSquare([-1, 2], [3, -4]) === 26);
console.log(meanSquare([1, 1, 1], [1, 1, 1]) === 0);
console.log(meanSquare([1, 1], [1, 1, 1]) === null);
console.log(meanSquare([0, 1, 0], [1, 1, 1]) === 0.6666666666666666);
console.log(meanSquare([2, 2, 3], [4, 5, 6]) === 7.333333333333333);

// ADDITIONAL TEST CASES
console.log(meanSquare([10, 20, 10, 2], [10, 25, 5, -2]) === 16.5);
console.log(meanSquare([-1, 0], [0, -1]) === 1);