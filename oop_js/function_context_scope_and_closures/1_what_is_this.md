Read the following code carefully. What do you think is logged on line 7. Try to answer the question before you run the code.

```js
const person = {
  firstName: 'Rick ',
  lastName: 'Sanchez',
  fullName: this.firstName + this.lastName,
};

console.log(person.fullName);
```

This code will log `NaN` to the console.

Although it appears to log `Rick Sanchez`, the expression `this.firstname + this.lastName` is not within a function; therefore, the execution context of `this` references the global object. There are no properties in the global object named `firstName` or `lastName`, resulting in the returned values of `undefined`. When added together, `NaN` is returned.