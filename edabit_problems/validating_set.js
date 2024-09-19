/* 

PROBLEM
I: An array of objects, representing cards in a game of set
O: A boolean, representing if the set of cards makes a valid set

What is a set?
    - All same/different:
        - Colors
        - Numbers
        - Shades
        - Shapes
Properties:
    - Colors (red, purple, green)
    - Numbers (1, 2, 3)
    - Shades (empty, lined, full)
    - Shapes (squiggle, oval, diamond)

Anything that does not follow set rules for ALL PROPERTIES returns false

EXAMPLE
{ color: "green", number: 1, shade: "empty", shape: "squiggle" },
{ color: "green", number: 2, shade: "empty", shape: "diamond" },
{ color: "green", number: 3, shade: "empty", shape: "oval" }

color: green all same => true
number: number all different => true
shades: empty all same => true
shape: shape all different => true
RESULT => true

{ color: "purple", number: 1, shade: "full", shape: "oval" },
{ color: "green", number: 1, shade: "full", shape: "oval" },
{ color: "red", number: 1, shade: "full", shape: "oval" }

color: all different => true
number: all same => true
shades: all same => true
oval: all same => true
RESULT => true

DATA STRUCTURE
- Create an array to keep track of booleans

ALGORITHM
1. Determine which properties follow the set rules
    - Initialize propertyResults to empty array
    - Loop through the properties of the first card
        - If all are the same or all are different
            - Push boolean to propertyResults

2. If all properties follow the rules, return true
    - Return false otherwise

HELPERS
isSame(a, b, c)
- a === b and a === c

allDifferent(a, b, c)
- a !== b and a !== c and b !== c
*/

function isSet(cards) {
  const propertyResults = [];

  for (let property in cards[0]) {
    propertyResults.push(
      isSame(cards[0][property], cards[1][property], cards[2][property]) ||
      isDifferent(cards[0][property], cards[1][property], cards[2][property])
    );
  }

  return propertyResults.every(boolean => boolean)
}

const isSame = (a, b, c) => a === b && a === c;
const isDifferent = (a, b, c) => a !== b && a !== c && b !== c;

// TEST CASES

console.log(isSet([
  { color: "green", number: 1, shade: "empty", shape: "squiggle" },
  { color: "green", number: 2, shade: "empty", shape: "diamond" },
  { color: "green", number: 3, shade: "empty", shape: "oval" }
]) === true);

console.log(isSet([
  { color: "purple", number: 1, shade: "full", shape: "oval" },
  { color: "green", number: 1, shade: "full", shape: "oval" },
  { color: "red", number: 1, shade: "full", shape: "oval" }
]) === true);

console.log(isSet([
  { color: "purple", number: 3, shade: "full", shape: "oval" },
  { color: "green", number: 1, shade: "full", shape: "oval" },
  { color: "red", number: 3, shade: "full", shape: "oval" }
]) === false);
