/* 

PROBLEM
I: An array, possibly nested
O: A number, representing how deep the array is

- Depth rules
    - No nesting => 1
        - 1 nesting => 2
            - 2 nesting => 3
                ...
- If empty, the depth is 1

EXAMPLE
[1, [2, [3, [4]]]]) === 4
flatCount = 3
[1, 2, [3, [4]]]
[1, 2, 3, [4]]
[1, 2, 3, 4]
[1, 2, 3, 4]

[[[1]], [2, [3, [4]]]]
[[[]][[[]]]]
1 2 3 2 1 2 3 4 3 2 1

DATA STRUCTURE
- Use arrays
    - Use flat and compare lengths

ALGORITHM
1. Convert array to a string
    - JSON stringify
2. Find the max depth of brackets
    - Initialize maxDepth to 0
    - Initialize currentDepth to 0
    - Iterate through each character of string
        - If [
            - Increment currentDepth by 1
        - If ]
            - Decrement currentDepth by 1
        - If currentDepth > maxDepth
            - reassign maxDepth to currentDepth
3. Return the maxDepth
*/

function depth(arr) {
  let maxDepth = 0;
  let currentDepth = 0;
  [...JSON.stringify(arr)].forEach(char => {
    if (char === '[') currentDepth += 1;
    if (char === ']') currentDepth -= 1;

    if (currentDepth > maxDepth) maxDepth = currentDepth;
  });

  return maxDepth;
}

// TEST CASES

console.log(depth([1, 2, 3, 4]) === 1);

console.log(depth([1, [2, 3, 4]]) === 2);

console.log(depth([1, [2, [3, 4]]]) === 3);

console.log(depth([1, [2, [3, [4, 5]]]]) === 4);

console.log(depth([]) === 1);

console.log(depth([[[1]], [2, [3, [4]]]]) === 4);

console.log(depth([[[[]]]]) === 4);

console.log('Edabit Solutions');

console.log(depth([1, 2, 3, 4]) === 1);
console.log(depth([1, [2, 3, 4]]) === 2);
console.log(depth([1, [2, [3, 4]]]) === 3);
console.log(depth([1, [2, [3, [4]]]]) === 4);
console.log(depth([1, [2, [3, [4]]], 4]) === 4);
console.log(depth([1, [2], 3, [4], 5, [6]]) === 2);
console.log(depth([1, 2, 3, 4, [[5]], [6], 7]) === 3);