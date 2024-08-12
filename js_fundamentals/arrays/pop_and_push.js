function pop(arr) {
  if (arr.length === 0) return undefined;

  let lastElement = arr[arr.length - 1];
  arr.length -= 1;
  return lastElement;
}

function push(arr, ...args) {
  if (arr.length === 0 && args.length === 0) return 0;

  let argsCounter = 0;
  for (let index = arr.length; ; index++) {
    arr[index] = args[argsCounter];
    argsCounter += 1;
    
    if (argsCounter === args.length) break;
  }

  return arr.length;
}

const array1 = [1, 2, 3];
pop(array1);                        // 3
console.log(array1);                // [1, 2]
console.log(pop([]));                           // undefined
console.log(pop([1, 2, ['a', 'b', 'c']]));      // ["a", "b", "c"]

push
const array2 = [1, 2, 3];
push(array2, 4, 5, 6);              // 6
console.log(array2);                // [1, 2, 3, 4, 5, 6]
console.log(push([1, 2], ['a', 'b']));          // 3
console.log(push([], 1));                       // 1
console.log(push([]));                          // 0