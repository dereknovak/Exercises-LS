function crunch(string) {
  let newString = string[0];
  for (let i = 1; i <= string.length - 1; i++) {
    if (string[i] !== string[i - 1]) newString += string[i];
  }

  return newString || '';
}

console.log(crunch('ddaaiillyy ddoouubbllee') === "daily double");
console.log(crunch('4444abcabccba') === "4abcabcba");
console.log(crunch('ggggggggggggggg') === "g");
console.log(crunch('a') === "a");
console.log(crunch('') === "");