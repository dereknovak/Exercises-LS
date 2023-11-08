```Ruby
colors = ['red', 'yellow', 'purple', 'green']

colors.each { |color| puts "I'm the color #{color}!" }
```
On line 1, local variable `colors` is initialized and references an array object containing the elements `['red', 'yellow', 'purple', 'green']`. On line 3, the `each` iterator method is called on `colors` and gets passed a `{}` block as an argument. Upon each iteration of the block, the current element of `colors` gets bound to the block parameter `color`. `color` is then interpolated into the string `"I'm the color #{color}!"`, which prints an output such as `I'm the color red!` for each color within the caller's array.