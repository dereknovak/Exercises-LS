def find_first_nonzero_among(numbers)
  numbers.each do |n|
    return n if n.nonzero?
  end
end

# Examples

find_first_nonzero_among(0, 0, 1, 0, 2, 0)
find_first_nonzero_among(1)

=begin

Example 1:
"exercise1.rb:1:in `find_first_nonzero_among': wrong number of arguments
(given 6, expected 1) (ArgumentError)"

--This is telling the user that the defined method 'find_first_nonzero_among'
calls for 1 argument, however '0, 0, 1, 0, 2, 0' contains 6 arguments.

Example 2:
"exercise1.rb:2:in `find_first_nonzero_among': undefined method `each' 
for 1:Integer (NoMethodError)"

--This is telling the user that the #each method invoked on the defined
method 'find_first_nonzero_among's parameter cannot be performed on an 
integer, which is the argument '1'.

=end