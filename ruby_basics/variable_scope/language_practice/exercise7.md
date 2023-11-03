What will the following code print, and why?
```Ruby
a = 7
array = [1, 2, 3]

array.each do |element|
  a = element
end

puts a
```
The code will output `3`.

On line 1, local variable `array` is initialized and references an array of integers, containing the elements `[1, 2, 3]`. On line 4, the `each` iterator method is called on `array`, passing a `do...end` block with one parameter, `element`, as an argument. Within each block iteration, an element within the `a` array is bound to `element` and assigned as the new object referenced by `a`. Because the final iteration of the block assigned `3` to `a`, this value is what gets output when `a` is passed as an argument to the `puts` method invocation on line 8.

This example illustrates how Ruby approaches **variable scope** in regards to blocks. A block establishes its own scope that can access local variables initialized outside of it, but not the other way around.