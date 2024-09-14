/* 
10:26

PROBLEM
I: An array of numbers
I: An integer, representing how the array should be split
O: An integer, representing the column with the greatest sum

RULES
- Nums will always divide into equal groups
- If 2 or more columns have same sum, return the smallest column number

QUESTIONS
- Will there ever be any non-integers?
    - No
- Will there ever be an empty array?
    - Yes, in that case return null
- Could you have a 0 split?
    - Yes, return null
- Will there be negatives?
    - Yes, account for negatives

EXAMPLE
nums = [4, 14, 12, 7, 14, 16, 5, 13, 7, 16, 11, 19]
n = 4

[4, 14, 12, 7]
[14, 16, 5, 13]
[7, 16, 11, 19]
25 46 28 39

Column 2 is returned (not idx 2)

DATA STRUCTURE
- Use nested arrays for each row

ALGORITHM
1. Validate the input
    - If numbers is empty or divider is 0
        - Return null
2. Create the rows of numbers (HELPER: createRows(numbers, divider)
    - Initialize count to 1
    - Initialize rows to an empty array
    - Initialize currentRow to an empty array
    - Iterate through numbers
        - If count is <= divider
            - Add the currentNumber to currentRow
            - Increment count by 1
        - Otherwise
            - Add the currentRow to rows
            - Reassign count to 1
            - Reassign currentRow to include just the currentNum
    - Add the currentRow to rows
3. Determine the sum of each column
    - Initialize sums array
    - Iterate through the first row using indexes
        - Calculate sum of all of the numbers at the current index
            - Initialize sum to 0
            - Iterate through rows
                - Add the current index to sum
            - Add sum to sums
4. Return the column number that has the largest sum
    - Reduce the sum to the largest one (max = {column: 0, sum: -Infin})
        - If the current sum is greater than max
            - Reassign column to current idx + 1
            - Reassign sum to the currentSum
    - Return max.column 
*/

function sumRows(rows) {
  const sums = [];
  rows[0].forEach((_, idx) => {
    let sum = 0;
    rows.forEach(row => sum += row[idx])
    sums.push(sum);
  });

  return sums;
}

function toMax(max, sum, idx) {
  if (sum > max.sum) {
    max.column = idx + 1;
    max.sum = sum;
  }
  return max;
}

function maximumColumn(numbers, divider) {
  if (numbers.length === 0 || divider === 0) return null;
  const rows = createRows(numbers, divider);
  const sums = sumRows(rows);
  return sums.reduce(toMax, { column: 0, sum: -Infinity }).column;
}

function createRows(numbers, divider) {
  let count = 1;
  const rows = [];
  let currentRow = [];

  numbers.forEach(num => {
    if (count <= divider) {
      currentRow.push(num);
      count += 1;
    } else {
      rows.push(currentRow);
      count = 2;
      currentRow = [num];
    }
  });
  rows.push(currentRow);

  return rows;
}

// TEST CASES

console.log(maximumColumn([4, 14, 12, 7, 14, 16, 5, 13, 7, 16, 11, 19], 4) === 2);
console.log(maximumColumn([4, 14, 12, 7, 14, 16, 5, 13, 7, 16, 11, 19], 1) === 1);
console.log(maximumColumn([2, 20, 1, 10, 4, 30, 5, 40], 3) === 2);
console.log(maximumColumn([-2, -20, -1, -10, -4, -30, -5, -40], 2) === 1);
console.log(maximumColumn([20, 1, 2, 10, 3, 4, 30, 5, 6, 40, 7, 8], 3) === 1);
console.log(maximumColumn([20, 40, 2, 10, 30, 4, 30, 10, 6, 40, 20, 8], 3) === 1);
console.log(maximumColumn([], 3) === null);
console.log(maximumColumn([4, 14, 12, 7, 14, 16, 5, 13, 7, 16, 11, 19], 0) === null);


