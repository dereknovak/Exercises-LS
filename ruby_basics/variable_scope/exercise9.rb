a = 7
array = [1, 2, 3]

array.each do |a|
  a += 1
end

puts a

# 7
# The 'a' being used in the block is separate from the variable
# a initialized at the beginning. Therefore, 'a' continues to
# be 7.