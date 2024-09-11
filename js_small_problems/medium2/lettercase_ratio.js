/* 

PROBLEM
I: A string
O: An object, representing the lowercase/uppercase/neither ratios

- The percentage should be written as a string with 2 decimal places
- Anything that is not upper/lower is considered neither
    - Includes nums, special chars, and whitespace

EXAMPLE
abCdef 123
lower => abdef => 5/10
upper => C => 1/10
neither => 123 (space) => 4/10

DATA STRUCTURE
- Convert string to array and iterate through
- An object is returned

ALGORITHM
1. Initialize the returned object
    - { lowercase: 0, etc }
2. Count the number of character occurrences and place in object
    - Convert the string to an array
    - Iterate through the array (forEach)
        - If uppercase (test)
            - Increment uppercase by 1
        - If lowercase (test)
            - Increment lowercase by 1
        - Else
            - Increment neither by 1
3. Convert the character count to appropriate format
    - Iterate through properties (for...in)
    - Convert number to percentage
        - Divide by string length and * 100
    - Convert percentage to fixed decimal (toFixed)
4. Return the object
*/

function letterPercentages(string) {
  const charCounts = {
    lowercase: 0,
    uppercase: 0,
    neither: 0,
  };

  [...string].forEach(char => {
    if (/[a-z]/.test(char)) {
      charCounts.lowercase += 1;
    } else if (/[A-Z]/.test(char)) {
      charCounts.uppercase += 1;
    } else {
      charCounts.neither += 1;
    }
  });

  for (let prop in charCounts) {
    charCounts[prop] = ((charCounts[prop] / string.length) * 100).toFixed(2);
  }

  return charCounts;
}

// TEST CASES

console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }