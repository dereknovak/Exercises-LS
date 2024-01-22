=begin

# WEIRD STRING CASE

***** P
I: A string
O: THE SAME STRING, with weird case

- For every word
  - Even indexes are upper
  - Odd indexes are lower

***** E
Weird string case => WeIrD StRiNg CaSe

***** D
- An array for individual words

***** A
- Iterate thru each char with index
  - if index even
    - uppercase!!!
  - else
    - downcase!!!
Return string

=end

def weirdcase(str)
  str.replace(str.split.map { |word| word.chars.map.with_index { |char, idx| idx.even? ? char.upcase : char.downcase }.join }.join(' '))
end

str = 'Weird string case'
p weirdcase(str) == "WeIrD StRiNg CaSe"
p weirdcase(str).object_id == str.object_id