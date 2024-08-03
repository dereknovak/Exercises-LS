```js
var myVar = 'This is global';

function someFunction() {
  var myVar = 'This is local';
}

someFunction();
console.log(myVar);
```

This example will log `This is global` to the console.

This snippet has 2 different `myVar` variables at play: global variable `myVar` and function local variable `myVar`. Because variables declared with `var` are scoped at the function level, `myVar` from inside the `someFunction` function is hidden from the main scope; therefore, when searching for a value to log, JavaScript finds `myVar` on line 1 and logs its value.