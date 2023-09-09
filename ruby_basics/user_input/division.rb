def valid_number?(number_string)
  number_string.to_i.to_s == number_string
end

puts "## Hi, I'm a simple integer dividing calculator! ##"

loop do
  begin
    print ">> Please enter the numerator: "
    numerator = gets.chomp
    if valid_number?(numerator) == false
      puts "** Invalid input. Must be an integer. Try again. **"
      next
    end
    print ">> Please enter the denominator: "
    denominator = gets.chomp
    if valid_number?(denominator) == false
      puts "** Invalid input. Must be an integer. Start over. **"
      next
    end
    puts "#{numerator.to_i} / #{denominator.to_i} = #{numerator.to_i / denominator.to_i}"
    break
  rescue
    puts "You can't divide by 0! Try again"
  end
end