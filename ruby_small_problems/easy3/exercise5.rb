def multiply(num1, num2)
  num1 * num2
end

def square(num)
  multiply(num, num)
end

square(5)

=begin

On line 9, the defined method square is invoked, passing in integer 5 as an
argument, which is bound to its parameter num. Within the method, num is then
passed as both arguments for the defined method multiply, which are bound to
num1 and num2, respectively. Within multiply, num1 and num2 are multiplied
together, using the * method call, returning 15 from the method invocation.
Lastly, 15 is returned once again from the square method invocation.

=end