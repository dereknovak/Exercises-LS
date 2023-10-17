(1..99).each { |i| puts i if i.odd? }

=begin

The #each method is called on a range object whose value contains the integers
1 through 99, inclusively, and is passed a block. For each iteration within the
range, the integer is passed to the block, bound by block parameter i, and
checks whether it is odd using the #odd? method call. If truthy, i is passed as
an argument to the #puts method, outputting it's value to a separate line. This
results in a sequential output of all odd integers from 1 through 99.

=end