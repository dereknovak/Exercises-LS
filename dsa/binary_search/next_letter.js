/* 

7:10 // 7:32

PROBLEM
I: An array of letters
I: A letter, representing a key to be compared
O: A letter, representing the smallest letter that is greater than the key

RULES
- Greater than key
    - Returned letter should be higher in the alpha
    - Closest one
- Letters are sorted in ascending order
    - abcdef....
- Letters can be repeated
- Has to be greater, not equal to
- Letters will be lowercase

EXAMPLE
['a', 'c', 'f', 'h', 'i', 'j'] // 'g'

DATA STRUCTURE
- Use an array
    - Use binary search
    - Left = 0
    - Right = 5
    - Mid = 'f'

['a', 'c', 'f', 'h', 'i', 'j'] // 'g'
 l          m               r       
resultLetter = a

APPLICATION
['c', 'f', 'j'] // 'c'
 r     l
result = f

['b', 'd', 'f'] // 'f'
           rml

ALGORITHM
1. Search for letters that are greater than target using binary
    - Initialize left to 0
    - Initialize right to length - 1
    - Initialize result to first letter of letters
    - Loop through array (while left <= right)
        - Initialize mid to left + right / 2 (floor)
        - If mid > target
            - Reassign result to mid
            - Reassign left to mid + 1
        - Otherwise
            - Reassign right to mid - 1
2. Return the smallest letter
3. If none are smaller, return the first letter
*/

function findNextLetter(letters, target) {
  let left = 0;
  let right = letters.length - 1;
  let result = letters[0];

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let currentLetter = letters[mid];

    if (currentLetter > target) {
      result = currentLetter;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return result;
}

console.log(findNextLetter(['b', 'd', 'f'], 'a') === 'b');
console.log(findNextLetter(['b', 'd', 'f'], 'c') === 'd');
console.log(findNextLetter(['b', 'd', 'f'], 'f') === 'b');
console.log(findNextLetter(['a', 'a', 'b', 'c'], 'a') === 'b');
console.log(findNextLetter(['c', 'f', 'j'], 'c') === 'f');
console.log(findNextLetter(['a', 'c', 'f', 'h', 'i', 'j'], 'g') === 'h');
// // All test cases should log true.