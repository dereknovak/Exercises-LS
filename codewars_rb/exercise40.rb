=begin

# DUPLICATE ENCODER

***** P
I: A string
O: A new string where chars are converted to ()

- ( if the char only appears once
- ) if the char appears multiple times
- A space counts as a char
- case insensitive

***** A
- Count the number of times a char appears in a string
- If 1, change to (
- If more, change to )
- RETURN the new string

DEFINE duplicate_encode (str)
- INIT encoded_str
- TALLY number of times a char appears
- ITERATE thru each char of str
  - IF count is 1
    - PUSH ( to encoded_str
  - ELSE
    - PUSH ) to encoded_str
- RETURN encoded_str
END
=end

def duplicate_encode(str)
  counts = str.downcase.chars.tally
  
  str.each_char.with_object('') do |char, encoded_str|
    encoded_str << (counts[char.downcase] == 1 ? '(' : ')')
  end
end

p duplicate_encode("din") == "((("
p duplicate_encode("recede") == "()()()"
p duplicate_encode("Success") == ")())())"
p duplicate_encode("(( @") == "))((" 