print ">> How many output lines would you like me to print? (number >= 3) > "

loop do
  response = gets.chomp
  if response.downcase == "q"
    puts ">> See you next time!"  # Gotta keep them coming back. :)
    break
  elsif response.to_i < 3
    print ">> That's not enough lines! Try again. (number >= 3) > "
    next
  else
    response.to_i.times { puts "Launch School is the best!"}
    print ">> Let's go again! How many this time? (Q to quit) > "
    next
  end
end