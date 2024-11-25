/* 

10:08 // 10:25
- Very smooth
- No debug at the end
- My solution is slightly more optimized than provided one as I only use half of the numbers below the given value rather than all of them.

PROBLEM
I: An integer
O: A boolean, representing whether the input is a square of another number

RULES
- Cannot use sqrt method
- A square is a number that is the product of a smaller number multiplied by itself
- Will be a positive integer

DATA STRUCTURE
- Use a binary search (using variables)
    - Divide number by 2, round up (starting value)
    - While left <= right
    - Times number by itself
        - If mid * mid is greater than value
            - Move right down
        - If mid * mid is less than value
            - Move left up
        - If mid * mid = value
            - Return true
    - Return false

input = 9
left = 3
right = 3
mid:
    2 = 4
    4 = 16
    3 = 9 ***
return true

input = 14
left = 3
right = 3
mid:
    4 = 16
    2 = 4
    3 = 9
return false

ALGORITHM
1. Setup
    - Initialize left to 0
    - Initialize right to num / 2 (ceil)
2. Perform binary search to find sqrt
    - Loop through numbers (while left <= right)
        - Initialzie mid to left + right / 2 (floor)
        - If mid * mid is greater than value
            - Move right down
        - If mid * mid is less than value
            - Move left up
        - If mid * mid = value
            - Return true
3. If no value, return false
*/

function isSquareInteger(num) {
  let left = 0;
  let right = Math.ceil(num / 2);

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const square = mid ** 2;

    if (square > num) {
      right = mid - 1;
    } else if (square < num) {
      left = mid + 1;
    } else {
      return true;
    }
  }

  return false;
}

// TEST

// True
console.log(isSquareInteger(1) === true);
console.log(isSquareInteger(4) === true);
console.log(isSquareInteger(9) === true);
console.log(isSquareInteger(625) === true);

// False
console.log(isSquareInteger(14) === false);
console.log(isSquareInteger(17) === false);
console.log(isSquareInteger(999) === false);

// Additional Test Cases
console.log(isSquareInteger(16) === true);
console.log(isSquareInteger(25) === true);
console.log(isSquareInteger(26) === false);