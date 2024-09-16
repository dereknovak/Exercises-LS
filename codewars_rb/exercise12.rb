# DETECT PANAGRAM

ALPHABET = ('a'..'z').to_a

def panagram?(str)
  ALPHABET.all? { |letter| str.downcase.include?(letter) }
end

p panagram?("The quick brown fox jumps over the lazy dog.") == true
p panagram?("This is not a pangram.") == false