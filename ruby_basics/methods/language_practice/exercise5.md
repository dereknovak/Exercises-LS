```Ruby
def car(make, model)
  puts "#{make} #{model}"
end

car('Toyota', 'Corolla')
```
On line 5, the defined `car` method is invoked and gets passed the string objects `'Toyota'` and `'Corolla'` as arguments, both of which get bound to the method's parameters `make` and `model`, respectively. Within the method, method local variables `make` and `model` are interpolated into the string object `"#{make} #{model}"`, which returns `"Toyota Corolla"` and passes it as an argument to the `puts` method invocation, outputting `Toyota Corolla` to the console.