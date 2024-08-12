function shift(arr) {
  let firstElement = arr[0];
  if (arr.length === 0) return undefined;
  
  for (let index = 0; index < arr.length; index++) {
    arr[index] = arr[index + 1];
  }

  arr.length = arr.length - 1;
  return firstElement;
}

function unshift(arr, ...args) {
  let length = arr.length + args.length;
  let index = 0;
  let arrCopy = arr.slice();

  for (let i = 0; i <= args.length - 1; i++) {
    arr[index] = args[i];
    index++;
  }

  for (let i = 0; i <= arrCopy.length - 1; i++) {
    arr[index] = arrCopy[i];
    index++;
  }

  return length
}

console.log(shift([1, 2, 3]));                // 1
console.log(shift([]));                       // undefined
console.log(shift([[1, 2, 3], 4, 5]));        // [1, 2, 3]

console.log(unshift([1, 2, 3], 5, 6));        // 5
console.log(unshift([1, 2, 3]));              // 3
console.log(unshift([4, 5], [1, 2, 3]));      // 3

const testArray = [1, 2, 3];
console.log(shift(testArray));                // 1
console.log(testArray);                       // [2, 3]
console.log(unshift(testArray, 5));           // 3
console.log(testArray);                       // [5, 2, 3]