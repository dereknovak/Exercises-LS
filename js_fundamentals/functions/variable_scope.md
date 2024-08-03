```js
function someFunction() {
  myVar = 'This is global';
}

someFunction();
console.log(myVar);
```

This example will log `This is global` to the console.

Although global variable `myVar` was *not* declared before invocation of the `someFunction` function, by referencing the variable within a function, JavaScript will see that it doesn't exist in the global scope automatically add it as a property of the global object, allowing it to be referenced in the future.