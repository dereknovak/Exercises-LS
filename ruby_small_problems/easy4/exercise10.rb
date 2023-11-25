DIGITS = { 0 => '0', 1 => '1', 2 => '2', 3 => '3', 4 => '4',
           5 => '5', 6 => '6', 7 => '7', 8 => '8', 9 => '9' }

def integer_to_string(num)
  new_string = ''
  counter = 10
  
  loop do
    digit = num % counter
    new_string.prepend(DIGITS[digit])
    num /= counter
    break if num == 0
  end

  new_string
end

def signed_integer_to_string(num)
  if num.positive?
    integer_to_string(num).prepend('+')
  elsif num.negative?
    integer_to_string(-num).prepend('-')
  else
    '0'
  end
end


p signed_integer_to_string(4321) #== '+4321'
p signed_integer_to_string(-123) #== '-123'
p signed_integer_to_string(0) #== '0'