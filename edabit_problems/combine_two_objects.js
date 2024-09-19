/* 

PROBLEM
I: An object with property values of numbers
I: An object with property values of numbers
O: An object with all property values added together

- The amount of properties will not always be the same
- If the property key is the same, the values should be added together
- All unique properties should be included in the returned object
- There will always be only 2 arguments, objects

DATA STRUCTURE
- An object to keep track of the totals
    - This will also be returned from the function
    - To keep this sorted correctly, convert to entries then back sorted at end

ALGORITHM
1. Sum all of property values into an object
    - Initialize total object to a copy of the first arg
        - fromEntries/entries
    - Iterate through the second arg (for in)
        - If property exists in total
            - Increment by its value
        - Otherwise
            - Create a new property with current value
2. Sort the object from lowest to highest
    - Create an array of the entries
    - Sort the entries from lowest to highest value
    - Recreate object with sorting
3. Return the sorted object
*/

function combine(obj1, obj2) {
  let total = Object.fromEntries(Object.entries(obj1));
  for (let property in obj2) {
    total[property] = total[property] + obj2[property] || obj2[property];
  }

  return Object.fromEntries(Object.entries(total).sort((a,b) => a[1] - b[1]));
}

// TEST CASES


const user1 = {
  powerPlant: 70000,
  rental: 12000
}

const user2 = {
  teaching: 40000,
  rental: 10000
}

const user3 = {
  teaching: 40000,
  rental: 10000,
  extra: 20000
}

console.log(combine(user1, user2));
/*
{
  rental: 22000   // The rental income is added together.
  teaching: 40000,
  powerPlant: 70000,
}
*/

console.log(combine(user1, user3));
/*
{
  extra: 20000,
  rental: 22000   // The rental income is added together.
  teaching: 40000,
  powerPlant: 70000,

}
*/