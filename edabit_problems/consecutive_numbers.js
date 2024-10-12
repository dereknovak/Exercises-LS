// The function is given two parameters: an array of integers and the group’s length. Determine if it is possible to split all numbers from the array into groups of the specified length such that there are consecutive numbers in each group, return true / false.



/* 

11:08

PROBLEM
I: An array of integers
I: A number, representing the group's length

- Consecutive
    - Only increments by 1
    - Ascending
- Group lengths have to be divisible by the array length
    - False
- Once a number has been used, it cannot be used again
- Will always receive an array and an number
- Array can be empty, return false
- Number will be greater than 0
- No sparse arrays
- Cannot mutate array
- Array can have duplicate numbers
- Array will always just have integers

EXAMPLE
[1, 3, 5], 1
[1] [3] [5] 

[5, 6, 3, 4, 2], 2
[3, 4], [5, 6]
[2, 3], [4, 5], [6]

DATA STRUCTURE
- Use array so that we can sort it
- Have an array for each group
    - 

Skip if number is the same
[5, 6, 3, 4, 3, 4] // 2
[3, 3, 5]
[3, 4]
[3, 4]
[5, 6]

[5, 6, 3, 4, 3]
[3, 3, 5, 6]
[3, 4]
[3, 5]
return false

[3, 4, 5, 6, 7]
return false bc not divisible

[5, 6, 3, 4, 1, 2] // 3
[1, 2, 3, 4, 5, 6]
1,

APPLICATION
[5, 6, 3, 4, 3, 4]
[3, 3, 4, 4, 5, 6]
[3, 4

ALGORITHM
1. Validate the input
    - If array is empty, return false
    - If array length is not divisible by given number, return false
2. Create a copy of the given array
    - Slice from 0 (copyArr)
3. Sort the copyarray from small to big
    - sort(a - b)
4. Determine if there are any non-consecutive groups
    - Use anyNonConsecutiveGroups HELPER
5. Return true if all groups are consecutive

HELPERS
anyNonConsecutiveGroups(array, groupSize)
- Iterate through the array (for loop) (firstIdx = 0, i < array length)
    - Initialize currentNum to array at firstIdx
    - Use a for loop (count = 1, count <= groupSize - 1)
        - Intialize nextNum to array at firstIdx + count
        - Compare the values of currentNum and nextNum
            - If nextNum === currentNum
                - D
                - continue

            - If nextNum - currentNum = count
                - continue
            - Otherwise
                - Return false



*/

// TEST CASES

console.log(consecutiveNums([1, 3, 5], 1) === true);
console.log(consecutiveNums([5, 6, 3, 4], 2) === true);
console.log(consecutiveNums([5, 6, 3, 4, 1, 2], 3) === true);

console.log(consecutiveNums([5, 6, 3, 4, 3, 4], 2) === true);
console.log(consecutiveNums([5, 6, 3, 4, 3, 5], 2) === false);
console.log(consecutiveNums([55, 54, 31, 32, 98, 99], 2) === true);


console.log(consecutiveNums([5, 6, 3, 4, 3], 2) === false);
console.log(consecutiveNums([3, 4, 5, 6, 7], 2) === false);
console.log(consecutiveNums([], 2) === false);
