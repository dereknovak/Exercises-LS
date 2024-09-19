/* 

ALGORITHM
1. Create an array of each digit in its 10s value
    - Convert number to a string
    - Convert to an array
    - Reverse the array
    - Initialize exponent to 0
    - Use map
        - Multiply num by 10^(exponent)
        - Return value converted to a string
2. Remove any 0s from the array
    - Use filter
        - Number version of number is greater than 0
3. Add each digit to returned string with '+'s
    - Reverse again
    - Rejoin using (' + ')
*/

function expandedForm(num) {
  return [...String(num)].reverse()
                         .map((digit, exponent) => String(digit * (10 ** exponent)))
                         .filter(num => Number(num) > 0)
                         .reverse()
                         .join(' + ');
}

console.log(expandedForm(12) === '10 + 2');
console.log(expandedForm(42) === '40 + 2');
console.log(expandedForm(70304) === '70000 + 300 + 4');