What will the following code print, and why?
```Ruby
a = 7
array = [1, 2, 3]

def my_value(ary)
  ary.each do |b|
    a += b
  end
end

my_value(array)
puts a
```
The code will throw a `NoMethodError` message.

This example demonstrates how Ruby approaches **variable scope** in regards to methods. A method has its own, self-contained scope, therefore it cannot access local variables initialized outside of its scope, nor the other way around. Even though the variable `a` is located within the scope of a block, which *can* access variables from outside of it, the block itself is contained within the defined method `my_value`.

On line 6, because block local variable `a` has not been assigned a value, the initialization of `a` assigns it to `nil` before evaluating the expression `a + b` (the long form of `a += b` is `a = a + b`). This occurs because upon variable initialization, a temporary value of `nil` is assigned to the variable until the right side of the assignment operator is evaluated. Because there is no `+` method within the `Nil` class, the `NoMethodError` exception is thrown.