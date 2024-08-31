/* 

PROBLEM
I: A number, rep the intended ID
I: An array of object, with each object representing a transaction
O: A boolean, rep that the sum of all quantities is greater than 0

- `in` will increase, `out` will decrease
- Takes into consideration all transactions

ALGORITHM
- Select only the transactions that are specific to the input
- Transform transactions to their numeric value
    - + for in, - for out
- Sum all transaction numbers
- Check whether the sum is greater than 0

*/

function isItemAvailable(id, transactions) {
  return transactionsFor(id, transactions).map(processQuantity).reduce(sum) > 0;
}

function processQuantity(info) {
  return info.movement === 'in' ? info.quantity : -(info.quantity)
}

function transactionsFor(requiredId, transactions) {
  return transactions.filter(({id}) => id === requiredId);
}

const sum = (num1, num2) => num1 + num2;

const transactions = [ { id: 101, movement: 'in',  quantity:  5 },
  { id: 105, movement: 'in',  quantity: 10 },
  { id: 102, movement: 'out', quantity: 17 },
  { id: 101, movement: 'in',  quantity: 12 },
  { id: 103, movement: 'out', quantity: 15 },
  { id: 102, movement: 'out', quantity: 15 },
  { id: 105, movement: 'in',  quantity: 25 },
  { id: 101, movement: 'out', quantity: 18 },
  { id: 102, movement: 'in',  quantity: 22 },
  { id: 103, movement: 'out', quantity: 15 }, ];

console.log(isItemAvailable(101, transactions));     // false
console.log(isItemAvailable(105, transactions));     // true