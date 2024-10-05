/* 

11:33/12:07

PROBLEM
I: An array of words
O: An array of words, filtered to those that are almost palindromes

- Almost Palidrome
    - Letters can be rearranged to make a palindrome
    - Case insensitive
    - 2 or more characters long
    - Can only be 1 or 0 odd counts
        - Rest are even
- If none, return empty array

EXAMPLE
ana
a => 2
n => 1

tacocat
t => 2
a => 2
c => 2
o => 1

aaa
a => 3

alla
a => 2
l => 2

DATA STRUCTURE
- An object to keep track of char counts
- An array to go through characters
    - Keep track of evens/odds

'coattac'
{c: 2, o: 1, a: 2, t: 2}
[2, 1, 2, 2]
[1]

'break'
{b: 1, r:1, e: 1, a: 1, k: 1}
[1, 1, 1, 1, 1]

ALGORITHM
1. If empty, return empty
2. Filter the strings that are almost palindromes
    - isALmostPalindrome HELPER
3. Return the filtered array

HELPERS
isAlmostPalindrome(string)
- Create a tally of all character counts
    - getTally HELPER (tally)
- Capture values of tally
- Filter values by odd numbers
    - isOdd HELPER
- Return if length of odd numbers is less than 2 and string length is greater than 1

getTally(string)
- Initialize tally to {}
- Iterate through string chars
    - If character is a key in tally
        - Increment count by 1
    - Otherwise
        - Create property
            - Key: char
            - Value: 1
- Return tally

isOdd(num)
*/

function findAlmostPalindromes(array) {
  if (!array.length) return [];
  return array.filter(isAlmostPalindrome);
}

function isAlmostPalindrome(string) {
  return Object.values(getTally(string)).filter(isOdd).length < 2 && string.length > 1;
}

function getTally(string) {
  const tally = {};
  [...string].forEach(char => {
    char = char.toLowerCase();

    if (tally[char]) {
      tally[char] += 1;
    } else {
      tally[char] = 1;
    }
  });

  return tally;
}

const isOdd = num => num % 2 === 1;

// TEST CASES

console.log(findAlmostPalindromes(['ana', 'break', 'see'])); // ['ana', 'see']
console.log(findAlmostPalindromes(['coattac', 'break', 'aaa'])); // ['coattac', 'aaa']
console.log(findAlmostPalindromes(['a', 'aa', 'aaa'])); // ['aa', 'aaa']
console.log(findAlmostPalindromes(['a', 'aa', 'aaa'])); // ['aa', 'aaa']
console.log(findAlmostPalindromes(['a', 'break', 'Derek'])); // []
console.log(findAlmostPalindromes(['Derek', 'Mom', 'Papa'])); // ['Mom', 'Papa']
console.log(findAlmostPalindromes([])); // []
