/* 

PROBLEM
I: A string of words
O: A nested array with words written vertically

- There will be letters and spaces
- There will be special chars, treat same as letters
- Case matters
- Any missing letters should be a space " "

EXAMPLE
Holy bananas!
    - [Holy bananas!]
    - [4 8]
        - Max is 8
    [H, b]
    [o a

DATA STRUCTURE
- Use arrays
    - Find the longest word (sorting)
    - Use index to create result array

ALGORITHM
1. Capture all of the words, including nums/special chars
    - Use match for everything except whitespace
    - Assign to words
2. Determine the longest word length
    - Transform the words into their length and return the max
    - Assign to maxLength
3. Create a vertical representation of words
    - Initialize verticalWords to an empty array
    - Start a for loop using maxLength - 1
        - Initialize row to an empty array
        - Iterate through words
            - Using current index, push that letter to row
            - If that index is undefined, push ' '
        - Push row to verticalWords
4. Return the vertical array
*/

function verticalText(sentence) {
  const words = sentence.match(/\S+/g);
  const maxLength = Math.max(...words.map(word => word.length));

  const verticalWords = [];
  for (let i = 0; i < maxLength; i++) {
    const row = [];
    words.forEach(word => row.push(word[i] ? word[i] : ' '));
    verticalWords.push(row);
  }
  
  return verticalWords;
}

// TEST CASES

console.log(verticalText("Holy bananas"));
/*
[
  ["H", "b"],
  ["o", "a"],
  ["l", "n"],
  ["y", "a"],
  [" ", "n"],
  [" ", "a"],
  [" ", "s"]
]
*/

console.log(verticalText("Hello fellas"));
/*
[
  ["H", "f"],
  ["e", "e"],
  ["l", "l"],
  ["l", "l"],
  ["o", "a"],
  [" ", "s"]
]
*/

console.log(verticalText("Holy bananas!"));
/*
[
  ["H", "b"],
  ["o", "a"],
  ["l", "n"],
  ["y", "a"],
  [" ", "n"],
  [" ", "a"],
  [" ", "s"],
  [" ", "!"]
]
*/

console.log(verticalText("1234 56790!"));
/*
[
  ["1", "5"],
  ["2", "6"],
  ["3", "7"],
  ["4", "8"],
  [" ", "9"],
  [" ", "0"],
  [" ", "!"]
]
*/

console.log(verticalText("bananas! Holy"));
/*
[
  ["b", "H"],
  ["a", "o"],
  ["n", "l"],
  ["a", "y"],
  ["n", " "],
  ["a", " "],
  ["s", " "],
  ["!", " "]
*/