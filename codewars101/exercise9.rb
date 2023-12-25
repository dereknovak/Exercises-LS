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

def isolate_punc(arr)
  punc = []
  punc_list = ['.', ',', '-', "'"]
  
  arr.each_with_index do |char, idx|
    if punc_list.include?(char)
      punc << [char, idx]
    end
  end
  
  punc
end

def insert_punc!(arr, punc)
  punc.each { |subarr| arr.insert(subarr.last, subarr.first) }
end  

def scramble_words(str)
  words = str.split
  words.map! do |word|
    chars = word.chars
    punc = isolate_punc(chars)
    punc.each { |arr| chars.delete(arr.first) } if punc
    first, last = chars.shift, chars.pop
    chars.sort!
    chars.unshift(first)
    chars.push(last)
    insert_punc!(chars, punc) if punc
    chars.join
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