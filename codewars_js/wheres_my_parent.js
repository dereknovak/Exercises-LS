/* 

9:54 // 10:34

PROBLEM
I: A string of lowercase and uppercase letters
O: A string of lowercase and uppercase letters, organized with capital letter first

RULES
- There will only be one of each uppercase letter
- There may be multiple of lowercase letters
- Should be grouped with 'parent' first, followed by children
    - aaAaa => Aaaa
- Will always receive a string arg
- Could be other chars other than letters
    - Ignore and only return letters
- If empty, return null
- If missing parent, return null ***
- Never multiple parents
- Return should be in alphabetical order

EXAMPLE
"AaaaaZazzz"
AaaaaaZzzz

DATA STRUCTURE
- An object to keep track of letter counts
    - Count the lowercase letters
    - An array of keys to sort the alphabet
    - Uppercase each letter before pushing letter count 
        - There can only be 1 parent

"b aa$AbcC%Bccb"
letters = [b a a A b c C B c c b]
childrenTally = {b: 3, a: 2, c: 3}
families = [b a c] => [a b c]
parent exist? see if letters includes capitalized family member
    - Return null if not (every)
'AaaBbbbCccc'

APPLICATION
"b aa$AbcC%Bccb"
letters = [b a a A b c C B c c b]
childrenTally = {b: 3, a: 2, c: 3}
families = [b, a, c] => [a, b, c]
orderedFamilies = 'AaaBbbbCccc'


ALGORITHM
1. Capture all of the letters from string
    - Regex for letters (upper/lower)
    - If none, empty array
2. Validate input
    - If letters is empty, return null
3. Create a tally of all of the lowercase letters in letters
    - Use getChildrenTally HELPER (childrenTally)
4. Capture the families of letters
    - Object keys (families)
5. Sort the family alphabetically
    - Use sort()
6. Validate input for present parents
    - Use isParentPresent HELPER
    - If true, return null
7. Create string based with parents before children
    - Use organizeFamilies HELPER
8. Return the string
    - Return organizeFamilies

HELPERS
getChildrenTally(letters)
- Initialize tally to {}
- Iterate through letters (forEach)
    - If current letter is a property of tally AND lowercase
        - Increment tally value by 1
    - If current letter is lowercase
        - Create a property for letter
            - Key: the letter
            - Value: 1
- Return tally

isParentMissing(families, letters)
- Use some
    - current letter uppercase is not included in letters

isLowerCase(letter)
- regex test for a lowercase letter

organizeFamilies(families, childrenTally)
- Initialize orderedFamilies to ''
- Iterate through families
    - Concatenate letter uppercased to orderedFamilies
    - Concatentate letter its childrenTally number of times (repeat) to orderedFamilies
*/

function findChildren(string) {
  const letters = string.match(/[a-z]/ig) || [];

  if (!letters.length) return null;
  
  const childrenTally = getChildrenTally(letters);
  const families = Object.keys(childrenTally).sort();
  
  if (isParentMissing(families, letters)) return null;

  return organizeFamilies(families, childrenTally);
}

function isParentMissing(families, letters) {
  return families.some(letter => !letters.includes(letter.toUpperCase()));
}

function organizeFamilies(families, childrenTally) {
  let orderedFamilies = '';

  families.forEach(letter => {
    orderedFamilies += letter.toUpperCase();
    orderedFamilies += letter.repeat(childrenTally[letter]);
  });

  return orderedFamilies;
}

function getChildrenTally(letters) {
  const tally = {};
  letters.forEach(letter => {
    if (tally[letter] && isLowerCase(letter)) {
      tally[letter] += 1;
    } else if (isLowerCase(letter)) {
      tally[letter] = 1;
    }
  });

  return tally;
}

const isLowerCase = letter => /[a-z]/.test(letter);

// TEST CASES

console.log(findChildren("AaaaaZazzz") === 'AaaaaaZzzz');
console.log(findChildren("baaAbcCBccb") === 'AaaBbbbCccc');
console.log(findChildren("b aa$AbcC%Bccb") === 'AaaBbbbCccc');
console.log(findChildren("a!a9Ab#bB bcC^cc") === 'AaaBbbbCccc');

console.log(findChildren("aaAbbbcCcc") === null);
console.log(findChildren("") === null);
console.log(findChildren("*^#*&$^93") === null);

// ADDITIONAL TEST CASES

console.log(findChildren("abBA") === "AaBb");
console.log(findChildren("CbcBcbaA") === "AaBbbCcc");
console.log(findChildren("xXfuUuuF") === "FfUuuuXx");
