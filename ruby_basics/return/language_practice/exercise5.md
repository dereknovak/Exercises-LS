```Ruby
def meal
  'Dinner'
  puts 'Dinner'
end

p meal
```
The code will output `Dinner` and `nil`, in sequence, on separate lines.

On line 6, the defined method `meal` is invoked. On the last line of the method, the string object `'Dinner'` gets passed as an argument to the `puts` method invocataion, which outputs it to the console. Because `puts` always returns `nil`, this is what gets returned from the method.

`nil` is then passed as an argument to the `p` method invocation, which outputs the returned object in its original syntax. In this case, the object `nil` is output itself.