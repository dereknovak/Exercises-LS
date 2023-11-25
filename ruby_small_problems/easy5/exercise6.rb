=begin
************** P **************
I: A string
O: A hash containing keys of word lengths and values of the number of iterations
>>Requirements<<
- Count number of characters in a string
  - Everything counts as a char except ' '
  - The keys of the hash represent the size of string
  - The corresponding value is the amount of words with that many chars
* Doesn't have to be in any kind of order

>>Questions?<<
1. 
2. 
3. 
>>Mental Model<<

************** E **************
word_sizes('Four score and seven.') == { 3 => 1, 4 => 1, 5 => 1, 6 => 1 }
word_sizes('Hey diddle diddle, the cat and the fiddle!') == { 3 => 5, 6 => 1, 7 => 2 }
word_sizes("What's up doc?") == { 6 => 1, 2 => 1, 4 => 1 }
word_sizes('') == {}
>>Edge Cases<<

************** D **************
- Hash, to contain word lengths and iterations
- Array, to separate words
************** A **************
DEFINE word_sizes (str)
- INIT word_count hash
- Divide string into word substrings
  - INIT words = substrings
- ITERATE through words
  - Count number of chars in word
  - Push count into word_count
  - If count exists, add 1 to value
- RETURN word_count
************** C **************
=end

def word_sizes(str)
  word_count = Hash.new(0)
  str.split.each { |word| word_count[word.size] += 1 }
  word_count
end


p word_sizes('Four score and seven.') == { 3 => 1, 4 => 1, 5 => 1, 6 => 1 }
p word_sizes('Hey diddle diddle, the cat and the fiddle!') == { 3 => 5, 6 => 1, 7 => 2 }
p word_sizes("What's up doc?") == { 6 => 1, 2 => 1, 4 => 1 }
p word_sizes('') == {}