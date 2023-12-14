=begin

*********
I: An array of strings
O: An array for each set of chars that are anagrams
* The pool of words comes from the `words` variable
- Anagrams use the same letters as another word in a different order

MM:
- All? to check if all letters are the same
**********
["demo", "dome", "mode"]
["neon", "none"]
#(etc)

*********
- An array to house the pool of words
- A hash to house the anagrams

********
DEF anagram?(str1, str2)
- Does str1 letter == str2 letters?
  - Use sort to get in order


DEF anagrams (words)
- INIT anagram_list 
- ITERATE thru words
  - Determine if a word shares the same letters as the rest of the words
    - if not, create a new sub array
    - if yes, add to existing sub array
- PRINT anagram list
=end

words =  ['demo', 'none', 'tied', 'evil', 'dome', 'mode', 'live',
          'fowl', 'veil', 'wolf', 'diet', 'vile', 'edit', 'tide',
          'flow', 'neon']

def anagrams(words)
  anagram_list = {}

  words.each do |word|
    key = word.chars.sort.join
    if anagram_list.has_key?(key)
      anagram_list[key] << word
    else
      anagram_list[key] = [word]
    end
  end

  anagram_list.each_value { |v| p v }
end

anagrams(words)