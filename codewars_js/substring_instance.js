/* 

PROBLEM
I: A string
I: A substring to search for inside of string
O: An integer, representing the number of times the substring appears

RULES
- Search for substring within the string and return the count
- There may be special chars
- If string is empty, return 0;


QUESTIONS
- If a substring has been found, can part of it be used for another?
    - ie: bbb
        - search for bb returns 2
- What if search string is ''?
- Will the substring ever contain special chars?
- Will text always be lowercase?

DATA STRUCTURE
- An array for all of the matches

ALGORITHM
1. Return 0 if substring or string is empty
2. Find all character matches
    - Create a RegExp object based upon substring
    - Use regex to match against the string
        - Assign to matches variable
3. Return the count of matches
    - Find length of matches
*/

function substringCount(string, substring) {
  if (!(string.length) || !(substring.length)) return 0;

  const regex = new RegExp(substring, 'g');
  return (string.match(regex) || []).length;
}

// TEST CASES

console.log(substringCount('abcdeb', 'b') === 2);
console.log(substringCount('abcdeb', 'a') === 1);
console.log(substringCount('abbc', 'bb') === 1);
console.log(substringCount('abBc', 'bb') === 0);
console.log(substringCount('abbBbc', 'bB') === 1);
console.log(substringCount('alsdkjf', '') === 0);
console.log(substringCount('ab/cd/ef/ab', 'ab') === 2);
console.log(substringCount('   aabbcc', 'c') === 2);
console.log(substringCount('', 'ab') === 0);
console.log(substringCount('AABBCC', 'aa') === 0);
console.log(substringCount('AABBCC', 'AA') === 1);

