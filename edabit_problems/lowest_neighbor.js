/* 

PROBLEM
I: An array of numbers
I: A number, representing an x coord
I: A number, representing a y coord
O: A number, representing the lowest neighbor

RULES
- Input array will always be symmetrical
    - 2x2, 3x3
- x => row
- y => col
- 0 based index for row/col
- Negative numbers can be used

EXAMPLE
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]

(2, 0)
- We're at 7
    - Need to check 4, 5, 8
        - Check previous row
            - Column -1 y +1
        - Check current row ***
            - Column -1 +1
        - Check next row
            - Column -1 y +1


DATA STRUCTURE
- Use array to keep track of order
- Slice -1 => y + 2
    - If first value is less than 0, it needs to be 0

ALGORITHM
1. Get previous row, current row, and next row numbers
    - Initialize an array for all surroundingNums
    - If previous row exists 
        - sliceGroup grid at previous row
        - Push this slice to surroundingNums
    - If next row exists
        - sliceGroup grid at next row
        - Push this slice to surroundingNums
    - If on current row, 1 less is not undefined
        - Push to surrounding nums
    - If on current row, 1 more is not undefined
        - Push to surrounding nums
2. Return the smallest number
    - Flatten surroundNums
    - Use min to find the smallest number
    - Return this value

HELPER
sliceGroup(arr, col)
- If col is 0
    - Return arr slice 0 - 2
- Otherwise
    - Return arr slice col -1 - col + 1
*/

function lowestElement(grid, x, y) {
  const surroundingNums = [];

  const previousRow = grid[x - 1] || [];
  const currentRow = grid[x];
  const nextRow = grid[x + 1] || [];

  [previousRow, currentRow, nextRow].forEach(row => {
    surroundingNums.push(sliceGroup(row, y));
  });

  return Math.min(...surroundingNums.flat());
}

function sliceGroup(row, y) {
  return y === 0 ? row.slice(0, y + 2) : row.slice(y - 1, y + 2);
}

// TEST CASES

console.log(lowestElement([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
], 1, 1) === 1);

console.log(lowestElement([
  [9, 8, 7],
  [0, -1, -3],
  [-5, -9, 54]
], 0, 0) === -1);

console.log(lowestElement([
  [9, 8, 7, 8],
  [0, -1, -3, 2],
  [-5, -9, 54, 5],
  [4, 8, 12, 16]
], 2, 1) === -9);

console.log(lowestElement([
  [1, 5],
  [2, 4]
], 0, 1) === 1);

console.log(lowestElement([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
], 2, 0) === 4);

console.log(lowestElement([
  [1, 2, 3],
  [4, 0, 6],
  [7, 8, 9]
], 1, 1) === 0);
