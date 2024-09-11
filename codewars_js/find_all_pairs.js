/* 

PROBLEM
I: An array of integers
O: An integer, representing the total number of pairs

RULES
- A pair is a set of 2 of the same numbers
    - If there are more than 2, there can be more than 1 pair/number
        - six 3s => 3 pairs
- Max array length is 1000
- Values can be between 0 => 1000
- If array is empty or has 1 value, return 0

DATA STRUCTURE
- An array for the input
- An object for the counts

ALGORITHM
1. Count all of the numbers in array
    - Create a counts object
    - Iterate through numbers
        - If the number exists in count
            - Increment count by 1
        - Otherwise
            - Create a new property for number, assign to 1
2. Divide each count value by 2 to represent number of pairs
    - Iterate through the counts
        - Reassign each value to itself / 2
            - Round each value down to nearest integer
3. Return the sum of all pairs
    - Capture all count values and find sum
*/

function pairs(numbers) {
  const counts = {};
  numbers.forEach(num => {
    if (counts[num]) {
      counts[num] += 1;
    } else {
      counts[num] = 1;
    }
  });

  for (let prop in counts) {
    counts[prop] = Math.floor(counts[prop] / 2);
  }

  return Object.values(counts).reduce(sum, 0);
}

const sum = (a, b) => a + b;

// TEST CASES

console.log(pairs([1, 2, 5, 6, 5, 2]) === 2);
console.log(pairs([1, 2, 2, 20, 6, 20, 2, 6, 2]) === 4);
console.log(pairs([0, 0, 0, 0, 0, 0, 0]) === 3);
console.log(pairs([1000, 1000]) === 1);
console.log(pairs([]) === 0);
console.log(pairs([54]) === 0);