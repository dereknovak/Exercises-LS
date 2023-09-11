greeting = 'Hello!'
puts greeting.replace('Goodbye!')  # Destructive, replacing original string with argument

greeting = 'Hello!'
puts greeting.gsub!('Hello!', 'Goodbye!')    # Non-destructive, unless '!' is used.