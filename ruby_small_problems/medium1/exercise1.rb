=begin

***** P
I: An array
O: A new array with elements rotated to the left
- Original array should not be modified
* Elements shift down in index number
  - idx 1 become 0. idx 2 become 1.
  * First element appends to end
- Cannot use rotate methods

***** D
- An array for input
- An array for output

***** A
DEF rotate_array (arr)
- INIT rotated_arr
- ITERATE thru arr
  - Assign to 1 index below current idx
  - if idx 0 then append
- RETURN rotated_arr

=end

def rotate_array(arr)
  rotated_arr = []

  arr.each_with_index do |element, idx|
    next if idx == 0
    rotated_arr << element
  end

  rotated_arr << arr.first
  rotated_arr 
end

p rotate_array([7, 3, 5, 2, 9, 1]) == [3, 5, 2, 9, 1, 7]
p rotate_array(['a', 'b', 'c']) == ['b', 'c', 'a']
p rotate_array(['a']) == ['a']

x = [1, 2, 3, 4]
p rotate_array(x) == [2, 3, 4, 1]   # => true
x == [1, 2, 3, 4]                 # => true