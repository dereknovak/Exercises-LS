/* 

PROBLEM
I: An array of numbers
O: A new array with numbers sorted by their English spelling

- Do not mutate the argument
- Only needs to work for 0-19

EXAMPLE
0, 1, 2, 3
zero, one, two, three
one, three, two, zero

HYPOTHESIS
- zero-nine should have their own spot
- ten-thirteen should have their own spot
- fourteen-nineteen can use root number + 'teen'

DS
An object to keep track of spellings
Input and outputs are arrays

ALGORITHM
alphabeticNumberSort
- Sort the spellings alphabetically
    - .sort
    - Transform numbers to their respective spellings
- Return the newly sorted array

toEnglish
- Define an array with numeric spellings
- If < 14
    - Return the value
- Otherwise
    - Return first digit value + 'teen'
*/

function alphabeticNumberSort(numbers) {
  return [...numbers].sort(englishSort);
}

function englishSort(num1, num2) {
  let [str1, str2] = [num1, num2].map(toEnglish);

  if (str1 > str2) {
    return 1;
  } else if (str1 < str2) {
    return -1;
  } else {
    return 0;
  }
}

function toEnglish(number) {
  const ENGLISH_NUMBERS = [
    'zero', 'one', 'two', 'three', 'four',
    'five', 'six', 'seven', 'eight', 'nine',
    'ten', 'eleven', 'twelve', 'thirteen'
  ];

  if (number < 14) {
    return ENGLISH_NUMBERS[number];
  } else if (number === 15) {
    return 'fifteen';
  } else if (number === 18) {
    return 'eighteen';
  } else {
    let firstDigit = number - 10;
    return ENGLISH_NUMBERS[firstDigit] + 'teen';
  }
}

console.log(alphabeticNumberSort([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]));
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]