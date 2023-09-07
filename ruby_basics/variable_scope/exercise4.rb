a = "Xyzzy"

def my_value(b)
  b[2] = '-'
end

my_value(a)
puts a

# "Xy-zy" will print.
# Unlike integers, which are immutable, strings are mutable.