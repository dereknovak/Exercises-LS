```js
let startingBalance = 1;
const chicken = 5;
const chickenQuantity = 7;

function totalPayable(item, quantity) {
  return startingBalance + (item * quantity);
}

startingBalance = 5;
console.log(totalPayable(chicken, chickenQuantity));

startingBalance = 10;
console.log(totalPayable(chicken, chickenQuantity));
```

This will log `40` and `45` to the console.

On line 10, the defined `totalPayable` function is invoked, passing in the value of `chicken` (`5`) and `chickenQuantity` (`7`) as arguments. These values are bound to the function's parameters `item` and `quantity`, respectively. Within the function, the product of these values are then added to the value of `startingBalance`, which was reassigned to `5` right before the invocation, returning and then logging `40` to the console.

On line 13, the same values are passed as arguments again to the function, with the difference being that `startingBalance` was reassigned to `10` before the invocation. Therefore, `45` is returned and logged to the console.

`startingBalance` is able to be accessed from within the `totalPayable` due to the scoping rules of **global variables**. Because `startingBalance` was declared in the main scope, it is considered a global variable and is accessible throughout the entire program.