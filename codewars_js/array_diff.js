/* 

9:30 // 9:49

PROBLEM
I: An array of elements
I: Another array of elements
O: An array of element, representing the first array with all elements of the second array removed

- Using 2nd array, remove all of its elements from the first array
    - If there are duplicates, remove the duplicates
- Will always receive 2 array args
- Can mutate both arrays
- Array can contain all primitive values
- Will not contain objects of any kind
- No sparse arrays
- If first array is empty, return an empty array
- If second array is empty, return the first array

EXAMPLE
[1,2],[1] == [2]

[1,2,2], [1] == [2,2]

[1,2,2], [2]) == [1]

DATA STRUCTURE
- An array to capture all of the values in array1 that are included in array2
    - Check if element in array1 is included in array2

['a', null, undefined, null, 1, true] // [undefined, 1]
missingElements = ['a', null, null, true]

APPLICATION
['a', null, undefined, null, 1, true] // [undefined, 1]
missingElements = []

ALGORITHM
1. Validate the input
    - If array1 is empty, return first array
    - If array2 is empty, return the first array
2. Find the elements in array1 that are included in array2
    - Use filter
        - Check if current element is not included in array2
3. Return the list of elements
    - Return the filtered array

*/

function arrayDiff(array1, array2) {
  return array1.filter(element => !array2.includes(element));
}

// TEST CASES

console.log(arrayDiff([1, 2], [1])); // == [2]
console.log(arrayDiff([1, 2], [1, 1])); // == [2]
console.log(arrayDiff([1, 1, 2], [1])); // == [2]
console.log(arrayDiff([1, 1, 2], [3])); // == [1, 1, 2]
console.log(arrayDiff(['a', null, undefined, null, 1, true], [undefined, 1])); // == ['a', null, null, true]
console.log(arrayDiff([], [undefined, 1])); // == []
console.log(arrayDiff([1, 1, 2], [])); // == [1, 1, 2]

// ADDITIONAL TEST CASES

console.log(arrayDiff([1,2,2], [1])); // [2,2]
console.log(arrayDiff([1,2,2], [2])); // [1]
console.log(arrayDiff([1,2,2], [])); // [1,2,2]
console.log(arrayDiff([], [1,2])); // [] 