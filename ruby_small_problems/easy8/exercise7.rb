VOWELS = 'aeiouAEIOU'
SPECIAL_CHARS = /[^a-zA-Z]/

def double_consonants(str)
  str.each_char.with_object('') do |char, new_str|
    if VOWELS.include?(char) || char =~ SPECIAL_CHARS
      new_str << char
    else
      new_str << char * 2
    end
  end
end

p double_consonants('String') == "SSttrrinngg"
p double_consonants("Hello-World!") == "HHellllo-WWorrlldd!"
p double_consonants("July 4th") == "JJullyy 4tthh"
p double_consonants('') == ""