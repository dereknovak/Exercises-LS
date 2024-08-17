```js
function productOfSums(array1, array2) {
  let result = total(array1) * total(array2);
  return result;
}

function total(numbers) {
  let sum;

  for (let i = 0; i < numbers.length; i += 1) {
    sum += numbers[i];
  }

  sum;
}
```

This will not produce the expected result, as `undefined` is returned from the `total` function. In JavaScript, a function can only return a value using the explicit `return` keyword. Simply adding this keyword to line 13 will solve the issue.