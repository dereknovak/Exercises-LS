/* 

PROBLEM
I: A string with words and numbers
O: A string, reorganized based upon numbers

- Each word will contain a digit 1-9
    - This digit will correspond to the order in which the words should be returned
- Maintain case
- Returned string should not have digits included
- A string with no words should return an empty string
- There will be special chars, but don't have to worry about end punctuation
    - Last word will have closing punctuation

EXAMPLE
"is2 Thi1s T4est 3a"
This is a Test

'5Derek! n2ame, M1y S3ir, i4s'
[5Derek!, n2ame,, M1y, S3ir,, i4s]
5Derek!
    - 5
    - D e r e k !
    - Derek!
    [5 'Derek!']

[My name, Sir, is Derek!]

DATA STRUCTURE
- Nested array
    - [index - 1, word]

ALGORITHM
1. If string does not include words, return empty string
    - Test letters
    - If false, return ''
2. Separate the number from the word
    - Capture all words into an array
        - Use regex match for everything except whitespace
    - Transform each element to [idx, word]
        - Use map (assign to wordMapping)
        - Capture number in word
            - Use regex match for number
                - Assign Number verison of number - 1 to index
        - Capture all letters/special chars in word
            - Use regex match for everything except whitespace and numbers
                - Rejoin 
                - Assign to word
        - Return [index, word] 
3. Using num as index, recreate string in proper order
    - Sort wordMapping by the index
    - Transform each element to its word
        - Use map
        - Return the second element of current
4. Return the new string
    - Rejoin with a space
*/

function rearrange(string) {
  if (!/[a-z0-9]/i.test(string)) return '';

  const words = string.match(/[\S]+/g);
  const wordMapping = words.map(word => {
    const index = Number(word.match(/\d/g)[0]) - 1;
    const cleanWord = word.match(/[^\s\d]/g).join('');

    return [index, cleanWord];
  });

  return wordMapping.sort((a, b) => a[0] - b[0]).map(subArr => subArr[1]).join(' ');
}

// TEST CASES

console.log(rearrange("is2 Thi1s T4est 3a") === "This is a Test");

console.log(rearrange("4of Fo1r pe6ople g3ood th5e the2") === "For the good of the people");

console.log(rearrange(" ") === "");

console.log(rearrange('5Derek! n2ame, M1y S3ir, i4s') === 'My name, Sir, is Derek!');