# Validates the input is an integer
def valid_number?(number_string)
  number_string.to_i.to_s == number_string && number_string.to_i != 0
end

loop do

# Gets user input. Restarts if not integer.
  print "Please enter a positive or negative integer > "
  number1 = gets.chomp
  if valid_number?(number1) == false
    puts "** Not a valid integer! Start over. **"
    next
  end

  print "Please enter a positive or negative integer > "
  number2 = gets.chomp
  if valid_number?(number2) == false
    puts "** Not a valid integer! Start over. **"
    next
  end

# Verifies that there is both a positive and negative number
  if (number1.to_i < 0 && number2.to_i < 0) || (number1.to_i > 0 && number2.to_i > 0)
    puts "Sorry, you must have both a positive and negative number. Start over."
    next
  
# Prints the solution
  else
    puts "#{number1} + #{number2} = #{number1.to_i + number2.to_i}"
    break
  end
end