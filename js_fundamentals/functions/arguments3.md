```js
let a = [1, 2, 3]

function myValue(b) {
  b[2] += 7;
}

myValue(a);
console.log(a);
```

This example will log `[ 1, 2, 10 ]` to the console.

When invoking the defined `myValue` function on line 7 and passing `a` as an argument, a reference to its value is bound to the function's parameter `b`. This occurs because array objects are a **reference type**, which means that multiple variables can reference the object. Because of this, both global variables `a` and `b` reference the *same array* as that initialized on line 1.

Within the function, the element at index `2` (`3`) is reassigned to the sume of itself and `7` (`10`). This element reassignment *mutates the array*, and because both `a` and `b` reference it, both will see this change. This is why, when passing `a` as an argument to `log` on line 8, `[ 1, 2, 10 ]` is output.