```Ruby
def meal
  return 'Breakfast'
  'Dinner'
end

puts meal
```
On line 6, the defined method `meal` is invoked, which *explicitly* returns the string object `'Breakfast'`. This return value gets passed as an argument to the `puts` method invocation, outputting `Breakfast` to the console.

Although `'Dinner'` is on the last line of the method, an explicit `return` command will immediately return its argument, in this case `'Breakfast'`, and terminate the method. Not only was `'Dinner'` not returned from the method, but it wasn't even evaluated.