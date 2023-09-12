numbers = [5, 2, 9, 6, 3, 1, 8]

even_numbers = numbers.select do |n|
                 n if n.even?
               end
            
p even_numbers

=begin

The method #map iterates on ALL of the variables within the array, and
returns their value. If a value is not in agreement with the method, then
'nil' is produced, as we can see by the result.

Instead, #select should be used, as this method only returns the variables
that are considered true within the method.

=end