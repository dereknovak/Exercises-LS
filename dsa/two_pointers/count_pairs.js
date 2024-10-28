// Forgot to save my PEDAC

function countPairs(numbers, target) {
  let anchor = numbers.length - 1;
  let runner = numbers.length - 2;
  let failures = 0;
  let count = 0;

  while (failures < 2 && anchor > 0) {
    let sum = numbers[anchor] + numbers[runner];

    if (sum > target) {
      count++;
      failures = 0;
      runner--;
    } else {
      failures++;
      anchor--;
      runner = anchor - 1;
    }
  }

  return count;
}

console.log(countPairs([1, 2, 3, 4, 5], 6) === 4);
// Pairs: (2, 5), (3, 4), (3, 5), (4, 5)

console.log(countPairs([1, 2, 3, 4, 5], 8) === 1);
// Pair: (4, 5)

console.log(countPairs([1, 3, 5, 7], 6) === 4);
// Pairs: (1, 7), (3, 5), (3, 7), (5, 7)

console.log(countPairs([1, 2, 3, 4], 5) === 2);
// Pairs: (2, 4), (3, 4)

console.log(countPairs([1, 2, 3, 4, 5], 10) === 0);
// No pairs