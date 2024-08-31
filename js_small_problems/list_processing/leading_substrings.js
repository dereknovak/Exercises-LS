// Option 1
function leadingSubstrings(string) {
  const substrings = [];
  [...string].forEach((_, i) => substrings.push(string.slice(0, i + 1)));
  return substrings;
}

// Option 2
function leadingSubstrings2(string) {
  return [...string].reduce((substrings, _, i) => {
    substrings.push(string.slice(0, i + 1))
    return substrings;
  }, []);
}

// Option 3
function leadingSubstrings3(string) {
  return [...string].map((_, i) => string.slice(0, i + 1));
}

console.log(leadingSubstrings('abc'));      // ["a", "ab", "abc"]
console.log(leadingSubstrings('a'));        // ["a"]
console.log(leadingSubstrings('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]