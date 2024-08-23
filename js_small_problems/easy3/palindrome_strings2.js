function isRealPalindrome(string) {
  let strOriginal = string.toLowerCase().split('').filter(char => char.match(/[a-z0-9]/i)).join('');
  let strReverse = strOriginal.split('').reverse().join('');
  return strReverse === strOriginal; 
}

console.log(isRealPalindrome('madam') === true);
console.log(isRealPalindrome('Madam') === true); // (case does not matter)
console.log(isRealPalindrome("Madam, I'm Adam") === true); // (only alphanumerics matter)
console.log(isRealPalindrome('356653') === true);
console.log(isRealPalindrome('356a653') === true);
console.log(isRealPalindrome('123ab321') === false);