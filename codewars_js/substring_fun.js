/* 

PROBLEM
I: An array of strings
O: A string, built from the array of strings

RULES
- The new string should include the nth character of each strings, based upon its
index in the array
    - [yoda, best, has]
    - yoda => 0 => y
    - best => 1 => e
    - has => 2 => s
    - Returned string is 'yes'
- Case-sensitive
- If array is empty, return an empty string

QUESTIONS
- Do we deal with special characters in the same way?
    - Yes, this should form the string
    - Same with numbers
- What about empty strings?
    - Return `null`
- What if string isn't long enough?
    - Return `null`
- Will there ever be something other than strings?
    - Yes, a number. In this case, find the digit at that place
- Whitespace?
    - No whitespace in strings

DATA STRUCTURE
I: Array
- Will need to transform values in array to strings
- Order matters, so we will stick with arrays
O: String

ALGORITHM
1. Validate the input
    - If the input includes any empty strings or is empty
        - Return null
2. Transform all elements to strings (map)
    - If element is a number, convert to string
3. Pull out each character from appropriate element
    - Initialize result string
    - Loop through input array with index (for loop)
        - Assign character using array index to currentChar
        - If currentChar is undefined, return `null`
        - Concatenate string at array index position to result string
4. Return the created string
*/

function nthChar(arr) {
  if (arr.includes('') || arr.length === 0) return null;

  const strings = arr.map(element => {
    return typeof element === 'number' ? String(element) : element;
  });

  let result = '';
  for (let i = 0; i < strings.length; i++) {
    let currentChar = strings[i][i];
    if (currentChar === undefined) return null;
    result += currentChar;
  }

  return result;
}

// TEST CASES

console.log(nthChar(['yoda', 'best', 'has']) === 'yes');
console.log(nthChar(['yoda', 'bEst', 'has']) === 'yEs');
console.log(nthChar(['yoda', 'best', 'ha5']) === 'ye5');
console.log(nthChar(['@yoda', 'b-est', 'ha*s']) === '@-*');
console.log(nthChar([]) === null);
console.log(nthChar(['yes', 'boy', 'no']) === null);
console.log(nthChar(['', 'boy', 'sam']) === null);
console.log(nthChar(['023', 'boy', 'sam']) === '0om');
console.log(nthChar([25, 'boy', 'sam']) === '2om');
