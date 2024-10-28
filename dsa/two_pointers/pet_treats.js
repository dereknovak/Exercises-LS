/* 

1:42 // 2:45 (headache + coffee anxiety)

PROBLEM
I: An array of numbers, representing appetite levels
I: An array of numbers, representing treat sizes
O: A number, representing the maximum number of satisfied pets

RULES
- For a pet to be satisfied, the treat must be >= to their appetite
- We need the maximum satisfaction
- Array sizes can be different

EXAMPLE
[3, 4, 2], [1, 2, 3]) === 2
appetites = [2, 3, 4]
treatSize = [1, 2, 3]

[1, 5], [5, 5, 6]) === 2
appetites = [1, 5]
treatSize = [5, 5, 6]

[4, 5, 6], [1,2,3]) === 0

DATA STRUCTURE
- Use both arrays
    - Sort the appetites in reverse (b-a)
    - Sort the treat size (a-b)

[3, 4, 2], [1, 2, 3]) === 2
appetites = [2, 3, 4]
treatSize = [1, 2, 3]

[4, 3, 2] // [1, 2, 3]
    a               r
satisfied = 0

[4, 3, 1] // [4, 4, 4]

[1, 5], [5, 5, 6]) === 2
[5, 5, 1] // [5, 5, 6]
    a      r
satisfied = 2
length - 1 - anchor

ALGORITHM
1. Sort appetites (b - a)
2. Sort treatSize (a - b)
3. Use a/r to determine total satisfied
    - Initialize anchor to 0
    - Initialize runner to 0
    - Initialize satisfied to 0
    - Use a while loop (while anchor is less than appetites size && runner >= 0 && runner < treatSizes length)
        - Initialize appetite to appetites at anchor
        - Initialize treatSize to treatSizes at runner
        - If treatSize is >= appetite
            - Increment satisfied by 1
            - Increment anchor by 1
            - Decrement runner by 1
        - Otherwise
            - Increment runner by 1
4. If runner reaches left end, add remaining appetites to satisfied
    - appetites length - anchor
5. Return satisfied

*/

function assignTreats(appetites, treatSizes) {
  appetites = appetites.sort((a, b) => b - a);
  treatSizes = treatSizes.sort((a, b) => a - b);

  let anchor = 0;
  let runner = 0;
  let satisfied = 0;

  while (anchor < appetites.length && runner >= 0) {
    let appetite = appetites[anchor];
    let treatSize = treatSizes[runner];

    // console.log(appetite, treatSize);

    if (treatSize >= appetite) {
      satisfied++;
      anchor++;
      runner--;
    } else {
      if (runner === treatSizes.length - 1) {
        anchor++
        continue;
      }
      runner++;
    }
  }

  if (runner < 0 && treatSizes.length >= appetites.length) {
    satisfied += appetites.length - anchor;
  }

  // console.log(satisfied);
  return satisfied;
}

console.log(assignTreats([3, 4, 2], [1, 2, 3]) === 2);
console.log(assignTreats([1, 5], [5, 5, 6]) === 2);
console.log(assignTreats([1, 2, 3], [3, 2]) === 2);
console.log(assignTreats([2], [1, 2, 1, 1]) === 1);
console.log(assignTreats([4, 3, 1], [2, 1, 3]) === 2);
console.log(assignTreats([1,2,3], [1,2,3]) === 3);
console.log(assignTreats([4, 5, 6], [1,2,3]) === 0);

// All test cases should log true.