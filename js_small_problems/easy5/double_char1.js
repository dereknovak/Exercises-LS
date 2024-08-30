function repeater(string) {
  return [...string].reduce(
    (doubledStr, char) => doubledStr + char.repeat(2), ''
  );
}

console.log(repeater('Hello'));        // "HHeelllloo"
console.log(repeater('Good job!'));    // "GGoooodd  jjoobb!!"
console.log(repeater(''));             // ""