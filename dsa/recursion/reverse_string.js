/* 

30 mins with help from Scott (SPOT)

PROBLEM
I: A string
O: A string, reversed using recursion

RULES
- Use recursion
- Empty strings return empty
- A single char will return a single char

EXAMPLE
"h" => h
"he" => eh
"hel" =>
    h
    eh
    leh

DATA STRUCTURE
- Convert to an array
- Use string

Base Case: A string of 0 or 1 length
Recursive Definition: A string is reverse if the first char is the last char and the rest is also reversed

"hello"
ello + h


"hello"

olle + h => olleh
reverseString(ello) + h;
oll + e => olle
reverseString(ell) + e;
ol + l => oll
o + l => ol


hello 
string[end] + reverseString(1, end) + string[start]


*/

function reverseString(string) {
  if (string.length < 2) return string;
  return reverseString(string.slice(1)) + string[0];
}

// function reverseString(str) {
//   if (str === "") {
//     return "";
//   }
//   return reverseString(str.substr(1)) + str.charAt(0);
// }


console.log(reverseString("hello") === "olleh");
console.log(reverseString("world") === "dlrow");
console.log(reverseString("a") === "a");
console.log(reverseString("") === "");
console.log(reverseString("recursion") === "noisrucer");

// All test cases should log true.