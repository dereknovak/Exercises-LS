```Ruby
def hello
  'Hello'
end

def world
  'World'
end

def greet
  hello + ' ' + world
end

puts greet
```
On line 13, the defined `greet` method is invoked. Within the method, the return values of invoking the defined methods `hello` and `world`, which are string objects `'Hello'` and `'World'` respectively, are concatenated together along with `' '` using the `+` method. This creates the new string object `'Hello World'`, which is returned from `greet` and gets passed as an argument to the `puts` method invocation, outputting `Hello World` to the console.
