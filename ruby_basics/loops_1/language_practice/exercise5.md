```Ruby
say_hello = true
iterations = 0

while say_hello
  puts 'Hello!'
  iterations += 1
  say_hello = false if iterations == 5
end
```

On line 1, local variable `say_hello` is initialized and references a boolean object with the value `true`. On line 2, local variable `iterations` is intialized and references an integer object with the value `0`. From lines 4-8, a `while` loop is employed, which will remain looping while the value of `say_hello` is truthy. Within each loop, `Hello!` is output, the value of `iterations` is incremented by 1, and the program checks whether `iterations` references the value `5`. If it references `5`, `say_hello` gets reassigned to `false`. Because `false` is no longer a truthy value, the loop is terminated.

In summary, the loop will iterate 5 times before termination, which outputs `Hello!` 5 times on separate lines.