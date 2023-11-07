```Ruby
def meal
  return 'Breakfast'
end

puts meal
```
On line 6, the defined method `meal` is invoked, which simply returns the string object `'Breakfast'`. This return value is passed as an argument to the `puts` method invocation, which outputs `Breakfast` to the console.

It's important to note that, beacuse `'Breakfast'` is on the last line of the method definition, the `return` command is unnecessary, as it will be returned from the method regardless.