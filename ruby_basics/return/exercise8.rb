def count_sheep
  5.times do |sheep|
    puts sheep
  end
  10
end

puts count_sheep

# The method will print 0, 1, 2, 3, 4
# The 'puts' outside the scope will print the returned 10 because it is
# below the block.