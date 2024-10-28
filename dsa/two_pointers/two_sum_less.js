/* 

1:09 // 1:34

PROBLEM
I: An array of integers
I: A number, representing a target sum
O: A number, representing the max sum of 2 nums that is less than target

RULES
- Numbers must be distinct
    - num1 !== num2
- If no pair exists, return -1

EXAMPLE
[3, 1, 4] // 5
3 + 1 = 4
3 + 4 = 7
1 + 4 = 5
4

[6, 8, 10, 12] // 5
6 + 8 = 14
6 + 10 = 16
6 + 12 = 18
8 + 10 = 18
8 + 12 = 20
10 + 12 = 22

DATA STRUCTURE
- Use the array
    - Sort
    - Start/End
        - If the sum is greater than or equal to target, move end down
        - If the sum is less than 1 under target, move start up
            - Reassign maxSum to this number
        - If the sum is 1 less than target, return that number
    - If maxSum has not be assigned, return -1

[5, 8, 3, 2, 1] // 6
[1, 2, 3, 5, 8]
    s  e

target = 6
maxSum = 5

[6, 8, 10, 12] // 5
[6, 8, 10, 12]
s   e

target = 5
maxSum = 

[7, 4, 15, 11, 21, 9] // 24

[4, 7, 9, 11, 15, 21]
    s         e

maxSum = 19

ALGORITHM
1. Sort the given array (a - b)
2. Use start/end to determine maxSum under the target
    - Initialize start to 0
    - Initialize end to array length - 1
    - Declare maxSum
    - Loop through numbers (while start < end)
          - Determine sum of start/end
          - If sum >= target
              - decrement end by 1
          - Otherwise
              - Reassign maxSum to sum
              - Increment start by 1
3. If no maxSum, return -1
    - If maxSum, return it
    - Otherwise, return -1
4. Return maxSum
*/

function twoSumLessThanTarget(numbers, target) {
  numbers = numbers.sort((a, b) => a - b);

  let start = 0;
  let end = numbers.length - 1;
  let maxSum = -1;

  while (start < end) {
    const sum = numbers[start] + numbers[end];

    if (sum >= target) {
      end--;
    } else {
      if (sum > maxSum) maxSum = sum;
      start++
    }
  }

  return maxSum;
}

console.log(twoSumLessThanTarget([3, 1, 4], 5) === 4);
console.log(twoSumLessThanTarget([8, 2, 4, 9, 5, 10, 1, 7], 16) === 15);
console.log(twoSumLessThanTarget([5, 8, 3, 2, 1], 6) === 5);
console.log(twoSumLessThanTarget([6, 8, 10, 12], 5) === -1);
console.log(twoSumLessThanTarget([1, 2, 3, 4, 5], 100) === 9);
console.log(twoSumLessThanTarget([10, 20, 30, 40, 50], 40) === 30);
console.log(twoSumLessThanTarget([7, 4, 15, 11, 21, 9], 24) === 22);
// All test cases should log true