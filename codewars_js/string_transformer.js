/*
Given a string, return a new string that has transformed based on the input:
Change case of every character, ie. lower case to upper case, upper case to lower case.
Reverse the order of words from the input.
Note: You will have to handle multiple spaces, and leading/trailing spaces

PROBLEM
I: A string with words and whitespace
O: A string, with letters transformed

RULES
- Transform all lowercase => uppercase
- Transform all uppercase => lowercase
- Reverse order of words
- There will be spaces, both leading/trailing/within

- Always just 1 arg, string
- The string cannot be empty
- No special chars
- Only spaces

EXAMPLE
' Hello World   '
leading = ' '
trailing = '   '
[Hello, World]

hELLO
wORLD
[hELLO wORLD]
[wORLD hELLO]

' hELLO wORLD   '

DATA STRUCTURE
- An array for the words

ALGORITHM
1. Capture leading/trailing whitespace amount
    - use regex to capture the whitespace
    - Assign the first element to leadingWhitespace
    - Assign the last element to trailingWhitespace
2. Capture all of the words into an array
    - use regex to capture all words
3. Transform the words to their appropriate case
    - Use map
        - Replace the uppercase=> lowercase/lowercase=>uppercase
            - Use replace method
            - Use a variable for 2nd arg
            - If the value is lowercase, return uppercase
                - otherwise, return lowercase
        - Return the new string
4. Reverse order of the words
    - Use reverse method
5. Rejoin the leading/trailing whitespace with words rejoined
    - Initialize a resultString
    - Iterate through whitespace and transformedWords
        - Push the whitespace and the word at currentIdx to resultString
    - Return the resultString
*/

function stringTransformer(string) {
  let whitespaceAndWords = string.match(/(\s+|[a-z]+)/ig);

  whitespaceAndWords = whitespaceAndWords.map(chars => {
    if (/[a-z]/i.test(chars)) {
      return chars.replace(/[a-z]/ig, word => word === word.toLowerCase() ? word.toUpperCase() : word.toLowerCase());
    } else {
      return chars;
    }
  });

  const reversedWords = whitespaceAndWords.filter(chars => /[a-z]/i.test(chars)).reverse();
  let count = 0;
  const result = whitespaceAndWords.map(chars => {
    if (/[a-z]/i.test(chars)) {
      let newWord = reversedWords[count];
      count += 1;
      return newWord;
    } else {
      return chars;
    }
  });

  return result.join('');
}

// TEST CASE

console.log(stringTransformer('Hello World') === 'wORLD hELLO');
console.log(stringTransformer(' Hello World   ') === ' wORLD hELLO   ');
console.log(stringTransformer('hElLo') === 'HeLlO');
console.log(stringTransformer('Hello World this is Launch School') === 'sCHOOL lAUNCH IS THIS wORLD hELLO');
