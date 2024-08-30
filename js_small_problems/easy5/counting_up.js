function sequence(maxNum) {
  const result = [];
  for (let num = 1; num <= maxNum; num++) {
    result.push(num);
  }

  return result;
}

console.log(sequence(5));    // [1, 2, 3, 4, 5]
console.log(sequence(3));    // [1, 2, 3]
console.log(sequence(1));    // [1]