```js
let myArray = [1, 2, 3, 4];
const myOtherArray = myArray;

myArray.pop();
console.log(myArray);
console.log(myOtherArray);

myArray = [1, 2];
console.log(myArray);
console.log(myOtherArray);
```

Line 6 and 10 will log `[1, 2, 3]` to the console.

When declaring the constant `myOtherArray` and assigning it to `myArray`, the program is telling JavaScript to have `myOtherArray` reference the *same array* object in memory as that of `myArray`. Therefore, when calling the destructive `pop` method on `myArray`, the object is mutated to `[1, 2, 3]`, which is still referenced by both `myArray` and `myOtherArray`.

On line 9, `myArray` is then reassigned to `[1, 2]`; however, this has no impact on the reference of `myOtherArray`. This example illustrates how JavaScript employs its **variables as pointers** to an address space in memory, rather than containing object values within themselves. Because both variables were simply pointing to the array object, when `myArray` points to a different array, `myOtherArray` will continue to point at the original array.