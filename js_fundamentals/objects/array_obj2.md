```js
const myArray = [5, 5];
myArray[-1] = 5;
myArray[-2] = 5;

function average(array) {
  let sum = 0;

  for (let i = -2; i < array.length; i += 1) {
    sum += array[i];
  }

  return sum / array.length;
}

average(myArray); // 5
```

This assumption is incorrect. Although the properties of `'-1'` and `'-2'` are added to the array object, the `length` property only takes into consideration the *elements* of the array, not properties. Elements are defined as properties that use an integer key `0` or greater; therefore, only `0` and `1` are acceptible keys for elements, which means the length of the array would be 2, and `sum / array.length` would return `10`.