=begin

# HIGHEST SCORING WORD

***** P
I: A string containing multiple words
O: A string: the word that has the highest count

- Scoring is determined by letter values
  - a = 1, b = 2, c = 3.......
- Only lowercased is used

***** E
man i need a taxi up to ubud
28  9  28  1  56  37  35  48

***** D
- An array for all individual words

***** A
- Split str in individ words
- Retreive score for each word
  - Create an array for alphabet
    - use the index for score
    - 0 should be empty
- Return word with highest score
=end

ALPHA = [nil] + ('a'..'z').to_a

def high(str)
  str.split.max_by { |word| word.chars.sum { |char| ALPHA.index(char) } }
end

p high('man i need a taxi up to ubud') == 'taxi'
p high('what time are we climbing up the volcano') == 'volcano'
p high('take me to semynak') == 'semynak'
p high('aaa b') == 'aaa' 