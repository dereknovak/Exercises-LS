/* 

3:01 // 3:14

PROBLEM
I: An array of integers
O: A number, representing the sum of all integers in the array

RULES
- Use recursion
- Positive and Negative integers
- If empty, return 0

RECURSION
- Base Case: If array length is empty, return 0
- Recursion Definition:

DATA STRUCTURE
- An array

[1, 2, 3]
- If array length is empty, return 0
[1, 2, 3] // firstNum + recursion(slice(1))

[1, 2, 3]
1 + recursion([2, 3]) => 6
2 + recursion([3]) => 5
3 + recursion([]) => 3
[] => 0

ALGORITHM
Base Case:
    - If array length is empty, return 0
Recursion:
    - Find the sum of the first element of array and recursion of slice from 1 - end of array
*/

function sum(nums) {
  if (!nums.length) return 0;
  return nums[0] + sum(nums.slice(1));
}

console.log(sum([1, 2, 3]) === 6);
console.log(sum([10, 15, 20, 10, 5]) === 60);
console.log(sum([-5, -1, 5, 2, -3]) === -2);
console.log(sum([7]) === 7);
console.log(sum([]) === 0);

// All test cases should log true.