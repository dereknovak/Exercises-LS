/* 

PROBLEM
I: A string of words, scrambled
O: A string of words, unscrambled

RULES
- Words will be separated by spaces
- Words may include special chars
    - These should remain in-place
- Punctuation is limitted to
    - -
    - '
    - ,
    - .
- All words will be lowercase
- If empty, should return empty
- There will never be more than 1 special character

EXAMPLE
"love like you'll never be hurt"
"love like ylo'ul neevr be hrut"

DATA STRUCTURE
- An array to organize the inner characters of a word

ALGORITHM
1. Return an empty string if input string is empty
    - Return the input string if empty
2. Create an array of words
    - Use split on the spaces
3. Transform words into appropriate format
    - Use decode helper
4. Rejoin and return words
    - Use join with spaces

HELPER
decode(word)
- Return word if its length is less than 4 characters
- Determine first character
    - Assign to firstChar
- Determine last character
    - Assign to lastChar
- Slice the characters from idx 1 through penultimate idx
    - Assign to innerChars
- Determine index of special char
    - Assign the char and its index to specialChar
- Convert innerChars to array and filter out the specialChar
- Sort innerChars alphabetically
- Insert specialChar at its original index
    - splice at specific index (use 0 to prevent removal)
- Rejoin innerChar
- Return first, inner, and last concatenated
*/

function scrambleWords(string) {
  if (string.length === 0) return string;
  return string.split(' ').map(encrypt).join(' ');
}

function encrypt(word) {
  if (word.length < 4) return word;

  const specialChar = [...word].find(char => /[^a-z]/i.test(char));
  const index = word.indexOf(specialChar);

  const letters = [...word].filter(char => /[a-z]/i.test(char));
  const firstLetter = letters[0];
  const lastLetter = letters[letters.length - 1];
  let innerLetters = letters.slice(1, letters.length - 1);

  const decodedChars = [firstLetter, ...(innerLetters.sort()), lastLetter];
  decodedChars.splice(index, 0, specialChar);

  return decodedChars.join('');
}


// TEST CASES

console.log(scrambleWords('professionals') === 'paefilnoorsss');
console.log(scrambleWords('card-carrying') === 'caac-dinrrryg');
console.log(scrambleWords('dbca') === 'dbca');
console.log(scrambleWords('-dbca') === '-dbca');
console.log(scrambleWords('card-carrying') === 'caac-dinrrryg');
console.log(scrambleWords("love like you'll never be hurt") ===
              "love like ylo'ul neevr be hrut");
console.log(scrambleWords("you've gotta dance like there's nobody watching, love like you'll never be hurt, sing like there's nobody listening, and live like it's heaven on earth.") ===
              "you've gotta dacne like teehr's nbdooy wachintg, love like ylo'ul neevr be hrut, sing like teehr's nbdooy leiinnstg, and live like it's haeevn on earth.");
console.log(scrambleWords('') === '');
