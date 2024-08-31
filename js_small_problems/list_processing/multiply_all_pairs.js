/* 

PROBLEM
I: A set of numbers
I: Another set of numbers
O: A new array containing products of all numbers

- Returned array should be sorted ascending

EXAMPLE
2, 4
4, 3, 1, 2
** 8 different combinations
8, 6, 2, 4, 16, 12, 4, 8
2, 4, 4, 6, 8, 8, 12, 16

DS
- Arrays for inputs and outputs

ALGORITHM
multiplyAllPairs
- Create a new array for products
- Multiply the numbers and push results to products
    - Iterate through nums1
        - Each num should iterate through all of nums2
        - Push product to products
- Sort products
    - Sort by number value
- Return the sorted products
*/

function multiplyAllPairs(nums1, nums2) {
  return nums1.reduce((products, num1) => {
    nums2.forEach(num2 => products.push(num1 * num2));
    return products;
  }, []).sort(byNumericOrder);
}

const byNumericOrder = (a, b) => a - b;

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]