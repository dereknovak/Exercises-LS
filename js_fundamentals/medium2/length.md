```js
const languages = ['JavaScript', 'Ruby', 'Python'];
console.log(languages);         // [ 'JavaScript', 'Ruby', 'Python' ]
console.log(languages.length);  // 3

languages.length = 4;
console.log(languages);         // [ 'JavaScript', 'Ruby', 'Python', <1 empty> ]
console.log(languages.length);  // 4

languages.length = 1;
console.log(languages);         // [ 'JavaScript' ]
console.log(languages.length);  // 1

languages.length = 3;
console.log(languages);         // [ 'JavaScript', <2 empty items> ]
console.log(languages.length);  // 3

languages.length = 1;
languages[2] = 'Python';
console.log(languages);         // [ 'JavaScript', <1 empty item>, 'Python' ]
console.log(languages[1]);      // undefined
console.log(languages.length);  // 3
```

As you increase the `length` property of an array, all new indexes that have no references will be considered an `<empty item>`. Because it is unset, but does exist, its default reference will be `undefined`, which is what we see on line 20.

As you decrease the `length` property of an array, the existing elements outside of that range will be permanently removed from the array. This is why when the `length` property is reassigned to `1`, but then brought back to `3`, the affected elements are considered empty.

Lastly, when setting an index outside of the range of an array, all slots in between the new index and the last element of the original length are set to `empty item`.

