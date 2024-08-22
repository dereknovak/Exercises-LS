```js
const array = ['Apples', 'Peaches', 'Grapes'];

array[3.4] = 'Oranges';
console.log(array.length);
console.log(Object.keys(array).length);

array[-2] = 'Watermelon';
console.log(array.length);
console.log(Object.keys(array).length);
```

This will log:

```
3
4
3
5
```

Although new properties are being added to the `array` array, these properties are **not** elements. In JavaScript, an element is defined as value within an array that is index by a positive integer. Neither `3.4` nor `-2` are acceptable indexes and are therefore treated as traditional object properties. The `length` property only cares about the elements of the array, which remains at 3 for the entire program. However, when calling the `keys` instance method, *all* keys, both property keys and element indexes, are put into a new array and counted using that specific array's `length`, resulting in a length value that increments.