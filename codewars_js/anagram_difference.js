/* 

10:27

PROBLEM
I: A string
I: Another string
O: A number, representing how many letter must be removed in order to make the words anagrams

- Anagram
    - 2 words that have the same letters, but in a different order
- Sum of letters removed from both words
- If a string is empty, remove all characters from other string
- Only lowercase letters

EXAMPLE
codewars
hackerrank
odws
hkrank
cear

DATA STRUCTURE
- An object to keep track of letter counts
    - Find absolute value of count differences
    - Sum those values to have the total that need to be subtracted
        - Use an array, then reduce

codewars   = {c: 1, o: 1, d: 1, e: 1, w: 1, a: 1, r: 1, s: 1}
hackerrank = {h: 1, a: 2, c: 1, k: 2, e: 1, r: 2, n: 1}
[1, 2], [0, 0], [1, 1], [1, 0], [1, 1], [0, 0], [0, 0], [0, 1], [0, 0], [0, 0]
[0, 1], [0, 0], [0, 0], [0, 0], [1, 0], [0, 0], [0, 0], [1, 2], [1, 0], [0, 0]
[0, 0], [0, 0], [1, 0], [0, 0], [0, 0], [0, 0]

1 0 0 1 0 0 0 1 0 0 1 0 0 0 1 0 0 1 1 0 0 0 1 0 0 0 8

ALGORITHM
1. Create a letter count for both the first and second string
2. Create a nested array of counts for each letter of alpha
    - Use getAlphaTally HELPER
3. Determine the sum of absolute values
    - Initialize sum to 0
    - Iterate through tally (for in)
        - Transform each value to the absolute value
        - Increment sum by that value
4. Return the sum

HELPERS
getAlphaTally(string1, string2)
- Initialize tally to []
- Initialize alpha to string alpha
- Iterate through alpha
    - Create a property for letter
    - Use count HELPER for both string1 and string2
        - Return array with both returns
- Return tally

count(letter, string)
- Initialize count to 0
- Iterate through string
    - If char matches letter
        - Increment count by 1
- Return count

*/

function anagramDifference(string1, string2) {
  const tally = getTally(string1, string2);
}

function getTally(string1, string2) {
  const tally = {};
  const ALPHA = 'abcdefghijklmnopqrstuvwxyz'
  ALPHA.split('')forEach(letter => {
    const count1 = count(string1);
    const count2 = count(string2);
    console.log(count1, count2);
    // tally[letter] = [count1, count2];
  });
}

function count(letter, string) {
  const total = 0;

  [...string].forEach(char => if (char === letter) total += 1);

  return total;
}

// TEST CASES

console.log(anagramDifference('codewars', 'hackerrank') === 10);
// console.log(anagramDifference('hackerrank', 'codewars') === 10);
// console.log(anagramDifference('abcde', 'edcba') === 0);
// console.log(anagramDifference('', 'edcba') === 5);
// console.log(anagramDifference('abcde', '') === 5);
// console.log(anagramDifference('', '') === 0);