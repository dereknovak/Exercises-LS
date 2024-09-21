/* 

PROBLEM
I: An array of strings
O: An array of strings, with all matching vowel words

- Vowel rules:
    - Must contain ONLY the vowels included in the first string
    - Must contain all the vowels
    - Number of each vowel does not matter
        - More OR less of a certain vowel
    - Words will only be lowercase
    - There may be whitespace
        - Remove it
    - String can be empty
        - Just ignore that string

EXAMPLE
"toe", "ocelot", "maniac"
toe => o, e
    ocelot => o e o // same
    maniac => a i a // not same
[ toe, ocelot ]

"hoops", "chuff", "bot", "bottom"
hoops => o
    chuff => u X
    bot => o Y
    bottom => o Y
[hoops bot bottom]

"many", "carriage", "emit", "apricot", "animal"
many => a
    carriage a i e
    emit ei
    apriocot a i o
    animal a i
[many]

"many", "carriage", "emit", "apricot", "animal"
- a
- aie === a No
- ei === a No
- aio === a No
- ai === a No
[many]

DATA STRUCTURE
- Have array of all vowels
    - Use this to compare

ALGORITHM
1. Capture unique vowels for the first string in array
    - Use uniqueVowels on first string
2. Filter the strings that have the same unique vowels
    - Iterate through array of strings (filter)
        - Use uniqueVowels on current string
        - If firstVowels matches currentVowels
            - return current string
3. Return the list of strings

HELPER
uniqueVowels(string)
- Initialize result to an empty array
- Capture all of the vowels in string
    - Use regex match to vowels
- Iterate through all vowels
    - If result does not include the vowel
        - Push vowel to result
- Return result joined as a string
*/

function sameVowelGroup(strings) {
  const firstVowels = uniqueVowels(strings[0]);

  const sameVowels = strings.filter(string => {
    const currentVowels = uniqueVowels(string);
    if (firstVowels === currentVowels) return string;
  });

  return sameVowels;
}

function uniqueVowels(string) {
  const result = [];
  const vowels = string.match(/[aeiou]/g) || [];
  
  vowels.forEach(vowel => {
    if (!result.includes(vowel)) {
      result.push(vowel);
    }
  });

  return result.sort().join('');
}

console.log(sameVowelGroup(["toe", "ocelot", "maniac"])); // ["toe", "ocelot"]

console.log(sameVowelGroup(["many", "carriage", "emit", "apricot", "animal"])); // ["many"]

console.log(sameVowelGroup(["hoops", "chuff", "bot", "bottom"])); // ["hoops", "bot", "bottom"]

console.log(sameVowelGroup(["hoops", "", "bot", "bottom"])); // ["hoops", "bot", "bottom"]

console.log(sameVowelGroup([" hoops ", "", "b\not", "bot\ttom"])); // [" hoops ", "b\not", "bot\ttom"]

console.log(sameVowelGroup(["teo", "ocelot", "maniac"])); // ["teo", "ocelot"]