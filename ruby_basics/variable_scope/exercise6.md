```Ruby
a = 7

def my_value(b)
  b = a + a
end

my_value(a)
puts a
```
The code will throw a `NameError` message.

This example demonstrates how Ruby approaches **variable scope** in regards to methods. A method has its own, self-contained scope, therefore it cannot access local variables initialized outside of its scope, nor the other way around. Because method local variable `a` was never initalized within the `my_value` method definition, Ruby is unable to locate its value when executing the `a + a` expression on line 4. The `a` initialized on line 1 is completely separate from the `a` within the method definition.