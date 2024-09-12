/* 

PROBELM
I: A string of integers
O: A number, rep the number of odd substrings that can be formed

RULES
- Odd substring:
    - A substring of the input string, no skips
    - When converted to a number, the number should be odd
- Includes multiples
    - 1321 has 2 '1's, so the result should account for both

QUESTIONS
- Will there ever be any non-digits? If so, how should we account for them?
    - No, just numbers

DATA STRUCTURE
- An array for all of the substrings

ALGORITHM
Guard: If string is empty, return 0
1. Find all of the substrings from the input
    - Extract to function (createSubstrings)
        - Assign to substrings
2. Transform substrings to their number form
    - Iterate thru substrings (map)
        - Return string parsed to number (parseInt)
    - Assign to numbers
3. Filter to include only odd numbers
    - Iterate thru numbers (filter)
        - Extract to function (isOdd)
4. Return the count of odd numbers

HELPERS
createSubstrings(string)
- Initialize an result array
- Iterate thru string using index (startIdx)
    - Iterate thru string using index again, but starting on 1 after the previous index (endIdx)
        - Push a slice of the string from the startIdx to endIdx to result array
- Return result array


isOdd(num)
- Return whether num % 2 is equal to 1
*/

function oddSubstrings(string) {
  return createSubstrings(string).map(Number).filter(isOdd).length;
}

function createSubstrings(string) {
  const result = [];
  for (let startIdx = 0; startIdx < string.length; startIdx++) {
    for (let endIdx = startIdx + 1; endIdx <= string.length; endIdx++) {
      result.push(string.slice(startIdx, endIdx));
    }
  }

  return result;
}

const isOdd = num => num % 2 === 1;

// TEST CASES

console.log(oddSubstrings('1341') === 7);
console.log(oddSubstrings('1357') === 10);
console.log(oddSubstrings('13471') === 12);
console.log(oddSubstrings('134721') === 13);
console.log(oddSubstrings('1347231') === 20);
console.log(oddSubstrings('13472315') === 28);
console.log(oddSubstrings('2468') === 0);
console.log(oddSubstrings('') === 0);



You are given two inputs:

An array of abbreviations.
An array of words.
Write a function that returns true if each abbreviation uniquely identifies a word, and false otherwise.