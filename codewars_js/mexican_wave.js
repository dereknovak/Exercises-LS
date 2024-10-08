/* 

11:19 // 11:41

PROBLEM
I: A string
O: An array of strings, with each string being a new position in the mexican wave

- Mexican wave
    - All letters are lowercase except one
        - That one moves positions to the right every time
    - Whitespace is skipped
        - 'a b' => ['A b', 'a B']
- Input can be empty, return an empty array
- Just letters and whitespace
- Could have leading/trailing whitespace

EXAMPLE
"hello"
['Hello', 'hEllo', 'heLlo', 'helLo', 'hellO']

DATA STRUCTURE
- An array for each instance of the mexican wave
    - Allows us to keep track of indexes to uppercase

'hel lo'
wave = [Hel lo, hEl lo, heL lo, hel Lo, hel lO]
[h e l ' ' l o]

APPLICATION
'hel lo'
wave = [Hel lo, hEl lo,... ];
'hel lo'
h
    [h e l ' ' l o]
    [H e l ' ' l o]
    Hel lo
e
    [h e l ' ' l o]
    [h E l ' ' l o]
    hEl lo


ALGORITHM
1. Initialize wave to []
2. Iterate through each letter and push the string with the letter at that index to wave
    - Lowercase string
    - Iterate through each character of string (with index)
        - If current character is a letter
            - Convert string to an array of characters (split)
            - Reassign the character at current index to the current letter uppercased
            - Rejoin array and push to wave
3. Return wave
*/

function mexicanWave(string) {
  const wave = [];
  string = string.toLowerCase();

  [...string].forEach((char, idx) => {
    if (/[a-z]/.test(char)) {
      const array = [...string];
      array[idx] = char.toUpperCase();
      
      wave.push(array.join(''));
    }
  });

  return wave;
}

// TEST CASES

console.log(mexicanWave('hello')); // ['Hello', 'hEllo', 'heLlo', 'helLo', 'hellO']
console.log(mexicanWave('HeLlo')); // ['Hello', 'hEllo', 'heLlo', 'helLo', 'hellO']
console.log(mexicanWave('launching')); // ['Launching', 'lAunching', 'laUnching', 'lauNching', 'launChing', 'launcHing', 'launchIng', 'launchiNg', 'launchinG']
console.log(mexicanWave('hel lo')); // ['Hel lo', 'hEl lo', 'heL lo', 'hel Lo', 'hel lO']
console.log(mexicanWave('  hello ')); // ['  Hello', '  hEllo ', '  heLlo ', '  helLo ', '  hellO ']
console.log(mexicanWave('')); // []

// ADDITIONAL TEST CASES

console.log(mexicanWave("codewars")); //  ["Codewars", "cOdewars", "coDewars", "codEwars", "codeWars", "codewArs", "codewaRs", "codewarS"] 
console.log(mexicanWave("two words")); //  ["Two words", "tWo words", "twO words", "two Words", "two wOrds", "two woRds", "two worDs", "two wordS"]
console.log(mexicanWave('gap')); // ['Gap', 'gAp', gaP']