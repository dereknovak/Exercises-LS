```Ruby
def meal
  'Evening'
end

puts meal
```
On line 5, the defined method `meal` is invoked, which simply returns the string object `'Evening'`. This return value is passed as an argument to the `puts` method invocation, which outputs `Evening` to the console.

Because `'Evening'` is on the last line of the method definition, it will be automatically returned from the method; therefore, the `return` command is unnecessary.