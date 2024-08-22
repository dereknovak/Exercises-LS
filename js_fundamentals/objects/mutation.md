```js
const array1 = ['Moe', 'Larry', 'Curly', 'Shemp', 'Harpo', 'Chico', 'Groucho', 'Zeppo'];
const array2 = [];

for (let i = 0; i < array1.length; i += 1) {
  array2.push(array1[i]);
}

for (let i = 0; i < array1.length; i += 1) {
  if (array1[i].startsWith('C')) {
    array1[i] = array1[i].toUpperCase();
  }
}

console.log(array2);
```

This will log `['Moe', 'Larry', 'Curly', 'Shemp', 'Harpo', 'Chico', 'Groucho', 'Zeppo']` to the console.

Although all of the elements from `array1` are copied over to `array2` in the first `for` loop, the elements are strings and strings are *primitive values*. Primitive values always exist in isolation (no 2 variables can reference the same value) and cannot be mutated, so while the `toUpperCase` method is called on specific strings within `array1`, the strings that exist within `array2` are unaffected.