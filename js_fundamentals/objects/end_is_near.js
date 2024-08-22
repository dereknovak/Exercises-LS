function penultimate(string) {
  let words = string.split(' ');
  return words[words.length - 2];
}

console.log(penultimate('last word'));                    // expected: "last"
console.log(penultimate('Launch School is great!'));      // expected: "is"

/*
You cannot use a negative index to reference the end of an array. This attempts
to search for a property with the key `'-2'`, which does not exist. Instead, 
you should use the `length` property to determine the length of the new `words`
array, then subtract 2 from it as arrays are zero-indexed.
*/