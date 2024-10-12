/* 

9:09 // 9:56

PROBLEM
I: A string of digits
I: A number, representing the chunk size
O: A string, with input changed to the rules

RULES
- Split string into chunks based on input size
- For each chunk
    - If each digit, cubed, then summed is even:
        - Reverse the order
    - Otherwise
        - Shift each digit to left by 1
        - First digit goes to the end
- Ignore last chunk if it is less than input size
- Reassemble chunks, in order
- First arg will always be string
- Second arg will always be number
- If empty string, return an empty string
- If number is <= 0, return empty string
- If number is 1, return the string
- Number will never be a float
- Never any non digits in string

EXAMPLE
("123456987654", 6) --> "234561876549
123456 987654
1**3 = 1
2 => 8
3 => 27
4 => 64
5 => 125
6 => 216
sum = 441, not divisible by 2
234561

9 => 729
8 => 512
7 => 343
6 => 216
5 => 125
4 => 64
876549

result = 2345187659

6644
6 => 216
6 => 216
4 => 64
4 => 64
even => 4466

DATA STRUCTURE
- An array for the chunks
    - Stop capturing once we get to a certain point
    - Iterate through the numbers
        - Find sum of the cubes
        - Perform appropriate operation according to its value
    - Use map to transform

"6644387523"
['6644', '3875']
'6644'
digits = ['6', '6', '4', '4']
numbers = [6, 6, 4, 4]
cubes = [216, 216, 64, 64]
sum = 560 is even
reverse digits => ['4', '4', '6', '6']
join and return '4466'

'3875'
digits = ['3', '8', '7', '5']
numbers = [3, 8, 7, 5]
cubes = [27, 512, 343, 125]
sum = 1007 is odd
move left by 1 => [
    arr.slice(1).concat(arr[0])
join and return '8753'

join => '44668753'

ALGORITHM
1. Validate the input
    - If string is empty OR groupSize <= 0
        - Return empty string
    - If groupSize == 1
        - Return string
2. Split string into groups based upon groupSize
    - Use groupDigits HELPER
3. Transform each group to its respective ruleset
    - Use map
        - Split string into digits (digits)
        - Transform digits to numbers (numbers)
        - Transform numbers to cubes (cubes) HELPER
        - Determine sum (reduce sum)
        - If sum isEven HELPER
            - Return reverseArray joined
        - Otherwise
            - Return shiftArray joined HELPER
4. Rejoin the groupings as a string and return
    - Rejoin and return 

HELPERS
groupDigits(string, groupSize)
- Initialize groups to []
- Use a for loop (i = 0, while i < string size, increment i by groupSize)
    - Slice string from i => i + groupSize
        - Push to groups
- Return groups

toCube(num)
- num ** 3

isEven(num)
- num % 2 === 0

shiftArray(array)
- arr.slice(1).concat(arr[0])
*/

function revrot(string, groupSize) {
  if (!string.length || groupSize <= 0) return '';
  if (groupSize === 1) return string;

  const groups = groupDigits(string, groupSize);
  const result = groups.map(group => {
    const digits = [...group];
    const numbers = digits.map(Number);
    const cubes = numbers.map(toCube);
    const sum = cubes.reduce(toSum);

    if (isEven(sum)) {
      return digits.reverse().join('');
    } else {
      return shiftArray(digits).join('');
    }
  });

  return result.join('');
}

function groupDigits(string, groupSize) {
  const groups = [];
  for (let i = 0; i <= string.length - groupSize; i += groupSize) {
    groups.push(string.slice(i, i + groupSize));
  }

  return groups;
}

const toCube = num => num ** 3;
const toSum = (a, b) => a + b;
const isEven = num => num % 2 === 0;
const shiftArray = arr => arr.slice(1).concat(arr[0]);


// TEST CASES

console.log(revrot("123456987654", 6) === "234561876549");
console.log(revrot("66443875", 4) === "44668753");
console.log(revrot("6644387523", 4) === "44668753");
console.log(revrot("6644", 4) === "4466");

console.log(revrot("", 4) === "");
console.log(revrot("123456987654", 0) === "");
console.log(revrot("123456987654", -2) === "");
console.log(revrot("123456987654", 1) === "123456987654");

// ADDITIONAL TEST CASES

console.log(revrot("1234", 0) === "");
console.log(revrot("", 0) === "");
console.log(revrot("1234", 5) === "");
console.log(revrot("733049910872815764", 5) === "330479108928157");
console.log(revrot("123456987654", 6) === "234561876549");
console.log(revrot("123456987653", 6) == "234561356789");
console.log(revrot("66443875", 4) === "44668753");
console.log(revrot("66443875", 8) === "64438756");
console.log(revrot("664438769", 8) === "67834466");
console.log(revrot("123456779", 8) === "23456771");
console.log(revrot("", 8) === "");
console.log(revrot("123456779", 0) === "");
console.log(revrot("563000655734469485", 4) === "0365065073456944" );


/* 



*/