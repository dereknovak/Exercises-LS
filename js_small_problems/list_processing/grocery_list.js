/* 

PROBLEM
I: A nested array containing fruits and their respective counts
O: An array containing the fruits repeated based on count

EXAMPLE
apple, 3; orange, 1; banana, 2
apple apple apple orange banana banana

DS:
- A nested array for the input
- A flattened array for output

ALGORITHM
buyFruit
- Transform the input array to contain the appropriate fruit counts
- Flatten that array
    - flatMap

*/

function buyFruit(nestedArr) {
  return nestedArr.flatMap(repeat);
}

function repeat(fruitInfo) {
  const fruits = [];
  for (let count = fruitInfo[1]; count > 0; count--) {
    fruits.push(fruitInfo[0]);
  }

  return fruits;
}

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]