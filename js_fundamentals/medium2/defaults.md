```js
function processOrder(price, quantity, discount, serviceCharge, tax) {
  if (!quantity) {
    quantity = 1;
  }

  if (!discount) {
    discount = 0;
  }

  if (!serviceCharge) {
    serviceCharge = 0.1;
  }

  if (!tax) {
    tax = 0.15;
  }

  return (price * quantity) * (1 - discount) * (1 + serviceCharge) * (1 + tax);
}

processOrder(100);      // 126.5
```

```js
function processOrder(price, quantity, discount, serviceCharge, tax) {
  quantity = quantity || 1;
  discount = discount || 0;
  serviceCharge = serviceCharge || 0.1;
  tax = tax || 0.15;

  return (price * quantity) * (1 - discount) * (1 + serviceCharge) * (1 + tax);
}
```

The limitation with both of these solutions is exposed when there is a value for `price` and some other variable that is not next in sequence - `price` and `discount` or `price` and `tax`. Because JavaScript will read through the arguments from right to left, there is no way to assign the value without a bunch of unnecessary `null` values.

Another limitation is that, if a value is `0`, then many of these `if` statements will evaluate to `true`, as `0` is a fasly value. 