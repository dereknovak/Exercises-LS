number = rand(10)

if number == 5
  puts "5 is a cool number!"
else
  puts "Other numbers are cool too!"
end

# Before, '=' was used
# '=' assigns the integer '5' to 'number', which is 'truthy', and therefore will always print
# '==' specifies that if the number equals 5, it will print.