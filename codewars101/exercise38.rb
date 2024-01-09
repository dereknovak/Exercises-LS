=begin

# STRING TRANSFORMER

***** P
I: A string
O: A new string with things changed

- Changes:
  - All case is swapped
  - Words are reversed from original order
- There will be multiple spaces/leading/trailing spaces

***** E
- Example Input => iNPUT eXAMPLE

***** D
- An array to house the string has it gets manipulated

***** A
- Split string into individ words, reverse the order
- Iterate through the words
  - Swap the case for all letters within the string
- RETURN the new string joined
=end

def string_transformer(str)
  str.split(/\s/).reverse.map { |word| word.chars.map(&:swapcase).join }.join(' ')
end

p string_transformer('  To be OR not to be   That is the Question')