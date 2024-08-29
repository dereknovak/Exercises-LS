function union(arr1, arr2) {
  const result = [];

  addElements(arr1, result);
  addElements(arr2, result);

  return result;
}

function addElements(oldArr, newArr) {
  oldArr.forEach(element => {
    if (!newArr.includes(element)) {
      newArr.push(element);
    }
  });
}

console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]
