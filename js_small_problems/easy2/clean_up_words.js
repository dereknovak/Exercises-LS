function cleanUp(string) {
  let chars = string.split('').map(char => char.match(/[a-z]/i) ? char : ' ');

  let newString = ''
  chars.forEach((char, idx) => {
    if (char.match(/[a-z]/i) || (char === ' ' && chars[idx - 1] !== ' ')) {
      newString += char;
    }
  });

  return newString;
}

console.log(cleanUp("---what's my +*& line?") === " what s my line ");