/* 

PROBLEM
I: A string
O: All possible substrings

HYPOTHESIS
- After each iteration, lessen iteration count by 1
- Continue iterating while count is > 0
- For loop seems most ideal

EXAMPLE
abcde
a ab abc abcd abcde
b bc bcd bcde
c cd cde
d de
e

ALGORITHM
- Create all substrings
    - Iterate thru all of the characters
        - Declare a length number
        - Iterate length # of times
            - Push each result to result array
*/

function substrings(string) {
  const result = [];

  [...string].forEach((_, startIdx) => {
    for (let endIdx = startIdx + 1; endIdx <= string.length; endIdx++) {
      result.push(string.slice(startIdx, endIdx));
    }
  });

  return result;
}

function substrings(string) {
  return [...string].flatMap((_, startIdx) => {
    const substringGroup = [];
    for (let endIdx = startIdx + 1; endIdx <= string.length; endIdx++) {
      substringGroup.push(string.slice(startIdx, endIdx));
    }

    return substringGroup;
  });
}

console.log(substrings('abcde'));