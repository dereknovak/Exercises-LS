# Had some fun with this one

puts "Please enter your password:"
password = "PASSWORD"
count = 3                             # Implemented an attempt counter

loop do
  response = gets.chomp
  case
  when response == password
    puts "Welcome!"
    break
  when count == 0                     # Program haults after 3 attempts
    puts "Application terminated."
    break
  else
    puts "Invalid password! Please try again: (#{count} attempts remain)"
    count -= 1                        # Each attempt lowers count by 1
  end
end