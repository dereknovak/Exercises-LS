/* 

11:52 12:21

PROBLEM
I: A number
O: A number, representing the maximum number possible by deleting 1 digit from input number

- Will always receieve number as an argument
- Can receive negative numbers
- Always integers
- If 1 digit, return null
- If leading zero, ignore the 0

EXAMPLE
152
52 ***
12
15

3253
253
353 ***
323
325

-152
-15
-12 ***
-52

1052
052
152 ***
102
105

DATA STRUCTURE
- Array
    - Allows us to sequentially remove a digit from number

-152
results = [-52, -12, -15]
['-', '1', '5', '2']
['-', '5', '2'] => -52
['-', '1', '2'] => -12
['-', '1', '5'] => -15

APPLICATION
-152
list = [-52, -12...]
'-152'
['-', '5', '2']
'-52' => -52
['-', '1', '2']
'-12' => -12


ALGORITHM
1. If number length is less than 2, return null
    - Convert num to a string
    - Pull out numbers using match (just for check)
        - If matches length is less than 2
            - Return null
2. Create a list of nums with 1 deleted digits
    - Use getListOfDeletedDigits HELPER (list)
3. Return the highest number from that list
    - Math.max for list (spread)

HELPERS
getListOfDeletedDigits(num)
- Initialize list to []
- Iterate through string num (forEach)
    - If char is a number
        - Create an array of characters
        - Delete the digit at current index
        - Rejoin, convert to number, push to list
- Return list
*/

function deleteDigitMax(number) {
  let stringifyNum = String(number);
  const matches = stringifyNum.match(/\d/g);
  if (matches.length < 2) return null;
  
  const list = getListOfDeletedDigits(stringifyNum);
  return Math.max(...list);
}

function getListOfDeletedDigits(string) {
  const list = [];
  [...string].forEach((char, idx) => {
    if (/\d/.test(char)) {
      const numberArr = [...string];
      numberArr.splice(idx, 1)
      list.push(Number(numberArr.join('')));
    }
  });

  return list;
}

// TEST CASES

console.log(deleteDigitMax(152) === 52);
console.log(deleteDigitMax(1052) === 152);
console.log(deleteDigitMax(3253) === 353);
console.log(deleteDigitMax(3253) === 353);
console.log(deleteDigitMax(-152) === -12);
console.log(deleteDigitMax(1) === null);
console.log(deleteDigitMax(-1) === null);

// ADDITIONAL TEST CASES

console.log(deleteDigitMax(1001) === 101);
console.log(deleteDigitMax(10) === 1);
