function swapCase(string) {
  return string.replace(/[a-z]/ig, swap);
}

const swap = char => /[A-Z]/.test(char) ? char.toLowerCase() : char.toUpperCase();

console.log(swapCase('CamelCase') === "cAMELcASE");
console.log(swapCase('Tonight on XYZ-TV') === "tONIGHT ON xyz-tv");