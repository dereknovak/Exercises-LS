/* 

6:52 // 7:04 (Saw someone else do this problem 5 days ago)

PROBLEM
I: An array of ordered nums
O: A boolean, representing if any 2 distinct elements share a 1:3 relationship

RULES
- Can't use
    - filter, map, reduce, find, includes, indexOf, lastIndexOf
- Time complexity should O(N)
- Distinct element
    - An element

EXAMPLE
[4, 5, 7, 9, 13, 15, 17]
4 => x
5 => x
7 => x
9 = 3 => x
13 x
15 = 5 ***
17 x
true

DATA STRUCTURE
- Use array
    - Use a/r
        - If a * 3 > r
            - r++
        - If a * 3 < r
            - a++
        - If equal, return true

[4, 5, 7, 9, 13, 15, 17]
    a            r
true

[1, 2, 4, 8]
       a  r
false

ALGORITHM
1. Iterate through array with a/r, checking if any values have a 1:3 relationship
    - Initialize anchor to 0
    - Initialize runner to 1
    - Iterate through array (while runner < array length)
        - If anchor * 3 > runner
            - Increment runner
        - If anchor * 3 < runner
            - Increment anchor
        - If anchor * 3 === runner
            - Return true
2. If none do, return false
*/

function checkTripleMatch(numbers) {
  let anchor = 0;
  let runner = 1;

  while (runner < numbers.length) {
    let num1 = numbers[anchor];
    let num2 = numbers[runner];

    if (num1 * 3 > num2) {
      runner++;
    } else if (num1 * 3 < num2) {
      anchor++;
    } else {
      return true;
    }
  }

  return false;
}

console.log(checkTripleMatch([1, 3, 9, 28]) === true);
console.log(checkTripleMatch([1, 2, 4, 10, 11, 12]) === true);
console.log(checkTripleMatch([0, 5, 7, 55]) === false);
console.log(checkTripleMatch([4, 5, 7, 9, 13, 15, 17]) === true);
console.log(checkTripleMatch([2, 6, 13, 54]) === true);
console.log(checkTripleMatch([1, 5, 17, 51]) === true);
console.log(checkTripleMatch([1, 2, 4, 8]) === false);

// All test cases should log true.