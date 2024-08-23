function wordSizes(str) {
  if (!str) return {};
  
  let words = str.split(' ');
  let counts = {};

  words.forEach(word => {
    let count = word.length;
    if (counts[count]) {
      counts[count] += 1;
    } else {
      counts[count] = 1;
    }
  });

  return counts;
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(''));                                            // {}