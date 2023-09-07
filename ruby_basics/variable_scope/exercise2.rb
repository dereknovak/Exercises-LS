a = 7

def my_value(a)
  a += 10
end

my_value(a)
puts a

# 7 will print.
# For the same rearson as the previous example, although 
# a is passed through a method, this does not mutate a's 
# original value. 