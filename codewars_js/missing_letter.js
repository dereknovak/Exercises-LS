/* 

10:08 // 10:34

PROBLEM
I: An array of letters
O: A string, representing the letter that is missing from the set

- Array will have consecutive letters
- One letter will be missing
    - This is what will get returned
- Letters can be both lower and upper case
    - Return the respective one
- Letters will always be increasing
- Will always receive 1 array arg
- If array is empty, return null
- If just one element, return null
- Can mutate array
- Just string letters in array
- No sparse arrays
- Always just one missing letter
- Never a mix of upper/lower
- If none are missing, return null

EXAMPLE
['a','b','c','d','f'] -> 'e'
['O','Q','R','S'] -> 'P'

DATA STRUCTURE
- Use a string for the alphabet
    alpha = 'abcdefghijklmnopqrstuvwxyz'
    if first element is uppercase, convert alpha to uppercase

['O','Q','R','S'] (for loop)
alpha = 'abcdefghijklmnopqrstuvwxyz'
alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
startIdx = 14 => 15
    Return index 15 of alpha

if at end, all match, return null

APPLICATION
['O','Q','R','S']
alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
firstLetter= 'O'
alphaIdx = 15
arrayLetter = 'Q'
alphaIdx = 'P'


ALGORITHM
1. Validate the input
    - If array length is less than 2, return null
2. Change case of alpha depending on first element of array
    - Initialize alpha
    - Initialize firstLetter to the first element of array
    - If first element of letters is uppercase
        - reassign alpha to uppercase version
3. Find the starting index of alphabet
    - Find the index of the firstLetter within alpha (alphaIdx)
4. Determine which letter is missing from the array
    - Use findLetter HELPER
5. If none are missing, return null
    - Return null

HELPERS
findLetter(letters, alpha, alphaIdx)
- Use a for loop (i = 0, i < letters length)
    - Initialize arrayLetter to the element at current index
    - Initialize alphaLetter to the element at alphaIdx in alpha
    - If arrayLetter and alphaLetter do not match
        - Return alphaLetter
    - Increment alphaIdx by 1
*/

function missingLetter(letters) {
  if (letters.length < 2) return null;

  let alpha = 'abcdefghijklmnopqrstuvwxyz';
  let firstLetter = letters[0];

  if (/[A-Z]/.test(firstLetter)) alpha = alpha.toUpperCase();

  let alphaIdx = alpha.indexOf(firstLetter);
  return findLetter(letters, alpha, alphaIdx) || null;
}

function findLetter(letters, alpha, alphaIdx) {
  for (let i = 0; i < letters.length; i++) {
    let arrayLetter = letters[i];
    let alphaLetter = alpha[alphaIdx];

    if (arrayLetter !== alphaLetter) return alphaLetter;
    alphaIdx += 1;
  }
}

// TEST CASES

// // happy path
console.log(missingLetter(['a','b','c','d','f']) === 'e');
console.log(missingLetter(['O','Q','R','S']) === 'P');

// // short
console.log(missingLetter(['a', 'c']) === 'b');

// none missing
console.log(missingLetter(['a', 'b', 'c']) === null);

// Not enough elements
console.log(missingLetter([]) === null);
console.log(missingLetter(['b']) === null);

