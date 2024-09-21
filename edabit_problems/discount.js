/* 

PROBLEM
I: An array of objects, representing items to be purchased
O: A number with 2 decimal places, representing the total of all items with discount

- Discount
    - Applied to *just one* of the most expensive item in your cart
    - 25% off
- Return number should have 2 decimal places, just like money

QUESTIONS
- Rounding?
    - Nearest number
- Should 0 be 0.00
    - Yes

EXAMPLE
  { name: "jogging pants", quantity: 1, price: 29.99 },
  { name: "tennis socks", quantity: 1, price: 5.99 },
  { name: "sweat shirt", quantity: 2, price: 59.99 }
charges [29.99, 5.99, 59.99, 44.9925]

DATA STRUCTURE
- An array for all of the prices
    - Sum the array
    - Change the most expensive item to .75 its price

ALGORITHM
1. Create an array of all the charges
    - Use getCharges HELPER
2. Convert the most expensive item in array to .25 off its price
    - Initialize DISCOUNT to 0.25
    -  Sort charges from largest to smallest
        - b - a
    - Transform the first element to include the discount
        - Reassign first element to minus discount
3. Return the sum of all the charges with discount
    - Reduce using sum
        - Convert to 2 decimal places (toFixed)

HELPER
getCharges(array)
- Initialize charges to an empty array
- Iterate through the array (forEach)
    - Loop quantity times
        - Push the price to charges
- Return the charges

HELPER
sum(a, b)
*/

function twentyFiveOnOne(purchases) {
  const DISCOUNT = 0.25;
  const charges = getCharges(purchases);

  charges.sort((a, b) => b - a);
  charges[0] = charges[0] - (charges[0] * DISCOUNT);

  return Number(charges.reduce(sum).toFixed(2));
}

function getCharges(purchases) {
  const charges = [];
  purchases.forEach(item => {
    for (let count = 1; count <= item.quantity; count++) {
      charges.push(item.price);
    }
  });

  return charges;
}

const sum = (a, b) => a + b;

// TEST CASES

console.log(twentyFiveOnOne([
  { name: "Iphone 20x", quantity: 1, price: 1350 },
  { name: "Samsung x30", quantity: 1, price: 1225 },
  { name: "Nokia 9250", quantity: 1, price: 800 },
  { name: "Tesla Model Y", quantity: 1, price: 72999 }
]) === 58124.25);
console.log(twentyFiveOnOne([
  { name: "jogging pants", quantity: 1, price: 29.99 },
  { name: "tennis socks", quantity: 2, price: 5.99 },
  { name: "sweat shirt", quantity: 1, price: 59.99 }
]) === 86.96);
console.log(twentyFiveOnOne([
  { name: "jogging pants", quantity: 1, price: 29.99 },
  { name: "tennis socks", quantity: 1, price: 5.99 },
  { name: "sweat shirt", quantity: 2, price: 59.99 }
]) === 140.96);
console.log(twentyFiveOnOne([
  { name: "jogging pants", quantity: 1, price: 29.99 }
]) === 22.49);
