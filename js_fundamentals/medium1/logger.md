```js
function debugIt() {
  const status = 'debugging';
  function logger() {
    console.log(status);
  }

  logger();
}

debugIt();
```

This example will log `debugging` to the console due to the lexical scoping rules of constant variable `status`. Because `status` was declared in the root scope of the `debugIt` function, its value is accessible throughout the entirety of the function, including within any nested functions such as `logger`.