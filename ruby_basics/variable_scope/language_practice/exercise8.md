What will the following code print, and why?
```Ruby
array = [1, 2, 3]

array.each do |element|
  a = element
end

puts a
```
The code will throw a `NameError` message.

This example illustrates how Ruby approaches **variable scope** in regards to blocks. A block establishes its own scope that can access local variables initialized outside of it, but not the other way around. When searching for the local variable `a` on line 7, Ruby cannot check within the block due to this scoping rule and therefore assumes that `a` was never initialized.