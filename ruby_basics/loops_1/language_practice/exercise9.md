```Ruby
for i in 1..100
  puts i if i.odd?
end
```
On line 1, a `for` loop is employed with the range `1..100`, inclusively, assigning each value to the variable `i`. Upon each iteration, the program checks whether `i` is odd. If evaluated as true, `i` is passed as an argument to the `puts` method invocation, outputting its value to the console.

In summary, the code will output all odd integers between `1` and `100`, in sequence, on separate lines.