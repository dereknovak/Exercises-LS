# STOP GNINNIPS MY SDROW!

def spinWords(str)
  str.split.map { |word| word.size > 4 ? word.reverse : word }.join(' ')
end

p spinWords("Hey fellow warriors") == "Hey wollef sroirraw"
p spinWords("This is a test") == "This is a test" 
p spinWords("This is another test") == "This is rehtona test"
p spinWords('test') == 'test' 