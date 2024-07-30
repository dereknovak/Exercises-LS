```js
const myBoolean = true;
const myString = 'hello';
const myArray = [];
const myOtherString = '';

if (myBoolean) {
  console.log('Hello');
}

if (!myString) {
  console.log('World');
}

if (!!myArray) {
  console.log('World');
}

if (myOtherString || myArray) {
  console.log('!');
}
```

This code will log `Hello`, `World`, and `!` to the console on separate lines.

Line 7 is logged because the value `true` of `myBoolean` is a truthy value. Line 11 does *not* log because the value `'hello'` of `myString` evaluates as true, but the `!` operator changes the value to `false`, which is a falsy value. Line 15 is logged because the value `[]` of `myArray` is a truthy value, the the 2 `!` change the value to `false`, then back to `true`, which is a truthy value. Lastly, line 19 is logged because, although `''` is not a truthy value, the logical `||` operator examines the right operand and sees a truthy value, so the conditional evaluates as true.