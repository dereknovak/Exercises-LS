/* 

9:13 // 9:33
- Did not test at all, but everything ran true on first attempt
- Basically the same as the range of 3s problem
- Could get rid of validation step after finding left index

PROBLEM
I: An array of integers, sorted ascending
I: A number, representing a target value
O: A boolean, on whether or not the target value occurs more than 3 times

RULES
- Numbers are sorted ascending
    - 1, 2, 3...
- Can have repeats of any number
- Need to determine if the target number is repeated more than 3 times
    - Because this is sorted, find the index of first and last occurrence
        - If the difference is > 3, return true
- If target value is not present, return false

EXAMPLE
[1, 1, 1, 1, 2, 3, 4] // 1
=> true

DATA STRUCTURE
- Array
    - Use a binary search (2x)
        - 1st is to find the leftmost
        - If 1st is undefined, return false
        - 2nd is to find the rightmost
        - Return if right - left >= 3

[1, 2, 3, 3, 3, 3, 4, 5] // target = 3
                 r  lm r             
left = 2
right = 5

left
- While left <= right
    - If >= target
        - If === target, reassign result to index of mid
        - Move right
    - Otherwise
        - Move left

right
- While left <= right
    - If <= target
        - If === target, reassign result to index of mid
        - Move left
    - Otherwise
        - Move right

ALGORITHM
1. Find the leftmost index of value
2. If index is undefined, return false
3. Find the rightmost index of value
4. Return whether right - left >= 3
*/


function isTargetFrequent(arr, target) {
  function findLeft() {
    let left = 0;
    let right = arr.length - 1;
    let result;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);

      if (arr[mid] >= target) {
        if (arr[mid] === target) result = mid;
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }

    return result;
  }

  function findRight() {
    let left = 0;
    let right = arr.length - 1;
    let result;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);

      if (arr[mid] <= target) {
        if (arr[mid] === target) result = mid;
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    return result;
  }

  return findRight() - findLeft() >= 3;
}

// TEST CASES

// True
console.log(isTargetFrequent([1, 1, 1, 1, 2, 3, 4], 1) === true);
console.log(isTargetFrequent([1, 2, 3, 3, 3, 3, 4, 5], 3) === true);

// False
console.log(isTargetFrequent([1, 1, 1, 1, 2, 3, 4], 3) === false);
console.log(isTargetFrequent([1, 1, 1, 2, 3, 4], 1) === false);
console.log(isTargetFrequent([1, 1, 1, 2, 3, 4], 5) === false);
console.log(isTargetFrequent([], 5) === false);

// Additional Test Cases
console.log(isTargetFrequent([1, 2, 3, 3, 3, 3, 4], 3) === true);
console.log(isTargetFrequent([1, 1, 1, 1, 2, 3, 4], 1) === true);
console.log(isTargetFrequent([1, 2, 3, 4, 5], 2) === false );
console.log(isTargetFrequent([1, 1, 3, 4, 5], 2) === false );
console.log(isTargetFrequent([2, 2, 2, 3, 3, 3, 4], 3) === false);
console.log(isTargetFrequent([4, 4, 4, 4, 4, 4, 4], 4) === true);
