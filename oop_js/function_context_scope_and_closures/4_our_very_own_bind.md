Function.prototype.bind is a method on all function objects that allows us to hard-bind a function to a particular object. The way this works is that you pass a context object to the bind method and it returns a new function that is essentially the same function but hard-bound to the context object supplied.

Create a function myBind, that accepts two arguments: 1) The function to bind, 2) The context object, and returns a new function that's hard-bound to the passed in context object.

```js
function myBind(func, context) {
  return function() {
    return func.call(context);
  }
}

const person = {
  name: 'Derek',
  age: 30,

  describe() {
    console.log(`${this.name} is ${this.age} years old`);
  },
}

const describePerson = person.describe;
describePerson(); // undefined is undefined years old

boundDescribePerson = myBind(describePerson, person);
boundDescribePerson(); // Derek is 30 years old
```