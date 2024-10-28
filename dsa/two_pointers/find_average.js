/* 

12:26

PROBLEM
I: An array of integers
I: A number, representing the subarray size to compute averages
O: An array of integers, representing the averages of subarrays

RULES
- We can be given any integer, pos or negative
- Returned averages can be floats
- Length of either array can vary
- Length of returned array is determined by number of groups

EXAMPLE
[1, 2, 3, 4, 5, 6] // 3
[1, 2, 3]
[2, 3, 4]
[3, 4, 5]
[4, 5, 6]
=> [2, 3, 4, 5]

DATA STRUCTURE
- Use the array
    - Have an anchor/runner

[1, 2, 3, 4, 5, 6] // 3
          a.    r
 
window = 15
result = [2, 3, 4, 5 ]

APPLICATION
[1, 2, 3, 4, 5, 6] // 3
    a.    r

result = [2, 3]
window = 7

ALGORITHM
1. Iterate through nums using a/r
    - Initialize windowTotal to 0
    - Initialize result to []
    - Initialize anchor to 0
    - Loop through nums (for loop, runner = 0, while r < nums length)
        - Initialize numA to nums at anchor
        - Initialize numR to runs at runner
        - Increment windowTotal by numR
        - If runner >= k - 1
            - Push windowTotal / k to result
            - Decrement windowTotal by numA
            - Increment anchor by 1
2. Return the results array
*/

function findAverages(nums, k) {
  let window = 0;
  let anchor = 0;
  const result = [];

  for (let runner = 0; runner < nums.length; runner++) {
    let numA = nums[anchor];
    let numR = nums[runner];
    window += numR;

    if (runner >= k - 1) {
      result.push(window / k);
      window -= numA;
      anchor++;
    }
  }

  return result;
}

console.log(findAverages([1, 2, 3, 4, 5, 6], 3)); // [ 2, 3, 4, 5 ]
console.log(findAverages([1, 2, 3, 4, 5], 2));    // [1.5, 2.5, 3.5, 4.5]
console.log(findAverages([10, 20, 30, 40, 50], 4)); // [ 25, 35 ]
console.log(findAverages([5, 5, 5, 5, 5], 1));      // [ 5, 5, 5, 5, 5 ]
console.log(findAverages([1, 3, 2, 6, -1, 4, 1, 8, 2], 5)); // [2.2, 2.8, 2.4, 3.6, 2.8]