/*
Write a function that takes in a string and for each character, returns the distance to the nearest vowel in the string. If the character is a vowel itself, return 0.

PROBLEM
I: A string
O: An array of numbers, representing the distance to the nearest vowel

RULES
- Always a single arg, a string
- Only letters
- No empty string
- Always lowercase
- No whitespace
- Always at least one vowel

EXAMPLE
abcde
vowell distance = [0, 1... ]
a

ba => 1
bcde => 3

DATA STRUCTURE
- Navigate through input string to find vowels
    - Both forward and backwards

ALGORITHM
1. Initialize the vowelDistance array to empty
2. Find the distances of the vowels and push the result to vowelDistance
    - Use a forEach
        - Check backwards
            - Slice input string up to the that character (increment 2nd arg by 2)
                - Reverse the string
            - Use findVowel HELPER
                - Assign to backDistance
        - Check forwards
            - Slice input string from that character to the end
            - Use findVowel HELPER
                - Assign to forDistance
        - If backwards is less than forwards
            - Push backwards to vowelDistance
        - Otherwise
            - Push forwards to vowelDistance
3. Return the vowelDistance array

HELPER
findVowel(string)
- Iterate through the string until vowel is found
    - Return the index of the vowel
*/

function distanceFromVowel(string) {
  const vowelDistance = [];
  [...string].forEach((letter, idx) => {
    let backwards = string.slice(0, idx + 1).split('').reverse().join('');
    let forwards = string.slice(idx, string.length);

    const backDistance = findVowel(backwards);
    const forDistance = findVowel(forwards);

    vowelDistance.push(backDistance < forDistance ? backDistance : forDistance);
  });

  return vowelDistance;
}

function findVowel(string) {
  for (let i = 0; i < string.length; i++) {
    if (isVowel(string[i])) {
      return i;
    }
  }

  return Infinity;
}

const isVowel = char => /[aeiou]/.test(char);

// TEST

console.log(distanceFromVowel('abc')); // [0, 1, 2]
console.log(distanceFromVowel('abcde')); // [0, 1, 2, 1, 0]
console.log(distanceFromVowel('aeiou')); // [0, 0, 0, 0, 0]
console.log(distanceFromVowel('abceffdf')); // [0, 1, 1, 0, 1, 2, 3, 4]