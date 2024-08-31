function palindromes(string) {
  return substrings(string).filter(isPalindrome);
}

function substrings(string) {
  const result = [];

  [...string].forEach((_, startIdx) => {
    for (let endIdx = startIdx + 1; endIdx <= string.length; endIdx++) {
      result.push(string.slice(startIdx, endIdx));
    }
  });

  return result;
}

const reverseString = str => [...str].reverse().join('');
const isPalindrome = str => str.length > 1 && str === reverseString(str);

console.log(palindromes('hello-madam-did-madam-goodbye'));
console.log(palindromes('knitting cassettes'));

