require 'pry'

def convert_to_percentage(total, num)
  (num.to_f / total) * 100
end

def letter_percentages(str)
  total_chars = str.size
  lowercase_chars = 0
  uppercase_chars = 0
  neither_chars = 0
  
  str.each_char do |char|
    lowercase_chars += 1 if char =~ /[a-z]/
    uppercase_chars += 1 if char =~ /[A-Z]/
    neither_chars += 1 if char =~ /[^a-z]/i
  end

  { lowercase: convert_to_percentage(total_chars, lowercase_chars),
    uppercase: convert_to_percentage(total_chars, uppercase_chars),
    neither:   convert_to_percentage(total_chars, neither_chars), }
end

p letter_percentages('abCdef 123') == { lowercase: 50.0, uppercase: 10.0, neither: 40.0 }
p letter_percentages('AbCd +Ef') == { lowercase: 37.5, uppercase: 37.5, neither: 25.0 }
p letter_percentages('123') == { lowercase: 0.0, uppercase: 0.0, neither: 100.0 }