function sortBy(a, b) {
  if (String(a) === String(b)) {
    if (typeof a === 'number' && typeof b === 'string') return -1;
    if (typeof a === 'string' && typeof b === 'number') return 1;
    return 0;
  }

  if (String(a) < String(b)) return -1;
  if (String(a) > String(b)) return 1;
  return 0;
}

function areArraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  
  let arr1Sorted = [...arr1].sort(sortBy);
  let arr2Sorted = [...arr2].sort(sortBy);

  for (let index = 0; index <= arr1.length - 1; index++) {
    if (arr1Sorted[index] !== arr2Sorted[index]) return false;
  }

  return true;
}

console.log(areArraysEqual([1, 2, 3], [1, 2, 3]) == true);
console.log(areArraysEqual([1, 2, 3], [3, 2, 1])) == true
console.log(areArraysEqual(['a', 'b', 'c'], ['b', 'c', 'a']) == true);
console.log(areArraysEqual(['1', 2, 3], [1, 2, 3]) == false);
console.log(areArraysEqual([1, 1, 2, 3], [3, 1, 2, 1]) == true);
console.log(areArraysEqual([1, 2, 3, 4], [1, 1, 2, 3]) == false);
console.log(areArraysEqual([1, 1, 2, 2], [4, 2, 3, 1]) == false);
console.log(areArraysEqual([1, 1, 2], [1, 2, 2]) == false);
console.log(areArraysEqual([1, 1, 1], [1, 1]) == false);
console.log(areArraysEqual([1, 1], [1, 1]) == true);
console.log(areArraysEqual([1, '1'], ['1', 1]) == true);
