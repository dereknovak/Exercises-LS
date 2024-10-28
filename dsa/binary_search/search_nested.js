/* 

10:23 // 10:55

PROBLEM
I: A nested array (2d) with integers
I: A target number
O: A boolean, representing if the target number is in any subarrays

RULES
- Time complexity must be O(log(m*n))
- Numbers in subarrays continuously grow

DATA STRUCTURE
- Use binary search to find which array to scan
    - First element of each array is always larger than the last of previous
        - Just check the first element
            - If it's smaller, look in right
            - If it's larger, look in left
- Use binary search to find number in corresponding array

[[4, 8, 12], [16, 20, 24], [28, 32, 36]] // 20
findArray
[[4, 8, 12], [16, 20, 24], [28, 32, 36]]
                           lmr
result = [16, 20, 24]

findNumber
[16, 20, 24]
l    m    r
true
if undefined, return false

ALGORITHM
1. Use a binary search to find the array with the number
    - Use findArray HELPER
2. If array is undefined, return false
3. Use a binary search to find whether the target number is in array
    - Use findNumber HELPER

APPLICATION
[[3, 6, 9], [12, 15, 18], [21, 24, 27]] // 27
                          lmr
result = [21, 24, 27]
                 lmr

HELPERS
findArray(array, target)
- initialize left to 0
- Initialize right to array length - 1
- Declare result
- Iterate through array (while left <= right)
    - Initialize mid to left + right / 2
    - If first element of mid is less than or equal to target
        - Reassign result to that subarray
        - Reassign left to mid + 1
    - Otherwise
        - Reassign right to mid - 1
- Return the result array

findNumber(array, target)
- Initialize left to 0
- Initialize right to array length - 1
- Iterate through array (while left <= right)
    - Initialize mid to left + right / 2
    - Initialize currentNum to array at mid
    - If currentNum === target
        - Return true
    - If currentNum > target
        - Reassign right to mid - 1
    - Otherwise
        - Reassign left to mid + 1
- Return false
*/

function findInNestedArray(matrix, target) {
  const array = findArray(matrix, target) || [];
  return findNumber(array, target);
}

function findNumber(array, target) {
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let currentNum = array[mid];

    if (currentNum === target) {
      return true;
    } else if (currentNum > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return false;
}

function findArray(matrix, target) {
  let left = 0;
  let right = matrix.length - 1;
  let result;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    const currentArray = matrix[mid];

    if (currentArray[0] <= target) {
      result = currentArray;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return result;
}

console.log(findInNestedArray([[4, 8, 12], [16, 20, 24], [28, 32, 36]], 20) === true);
console.log(findInNestedArray([[3, 6, 9], [12, 15, 18], [21, 24, 27]], 27) === true);
console.log(findInNestedArray([[1, 3, 5], [7, 9, 11], [13, 15, 17]], 19) === false);
console.log(findInNestedArray([[10, 20, 30], [40, 50, 60], [70, 80, 90]], 10) === true);
console.log(findInNestedArray([[15, 25, 35], [45, 55, 65], [75, 85, 95]], 5) === false);

// All test cases should return true.