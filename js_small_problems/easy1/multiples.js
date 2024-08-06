function multisum(maxNum) {
  function multipleOf(divisor, num) {
    return num % divisor === 0;
  }

  let sum = 0;
  for (let num = 1; num <= maxNum; num++) {
    if (multipleOf(3, num) || multipleOf(5, num)) sum += num;
  }

  return sum;
}

console.log(multisum(3) === 3);
console.log(multisum(5) === 8);
console.log(multisum(10) === 33);
console.log(multisum(1000) === 234168);