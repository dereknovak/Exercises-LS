/* 

EXAMPLE:

[1, 2, 3, 4]
Halfway === (4 / 2)

[1, 2, 3, 4, 5]
Halfways === 5 / 2 ~ 2 

*/

function halvsies(arr) {
  const HALFWAY = Math.ceil(arr.length / 2);
  const arr1 = arr.slice();
  const arr2 = arr1.splice(HALFWAY);

  return [arr1, arr2];
}

console.log(halvsies([1, 2, 3, 4]));       // [[1, 2], [3, 4]]
console.log(halvsies([1, 5, 2, 4, 3]));    // [[1, 5, 2], [4, 3]]
console.log(halvsies([5]));                // [[5], []]
console.log(halvsies([]));                 // [[], []]