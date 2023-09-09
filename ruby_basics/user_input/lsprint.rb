puts ">> How many output lines do you want? Enter a number >= 3:"

loop do
  answer = gets.chomp.to_i
  if answer >= 3
    answer.times { puts "Launch School is the best!" } # '.times' is useful for refactoring                                                  
  else
    puts "That's not enough lines! Choose again:"
  end
end