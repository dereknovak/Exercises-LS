```js
function oddities(array) {
  const oddElements = [];

  for (let i = 0; i < array.length; i += 2) {
    oddElements.push(array[i]);
  }

  return oddElements;
}

oddities([2, 3, 4, 5, 6]) === [2, 4, 6];      // false
oddities(['abc', 'def']) === ['abc'];         // false
```

Both of these comparisons return `false` due to the nature of the strict equality operator in regards to array objects. While it's true that the first invocation returns `[2, 4, 6]` and the second returns `['abc']`, the strict equality operator checks whether the array objects are the *same array* in memory. Within the `oddities` function body, the array returned from the function is `oddElements`, which represents a constant variable declared within the function and references a different object that is slowly built throughout the function. Because the array referenced by `oddElements` and `array` are different, they will return `false` when compared with the strict equality operator, regardless of the elements inside of it.