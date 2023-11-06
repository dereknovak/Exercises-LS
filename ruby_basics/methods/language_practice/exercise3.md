```Ruby
def greet
  'Hello'
end

def location
  'World'
end

puts "#{greet} #{location}"
```
Within this code snippet exist two defined methods: `greet` and `location`. `greet` simply returns the string object `'Hello'`, while `location` returns the string object `'World'`. The return values for both methods are interpolated into the string `"#{greet} #{location}"` on line 9, which outputs `Hello World` by invocation of the `puts` method.