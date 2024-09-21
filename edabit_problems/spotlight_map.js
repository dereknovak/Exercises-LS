/* 

PROBLEM
I: An array of arrays
O: An array of arrays, representing the spotlight sum of each number

- Spotlight sum
    - The sum of all surrounding numbers, including self
    - Surronding includes
        - previous row, idx - 1 thru idx + 1
        - idx - 1 thru idx + 1
        - next row idx - 1 thru idx + 1

- RULES
    - All row lengths will be the same
    - Negative numbers can be used
    - 0 Can be used
    - Only integers

EXAMPLE
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]

  [12, 21, 16],
  [27, 45, 33],
  [24, 39, 28]

[1, 2, 3]
    []
    [1, 2]
    [4, 5]
    *** [12, 2, 3]
    []
    [1, 2, 3]
    [4, 5, 6]

DATA STRUCTURE
- Use array to create array
    - Can transform with map
    - Dealing with indexes

ALGORITHM
1. Transform input array into its spotlight sum
    - Iterate through each row (map, with index)
        - Iterate through each column (map, with index)
            - Initialize previous row to:
                - row idx - 1 OR
                    - sliceElements HELPER
                - []
            - Initialize next row to:
                - row idx + 1 OR
                    - sliceElements HELPER
                - []
            - Initialize current row to 
                - sliceElements HELPER
            - Combine all as array
                - Flatten
                - Return sum of flattened array
        - Return transformed row
2. Return the transformed array

HELPER sliceElements(array, idx)
- If idx === 0
    - slice 0, 2
- Otherwise
    - slice idx -1, idx + 2
*/

function spotlightMap(grid) {
  return grid.map((_, row) => {
    return _.map((_, col) => {
      let previousRow = grid[row - 1] || [];
      let currentRow = grid[row];
      let nextRow = grid[row + 1] || [];
      
      previousRow = sliceElements(previousRow, col);
      currentRow = sliceElements(currentRow, col);
      nextRow = sliceElements(nextRow, col);

      return [previousRow, currentRow, nextRow].flat(1).reduce(sum);
    });
  });
}

function sliceElements(array, idx) {
  return idx ? array.slice(idx - 1, idx + 2) : array.slice(0, 2);
}

const sum = (a, b) => a + b;


// TEST CASES

console.log(spotlightMap([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]));
/*
[
  [12, 21, 16],
  [27, 45, 33],
  [24, 39, 28]
]
*/

console.log(spotlightMap([
  [2, 6, 1, 3, 7],
  [8, 5, 9, 4, 0]
]));
/*
[
  [21, 31, 28, 24, 14],
  [21, 31, 28, 24, 14]
]
*/

console.log(spotlightMap([[3]])); // [[3]]

console.log(spotlightMap([
  [-2, 6, 1, 3, 7],
  [8, 5, 9, 4, 0]
]));
/*
[
  [17, 27, 28, 24, 14],
  [17, 27, 28, 24, 14]
]
*/