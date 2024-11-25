/* 

11:25 // 11:40
- Prematurely thought I solved at 11:35. Made a silly mistake by completely forgetting recursion
- Original solution had a recursive function within the main function. Realized before checking the provided solution that this seemed unneccessary. Fixed in 1 minute.
- Originally had a check for both 1 and 0, but realized after looking at solution that the 1 was unneccesarry as 0 always returns 1, which will not change the value.
- Further exploration only took me about 5 minutes
- Did not finish recursive definition, but that's ok.

PROBLEM
I: A number
I: A number, representing the power that the first should be raised to
O: A number, representing the exponential product of the inputs

RULES
- input1 ** input2 === output
- Use recursion

EXAMPLE
2 ** 3 === 8
5 ** 0 === 1
3 ** 4 === 81

DATA STRUCTURE
- N/A

Base Case:
- If exponent is 1, return num
Recursive Definition:
- A number is an exponential product when it is the product of a number times

root = 3, exponent = 4
3 ** 4
3 ** 2
3 ** 1 => 3

3 * num**(exponent - 1)

FURTHER EXPLORATION
3 ** -1 => 1/3
3 ** -2 => 1/9
3 ** -3 => 1/27

*/


function power(root, exp) {
  if (exp === 0) return 1;

  if (exp > 0)
    return root * power(root, exp - 1);
  else {
    return 1 / power(root, Math.abs(exp));
  }
}

// TEST CASES

// Positives
console.log(power(2, 3) === 8);
console.log(power(5, 0) === 1);
console.log(power(3, 4) === 81);
console.log(power(3, 1) === 3);

// Negatives (Further Exploration)
console.log(power(3, -1) === 1/3);
console.log(power(3, -2) === 1/9);
console.log(power(3, -3) === 1/27);

