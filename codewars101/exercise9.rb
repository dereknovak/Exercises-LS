=begin

TYPOGLYCEMIA GENERATOR

***** P
I: A string
O: A string, same as input, but the characters idx 2..-2 are sorted

- First and last char should be the same, the rest are sorted alphabetically
- Punctuation should remain in place

***** E
p scramble_words('professionals') == 'paefilnoorsss'
p scramble_words('i') == 'i'
p scramble_words('') == ''
p scramble_words('me') == 'me'
p scramble_words('you') == 'you'
p scramble_words('card-carrying') == 'caac-dinrrryg'
p scramble_words("shan't") == "sahn't"
p scramble_words('-dcba') == '-dbca'
p scramble_words('dcba.') == 'dbca.'
p scramble_words("you've gotta dance like there's nobody watching, love like you'll never be hurt, sing like there's nobody listening, and live like it's heaven on earth.") == "you've gotta dacne like teehr's nbdooy wachintg, love like ylo'ul neevr be hrut, sing like teehr's nbdooy leiinnstg, and live like it's haeevn on earth."

***** D
- An array to contain and sort letters

***** A
DEFINE scramble_words (str)
- Split str into words (words)
- ITERATE thru words (map!)
  - Split words into chars array
  - destructively assign first and last letters (pop, shift)
  - sort remaining letters
  - add first/last back to word
- RETURN joined words
END

=end
require 'pry'

PUNCTUATION = ['.', ',', '-', "'"]

def replace_punctuation!(word, new_arr, punctuation)

  old_punc_idx = word.chars.index(punctuation)

  new_arr.insert(old_punc_idx, punctuation)
end

def scramble_words(str)
  words = str.split
  words.map! do |word|
    chars = word.chars

    punctuation = chars.find { |el| PUNCTUATION.include?(el) }
    chars.delete(punctuation)

    first, last = chars.shift, chars.pop
    new_chars = chars.sort
    new_chars.unshift(first)
    new_chars.push(last)
    # binding.pry
    replace_punctuation!(word, new_chars, punctuation) unless punctuation == nil
    new_chars.join
  end

  words.join(' ')
end

=begin
Notes for next time:
- Refactor
=end

p scramble_words('professionals') == 'paefilnoorsss'
p scramble_words('i') == 'i'
p scramble_words('') == ''
p scramble_words('me') == 'me'
p scramble_words('you') == 'you'
p scramble_words('card-carrying') == 'caac-dinrrryg'
p scramble_words("shan't") == "sahn't"
p scramble_words('-dcba') == '-dbca'
p scramble_words('dcba.') == 'dbca.'
p scramble_words("you've gotta dance like there's nobody watching, love like you'll never be hurt, sing like there's nobody listening, and live like it's heaven on earth.") == "you've gotta dacne like teehr's nbdooy wachintg, love like ylo'ul neevr be hrut, sing like teehr's nbdooy leiinnstg, and live like it's haeevn on earth."