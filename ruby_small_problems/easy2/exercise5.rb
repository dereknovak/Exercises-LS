
puts "What is your name?"
name = gets.chomp

if name.end_with?('!')
  name = name.upcase.chop
 puts "HELLO #{name}. WHY ARE WE SCREAMING?"
else
  name = name.capitalize
  puts "Hello, #{name}."
end
