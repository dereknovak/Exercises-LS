function centerOf(string) {
let start = Math.ceil(string.length / 2) - 1;
let end = Math.floor(string.length / 2) + 1;

return string.slice(start, end);
}

console.log(centerOf('I Love JavaScript') === "a");
console.log(centerOf('Launch School') === " ");
console.log(centerOf('Launch') === "un");
console.log(centerOf('Launchschool')  === "hs");
console.log(centerOf('x') === "x");