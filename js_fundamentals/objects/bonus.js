function calculateBonus() {
  return arguments[1] ? arguments[0] / 2 : 0;
}

console.log(calculateBonus(2800, true));               // 1400
console.log(calculateBonus(1000, false));              // 0
console.log(calculateBonus(50000, true));              // 25000

/*
This works because `arguments` is a special variable that references any
arguments that have been passed into a function invocation, despite if 
the function contains any parameters.
*/