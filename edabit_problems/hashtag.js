/* 

6:53 / 7:09

PROBLEM
I: A string
O: An array of string, representing 3 longest words as hashtags

- Hashtag
    - Lowercase
    - no punctuation
    - Starts with #
- Sort words by longest to shortest
- If ties
    - Retrieve word(s) that come first
- If title is less than 3 words
    - Return hashtags in decending order

EXAMPLE
"How the Avocado Became the Fruit of the Global Trade"
How => 3
the => 3
Avocado => 7
Became =>6
the => 3
Fruit => 3
Fruit => 5
of => 2
the => 3
Global => 6
Trade => 5
[#avocado, #became, #global]

DATA STRUCTURE
- An array for all of the words
    - Sort this by length of word

ALGORITHM
1. Capture all words in the string
    - Regex match letters
2. Sort the strings by their length
    - Sort by length (b - a)
3. Transform words into Hashtags
    - createHashtag HELPER
4. If hashtags length is less than 4, return hashtags
5. Return first three hashtags
    - Slice 0, 3

HELPERS
createHashtag(string)
- lowercase string
- return # + string
*/

function getHashTags(string) {
  const hashtags = string.match(/[a-z]+/ig).sort(byLength).map(createHashtag);
  return hashtags.length < 4 ? hashtags : hashtags.slice(0, 3);
}

const createHashtag = string => '#' + string.toLowerCase();
const byLength = (a, b) => b.length - a.length;

// TEST CASES

console.log(getHashTags("How the Avocado Became the Fruit of the Global Trade"));
// ["#avocado", "#became", "#global"]

console.log(getHashTags("Why You Will Probably Pay More for Your Christmas Tree This Year"));
// ["#christmas", "#probably", "#will"]

console.log(getHashTags("Hey Parents, Surprise, Fruit Juice Is Not Fruit"));
// ["#surprise", "#parents", "#fruit"]

console.log(getHashTags("Visualizing Science"));
// ["#visualizing", "#science"]

console.log('Edabit Tests');

console.log(getHashTags("Minecraft Stars on Youtube Share Secrets to Their Fame")); // ["#minecraft", "#youtube", "#secrets"])
console.log(getHashTags("Are You an Elite Entrepreneur?")); // ["#entrepreneur", "#elite", "#are"])