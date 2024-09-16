/*

Write a function that takes an array of strings of arbitrary dimensionality ([], [][], [][][], etc.) and returns the sum of every separate number in each string in the array.

PROBLEM
I: A (possibly) nested array of strings
O: A number, representing the sum of all of the numbers

- Input array can have different kinds of dimensions
    - [], [[][]], [[[]....
- Each string will have any kinds of chars
    - Just want the numbers
- Willl always receive an array
- Will only contain strings
- Will always have just 1 arg
- Could be dealing with negatives

EXAMPLE
"1", "five", "2wenty", "thr33"
1 + 2 + 33 => 36

"1X2", "t3n"],["1024", "5", "64
1 + 2 + 3 + 1024 + 5 + 64 => 1099

[[["1"], "10v3"], ["738h"], [["s0"], ["1mu4ch3"],"-1s0"]], ['string']]

[1, 10, 3]
['1', '10v3', '738h', 's0', '1mu4ch3', '-1s0', '']
[1, [10, 3], 

DATA STRUCTURE
- Use the array to pull out numbers

ALGORITHM
1. If the array is empty, return 0
2. Convert array to a string
3. Pull out numbers from the string
    - Initialize an array for all the numbers
      - Find all of the numbers in the string
          - Use regex match for number and possibly a '-'
      - Iterate through matches
          - Push the number version of numbers to numbers array
4. Return the Sum of those numbers
    - Reduce to sum of all numbers, return value

  Notes:
  Numbers in strings can be negative, but will all be base-10 integers.
  Negative numbers may directly follow another number.
  The hyphen or minus character ("-") does not only occur in numbers.
  Arrays may be ragged or empty.

*/

function sum(array) {
  return (String(array).match(/-?\d+/g) || []).map(Number).reduce(sumNumbers, 0);
}

const sumNumbers = (a, b) => a + b;

// TEST CASES

console.log(sum(["1", "five", "2wenty", "thr33"]) === 36);
console.log(sum([["1X2", "t3n"],["1024", "5", "64"]]) === 1099);
console.log(sum([[["1"], "10v3"], ["738h"], [["s0"], ["1mu4ch3"],"-1s0"]]) === 759);
console.log(sum([]) === 0);
console.log(sum([['abd'], [['abc']]]) === 0);
console.log(sum([''], ['']) === 0);