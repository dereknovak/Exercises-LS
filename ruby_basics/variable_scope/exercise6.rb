a = 7

def my_value(b)
  b = a + a
end

my_value(a)
puts a

# An error will print.
# The method is referencing a local variable that does not exist.