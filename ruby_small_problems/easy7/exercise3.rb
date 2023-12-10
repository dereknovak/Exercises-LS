=begin
************** P **************
I: 
O: 
>>Requirements<<

>>Questions?<<
1. 
2. 
3. 
>>Mental Model<<

************** E **************

>>Edge Cases<<

************** D **************

************** A **************

************** C **************
=end

def word_cap(str)
  str.split.map(&:capitalize).join(' ')
end

def word_cap1(str)
  capitalized_words = str.downcase.split.map do |words|
                        characters = words.chars
                        characters[0] = characters[0].upcase
                        characters.join
                      end
  capitalized_words.join(' ')
end

def word_cap2(str)
  words = str.downcase.split
  counter = 0

  until words.size == counter
    characters = words[counter].chars
    characters[0] = characters[0].upcase
    words[counter] = characters.join
    counter += 1
  end

  words.join(' ')
end

p word_cap2('four score and seven') == 'Four Score And Seven'
p word_cap2('the javaScript language') == 'The Javascript Language'
p word_cap2('this is a "quoted" word') == 'This Is A "quoted" Word'