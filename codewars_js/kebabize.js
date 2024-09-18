function kebabize(string) {
  let kebabString = '';

  [...string].forEach(letter => {
    if (/[a-z]/.test(letter)) {
      kebabString += letter 
    } else if (/[A-Z]/.test(letter)) {
      kebabString += `-${letter.toLowerCase()}`;
    }
  });

  return kebabString[0] === '-' ? kebabString.slice(1) : kebabString;
}

console.log(kebabize('myCamelCasedString') === 'my-camel-cased-string');
console.log(kebabize('myCamelHas3Humps') === 'my-camel-has-humps' );