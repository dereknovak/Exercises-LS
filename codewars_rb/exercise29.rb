=begin

# SPLIT STRINGS

***** P
I: A strings
O: An array of strings, each element containging 2 chars

- String should be split into pairs of characters, creating an array for the whole string
- If the number of chars is odd, the last string will have an additional '_'
- If the string is empty, then an empty array will be returned

***** E
'abc' => 'ab', 'c_'
abcdef => 'ab', 'cd', 'ef'

***** D
- An array for the split chars

***** A
- Convert str to arr
- Remove the first 2 elements of the string, then place in new array pairs
  - Do this until the arr is empty
- If last element size == 1
  - Append an underscore
- Return the pairs arr

=end

def solution(str)
  pairs = []
  arr = str.chars
  return [] if arr.empty?
  pairs << arr.shift(2).join until arr.empty?
  pairs.last << '_' if pairs.last.size == 1
  pairs
end

p solution('abc') == ['ab', 'c_']
p solution('abcdef') == ['ab', 'cd', 'ef']
p solution("abcdef") == ["ab", "cd", "ef"]
p solution("abcdefg") == ["ab", "cd", "ef", "g_"]
p solution("") == [] 