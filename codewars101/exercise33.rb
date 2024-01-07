=begin

# REPLACE WITH ALPHABET POSITION

***** P
I: A string
O: A string with all characters replaced with their alphabet position

- If not a letter, then ignore and don't return
- Case insensitive

***** E
alphabet_position("The sunset sets at twelve o' clock.")
Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" (as a string) 

***** D
An array, to deal with individ chars

***** A
- Split str into individ chars
- Delete anything that is not a letter
- Change each char to its respective position number
- Rejoin with a space in between each

DEFINE alphabet_position (str)
- SPLIT str into individ chars
- SELECT only chars that are letters
- TRANSFORM chars into their position number
- JOIN the new array deliminated by a space
END

=end

def alphabet_position(str)
  str.downcase.split('').select { |char| char =~ /[a-z]/ }.map { |char| ('a'..'z').to_a.index(char) + 1 }.join(' ')
end

p alphabet_position("The sunset sets at twelve o' clock.") == "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"
p alphabet_position("-.-'") == "" 