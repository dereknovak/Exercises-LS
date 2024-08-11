let myArray = [1, 2, 3, 4];
const myFirstArray = myArray.slice(); // Option 1
const mySecondArray = Array.from(myArray); // Option 2

myArray.pop();
console.log(myFirstArray);
console.log(mySecondArray);

myArray = [1, 2];
console.log(myFirstArray);
console.log(mySecondArray);