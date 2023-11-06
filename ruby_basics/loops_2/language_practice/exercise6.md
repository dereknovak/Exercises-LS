```Ruby
names = ['Sally', 'Joe', 'Lisa', 'Henry']

until names.empty?
  puts names.shift
end
```
On line 1, local variable `names` is initialized and references an array of strings, containing the elements `['Sally', 'Joe', 'Lisa', 'Henry']`. On line 3, an `until` loop is employed, which will continue looping until `names` is empty. Upon each iteration of the loop, the destructive `shift` method is called on `names`, which removes and returns the first element of the calling array. This returned value gets passed as an argument to the `puts` method invocation, which outputs it to the console.

In summary, the loop will iterate 4 times, outputting and removing each element from left to right. Each name is output on a separate line, and `names` will reference an empty array by the end of the program.