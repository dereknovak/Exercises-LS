```js
var myVar = 'This is global';

function someFunction() {
  console.log(myVar);
}

someFunction();
```

This example will log `This is global` to the console.

Because global variables are accessible anywhere within the program, `myVar` can be referenced within the `someFunction` method, allowing its value to be logged to the console using the `log` method

When searching for this variable inside of the `someFunction` function, JavaScript will first look inside of the function's scope, then move to the global scope, which is where it discovers the global variable.