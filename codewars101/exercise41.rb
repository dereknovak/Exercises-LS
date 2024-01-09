=begin

# BACKSPACES IN STRING

***** P
I: A string with backspaces
O: The string with backspaces implemented

- The # rep a backspace
- If more backspaces after the string has been emptied, continues to stay empty

***** E
- "abc#d##c" ==>  "ac"

- abc
- ab
- abd
- ab
- a
- ac

***** D
- An array, to alter the string

***** A
- INIT chars
- ITERATE thru str
  - IF char, PUSH to chars
  - IF #, remove the last element of chars
- RETURN chars
=end

def clean_string(str)
  chars = []
  str.each_char { |char| char == '#' ? chars.pop : chars.push(char) }
  chars.join
end

p clean_string('abc#d##c') == "ac"
p clean_string('abc####d##c#') == ""