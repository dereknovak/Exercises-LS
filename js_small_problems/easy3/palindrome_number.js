function isPalindromicNumber(num) {
  let str = String(num);
  let reverseStr = str.split('').reverse().join('');
  return str === reverseStr;
}

console.log(isPalindromicNumber(34543) === true);
console.log(isPalindromicNumber(123210) === false);
console.log(isPalindromicNumber(22) === true);
console.log(isPalindromicNumber(5) === true);