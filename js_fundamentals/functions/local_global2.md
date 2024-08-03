```js
var myVar = 'This is global';

function someFunction() {
  var myVar = 'This is local';
  console.log(myVar);
}

someFunction();
```

This example will log `This is local` to the console.

As explained from the previous problem, the 2 `myVar` variables are scoped differently: one is a global variable (line 1) and the other is a function local variable (line 4). Because the variable inside the function shares the same name as the global variable, it will overshadow the global variable while inside the function; therefore, when JavaScript searching for a value to log, it sees `myVar` on line 4 before line 1 and logs its value.