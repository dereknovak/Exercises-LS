a = [1, 4, 8, 11, 15, 19]

value = a.bsearch { |i| i > 8 }
puts value  # => 11