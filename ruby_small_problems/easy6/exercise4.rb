=begin
************** P **************
I: An array of elements
O: The SAME array with elements reversed
>>Requirements<<
- Mutate the original array so the elements are reversed.
- Individual elements should not be reversed
- CANNOT USE `reverse` methods
* An empty array will return an empty array
>>Questions?<<
1. 
2. 
3. 
>>Mental Model<<
Take an array and mutate it so that the elements are reversed.
We can sort by the element index?
************** E **************
list = [1,2,3,4]
result = reverse!(list)
result == [4, 3, 2, 1] # true
list == [4, 3, 2, 1] # true
list.object_id == result.object_id # true

list = %w(a b e d c)
reverse!(list) == ["c", "d", "e", "b", "a"] # true
list == ["c", "d", "e", "b", "a"] # true

list = ['abc']
reverse!(list) == ["abc"] # true
list == ["abc"] # true

list = []
reverse!(list) == [] # true
list == [] # true
>>Edge Cases<<

************** D **************
- An array, containing elements to be reversed.
************** A **************
DEFINE reverse (arr)
- Sort the array
  - Sort by the elements index, but in reverse order
  - Use sort! to allow mutation

************** C **************
=end

def reverse!(arr)
  arr.sort_by! { |element| -arr.index(element) }
end

list = [1,2,3,4]
result = reverse!(list)
p result == [4, 3, 2, 1] # true
p list == [4, 3, 2, 1] # true
list.object_id == result.object_id # true

list = %w(a b e d c)
p reverse!(list) == ["c", "d", "e", "b", "a"] # true
p list == ["c", "d", "e", "b", "a"] # true

list = ['abc']
p reverse!(list) == ["abc"] # true
p list == ["abc"] # true

list = []
p reverse!(list) == [] # true
p list == [] # true

