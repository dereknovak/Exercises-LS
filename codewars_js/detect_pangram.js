function isPangram(string) {
  const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';

  for (let i = 0; i < ALPHABET.length; i++) {
    let regex = new RegExp(ALPHABET[i], 'i');
    if (!regex.test(string)) return false;
  }

  return true;
}

console.log(isPangram('The quick brown fox jumps over the lazy dog.') === true);
console.log(isPangram("This is not a pangram.") === false);