/* 

PROBLEM
I: A string of characters
O: An object (see rules below)

- Input can be:
    - A string (chars)
    - An empty string
    - null
    - undefined
- Ouput will always be an object
    - If valid input:
        - The first char that has recurred (key)
        - The first occurrence and the second
            - 2 nums in an array
    - If not valid
        - An empty object
- We need the first set that finishes the cycle entirely first

EXAMPLE
"DXTDXTXDTXD"
D x4
    - [0, 3]
X x4
T x3

"AREDCBSDERD"
E x2
    - [2, 8]
D x3
    - [3, 7]

DATA STRUCTURE
- Just use the string with a for loop
    - Allows us to exit early

ALGORITHM
1. Validate the input
    - If input is falsy or empty
        - Return an empty object
2. Create an object to keep track of the indexes of each letter
    - Use indexTally HELPER
3. Filter the object to only have multiple indexes
    - 2nd element length should be greater than 1
4. If the filtered array is empty, return an empty object
5. Sort the array by its 2nd index
    - a[1][1] - b[1][1]
6. Return an object with the first element of array, capturing the first 2 indexes
    - Key => array[0]
    - Value => array[1] slice first 2 elements

HELPER
indexTally(string)
- Initialize tally to an empty object
- Iterate through the string's chars (forEach, with index)
    - If the key exists
        - Push the index to the value's array
    - Otherwise
        - Create a property
            - Key => char
            - Value => [index]
- Return tally, converted to an array
    - Object entries
*/

function recurIndex(string) {
  if (!string) return {};

  const indexes = indexTally(string).filter(charSet => charSet[1].length > 1);
  indexes.sort((a, b) => a[1][1] - b[1][1]);
  
  return indexes.length > 1 ? { [indexes[0][0]]: indexes[0][1].slice(0, 2) } : {};
}

function indexTally(string) {
  const tally = {};
  [...string].forEach((char, index) => {
    if (tally[char]) {
      tally[char].push(index);
    } else {
      tally[char] = [index]
    }
  });

  return Object.entries(tally);
}

// TEST CASES

console.log(recurIndex("DXTDXTXDTXD")); // {"D": [0, 3]}
console.log(recurIndex("YXZXYTUVXWV")); // {"X": [1, 3]}
console.log(recurIndex("YZTTZMNERXE")); // {"T": [2, 3]}
console.log(recurIndex("AREDCBSDERD")); // {"D": [3, 7]}
console.log(recurIndex("AECBSDR")); // {}
console.log(recurIndex("")); // {}
console.log(recurIndex(null)); // {}