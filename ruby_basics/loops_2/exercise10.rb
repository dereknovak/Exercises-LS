def greeting
  puts "Hello!"
end

number_of_greetings = 2

while number_of_greetings != 0 # Counts down until 0 is met
  greeting
  number_of_greetings -= 1
end