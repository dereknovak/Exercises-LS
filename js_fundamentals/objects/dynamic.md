```js
const myObject = {
  prop1: '123',
  prop2: '234', // 456
  'prop 3': '345',
};

const prop2 = '456';
myObject['prop2'] = '456';
myObject[prop2] = '678'; // new prop

console.log(myObject[prop2]);
console.log(myObject.prop2);
```

Line 11 will log `678` and line 12 will log `456` to the console.

On line 8, the value of `prop2` within `myObject` is reassigned to `456`. On line 9, a *new property* is defined for `myObject`, with the property key being the value referenced by constant variable `prop2` and its property value being `678`.

The trick is understanding that `'prop2'` and `prop2` are completely separate from one another. We can call a value using the `'prop2'` key, and `prop2` is simply a constant variable declared within the program.