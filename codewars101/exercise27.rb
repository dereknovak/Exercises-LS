=begin

# EXPONENT METHOD

***** P
I: 2 integers
O: 1 integer, rep the first input to the power of the second input

- Cannot use **

***** E

***** D

***** A

=end

def power(num1, num2)
  return 1 if num2 == 0
  num2.times.with_object([]) { |_, arr| arr << num1 }.reduce(:*)
end

p power(2, 3) == 8
p power(10, 0) == 1
p power(-5, 3) == -125
p power(-4, 2) == 16
p power(10, 0) == 1
p power(2, 3) == 8
p power(3, 2) == 9
p power(-5, 3) == -125
p power(-4, 2) == 16
p power(8, -2) == nil 