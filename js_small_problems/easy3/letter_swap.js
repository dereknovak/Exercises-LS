function swap(str) {
  let words = str.split(' ');
  let swappedWords = words.map(word => {
    let wordArray = word.split('');
    let firstLetter = wordArray[0];
    wordArray[0] = wordArray[wordArray.length - 1];
    wordArray[wordArray.length - 1] = firstLetter;
    return wordArray.join('');
  });

  return swappedWords.join(' ');
}

console.log(swap('Oh what a wonderful day it is') === "hO thaw a londerfuw yad ti si");
console.log(swap('Abcde') === "ebcdA");
console.log(swap('a') === "a");