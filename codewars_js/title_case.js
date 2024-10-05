/* 

11:08 // 11:38

PROBLEM
I: A string that should be converted into title case
I: A string of exception words, which should remain in lowercase
O: A string, converted to title case

Title Case Rules
- All words should be capitalized
- Words included in exception list should be lowercased
    - The exception to this is if the word is first in the string, which should always be capitalized

RULES
- All whitespace should remain the same
- May only have 1 string as an argument
    - No exception words
- If first is empty, return empty
- If second is empty, no exception words
- Whitespace will remain as simple spaces between words
- No special chars
- No numbers

EXAMPLE
('a clash of KINGS', 'a an the of')
A Clash of Kings

DATA STRUCTURE
- An array for all the words
    - Allows us to transform each word to appropriate form
- An array for all exception words
    - See if a word is included in it

'a clash of KINGS', 'a an the of'
exceptions = [a an the of]
words = [a clash of KINGS]
transformedWords = [a Clash of Kings]
transformedWords = [A Clash of Kings]
return A Clash of Kings

APPLICATION
'a clash of KINGS', 'a an the of'
exceptions = [a an the of]
words = [a clash of KINGS]
transformedWords = [A Clash of Kings]
A Clash of Kings

ALGORITHM
1. Validate input
    - If first string is empty, return ''
2. Capture a list of exception words
    - captureWords HELPER
3. Capture list of words
    - captureWords HELPER
4. Transform words based upon titleCase rules
    - Use map
        - If exception list includes word
            - Return word lowercased
        - Otherwise
            - Use capitalize HELPER
5. Capitalize first word in array
    - Use capitalize HELPER on first element
6. Rejoin and return transformed words
    - Join with ' ' and return

HELPERS
capitalize(word)
- Return word[0] uppercase + rest lowercased

captureWords(string)
- If undefined, return []
- Regex match for anything but whitespace or []
*/

function titleCase(string, exceptionString) {
  if (!string.length) return '';

  const exceptions = captureWords(exceptionString);
  const words = captureWords(string);

  const transformedWords = words.map(word => {
    if (exceptions.includes(word)) return word;
    return capitalize(word);
  });

  transformedWords[0] = capitalize(transformedWords[0]);

  return transformedWords.join(' ');
}

function captureWords(string) {
  if (!string) return [];
  return string.toLowerCase().match(/\S+/g);
}

const capitalize = word => word[0].toUpperCase() + word.toLowerCase().slice(1);

// TEST CASES

console.log(titleCase('a clash of KINGS', 'a an the of') === 'A Clash of Kings');
console.log(titleCase('launch school IS tHE bEST', 'is the') === 'Launch School is the Best');
console.log(titleCase('THE WIND IN THE WILLOWS', 'The In') === 'The Wind in the Willows');
console.log(titleCase('the quick brown fox') === 'The Quick Brown Fox');

console.log(titleCase('', 'a an the of') === '');
console.log(titleCase('a clash of KINGS', '') === 'A Clash Of Kings');
console.log(titleCase('a clash of KINGS') === 'A Clash Of Kings');