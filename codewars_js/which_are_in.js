/* 

10:09 // 10:46

PROBLEM
I: An array of substrings
I: An array of strings
O: The first array, filtered with the strings that are substrings within the second array, sorted

- Substrings
    - A string from the first input should exist within any of the strings from the second input
    - The string should be in consecutive order
    - Case insensitive
- Will always receive 2 array args
- Both arrays can be empty
    - 1st empty, return empty
    - 2nd empty, return empty
- Will always have strings
- An empty string is a substring to any string ***
- Case insenstive
    - bar => Barton
- Could be special chars
    - Ignore them
        - can't => cantebury 
- Cannot mutate args
- Order return alphabetically

EXAMPLE
["arp", "live", "strong"] // ["lively", "alive", "harp", "sharp", "armstrong"]

DATA STRUCTURE
- Array to capture the substrings that are in the strings
- Array to capture all possible substrings
    - See if any match
- Use regex to match each substring
    - Filter the special chars out

["live", "can't", "strong"] // ["lively", "alive", "Cantebury", "sharp"]
filter = ["live", "can't"]
live
    - Lowercase and Remove special chars => live
        - Replace anything except letters with ''
    - Create a regex object /live/
    - Look for a match within 2nd array
        - Filter each string to only letters and lowercase
        - If a match exists, return true (some)

can't
    - cant
    - /cant/
strong
    - strong
    /strong/
    *FALSE*

APPLICATION
["live", "can't", "strong"] // ["lively", "alive", "Cantebury", "sharp"]
validSubstrings = []
substring = can't => cant
    regex = /cant/

ALGORITHM
1. Validate the input
    - If either arrays are empty, return an empty array
2. Filter the first array for only the strings that are substrings in second array
    - Use filter
        - getCleanString HELPER (substring)
        - Use findMatch HELPER
            - Return the boolean
3. Sort the filtered array
    - Sort()
4. Return the new array

HELPERS
cleanString(string)
- Lowercase the string
- Replace all non letters in string with ''
- Return the string

findMatch(substring, array)
- Create a regex object for substring
- Iterate through array (some)
    - getcleanString HELPER (cleanString)
    - Test cleanString for a match with substring
        - Return the boolean
*/

function sortedSubstrings(substrings, strings) {
  if (!substrings.length || !strings.length) return [];

  const validSubstrings = substrings.filter(substring => {
    substring = getCleanString(substring);
    return findMatch(substring, strings);
  });

  return validSubstrings.sort();
}

function findMatch(substring, strings) {
  const regex = new RegExp(substring);
  return strings.some(string => {
    const cleanString = getCleanString(string);
    return regex.test(cleanString);
  });
}

function getCleanString(string) {
  return string.toLowerCase().replace(/[^a-z]/g, '');
}

// TEST CASES

// happy path
console.log(sortedSubstrings(["live", "arp", "strong"], ["lively", "alive", "harp", "sharp", "armstrong"]));
// ['arp', 'live', 'strong']

// case
console.log(sortedSubstrings(["live", "arp", "strong"], ["Lively", "sharP", "armstrong"]));
// ['arp', 'live', 'strong']

// missing match
console.log(sortedSubstrings(["live", "arp", "strong"], ["lively", "alive", "harp", "sharp"]));
// ['arp', 'live']

// special chars
console.log(sortedSubstrings(["live", "can't", "strong"], ["lively", "alive", "Cantebury", "sharp"]));
// ["can't", "live"]
console.log(sortedSubstrings(["live", "int", "strong"], ["lively", "alive", "ain't", "sharp"]));
// ["int", "live"]

// Empties
console.log(sortedSubstrings([], ["lively", "alive", "harp", "sharp"]));
// []
console.log(sortedSubstrings(["live", "arp", "strong"], []));
// []