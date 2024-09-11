/* 

PROBLEM
I: A string
O: An object with the counts of all of the letters in the string

RULES
- Case-insensitive
- If no argument, return undefined
- If no letters, the returned object should be empty

DATA STRUCTURE
- An object to keep track of counts

ALGORITHM
1. Return undefined unless argment is a string
2. Lowercase the string
3. Sanitize the argument to only letters
    - Replace all non-letters with ''
4. Initialize a counts object
5. Iterate through the letters and count each occurrence
    - Convert letters to an array
    - If the letter exists within counts:
        - increment by 1
    - Else
        - Initialize property to 1
6. Return the counts
*/

function letterCount(string) {
  if (typeof string !== 'string') return undefined;

  let letters = string.toLowerCase().replace(/[^a-z]/ig, '');
  const counts = {};
  
  [...letters].forEach(letter => {
    if (counts[letter]) {
      counts[letter] += 1;
    } else {
      counts[letter] = 1;
    }
  });

  return counts;
}

console.log(letterCount('codewars')); // {:a=>1, :c=>1, :d=>1, :e=>1, :o=>1, :r=>1, :s=>1, :w=>1})
console.log(letterCount('cOdEwArs')); // {:a=>1, :c=>1, :d=>1, :e=>1, :o=>1, :r=>1, :s=>1, :w=>1}
console.log(letterCount('  codewars   ')); // {:a=>1, :c=>1, :d=>1, :e=>1, :o=>1, :r=>1, :s=>1, :w=>1}
console.log('');

console.log(letterCount('activity')); // {:a=>1, :c=>1, :i=>2, :t=>2, :v=>1, :y=>1}
console.log(letterCount('arithmetics')); // {:a=>1, :c=>1, :e=>1, :h=>1, :i=>2, :m=>1, :r=>1, :s=>1, :t=>2})
console.log('');

console.log(letterCount('a-b c/a')); // {a: 2, b: 1, c: 1}
console.log(letterCount('@&^%$')); // {}
console.log(letterCount('')); // {}
console.log(letterCount()); // undefined

