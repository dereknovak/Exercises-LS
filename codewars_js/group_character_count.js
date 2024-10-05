/* 

1:00 // 1:38

PROBLEM
I: A string
O: An object, with keys representing counts and value is an array of the characters with those counts

RULES
- Strings should be sorted alphabetically in each value
    1: ['a', 'b', 'c']
- Ignore spaces, special chars, and nums
    - Just count letters
- Object keys should be ordered descending
    - entries sort
- if string is empty, return empty object
- Case insenstive

EXAMPLE
"Mississippi"
[m: 1, i: 4, s: 4, p: 2]
{4: ['i', 's'], 2: ['p'], 1: ['m']} 

DATA STRUCTURE
- An object for the letter counts
    - Use to create an object for the groups of counts
- An array for the groups of letters
- Convert object to array to sort by the keys

'hi@#$ bi$@'
{h: 1, i: 2, b: 1}
{1: ['h', 'b'], 2: ['i']}
{1: ['b', 'h'], 2: ['i']}
{2: ['i'], 1: ['b', 'h']}

APPLICATION
'hi@#$ bi$@'
'hi@#$ bi$@'
['h', 'i', 'b', 'i']
{h: 1, i: 2, b: 1}
{1: ['b', 'h'], 2: ['i']}
[['1', ['b', 'h']], ['2', ['i']]]
[['2', ['i']], ['1', ['b', 'h']]]
{2: ['i'], 1: ['b', 'h']}

ALGORITHM
1. Downcase the string
2. Filter string to only letters
    - Regex match only the letters (letters) OR []
3. Validate input
    - If letters array is empty, return {}
4. Tally the letter counts
    - Use getTally HELPER (tally)
5. Group the counts together
    - Use groupTallies (groups)
6. Sort the letters alphabetically
    - Use for in loop
        - Sort each value alphabetically (authomatic)
7. Sort the keys from highest to lowest
    - Use sort keys HELPER
8. Return the fully sorted object

HELPER
getTally(array)
- Initialize tally to {}
- Iterate through array
    - If current letter is a property of tally
        - Increment count by 1
    - Otherwise
        - Create a property for the character in tally
            - Key: The letter
            - Value: 1
- Return tally

groupTallies(tally)
- Initialize groups to {}
- Iterate through tally (for in)
    - If the value is a property of groups
        - Push the letter (key) to the number's value in group
    - Otherwise
        - Create a property for the number in group
            - Key: The number
            - Value: [key]
- Return groups

sortKeys(groups)
- Convert groups to a nested array (entries)
- Sort the entries by the key, converted to a number (b - a)
- Rejoin entries as an object (fromEntries)
*/

function getCharCount(string) {
  string = string.toLowerCase();
  const letters = string.match(/[a-z0-9]/g) || [];

  if (!letters.length) return {};

  const tally = getTally(letters);
  const groups = groupTallies(tally);

  for (let count in groups) {
    groups[count].sort();
  }

  const sortedGroups = sortKeys(groups);
  return sortedGroups;
}

function sortKeys(groups) {
  const entries = Object.entries(groups).sort((a, b) => Number(b[0]) - Number(a[0]));
  return Object.fromEntries(entries);
}

function groupTallies(tally) {
  const groups = {};
  for (let letter in tally) {
    let count = tally[letter];

    if (groups[count]) {
      groups[count].push(letter);
    } else {
      groups[count] = [letter];
    }
  }

  return groups;
}

function getTally(letters) {
  const tally = {};
  letters.forEach(letter => {
    if (tally[letter]) {
      tally[letter] += 1;
    } else {
      tally[letter] = 1;
    }
  });

  return tally;
}

// TEST CASES (Unable to sort object)

console.log(getCharCount('cba')); // {1: ['a', 'b', 'c']}
console.log(getCharCount('Mississippi')); // {4: ['i', 's'], 2: ['p'], 1: ['m']} 
console.log(getCharCount('Launch School')); // {2: ['c', 'h', 'l', 'o'], 1: ['a', 'n', 's', 'u'}
console.log(getCharCount('hi@#$ bi$@')); // {2: ['i'], 1: ['b', 'h'}
console.log(getCharCount('')); // {}

// ADDITIONAL TEST CASES
console.log(getCharCount("Hello. Hello? HELLO!!")); // {6=>["l"], 3=>["e", "h", "o"]}
console.log(getCharCount("aaa...bb...c!")); // {3=>["a"], 2=>["b"], 1=>["c"]} 
console.log(getCharCount("aaabbbccc")); // {3=>["a", "b", "c"]}
console.log(getCharCount("abc123")); // 1=>["1", "2", "3", "a", "b", "c"]}

