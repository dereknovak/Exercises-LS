```js
const person = {
  firstName() {
    return 'Victor';
  },
  lastName() {
    return 'Reyes';
  },
};

console.log(`${person.firstName} ${person.lastName}`);
```

Line 10 will log the 2 functions themselves to the console. This is due to a combination of functions being first-class objects as well as the method not being called with `()`. First-class object return the object syntax, in this case the entire function body, and not calling a method with `()` will not execute the method.