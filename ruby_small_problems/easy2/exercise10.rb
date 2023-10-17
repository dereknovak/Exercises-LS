=begin
*** P ***
I: An integer
O: The negative version of that integer
>>Requirements:
- Convert all inputted integers to their negative forms
  - Pos to neg
  - Neg to neg
  - 0 to 0
- RETURN

>>Questions?
1. 
2. 
3. 
>>Mental Model
- Create an if statement
  - Return number if it is less/equal to 0
  - Return Number * -1 else
*** E ***
negative(5) == -5
negative(-3) == -3
negative(0) == 0      # There's no such thing as -0 in ruby
>>Edge Cases
- 
*** D ***
- 
*** A ***
DEFINE `negative` (num)
IF num > 0
  RETURN num * -1
ELSE
  RETURN num
END
*** C ***
=end

def negative(num)
  num > 0 ? -num : num
end

puts negative(5) == -5
puts negative(-3) == -3
puts negative(0) == 0      # There's no such thing as -0 in ruby

=begin

On line 1, the negative method is defined with one parameter: num. Inside the
method, a ternary operator is employed that checks if the value referenced by
num is greater than 0. If evaluated as true, the negative version of num is
returned; otherwise, its original value is returned.

=end