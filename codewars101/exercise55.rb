=begin

# GROUPING AND COUNTING

***** P
I: An array or nil
O: A hash or nil, rep the elements and their counts

- nil returns nil
- hash
  - keys are elements
  - values are counts

***** E
1, 1, 2, 2, 2, 3 => 1: 2, 2: 3, 3: 1

***** D
- Array for input
- Hash for count

***** A
- Tally method

=end

def group_and_count(arr)
  return nil if arr == nil || arr.empty?
  arr.tally
end

p group_and_count([1,1,2,2,2,3]) == {1=>2, 2=>3, 3=>1}
p group_and_count([]) == nil
p group_and_count(nil) == nil
p group_and_count([1, 7, 5, -1]) == {1=>1, 7=>1, 5=>1, -1=>1}