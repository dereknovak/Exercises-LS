What will the follwoing code print, and why?
```Ruby
a = 7
array = [1, 2, 3]

array.each do |a|
  a += 1
end

puts a
```
The code will output `7`.

On line 1, local variable `a` is initialized and refereces an integer object with the value `7`. When the `do...end` block is passed as an argument to the `each` method invocation on line 4, its defined parameter shares the same name of `a`. Because of this, when attempting to reassign `a` on line 5, the block local variable `a` will be referenced instead, preventing `a` from outside the block's scope from being reassigned.

This example illustrates how **variable shadowing** can prevent access to a local variable outside the scope of a block due to using that same variable name as its parameter. When searching for a local variable from within a block, Ruby first looks within its scope, then moves outward, returning the first reference it finds.