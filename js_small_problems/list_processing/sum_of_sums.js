/* 

PROBLEM
I: An array of numbers
O: A number

1, 2, 3
(1) + (1 + 2) + (1 + 2 + 3)

EXAMPLE
3, 5, 2:
3 => 3
3, 5 => 8
3, 5, 2 => 10
3, 8, 10 => 21

1, 5, 7, 3:
1 => 1
1, 5 => 6
1, 5, 7 => 13
1, 5, 7, 3 => 16
1, 6, 13, 16 => 36

DS
- An array to house all the sums

ALGORITHM
sumOfSums(nums)
- Make all the groupings of sums
    - Declare a new sums array
    - Iterate thru nums
        - Slice beginning of nums to current num
        - Push slice to sums
- Transform each grouping to its sum
    - map + reduce
- Add all the sums together
    - reduce

*/

function sumOfSums(numbers) {
  const groups = [];
  numbers.forEach((_, i) => {
    groups.push(numbers.slice(0, i + 1));
  });

  const sums = groups.map(group => group.reduce((sum, num) => sum + num));
  return sums.reduce((sum, num) => sum + num);
}

console.log(sumOfSums([3, 5, 2]));  // 21
console.log(sumOfSums([1, 5, 7, 3]));  // 36
console.log(sumOfSums([4]));  // 4
console.log(sumOfSums([1, 2, 3, 4, 5]));  // 35