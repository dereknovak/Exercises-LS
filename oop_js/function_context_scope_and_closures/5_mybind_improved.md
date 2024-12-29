Our earlier implementation of the `Function.prototype.bind` was simplistic. `Function.prototype.bind` has another trick up its sleeve besides hard-binding functions to context objects. It's called partial function application. Read this assignment and the MDN documentation to learn more about partial function application.

Alter the `myBind` function written in the previous exercise to support partial function application of additional arguments to the original function.

```js
function myBind(func, context) {
  return function(...args) {
    return func.call(context, ...args);
  }
}

const person = {
  name: 'Derek',
  age: 30,

  describe(greeting) {
    if (greeting) console.log(greeting) + '!!!';
    console.log(`${this.name} is ${this.age} years old`);
  },
}

const describePerson = person.describe;
describePerson(); // undefined is undefined years old

boundDescribePerson = myBind(describePerson, person);
boundDescribePerson('Hello');
// Hello!!!
// Derek is 30 years old
```