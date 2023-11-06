```Ruby
def greeting
  puts 'Hello!'
end

number_of_greetings = 2

while number_of_greetings > 0
  greeting
  number_of_greetings -= 1
end
```
On line 5, local variable `number_of_greetings` is initialized and references an integer object with the value `2`. On line 7, a `while` loop is employed, which continues looping while `number_of_greetings` is greater than `0`. Upon each iteration of the loop, the defined `greeting` method is invoked, which simply outputs `Hello!` by invocation of the `puts` method, and `number_of_greetings` gets decremented by `1`.

In summary, the loop will output `Hello!` twice, on separate lines, before `number_of_greetings` equals `0`, thus terminating the loop.