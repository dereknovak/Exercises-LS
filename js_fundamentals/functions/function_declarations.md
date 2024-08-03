```js
logValue();

function logValue() {
  console.log('Hello, world!');
}
```

This example will log `Hello, world!` to the console.

Before execution of the program, JavaScript will **hoist** all declared functions to the top of the program. Therefore, even though it appears the `logValue` invocation takes place before the declaration, it actually occurs afterwards.

For clarity, this is what the code will look like before execution:

```js
function logValue() {
  console.log('Hello, world!');
}

logValue();
```