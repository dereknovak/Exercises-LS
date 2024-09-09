/* 

PROBLEM
I: A string
O: The input string with all digits converted to their English form

- lowercase word gets converted to digit
    - one => 1, two => 2, etc
- All other characters are left unchanged
- Numbers only go up to 9
- The word must start and end correctly, cannot be part of a greater word
    - onee, fourteen, etc
- Case insensitive

DATA STRUCTURE
- An array for all of the word versions of digits

ALGORITHM
1. Create an array of all of the words
    - englishNumbers
    - idx 0 => zero, idx 1 => one
2. Iterate through the englishNumbers
    - Create the appropriate regex
        - Use regex object with boundaries and g/i
    - Reassign string to have the corresponding words replaced
3. Return the transformed string
*/

function wordToDigit(string) {
  const englishNums = ['zero', 'one', 'two', 'three', 'four',
                       'five', 'six', 'seven', 'eight', 'nine'];
  englishNums.forEach((word, idx) => {
    let regex = new RegExp(`\\b${word}\\b`, 'ig');
    string = string.replace(regex, String(idx));
  });

  return string;
}

// TEST CASES

console.log(wordToDigit('Please call me at five five five one two three four. Thanks.') === 
                        "Please call me at 5 5 5 1 2 3 4. Thanks.");
console.log(wordToDigit('Please call me at FIVE FIVE FIVE oNe twO tHrEe foUr. Thanks.') === 
                        "Please call me at 5 5 5 1 2 3 4. Thanks.");
console.log(wordToDigit('Please call me at five-five/five(one)two>three<four. Thanks.') === 
                        "Please call me at 5-5/5(1)2>3<4. Thanks.");
console.log(wordToDigit('zero onee twol thre for highfive sixteen steven eigh ninetails') === 
                        "0 onee twol thre for highfive sixteen steven eigh ninetails");
console.log(wordToDigit('onetwo threefour fivesix') === 
                        "onetwo threefour fivesix");
console.log(wordToDigit('') === 
                        "");
console.log(wordToDigit('0 1 2 3 4 5 6 7 8 9') === 
                        "0 1 2 3 4 5 6 7 8 9");