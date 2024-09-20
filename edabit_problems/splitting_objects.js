/* 

PROBLEM
I: An array of objects, representing fruits and their quantities
O: An array of objects, representing each individual fruit

- Properties
    - name
    - quantity

RULES
- Returned object should be ordered the same as original
    - currants, grapes, bananas
        - currant currant grape banana banana
- Quantity will always be above 0
- Array will never be empty

EXAMPLE
  { name: "currants", quantity: 1 },***
  { name: "grapes", quantity: 5 },
  { name: "bananas", quantity: 3 }

- Capture quantity of currants
    - Create a currants object 1 time
    - Push that to result array
- Capture quanitty of grapes
    - Loop 5 times
        - Create a grape object
        - Push that to result array

DATA STRUCTURE
- Create multiple objects using input array

ALGORITHM
1. Iterate through all fruits and duplicate the object by each quantity
    - Initialize individualFruits to an empty array
    - Iterate through fruits array
        - Start a for loop (quantity number of times)
            - Start with count 1
                - <= quantity
            - Create an object with the same property name and quantity of 1
                - Push this to indivdualFruits
2. Return individualFruits
*/

function splitBunches(fruits) {
  const individualFruits = [];
  fruits.forEach(fruit => {
    for (let count = 1; count <= fruit.quantity; count++) {
      individualFruits.push({ name: fruit.name, quantity: 1 });
    }
  });

  return individualFruits;
}

// TEST CASES

console.log(splitBunches([
  { name: "grapes", quantity: 2 }
]));
/*
[
  { name: "grapes", quantity: 1 },
  { name: "grapes", quantity: 1 }
]
*/

console.log(splitBunches([
  { name: "currants", quantity: 1 },
  { name: "grapes", quantity: 2 },
  { name: "bananas", quantity: 2 }
]));
/*
[
  { name: "curants", quantity: 1},
  { name: "grapes", quantity: 1 },
  { name: "grapes", quantity: 1 },
  { name: "bananas", quantity: 1 },
  { name: "bananas", quantity: 1 }
]
*/

console.log(splitBunches([
  { name: "currants", quantity: 1 },
  { name: "grapes", quantity: 5 },
  { name: "bananas", quantity: 3 }
]));
/*
[
  { name: "curants", quantity: 1
  { name: "grapes", quantity: 1 },
  { name: "grapes", quantity: 1 },
  { name: "grapes", quantity: 1 },
  { name: "grapes", quantity: 1 },
  { name: "grapes", quantity: 1 },
  { name: "bananas", quantity: 1 },
  { name: "bananas", quantity: 1 },
  { name: "bananas", quantity: 1 }
]
*/

console.log(splitBunches([
  { name: "grapes", quantity: 1 }
]));
/*
[
  { name: "grapes", quantity: 1 },
]
*/