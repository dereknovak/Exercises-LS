/* 

PROBLEM
I: A string
O: An array with 2 elements
    - The repeated substring
    - The amount of times its repeated

- If there is no repeated substring, the entire string and 1 should be returned
- All characters will be lowercase letter

EXAMPLE

abcabc => ['abc', 2]
- a => does not repeat
- ab => does not repeat
- abc => repeats
- abca => does not repeat

DATA STRUCTURE
- An array for the characters
    - We can splice out and compare the characters

ALGORITHM
1. Find all of the repeating substrings in the string
    - Find all the leading substrings (HELPER)
    - Initialize repeatingSubstrings to []
    - Iterate through substrings
        - Initialize `count` to strings length / substring's length (floor)
        - Repeat the substring times `count`
        - Compare against string
            - If it matches
                - Push an array of itself and the repeat times to repeatingSubstrings
2. Return the largest one
    - Sort repeatingSubstrings by its repeating times (smallest to largest)
    - Return the first element
*/

function repeatedSubstrings(string) {
  const substrings = leadingSubstrings(string);
  const repeatingSubstrings = [];

  substrings.forEach(substring => {
    let count = Math.floor(string.length / substring.length);
    let newString = substring.repeat(count);
    if (string === newString) repeatingSubstrings.push([substring, count]);
  });

  const sorted = repeatingSubstrings.sort((a, b) => b[1] - a[1]);
  return sorted.length === 1 ? sorted[0] : sorted[sorted.length - 2];
}

function leadingSubstrings(string) {
  const result = [];
  for (let i = 1; i <= string.length; i++) {
    result.push(string.slice(0, i));
  }

  return result;
}

// TEST CASES

console.log(repeatedSubstrings('ababab')); // ['ab', 3]
console.log(repeatedSubstrings('abcde')); // ['abcde', 1]
console.log(repeatedSubstrings('abcabcab')); // ['abcabcab', 1]
console.log(repeatedSubstrings('abcabc')); // ['abc', 2]
console.log(repeatedSubstrings('aaaaaa')); // ['aaa', 2]

