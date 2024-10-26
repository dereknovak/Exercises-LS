/* 

11:40 // 11:43

PROBLEM
I: A string of words
O: A string of words, with all characters of words reversed

RULES
- Spaces should be preserved
- Word order should be preserved
- Case should be preserved

"JavaScript is fun"
[JavaScript is fun]

tpircSavaJ si nuf

DATA STRUCTURE
- Two pointers (start/end)

t p i r c S a v a J
        s e

ALGORITHM
1. Split string into words (words)
2. Transform each string into its reversed form
    - Use map
        - Use reverseWord HELPER
3. Rejoin and return words

HELPERS
reverseWord(word)
- Convert word to an array of chars
- Initialize end to word length - 1
- Use a for loop (start = 0, while start < end
    - Swap start and end
    - Decrement end by 1
- Rejoin and return word
*/

function reverseWords(string) {
  return string.split(' ').map(reverseWord).join(' ');
}

function reverseWord(word) {
  word = word.split('');
  let end = word.length - 1;

  for (let start = 0; start < end; start++) {
    [word[start], word[end]] = [word[end], word[start]];
    end--;
  }

  return word.join('');
}

console.log(reverseWords("Hello World") === "olleH dlroW");
console.log(reverseWords("JavaScript is fun") === "tpircSavaJ si nuf");
console.log(reverseWords("Coding in the sun") === "gnidoC ni eht nus");
console.log(reverseWords("Launch School") === "hcnuaL loohcS");