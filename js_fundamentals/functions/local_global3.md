```js
var myVar = 'This is global';

function someFunction() {
  myVar = 'This is local';
}

someFunction();
console.log(myVar);
```

This will log `This is local` to the console.

When invoking the defined `someFunction` function on line 7, global variable `myVar` is *reassigned* to the string `'This is local'`. This occurs because a new variable was not declared within the function and `myVar` does not exist as a parameter, so JavaScript will locate the global variable `myVar` and reassign its value. While this happens within a function, JavaScript can still see the global variable because of its declaration existing in the main scope, so the program can use it to locate the newly assigned value and log it to the console.