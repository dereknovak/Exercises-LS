/* 

5:17 // 5:55

PROBLEM
I: An array of integers
O: A number, representing the number that would get the sum of all integers to the closest prime

- Prime?
    - A positive integer > 1 that is only divisble by itself and 1
- Find the MINIMUM number to get to the closest prime (sum)
- Always receive an array as an arg
- Could have string, convert to numbers
- Strings will always be numbers
- No floats, just integers
- Could have negative numbers
- If result is less than 1, get to 2
- Array could be empty, return 2

EXAMPLE
[3, 1, 2]
sum = 6
next prime = 7
Return => 1

DATA STRUCTURE
- An array
    - find the sum of all elements
    - Determine how far the sum is from the closest prime

[10, '1', 2, -5]
[10, 1, 2, -5]
sum = 8
loop (start at 8)
9 not prime
10 not prime
11 prime
nextPrime = 11
11 - 8 === 3 return

APPLICATION
[10, '1', 2, -5]
[10, 1, 2, -5]
sum = 8
8
9 
10
11 ***
11 - 8 = 3

ALGORITHM
1. Validate input
    - If array is empty, return 2
2. Convert all values to numbers
    - Use map
        - If value is a string, return Number value
        - Otherwise, return value
3. Find the sum of all numbers
    - Reduce numbers to sum (sum) HELPER
4. Starting at sum, find the next prime number
    - Use getNextPrime HELPER (nextPrime)
5. Return the different of nextPrime and sum
    - Return nextPrime - sum

HELPERS
getNextPrime(currentNum)
- Use a do loop 
    - Check if currentNum is Prime HELPER
        - If it is, return currentNum
    - Increment currentNum by 1

isPrime(num)
- Use a for loop (start at 2, while divisor <= floor(num / 2))
    - If num % divisor is equal to 0
        - return false
- Return true
*/

function minToPrime(numbers) {
  if (!numbers.length) return 2;

  const sum = numbers.map(num => typeof num === 'string' ? Number(num) : num).reduce(totalSum);
  const nextPrime = sum < 2 ? 2 : getNextPrime(sum);

  return nextPrime - sum;
}

function getNextPrime(currentNum) {
  do {
    if (isPrime(currentNum)) {
      return currentNum;
    }

    currentNum += 1;
  } while (true);
}

function isPrime(num) {
  for (let currentNum = 2; currentNum <= Math.floor(num / 2); currentNum++) {
    if (num % currentNum === 0) return false;
  }

  return true;
}

const totalSum = (a, b) => a + b;

// TEST CASES

console.log(minToPrime([3, 1, 2]) === 1);
console.log(minToPrime([2]) === 0);
console.log(minToPrime([3, '1', 2]) === 1);
console.log(minToPrime([10, '1', 2, -5]) === 3);
console.log(minToPrime([5, 11, 20]) === 1);
console.log(minToPrime([5, 2]) === 0);
console.log(minToPrime([-5, 2]) === 5);
console.log(minToPrime([]) === 2);

// ADDITIONAL TEST CASES

console.log(minToPrime([1, 1, 1]) === 0);
console.log(minToPrime([2,12,8,4,6]) === 5);
console.log(minToPrime([50,39,49,6,17,28]) === 2);