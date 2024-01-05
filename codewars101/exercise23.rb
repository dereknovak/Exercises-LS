=begin

# LONGEST ALPHABETICAL SUBSTRING

I: A string
O: The longest alphaetical substring

- Always lowercase
- Can repeat letters
- No special chars or digits

***** E
longest('asdfbyfgiklag') =='fgikl' 
Substrings:
- as
- s
- df
- f
- by
- y
- fgikl
- gikl
- ikl
- kl
- l
- ag
- g
LONGEST => fgikl

***** D
- An array, containing all the alphabetic substrings

***** A
- Find all substrings
- Select only the substrings that are in alph order
- Group the substrings by their size
- Return the first occurrence of the largest substring
END
=end

def longest(str)
  substrings = str.length.times.with_object([]) do |idx, substrings|
                 max_range = str.length - idx

                 1.upto(max_range) do |range|
                   current_substring = str[idx, range]
                   break if current_substring != current_substring.chars.sort.join
                   substrings << current_substring
                 end
               end

  size_hash = substrings.group_by(&:size)
  largest_size = size_hash.keys.max

  size_hash[largest_size].first
end

p longest('asd') == 'as'
p longest('nab') == 'ab'
p longest('abcdeapbcdef') == 'abcde'
p longest('asdfaaaabbbbcttavvfffffdf') == 'aaaabbbbctt'
p longest('asdfbyfgiklag') =='fgikl'
p longest('z') == 'z'
p longest('zyba') == 'z' 