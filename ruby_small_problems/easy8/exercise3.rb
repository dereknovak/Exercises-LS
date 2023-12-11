def leading_substrings(str)
  substrings = []
  range = 1

  until range > str.size
    substrings << str[0, range]
    range += 1
  end

  substrings
end

def substrings(str)
  substrings = []
  
  str.each_char do |char|
    substrings << leading_substrings(str)
    str = str.delete(char)
  end

  substrings.flatten
end

p substrings('abcde') == [
  'a', 'ab', 'abc', 'abcd', 'abcde',
  'b', 'bc', 'bcd', 'bcde',
  'c', 'cd', 'cde',
  'd', 'de',
  'e'
]