a = 7

def my_value(b)
  a = b
end

my_value(a + 5)
puts a

# 7 will print.
# Again, the original variable is not mutated. Methods are self-contained
# and therefore does not influence the outer scope.