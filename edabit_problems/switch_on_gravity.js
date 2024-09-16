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

function switchGravityOn(arr) {
  if (arr.length === 0) return null;

  let hashtagMapping = [];
  let nOfRows = arr.length;
  let nOfColumns = arr[0].length;
  for (let j = 0; j < nOfColumns; j++) {
    hashtagMapping.push([j, 0]);
  }

  for (let i = 0; i < nOfRows; i++) {
    for (let j = 0; j < nOfColumns; j++) {
      if (arr[i][j] === "#") {
        hashtagMapping.forEach(subArr => {
          if (subArr[0] === j) subArr[1] += 1;
        });
      }
    }
  }

  let answer = [];
  for (let i = 0; i < nOfRows; i++) {
    answer.push([]);
    for (let j = 0; j < nOfColumns; j++) {
      answer[i].push('-');
    }
  }

  for (let i = 0; i < nOfRows; i++) {
    for (let j = 0; j < nOfColumns; j++) {
      hashtagMapping.forEach(subArr => {
        if ((subArr[0] === j) && (i >= (nOfRows - subArr[1]))) {
          answer[i][j] = "#";
        }
      })
    }
  }

  return answer;
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



