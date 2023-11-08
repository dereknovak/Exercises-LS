```Ruby
sun = ['visible', 'hidden'].sample

if sun == 'visible'
  puts "The sun is so bright!"
end

```
On line 1, the `sample` method is called on an array object containing the elements `['visible', 'hidden']`, which randomly returns one of its elements and assigns it to the initialized local variable `sun`. On line 3, an `if` condition is employed, which checks if the value of `sun` is equal to the string object `'visible'`. If evaluated as true, `The sun is so bright!` will output by invocation of the `puts` method; otherwise, nothing will occur.

Because `sample` returns a random element, each run of the code will produce a random result.