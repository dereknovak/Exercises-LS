function songDecoder(song) {
  return song.replace(/(WUB)+/g, ' ').trim();
}

console.log(songDecoder("AWUBBWUBC") === "A B C");
console.log(songDecoder("AWUBWUBWUBBWUBWUBWUBC") === "A B C");
console.log(songDecoder("WUBAWUBBWUBCWUB") === "A B C" );