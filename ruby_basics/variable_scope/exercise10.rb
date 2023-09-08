a = 7
array = [1, 2, 3]

def my_value(ary)
  ary.each do |b|
    a += b
  end
end

my_value(array)
puts a

# An error will print.
# Methods are self-contained. Although the a is within a block, that
# block is within a method, which prevents the variable from being
# called.