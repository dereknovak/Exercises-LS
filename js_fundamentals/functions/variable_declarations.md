```js
console.log(a);

var a = 1;
```

This example will log `undefined` to the console.

Before execution of the code, JavaScript will hoist all variables declared by `var` to the top of their respective scope. However, it *only* hoists the variable declaration, and not any expression that is with it. Therefore, the initialization to `1` does not occur until after the `log` invocation, causing `a` to reference `undefined`.

For clarity, this is what the code looks like before execution:

```js
var a;

console.log(a);

a = 1;
```