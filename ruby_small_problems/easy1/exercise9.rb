=begin
*** P ***
I: A string of characters/spaces
O: A string of 1 or 2 characters/spaces
>>Requirements:
- Define a method `center_of`
- Argument cannot be empty
- If odd string size, 1 returned character
- If even string size, 2 returned characters
- RETURN
>>Questions?
1. Does the return need to be case-sensitive?
2. 
3. 
>>Mental Model
- Determine size of string
- If odd, return 1 less than string size / 2 index value
- If even, return 1 string size / 2 AND 1 less than that's index value
*** E ***
center_of('I love ruby') == 'e'
center_of('Launch School') == ' '
center_of('Launch') == 'un'
center_of('Launchschool') == 'hs'
center_of('x') == 'x'
>>Edge Cases
- 
*** D ***

*** A ***
define `center_of` (str)
center_char = ''
IF str size odd
  center_char << (str size / 2) - 1 index
ELSE
  center_char concat (string size / 2 index, string size) and string size / 2 -1 index
return center_char
*** C ***
=end

def center_of(str)
  str.size.odd? ? str[(str.size / 2)] : str[(str.size / 2) - 1, 2]
end

puts center_of('I love ruby') == 'e'
puts center_of('Launch School') == ' '
puts center_of('Launch') == 'un'
puts center_of('Launchschool') == 'hs'
puts center_of('x') == 'x'