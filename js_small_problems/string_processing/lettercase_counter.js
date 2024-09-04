function letterCaseCount(string) {
  let lowercase = lowercaseChars(string) ?? [];
  let uppercase = uppercaseChars(string) ?? [];
  let neither = otherChars(string) ?? [];

  return {
    lowercase: lowercase.length,
    uppercase: uppercase.length,
    neither: neither.length,
  };
}

const lowercaseChars = string => string.match(/[a-z]/g);
const uppercaseChars = string => string.match(/[A-Z]/g);
const otherChars = string => string.match(/[^a-z]/ig);

console.log(letterCaseCount('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount(''));            // { lowercase: 0, uppercase: 0, neither: 0 }