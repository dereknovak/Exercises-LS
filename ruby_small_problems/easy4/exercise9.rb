# Should've used PEDAC........

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

p integer_to_string(4321) == '4321'
p integer_to_string(0) == '0'
p integer_to_string(5000) == '5000'