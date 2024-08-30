function doubleConsonants(string) {
  return [...string].reduce((doubledStr, char) => {
    if (char.match(/[a-z]/i) && char.match(/[^aeiou]/)) {
      return doubledStr + char.repeat(2);
    } else {
      return doubledStr + char;
    }
  }, '');
}

console.log(doubleConsonants('String') === "SSttrrinngg");
console.log(doubleConsonants('Hello-World!') === "HHellllo-WWorrlldd!");
console.log(doubleConsonants('July 4th') === "JJullyy 4tthh");
console.log(doubleConsonants('') === "");