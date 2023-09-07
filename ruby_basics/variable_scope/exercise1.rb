a = 7

def my_value(b)
  b += 10
end

my_value(a)
puts a

# 7 will print.
# Although a is passed through a method, this does not mutate 
# a's original value. 