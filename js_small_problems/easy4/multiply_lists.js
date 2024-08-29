function multiplyList(arr1, arr2) {
  return arr1.map((_, i) => arr1[i] * arr2[i]);
}

console.log(multiplyList([3, 5, 7], [9, 10, 11]));    // [27, 50, 77]