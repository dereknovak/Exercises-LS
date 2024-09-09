/* 

PROBLEM
I: An array contatining different kinds of elements
O: A *new array* rotated

RULES
- Do NOT modify the original array
- Move first element to the end of the array
- If there are no elements, return no elements
- If there is one element, the array should contain just that element
- Elements can be any kind of object/value

EXAMPLE
[7, 3, 5, 2, 9, 1] => [3, 5, 2, 9, 1, 7]

DATA STRUCTURE
- Input is an array
- Output is an array

ALGORITHM
1. Slice elements 1 => end as a new array
2. Append the first element of input array to end of new array
3. Return the new array
*/

function rotateArray(arr) {
  if (!(Array.isArray(arr))) return undefined;
  const newArr = arr.slice(1);
  if (newArr.length > 0) newArr.push(arr[0]);
  return newArr;
}

// TEST CASES

console.log(rotateArray([7, 3, 5, 2, 9, 1]));       // [3, 5, 2, 9, 1, 7]
console.log(rotateArray(['a', 'b', 'c']));          // ["b", "c", "a"]
console.log(rotateArray(['a']));                    // ["a"]
console.log(rotateArray([1, 'a', 3, 'c']));         // ["a", 3, "c", 1]
console.log(rotateArray([{ a: 2 }, [1, 2], 3]));    // [[1, 2], 3, { a: 2 }]
console.log(rotateArray([]));                       // []

// return `undefined` if the argument is not an array
console.log(rotateArray());                         // undefined
console.log(rotateArray(1));                        // undefined


// the input array is not mutated
const array = [1, 2, 3, 4];
rotateArray(array);                    // [2, 3, 4, 1]
console.log(array);                    // [1, 2, 3, 4]
