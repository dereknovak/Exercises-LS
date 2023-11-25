=begin
************** P **************
I: A string containing words and non-alphabetic characters
O: A string will all non-alphabetic characters replaced with a space
>>Requirements<<
- Convert all non-alphabetic characters to spaces
  - If multiple non-alphabetic characters in a row, just 1 spcae
- All words will  be lowercased
>>Questions?<<
1. Should I account for numbers, too?
2. 
3. 
>>Mental Model<<
- Use range a..z for acceptable chars
- Use split to split all words at non-alphabetic
- Rejoin right afterwards
************** E **************
cleanup("---what's my +*& line?") == ' what s my line '
>>Edge Cases<<

************** D **************
An array, to contain the acceptable words
************** A **************
DEFINE cleanup (str)
- alphabetic_chars = split at non-alph chars
- join with a space to separate
************** C **************
=end
ALPHABET = ('a'..'z').to_a

def cleanup(str)
  clean_chars = []

  str.each_char do |char|
    if ALPHABET.include?(char)
      clean_chars << char
    else
      clean_chars << ' ' unless clean_chars.last == ' '
    end
  end

  clean_chars.join
end

p cleanup("---what's my +*& line?") == ' what s my line '