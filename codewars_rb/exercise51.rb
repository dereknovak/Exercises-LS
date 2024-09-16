=begin

# DECIPHER THIS!

***** P
I: A string, coded
O: A string, the coded string decoded

- 2nd and last letters are swapped
- the first letter is replaced by character code

***** E
65 119esi 111dl 111lw 108dvei 105n 97n 111ka
A  wise    old   owl   lived   in  an   oak

***** A
- Split str into words
- Transform words
  - Pull the number out of the word
  - Replace the number with its char
  - Swap the 2nd and last letter
  - Rejoin word
- Return words, rejoined
=end

def decipher_this(str)
  words = str.split

  words.map! do |word|
    number = ''
    word.each_char { |char| number << char if char =~ /[0-9]/ }
    word.slice!(0, number.size)
    word = word.chars
    word[0], word[-1] = word[-1], word[0]
    number.to_i.chr << word.join
  end

  words.join(' ')
end

p decipher_this("65 119esi 111dl 111lw 108dvei 105n 97n 111ka") == "A wise old owl lived in an oak"
p decipher_this("84eh 109ero 104e 115wa 116eh 108sse 104e 115eokp") == "The more he saw the less he spoke"
p decipher_this("84eh 108sse 104e 115eokp 116eh 109ero 104e 104dare") == "The less he spoke the more he heard"
p decipher_this("87yh 99na 119e 110to 97ll 98e 108eki 116tah 119esi 111dl 98dri") == "Why can we not all be like that wise old bird"
p decipher_this("84kanh 121uo 80roti 102ro 97ll 121ruo 104ple") == "Thank you Piotr for all your help" 