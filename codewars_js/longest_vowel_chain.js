function longestVowelChain(string) {
  return Math.max(...(string.match(/[aeiou]+/ig) || ['']).map(chain => chain.length));
}

console.log(longestVowelChain("codewarriors") === 2);
console.log(longestVowelChain("suoidea") === 3);
console.log(longestVowelChain("iuuvgheaae") === 4);
console.log(longestVowelChain("ultrarevolutionariees") === 3);
console.log(longestVowelChain("strengthlessnesses") === 1);
console.log(longestVowelChain("cuboideonavicuare") === 2);
console.log(longestVowelChain("chrononhotonthuooaos") === 5);
console.log(longestVowelChain("iIihoovaeaAaOougjyaw") === 8 );
console.log(longestVowelChain("brdthyp") === 0 );