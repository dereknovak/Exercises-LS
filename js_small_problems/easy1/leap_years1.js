function isLeapYear(year) {
  if (year % 100 === 0) {
    return year % 400 === 0;
  } else {
    return year % 4 === 0;
  }
}

console.log(isLeapYear(2016) === true);      // true
console.log(isLeapYear(2015) === false);      // false
console.log(isLeapYear(2100) === false);      // false
console.log(isLeapYear(2400) === true);      // true
console.log(isLeapYear(240000) === true);    // true
console.log(isLeapYear(240001) === false);    // false
console.log(isLeapYear(2000) === true);      // true
console.log(isLeapYear(1900) === false);      // false
console.log(isLeapYear(1752) === true);      // true
console.log(isLeapYear(1700) === false);      // false
console.log(isLeapYear(1) === false);         // false
console.log(isLeapYear(100) === false);       // false
console.log(isLeapYear(400) === true);       // true