```js
let myName = 'Bob';
const saveName = myName;
myName = 'Alice';
console.log(myName, saveName);
```

This will log `Alice Bob` to the console.

```js
const myName = 'Bob';
const saveName = myName;
myName.toUpperCase();
console.log(myName, saveName);
```

This will log `Bob Bob` to the console. Although the `toUpperCase()` method is called on `myName`, this will simply return a new value for that line. Otherwise, the value referenced by both `myName` and `saveName` are unchanged.

Further Exploration:

While it's true that a string is a primitive value, that does not mean that a method cannot be called on it. In this case, the method invocation is simply returning the uppercase version `'BOB'`, but does nothing with this value.