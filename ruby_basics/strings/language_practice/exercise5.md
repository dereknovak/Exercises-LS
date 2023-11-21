```Ruby
first_name = 'John'
last_name = 'Doe'

full_name = "#{first_name} #{last_name}"
puts full_name
```
On lines 1 and 2, local variables `first_name` and `last_name` are initialized and reference the string objects `'John'` and `'Doe'`, respectively. On line 4, both variables are interpolated into the string `"#{first_name} #{last_name}"`, which returns the string object `"John Doe"` and assigns it to the initialized local variable `full_name`. `full_name` is then passed as an argument to the `puts` method invocation, which outputs it to the console.