# KEBABIZE

def kebabize(str)
  p str
str.each_char.with_object('') do |char, new_str|
              if char =~ /[a-z]/
                new_str << char
              elsif char =~ /[A-Z]/
                new_str << '-'
                new_str << char.downcase
              end
              new_str.slice!(0) if new_str[0] == '-'
            end
end

p kebabize('myCamelCasedString') #== 'my-camel-cased-string'
p kebabize('myCamelHas3Humps') #== 'my-camel-has-humps' 