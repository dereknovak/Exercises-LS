/* 

12:06 // 12:44

PROBLEM
I: A string, coded
O: The input string, decoded

RULES
- 2nd letter and last letter of each word switch
- 1st letter is replaced by char code
- Will always receive a string arg
- If empty string, return empty string
- Mix of upper/lower
- Could be trailing/leading
- Could have multiple spaces between words
- No numbers/special chars
- If just one character, just change charcode to string
- If 2, leave the 2nd char alone

EXAMPLE
72olle 103doo 100ya
Hello good day

DATA STRUCTURE
- An array for the words
    - Transform the words based upon the ruleset
    - Use transformed words to replace words in the given string
        - Use a regex object
- An array for the number and all letters of a word
    - Transform the number
    - Swap the 2nd and last char
    - Rejoin word

'  72olle  103doo 100ya '
words = [72olle, 103doo, 100ya]
transformedWords = [Hello, good, day]
72olle
    [72, o, l, l, e]
    [H, o, l, l, e]
    [H, e, l, l, o]
    Hello
103doo
    [103, d, o, o]
    [g, d, o, o]
    [g, o, o, d]
    good
words = [72olle, 103doo, 100ya]
'  Hello  good day '

APPLICATION
'65 116o'
words = [65, 116o]
decodedWords = [A to]
65
    - [65]
    - [A]
    - A
116o
    - [116, o]
    - [t, o]
    - to

'A to'

ALGORITHM
1. Validate the input
    - If the string is empty, return an empty string
2. Capture the words of string
    - Use regex for anything except whitespace (words)
3. Transform words to their appropriate form
    - Use map
        - Use decode HELPER (decodedWords)
4. Replace words in input string with appropriate form
    - Iterate through words (forEach with idx)
        - Create a regex object for current word (with boundaries)
        - Reassign the given string using the regex with decodedWords at idx
5. Return the transformed string
    - Return the string

HELPERS
decode(string)
- Capture the number and the letters
    - Use regex for a number (1 or more) a letter (chars)
- Convert the first char to number
- Convert the number to its string
    - String.fromCharCode
- If chars length is less than 3, rejoin and return chars
- Initialize lastChar to char at last position
- Reassign the last element of chars to the 2nd element
- Reassign the 2nd element of chars to lastChar
- Rejoin and return chars
*/

function decipherThis(string) {
  if (!string.length) return string;
  const words = string.match(/\S+/g);
  const decodedWords = words.map(decode);

  words.forEach((word, idx) => {
    const regex = new RegExp(`\\b${word}\\b`);
    string = string.replace(regex, decodedWords[idx]);
  });

  return string;
}

function decode(word) {
  const chars = word.match(/(\d+|[a-z])/ig);
  chars[0] = String.fromCharCode(Number(chars[0]));

  if (chars.length < 3) return chars.join('');

  const lastChar = chars[chars.length - 1];
  chars[chars.length - 1] = chars[1];
  chars[1] = lastChar;

  return chars.join('');
}

// TEST CASES

// Normal
console.log(decipherThis('72olle 103doo 100ya') === 'Hello good day');
// Weird spaces
console.log(decipherThis('  72olle  103doo 100ya ') === '  Hello  good day ');
// Empty string
console.log(decipherThis('') === '');
// 1 char and 2 char
console.log(decipherThis('65 116o') === 'A to');

// ADDITIONAL TEST CASES

console.log(decipherThis("65 119esi 111dl 111lw 108dvei 105n 97n 111ka") === "A wise old owl lived in an oak");
console.log(decipherThis("84eh 109ero 104e 115wa 116eh 108sse 104e 115eokp") === "The more he saw the less he spoke");
console.log(decipherThis("84eh 108sse 104e 115eokp 116eh 109ero 104e 104dare") === "The less he spoke the more he heard");
console.log(decipherThis("87yh 99na 119e 110to 97ll 98e 108eki 116tah 119esi 111dl 98dri") === "Why can we not all be like that wise old bird");
console.log(decipherThis("84kanh 121uo 80roti 102ro 97ll 121ruo 104ple") === "Thank you Piotr for all your help");