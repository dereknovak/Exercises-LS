```js
let a = 7;

function myValue(a) {
  a += 10;
}

myValue(a);
console.log(a);
```

This example will log `7` to the console.

The reasoning here is exactly the same as the previous problem. One additional thing to note is that `a` inside the function is *different* than `a` outside of it: the one inside is local to `myValue` and the one outside is a **global variable**. Because these variables are separate, local variable `a` is what gets reassigned within the function. Because this local variable is scoped at the block level, it is not available outside of the `myValue` function, so when searching for `a` on line 8, JavaScript only finds the global variable and logs its unchanged value to the console.