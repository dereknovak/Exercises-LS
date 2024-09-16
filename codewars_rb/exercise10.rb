=begin

MOST FREQUENTLY USED WORDS IN A TEXT

***** P
I: A string
O: An array, rep 3 most used words

- May contain an apostrophe
- Case sensitive
- If less than 3 words, no empty spots in array
- Output should be from largest to smallest

IDEAS:
- hash for word + count

Questions:
- What if multiple words share same amount? What if more than 3?

***** E
p top_3_words("a a a  b  c c  d d d d  e e e e e") == ["e", "d", "a"]
p top_3_words("e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e") == ["e", "ddd", "aa"]
p top_3_words("  //wont won't won't ") == ["won't", "wont"]
p top_3_words("  , e   .. ") == ["e"]
p top_3_words("  ...  ") == []
p top_3_words("  '  ") == []
p top_3_words("  '''  ") == []
p top_3_words("""In a village of La Mancha, the name of which I have no desire to call to mind, there lived not long since one of those gentlemen that keep a lance in the lance-rack, an old buckler, a lean hack, and a greyhound for coursing. An olla of rather more beef than mutton, a salad on most nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra on Sundays, made away with three-quarters of his income.""") == ["a", "of", "on"]

***** D
- A hash for word + count
- An array for most used words

***** A
DEFINE top_3_words (str)
- INIT word_count hash, default to 0
- Remove all punctuation except for apostrophes
- Split str into words
- ITERATE thru words
  - Add 1 to word in word_count hash
- INIT keys, sorted from most occurrences to least
- RETURN top 3 keys as an array

END

=end

def top_3_words(str)
  word_count = Hash.new(0)
  str.delete!(".,?!:;/")
  str.split.each { |word| word_count[word] += 1 unless word.chars.none? { |char| char =~ /[a-z]/i } }
  word_count.keys.sort_by { |k| -word_count[k] }.first(3)
end

p top_3_words("a a a  b  c c  d d d d  e e e e e") == ["e", "d", "a"]
p top_3_words("e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e") == ["e", "ddd", "DdD"]
p top_3_words("  //wont won't won't ") == ["won't", "wont"]
p top_3_words("  , e   .. ") == ["e"]
p top_3_words("  ...  ") == []
p top_3_words("  '  ") == []
p top_3_words("  '''  ") == [] 
p top_3_words("""In a village of La Mancha, the name of which I have no desire to call to mind, there lived not long since one of those gentlemen that keep a lance in the lance-rack, an old buckler, a lean hack, and a greyhound for coursing. An olla of rather more beef than mutton, a salad on most nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra on Sundays, made away with three-quarters of his income.""") == ["a", "of", "on"]


