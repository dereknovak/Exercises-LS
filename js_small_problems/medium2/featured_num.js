/* 

3:50 // 4:19

PROBLEM
I: A number
O: A number, representing the next featured number from that number

- Featured number
    - Divisible by 7
    - Odd
    - Each digit in number only appears once
- If no next is possible (exceeds 9876543201), return
    - "There is no possible number that fulfills those requirements."
- Must be greater than the integer
    - Cannot be the same number
- Will always receive 1 number arg
- Could be any integer, neg - pos

EXAMPLE
1029 // 1043
passes

DATA STRUCTURE
- An array for the digits to ensure they're unique

110
111

APPLICATION
119
    [1, 1, 9]


ALGORITHM
1. Loop until a featured number is found
    - Initialize MAX_NUMBER to 9876543201
    - Use a for loop (start num is current num + 1, while num < MAX)
        - If isOdd AND multipleOfSeven AND uniqueDigits HELPERS
            - Return current number
2. Return error string if none are found

HELPERS
isOdd
- num % 2 is equal to 1 (abs)

multipleOfSeven
- num % 7 is equal to 0 (abs)

uniqueDigits
- Split number into an array of digits
- Determine is every digit is unique
    - Use every
        - indexOf current num in digits is equal to lastIndexOf current number in digits
*/

function featured(number) {
  const MAX_NUMBER = 9876543201;
  for (let num = number + 1; num <= MAX_NUMBER; num++) {
    if (isOdd(num) && multipleOfSeven(num) && uniqueDigits(num)) {
      return num;
    }
  }

  return "There is no possible number that fulfills those requirements.";
}

function uniqueDigits(num) {
  const digits = String(num).split('');
  return digits.every(digit => digits.indexOf(digit) === digits.lastIndexOf(digit));
}

const isOdd = num => Math.abs(num % 2) === 1;
const multipleOfSeven = num => Math.abs(num % 7) === 0;

// TEST CASES

// Happy Path
console.log(featured(48) === 49);
console.log(featured(96) === 105);

// Small nums
console.log(featured(-150) === -147);
console.log(featured(-2) === 7);

// Duplicate
console.log(featured(110) === 147);

// Even
console.log(featured(50) === 63);

// Same number
console.log(featured(49) === 63);

// Larger number
console.log(featured(14006) === 14035);
console.log(featured(9876543200) === 9876543201);

// Too large
console.log(featured(9876543210) === "There is no possible number that fulfills those requirements.");

// Additional Test Cases

console.log(featured(12) === 21);
console.log(featured(20) === 21);
console.log(featured(21) === 35);
console.log(featured(997) ===  1029);
console.log(featured(1029) === 1043);
console.log(featured(999999) === 1023547);
console.log(featured(999999987) === 1023456987);
console.log(featured(9876543186) === 9876543201);