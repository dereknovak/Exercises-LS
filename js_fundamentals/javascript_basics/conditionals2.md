```js
if (condition1) {
  // ...
  if (condition2) {
    // ...
  } else {
    // ...
  }
} else {
  // ...
  if (condition4) {
    // ...
    if (condition5) {
    // ...
    }
  }
}
```

There are 5 different scenarios that can occurs:

1. if, if
2. if, else
3. else, if, if
4. else, if, nothing
5. else, nothing