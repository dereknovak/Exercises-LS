```Ruby
sun = ['visible', 'hidden'].sample

unless sun == 'visible'
  puts "The clouds are blocking the sun!"
end
```
On line 1, the `sample` method is called on an array object containing the elements `['visible', 'hidden']`, which returns a random element and assigns it to the initialized local variable `sun`. On line 3, an `unless` condition is employed, which checks whether the value of `sun` is equal to the string object `visible`. If evaluated as false, `The clouds are blocking the sun!` will output by invocation of the `puts` method; otherwise, nothing will occur.

Because `sample` returns a random element, each run of the code will produce a random result.