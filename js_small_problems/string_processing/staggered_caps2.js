function staggeredCase(string) {
  let lastCase = 'upper';
  return [...string].map(char => {
    if (/[a-z]/i.test(char)) {
      lastCase = swap(lastCase);
      return lastCase === 'upper' ? char.toLowerCase() : char.toUpperCase();
    } else {
      return char;
    }
  }).join('');
}

const swap = lastCase => lastCase === 'upper' ? 'lower' : 'upper';

console.log(staggeredCase('I Love Launch School!') === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase('ALL CAPS') === "AlL cApS");
console.log(staggeredCase('ignore 77 the 444 numbers') === "IgNoRe 77 ThE 444 nUmBeRs");