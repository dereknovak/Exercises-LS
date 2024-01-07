=begin

# ANAGRAM DIFFERENCE

 ***** P
I: 2 strings
O: An integer, rep the number of total chars needed to be removed to create an anagram

- Final returned integer should be the sum of the 2 removed
  - If word 1 loses 2 chars and word 2 loses 3 chars, then 5 chars total
- Only worry about lowercase

***** E
'ab' 'cd' => 4
(2)   (2)

'ab' 'ba' => 0

***** D

***** A
- Sort both strings into alph order
- Determine which chars are in both strings
  - count the number of missing chars from each string
    - Assign to missing_chars
- Determine how many of of each char are in the str
  - If numbers are different, add their difference to missing_chars

DEF anagram_difference(str1, str2)
  - Sort the strs alph
  - INIT missing_chars
  - ITERATE thru str1
    - IF a char is included in str2, then true
    - IF a char is not, the false
    - (partition)
    - Assign to str1_chars
  - ITERATE thru str2
    - same as above, but str2_chars

  - Add the size of missing chars for both to missing_chars
  - ITERATE thru l
END

=end

def anagram_difference(str1, str2)
  str1_chars = str1.chars.partition { |char| str2.include?(char) }
  str2_chars = str2.chars.partition { |char| str1.include?(char) }

  missing_chars = str1_chars[1].size + str2_chars[1].size

  str1_count = str1_chars[0].tally
  str2_count = str2_chars[0].tally

  str1_count.each do |k, v|
    missing_chars += (v - str2_count[k]).abs if v != str2_count[k]
  end

  missing_chars
end


p anagram_difference('', '') == 0
p anagram_difference('a', '') == 1
p anagram_difference('', 'a') == 1
p anagram_difference('ab', 'a') == 1
p anagram_difference('ab', 'ba') == 0
p anagram_difference('ab', 'cd') == 4
p anagram_difference('aab', 'a') == 2
p anagram_difference('a', 'aab') == 2
p anagram_difference('codewars', 'hackerrank') == 10 