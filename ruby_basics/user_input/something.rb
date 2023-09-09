puts ">> Do you want me to print something? (y/n)"

loop do
  answer = gets.chomp.downcase
  if answer == "y"
    puts "something"
    break
  elsif answer == "n"   
    break 
  else
    puts "That is not a valid response, please answer: (y/n)"
  end
end