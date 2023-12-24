=begin

SUBSTRING FUN

***** P 
I: An array of strings
O: A new string, formed with input strings

- In sequence, take characters from each element to form a new string
  - el 1 is index 0
  - el 2 is index 1
  - ...

***** E
p nth_char(['yoda', 'best', 'has']) == 'yes'
p nth_char([]) == ''
p nth_char(['X-ray']) == 'X'
p nth_char(['No', 'No']) == 'No'
p nth_char(['Chad', 'Morocco', 'India', 'Algeria', 'Botswana', 'Bahamas', 'Ecuador', 'Micronesia']) ==  'Codewars' 

***** D

***** A


=end

def nth_char(arr)
  new_str = ''
  arr.each_with_index { |word, idx| new_str << word[idx] }
  new_str
end

p nth_char(['yoda', 'best', 'has']) == 'yes'
p nth_char([]) == ''
p nth_char(['X-ray']) == 'X'
p nth_char(['No', 'No']) == 'No'
p nth_char(['Chad', 'Morocco', 'India', 'Algeria', 'Botswana', 'Bahamas', 'Ecuador', 'Micronesia']) ==  'Codewars' 
