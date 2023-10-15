=begin
*** P ***
I: A positive integer
O: The same number, reversed
>>Requirements:
- Define a method `#reversed_number`
- Revered inputted numbers
- Don't worry about leading zeros (12000 => 21)
>>Questions?
1. Do I need to validate that the input is a postive integer?
2. 
3. 
>>Mental Model
- Convert number to string
- Reverse the string, and assign to a new variable
- Covert value of new variable to integer
*** E ***
reversed_number(12345) == 54321
reversed_number(12213) == 31221
reversed_number(456) == 654
reversed_number(12000) == 21 # No leading zeros in return value!
reversed_number(12003) == 30021
reversed_number(1) == 1
>>Edge Cases
- 
*** D ***
- Strings, Integers
*** A ***
define `reversed_number` (int)
new_int == int to string reversed to i
*** C ***
=end
def reversed_number(num)
  num.to_s.reverse.to_i
end

puts reversed_number(12345) == 54321
puts reversed_number(12213) == 31221
puts reversed_number(456) == 654
puts reversed_number(12000) == 21 # No leading zeros in return value!
puts reversed_number(12003) == 30021
puts reversed_number(1) == 1

=begin

On line 1, the method call #reversed_number is defined with one parameter: num,
which references a positive integer. The #to_s method is called on the value of
num, converting it to a string, followed by the #reverse method call to reverse
its characters. Lastly, the value is converted back to an integer using the
#to_i method call, returning a reversed version of the original value. This
example demonstrates how Ruby allows multiple methods to be called on a value,
performing their operations in sequence from left to right.

=end