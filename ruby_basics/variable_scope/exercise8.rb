array = [1, 2, 3]

array.each do |element|
  a = element
end

puts a

# An error will be printed.
# The variable 'a' was never established and therefore cannot be
# referenced.