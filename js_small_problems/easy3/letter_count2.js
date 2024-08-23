function wordSizes(str) {
  if (!str) return {};
  
  let words = str.split(' ');
  let counts = {};

  words.forEach(word => {
    let count = word.replace(/[^a-z0-9]/i, '').length;

    if (counts[count]) {
      counts[count] += 1;
    } else {
      counts[count] = 1;
    }
  });

  return counts;
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 2 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 3 }
console.log(wordSizes("What's up doc?"));                              // { "5": 1, "2": 1, "3": 1 }
console.log(wordSizes(''));                                            // {}