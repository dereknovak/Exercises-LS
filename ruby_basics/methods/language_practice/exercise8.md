```Ruby
def assign_name(name = 'Bob')
  name
end

puts assign_name('Kevin') == 'Kevin'
puts assign_name == 'Bob'
```
On line 1, the method `assign_name` is defined with a default parameter `name`, which will assign it the string object `'Bob'` if no arguments get passed during method invocation. This method simply returns the value of method local variable `name`.

On line 5, `assign_name` is invoked and passed the string object `'Kevin'` as an argument. This returns `'Kevin'`, which is equal to the string object `'Kevin'`; therefore, the boolean object `true` is returned and output by invocation of the `puts` method.

On line 6, `assign_name` is again invoked, but this time without an argument. As described in the first paragraph, `'Bob'` will get returned from the method, which is equal to the string object `'Bob'`; therefore, the boolean object `true` will again be output.