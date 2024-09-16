/* 

PROBLEM
I: A string of numbers
O: A number, representing the number of pairs that are in the string

RULES
- First number in string is the count of numbers
- The numbers are separated by a space
- Numbers can be multiple digits
- If no pairs are present, 0 should be returned

QUESTIONS
- Will numbers ever be negative?
    - Yes, it will be preceded by a '-'
- Will the first number ever be incorrect?
    - No, count on it being correct
- Could the string ever be empty?
    - Yes, return null

DATA STRUCTURE
- An array for each individual number
- An object to keep track of the count of pairs

ALGORITHM
1. If string is empty, return null
2. Create an array with all individual numbers
    - Match the numbers (plus neg) using regex
3. Remove the first number
    - Slice numbers starting from idx 1
4. Tally the numbers in array
    - Use tally method (HELPER)
5. Convert count to total pairings
    - Iterate through counts (for...in)
        - Divide each by 2, then round down
6. Return the number of pairings
    - Extract values from counts
    - Return sum of values

HELPERS
tally(array)
- Create a counts object
- Iterate through array
    - If number exists
        - Increment count
    - Otherwise
        - Create new property for number
- Return counts object
*/

function numberPairs(string) {
  if (string.length === 0) return null;

  const numbers = string.match(/-?\d+/g).slice(1);
  const counts = tally(numbers);

  for (let num in counts) {
    counts[num] = Math.floor(counts[num] / 2);
  }

  return Object.values(counts).reduce(sum);
}

function tally(numbers) {
  const counts = {};
  numbers.forEach(num => {
    if (counts[String(num)]) {
      counts[num] += 1;
    } else {
      counts[num] = 1;
    }
  });

  return counts;
}

const sum = (a, b) => a + b;

// TEST CASES

console.log(numberPairs("7 1 2 1 2 1 3 2") === 2);
console.log(numberPairs("9 10 20 20 10 10 30 50 10 20") === 3);
console.log(numberPairs("4 2 3 4 1") === 0);
console.log(numberPairs("7 1 -2 -1 -2 1 3 2") === 2);
console.log(numberPairs("7 10 2 10 2 1 3 2") === 2);
console.log(numberPairs("6 3 3 3 3 3 3") === 3);
