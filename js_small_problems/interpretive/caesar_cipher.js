/* 

9:38 / 10:27

PROBLEM
I: A string
I: A number, representing the cipher shift
O: A string, representing the encrypted string

RULES
- The input number indicates how far to shift letters to the right of alphabet
    - Other chars are left alone
    - If it reaches the end, shift back to beginning
    - Case should remain the same as current position
- If 0, letter stays

EXAMPLE
'The quick brown fox jumps over the lazy dog!' / 5
'Ymj vz...!'

abcdefghijklmnopqrstuvwxyz / 5
a 0 => 5 f
v 21 => 26


DATA STRUCTURE
- An array for the letters
    - Keep track of index/order
- An object to track the encryption
    - a: f

APPLICATION
'The q'
{ }

ALGORITHM
1. If string is empty, return ''
2. If number is 0, return string
3. Initialize a string with all alphabetic characters
    - alphabet = 'abc....' (outside of function)
4. Create an object with appropriate encryption key
    - Initialize encryptionKey to HELPER
5. Replace characters of string using encryption object
    - Split string into its chars
    - Iterate through chars (map)
        - If char a letter
            - Initialize new char to position in encryptionKey (lowercased)
            - If char is uppercase, reassign newChar to uppercase
            - Return the newChar
        - Otherwise
            - Return the char
6. Return the string

HELPERS
createEncryptionKey(key)
- Initialize result to an empty obj
- Iterate through alpha
    - Initialize newPosition to index + key
    - If newPosition > 25, reassign to newPosition - 26
    - Create property for result
        - key: char
        - val: alphabet at newPosition
- Return result
*/

const ALPHA = 'abcdefghijklmnopqrstuvwxyz';

function caesarEncrypt(string, key) {
  if (!string.length) return '';
  if (!key) return string;

  const encryptionKey = createEncryptionKey(key);
  const encryptedString = [...string].map(char => {
    if (/[a-z]/i.test(char)) {
      let newChar = encryptionKey[char.toLowerCase()];
      if (char === char.toUpperCase()) newChar = newChar.toUpperCase();
      return newChar;
    } else {
      return char;
    }
  }).join('');


  return encryptedString;
}

function createEncryptionKey(key) {
  const result = {};
  [...ALPHA].forEach((letter, idx) => {
    let newPosition = idx + key;
    if (newPosition > 25) newPosition -= 26;
    result[letter] = ALPHA[newPosition];
  });

  return result;
}

// TEST CASES

console.log(caesarEncrypt('The quick brown fox jumps over the lazy dog!', 5) === "Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!");
console.log(caesarEncrypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 25) === "ZABCDEFGHIJKLMNOPQRSTUVWXY");
console.log(caesarEncrypt('There are, as you can see, many punctuations. Right?; Wrong?', 2) === "Vjgtg ctg, cu aqw ecp ugg, ocpa rwpevwcvkqpu. Tkijv?; Ytqpi?");
console.log(caesarEncrypt('ABCD9&GHIJKLMNOPQRSTUVWXYZ', 25) === "ZABC9&FGHIJKLMNOPQRSTUVWXY");
console.log(caesarEncrypt('', 25) === "");
console.log(caesarEncrypt('GHIJKLMNOPQRSTUVWXYZ', 0) === "GHIJKLMNOPQRSTUVWXYZ");
