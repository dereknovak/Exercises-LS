choice = nil
puts ">> Do you want me to print something? (y/n)"
loop do
  choice = gets.chomp.downcase
  break if %w(y n).include?(choice)
  puts ">> Invalid input! Please enter y or n."
end
puts "something" if choice == "y"