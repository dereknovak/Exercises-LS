def multiply_by_five(n)
  n * 5
end

puts "Hello! Which number would you like to multiply by 5?"
number = gets.chomp.to_i

puts "The result is #{multiply_by_five(number)}!"

=begin

Input from the user always returns a string, so when the method
is applied, the string itself is printed 5 times. Instead, #to_i should
be invoked on the user's response to convert it to an integer.

=end