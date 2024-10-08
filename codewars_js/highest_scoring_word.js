/* 

10:12 // 10:41

PROBLEM
I: A string of words
O: A string, representing the highest scoring word in the string

- Highest scoring word
    - Each letter of alphabet is a point
        - a = 1
        - b = 2
        - etc...
- Will use a mix of upper/lowercase
- Special chars have 0 points
- Don't have to worry about numbers
- No punctuation
- If two words have same score, return the one earliest in string
- If empty, return null

EXAMPLE
'man i need a taxi up to ubud'
man 13 + 1 + 14 = 28
i 9 = 9
need 14 + 5 + 5 + 4 = 28
a 1 = 1
taxi 20 + 1 + 24 + 9 = 54
up 21 + 15 = 36
ubud 21 + 2 + 21 + 4 = 48

ALPHA = ' abcdefghijklmnopqrstuvwxyz'
          1        x         x          

DATA STRUCTURE
- Use a string for the alphabet
    - Index of letters will correspond to the points
    - Leave a space for 0
- An array for words
    - Transform the words to their points
    - Use that to return the word in its proper syntax

'man i need a taxi up to ubud'
ALPHA = ' abcdefghijklmnopqrstuvwxyz'
words = [man, i, need, a, taxi, up, to, ubud]
scores = [28, 9, 29, 1, 54, 36, 48]
max = 54
indexOf(54) => 4
word[4] => taxi

APPLICATION
ALPHA = ' abcdefghijklmnopqrstuvwxyz'
'man i need a taxi up to ubud'
words = [man, i, need, a, taxi, up, to, ubud]
total = 28
man
    - m 13
    - a 1
    - n 14
scores = [28, 9, 29, 1, 54, 36, 48]
maxScore = 54
maxIndex = 4
words[4] = taxi

ALGORITHM
1. Validate input
    - If string is empty, return null
2. Capture all the words of the string
    - Use regex for everything except whitespace
3. Transform the words into their score
    - Use getScore HELPER (scores)
4. Find the max score of scores
    - Use Math.max (maxScore)
5. Determine the index of max within words
    - Use indexOf maxScore within scores (maxIndex)
6. Return the word at the index
    - Find maxIndex within words

HELPERS
getScore(word)
- Lowercase word
- Initialize total to 0
- Iterate through each character of word (forEach)
    - Use indexOf current char in ALPHA
    - Increment total by this value
- Return total
*/

function highestScoringWord(string) {
  if (!string.length) return null;

  const words = string.match(/[^.?!, ]+/g);
  const scores = words.map(getScore);
  const maxScore = Math.max(...scores);
  const maxIndex = scores.indexOf(maxScore);

  return words[maxIndex];
}

function getScore(word) {
  const ALPHA = ' abcdefghijklmnopqrstuvwxyz';
  word = word.toLowerCase();
  let total = 0;

  [...word].forEach(char => {
    let value = ALPHA.indexOf(char);
    if (value === -1) value = 0;

    total += value;
  });

  return total;
}

// TEST CASES

console.log(highestScoringWord('man i need a taxi up to ubud') === 'taxi');
console.log(highestScoringWord('man i n$eed a tax"i up to ubud') === 'tax"i');
console.log(highestScoringWord('Man i need A Taxi up to ubud') === 'Taxi');
console.log(highestScoringWord('a b z d') === 'z');
console.log(highestScoringWord('ab ba aa') === 'ab');
console.log(highestScoringWord('') === null);

// ADDITIONAL TEST CASES
console.log(highestScoringWord('what time are we climbing up the volcano') === 'volcano');
console.log(highestScoringWord('take me to semynak') === 'semynak');
console.log(highestScoringWord('aaa b') === 'aaa');
