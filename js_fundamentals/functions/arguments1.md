```js
let a = 7;

function myValue(b) {
  b += 10;
}

myValue(a);
console.log(a);
```

This example will log `7` to the console.

On line 8, the value of `a` is passed as an argument to the defined `myValue` function, binding it to the function's parameter `b`. Because `a` references an integer, and integers are primitive values, a copy of the value is assigned to `b`; therefore `a` cannot be changed using variable `b`.

Therefore, although `b` is reassigned within the function, `a` keeps its assignment to `7`, which is what gets logged to the console.