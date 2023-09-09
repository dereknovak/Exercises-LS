# Fixed grammar from previous excercise on counts remaining
USERNAME = "dnovak"
PASSWORD = "LaunchSchool"
attempts = 3

loop do
  print ">> Please enter user name: "  # Print looks better than puts here
  response1 = gets.chomp
  print ">> Please enter password: "   # Same as above
  response2 = gets.chomp
  if USERNAME == response1 && PASSWORD == response2
    puts "Welcome, Derek!"
    break
  elsif attempts == 0
    puts "** Authorization failed! Shutting down. **"  # '**' help to emphasize error
    break
  else
    if attempts > 1
      puts "** Authorization failed! Please try again. (#{attempts} attempts remain) **"
    else
      puts "** Authorization failed! Please try again. (#{attempts} attempt remains) **"
    end
    attempts -= 1
  end
end