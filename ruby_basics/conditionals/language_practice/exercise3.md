```Ruby
sun = ['visible', 'hidden'].sample

puts "The sun is so bright!" if sun == 'visible'
puts "The clouds are blocking the sun!" unless sun == 'visible'
```
On line 1, the `sample` method is called on an array object containing the elements `['visible', 'hidden']`, which randomly returns one of its elements and assigns it to the initialized local variable `sun`.

On line 3, an `if` statement modifier is employed, which checks whether the value of `sun` is equal to the string object `visible`, outputting `The sun is so bright!` if evaluated as true. Immediately afterwards, an `unless` modifier is employed, which checks for the same condition. Instead of executing because of a truthy condition, the `unless` modifier will only execute for a falsy condition, to which it will output `The clouds are blocking the sun!`.

The example used is bad practice, with an `if...else` statement being much cleaner syntax.