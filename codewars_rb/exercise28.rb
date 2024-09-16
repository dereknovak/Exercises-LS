=begin

# WHERE MY ANAGRAMS AT?

***** P
I: An array of strings
O: An array of strings (anagrams)

- Return all words that have an anagram
- If none, returns an empty array

***** E
['aabb', 'abcd', 'bbaa', 'dada']
Anagrams are 'aabb' and 'bbaa'

***** D
- An array for both inputs
- An array for the ouput

***** A
- Sort all input strings in alphabetical order
- Compare each string with the input str
  - If there is a match, assign to anagrams arr
- Return the anagrams array

DEF anagrams (arr)
- INIT anagrams = []
- SORT each element of arr alphabetically
- ITERATE thru each element of arr
  - SCAN thru each element
    - PUSH element to anagrams
- RETURN anagrams
END
=end

def anagrams(word, arr)
  arr.each_with_object([]) do |str, anagrams|
    anagrams << str if str.chars.sort.join == word.chars.sort.join
  end
end

p anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) == ['aabb', 'bbaa']
p anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) == ['carer', 'racer']
p anagrams('laser', ['lazing', 'lazy',  'lacer']) == [] 