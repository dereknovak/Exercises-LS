Explain why this method will not return the desired object. Try fixing this problem by taking advantage of JavaScript lexical scoping rules.

```js
const franchise = {
  name: 'How to Train Your Dragon',
  allMovies() {
    return [1, 2, 3].map(function(number) {
      return `${this.name} ${number}`;
    });
  },
};
```

The `allMovies` method will not return the appropriate value due to the execution context of the anonymous function defined on line 4. Because there
is no context within the anonymous function, the execution context will default to the global object, referencing either `window` or `undefined` (strict mode). This will return `undefined` or throw a `TypeError` exception, respectively.

To fix this, we can use a separate variable `self` to house the reference to the appropriate execution context, allowing use in the anonymous function.

```js
const franchise = {
  name: 'How to Train Your Dragon',
  allMovies() {
    const self = this;
    return [1, 2, 3].map(function(number) {
      return `${self.name} ${number}`;
    });
  },
};
```