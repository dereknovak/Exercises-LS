function wordCap(string) {
  let words = string.match(/\S+/g);
  return words.map(capitalize).join(' ');
}

const capitalize = word => word[0].toUpperCase() + word.toLowerCase().slice(1);

console.log(wordCap('four score and seven') === "Four Score And Seven");
console.log(wordCap('the javaScript language') === "The Javascript Language");
console.log(wordCap('this is a "quoted" word') === 'This Is A "quoted" Word');