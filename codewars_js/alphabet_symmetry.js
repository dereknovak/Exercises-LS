/* 

PROBLEM
I: An array of strings
O: An array of integers, rep the number of symmetrical characters

RULES
- To be symmetrical
    - The character's position in string has to match its position in the alphabet
        - 'abode'
        - 'abcde'
            - 4 match the position
- Input will have upper/lower letters
    - Treat upper/lower the same
- No special chars or whitespace

QUESTIONS
- Should returned array be the same array?
    - No, new array
- What if the string is longer than 26 chars?
    - Just analyze the first 26 chars

DATA STRUCTURE
- An array for the alphabet

ALGORITHM
1. Initialize a string with the alphabet
    - Should be all lowercase
2. Transform input array to counts of all of the symmetrical letters
    - Iterate through array
        - Initialize count to 0
        - Loop through lowercased string
            - Compare that the index of string matches index of alphabet
                - If they match, increment count by 1
        - Return the count
3. Return the transformed array
*/

function symmetricalCount(arr) {
  const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';

  return arr.map(string => {
    let count = 0;
    for (let i = 0; i < string.length; i++) {
      if (string.toLowerCase()[i] === ALPHABET[i]) count += 1;
    }

    return count;
  });
}

// TEST CASES

console.log(symmetricalCount(["abode","ABc","xyzD"])); // [4, 3, 1];
console.log(symmetricalCount(["","abcdefghijklmnopqrstuvwxyz","ABCDEFGHIJKLMNOPQRSTUVWXYZ"])); // [0, 26, 26];
console.log(symmetricalCount(["abcdefghijklmnopqrstuvwxyzab","aabbcc"])); // [26, 1];
console.log(symmetricalCount([])); // []
