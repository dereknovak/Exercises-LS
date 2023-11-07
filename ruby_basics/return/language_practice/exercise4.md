```Ruby
def meal
  puts 'Dinner'
  return 'Breakfast'
end

puts meal
```
The code will print `Dinner` and `Breakfast`, in sequence, on separate lines.

On line 6, the defined method `meal` is invoked. Within the method, the string object `'Dinner'` gets passed as an argument to the `puts` method invocation, outputting it to the console. The string object `'Breakfast'` is then returned from the method and output by invocation of the `puts` method.

It's important to note that the explicit `return` keyword is not redundant in this example, as '`Breakfast'` occurs on the last line of the method and would be implicitly returned regardless.