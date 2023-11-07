```Ruby
def add(x, y)
  x + y
end

def multiply(x, y)
  x * y
end

puts multiply(add(2, 2), add(5, 4)) == 36
```
On line 9, the defined method `multiply` is invoked and get passed 2 arguments, `add(2, 2)` and `add(5, 4)`. Both arguments invoke the defined method `add`, which returns the sum of the 2 provided arguments. In this case, `add(2, 2)` returns `4` and `add(5, 4)` returns `9`; this updates `multiply` to the expression `multiply(4, 9)`. In a similar fashion, `multiply` returns the product of the 2 provided arguments, in this case `36`, then compares it with the right operand of the `==` operator. Because both integers are `36`, the boolean object `true` is returned and output by invocation of the `puts` method.