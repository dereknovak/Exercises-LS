/* 

PROBLEM
I: A nested array of dashes/pounds
O: A nested array of dashes/pounds with gravity on

RULES
- Dashes represent blank space
- Pounds represent blocks
- Nested arrays are stacked on top of each other
- A block falls from the earliest nested array to later
- Rows can be of varying length
- Can be varying number of rows

QUESTIONS
- Can there be no blocks?
    - Yes, returned array will simply not have any blocks
- Can there be all blocks?
    - Yes, returned array will have all blocks

EXAMPLE
[
  ["-", "#", "#", "-"],
  ["-", "-", "#", "-"],
  ["-", "-", "-", "-"],
  ["-", "-", "-", "-"]
]

[
  ["-", "-", "-", "-"],
  ["-", "-", "-", "-"],
  ["-", "-", "#", "-"],
  ["-", "#", "#", "-"]
]
  
["-", "#", "#", "-"], ["-", "-", "#", "-"], ["-", "-", "-", "-"], ["-", "-", "-", "-"]
["-", "-", "-", "-"], ["-", "-", "-", "-"], ["-", "-", "#", "-"], ["-", "#", "#", "-"]

[
  ["-", "-", "-", "-"],
  ["-", "-", "-", "-"],
  ["-", "-", "#", "-"],
  ["-", "#", "#", "-"]
]

DATA STRUCTURE
- I: A nested array
    - Iterate thru each element
- O: A nested array

ALGORITHM
1. Reassign all pounds to their lowest position in the array
    - Iterate through the input array (row)
        - Iterate through each element of the nested array (col)
            - If the current element is a '#'
                - Iterate through each row again (for loop)
                    - Starting index is determined by row + 1
                        - Loop until length - 1 is met
                    - If element at col is a '-'
                        - Reassign that element to '#'
                        - Reassign current row/col to '-'
                        - Break out of the for loop
2. Return the new array
*/

function switchGravityOn(blocks) {
  blocks.forEach((_, row) => {
    _.forEach((_, col) => {
      if (blocks[row][col] === '#') {
        for (let i = row + 1; i < blocks.length; i++) {
          if (blocks[i][col] === '-') {
            blocks[i][col] = '#';
            blocks[row][col] = '-';
            break;
          }
        }
      }
    });
  });

  return blocks;
}

// TEST CASES

console.log(switchGravityOn([
  ["-", "#", "#", "-"],
  ["-", "-", "-", "-"],
  ["-", "-", "-", "-"],
  ["-", "-", "-", "-"]
])); 
// [
//   ["-", "-", "-", "-"],
//   ["-", "-", "-", "-"],
//   ["-", "-", "-", "-"],
//   ["-", "#", "#", "-"]
// ]

console.log(switchGravityOn([
  ["-", "#", "#", "-"],
  ["-", "-", "#", "-"],
  ["-", "-", "-", "-"]
])); 
// [
//  ["-", "-", "-", "-"],
//  ["-", "-", "#", "-"],
//  ["-", "#", "#", "-"]
// ]

console.log(switchGravityOn([
  ["-", "#", "#", "#", "#", "-"],
  ["#", "-", "-", "#", "#", "-"],
  ["-", "#", "-", "-", "-", "-"],
  ["-", "-", "-", "-", "-", "-"]
]));
// [
//  ["-", "-", "-", "-", "-", "-"],
//  ["-", "-", "-", "-", "-", "-"],
//  ["-", "#", "-", "#", "#", "-"],
//  ["#", "#", "#", "#", "#", "-"]
// ]


console.log(switchGravityOn([
  ["#", "#", "#", "#", "#", "#"],
  ["#", "#", "#", "#", "#", "#"],
  ["#", "#", "#", "#", "#", "#"],
  ["#", "#", "#", "#", "#", "#"]
]));
// [
//  ["#", "#", "#", "#", "#", "#"],
//  ["#", "#", "#", "#", "#", "#"],
//  ["#", "#", "#", "#", "#", "#"],
//  ["#", "#", "#", "#", "#", "#"]
// ]

console.log(switchGravityOn([
  ["-", "-", "-", "-", "-", "-"],
  ["-", "-", "-", "-", "-", "-"],
  ["-", "-", "-", "-", "-", "-"],
  ["-", "-", "-", "-", "-", "-"]
]));
// [
//  ["-", "-", "-", "-", "-", "-"],
//  ["-", "-", "-", "-", "-", "-"],
//  ["-", "-", "-", "-", "-", "-"],
//  ["-", "-", "-", "-", "-", "-"]
// ]



