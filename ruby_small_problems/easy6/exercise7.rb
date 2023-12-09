=begin
************** P **************
I: An array
O: A nested array that splits the original in half
>>Requirements<<
- If input array has an odd amount of elements, the middle goes to the first
* Even with an empty array, a nested array should still be returned
>>Questions?<<
1. 
2. 
3. 
>>Mental Model<<
Use array size to determine elements in each subarray
************** E **************
halvsies([1, 2, 3, 4]) == [[1, 2], [3, 4]]
halvsies([1, 5, 2, 4, 3]) == [[1, 5, 2], [4, 3]]
halvsies([5]) == [[5], []]
halvsies([]) == [[], []]
>>Edge Cases<<

************** D **************
An array for input
A nested array for output
************** A **************
DEFINE halvsies (arr)
- INIT nested_arr
- Determine array size
  - Divide by 2
  - ASSIGN to middle_element
- ITERATE (each_with_idx)
  - if <= middle_element push to first idx of nested_arr
  - otherwise push to 2nd idx
- RETURN nested_arr
************** C **************
=end

def halvsies(arr)
  nested_arr = [[], []]
  middle_idx = (arr.size / 2.0).ceil

  arr.each_with_index do |element, idx|
    if idx < middle_idx
      nested_arr[0] << element
    else
      nested_arr[1] << element
    end
  end

  p nested_arr
end

p halvsies([1, 2, 3, 4]) == [[1, 2], [3, 4]]
p halvsies([1, 5, 2, 4, 3]) == [[1, 5, 2], [4, 3]]
p halvsies([5]) == [[5], []]
p halvsies([]) == [[], []]