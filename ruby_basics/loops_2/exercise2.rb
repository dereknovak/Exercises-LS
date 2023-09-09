loop do
  number = rand(100)
  break if number <= 10  # Using a simple comparator 
  puts number            # Printing after break so we don't have to see the small number. :)
end                      