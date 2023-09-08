a = "Xyzzy"

def my_value(b)
  b = 'yzzyX'
end

my_value(a)
puts a


# "Xyzzy" will print
# Unlike the previous problem, which mutates the string, the method's
# operator is reassigning the string to a new variable. Therefore,
# a is unchaged.