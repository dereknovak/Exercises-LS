=begin
************** P **************
I: 2 arrays of equal length
O: An array with input arrays combined and elements alternated
>>Requirements<<
- Input arrays will always be the same length
- Input arrays will never be empty
- New array will have elements of both arrays alternating

>>Questions?<<
1. 
2. 
3. 
>>Mental Model<<

************** E **************

>>Edge Cases<<

************** D **************

************** A **************
DEFINE interleave arr1 arr2
- INIT merged_arr
- Determine size of arrays
- LOOP
  - remove and return first elements from input arr and append to merged_arr
    - first arr1, then arr2
- RETURN merged_arr
************** C **************
=end

def interleave(arr1, arr2)
  merged_arr = []
  arr1.size.times { merged_arr << arr1.shift << arr2.shift }  
  merged_arr
end

def interleave(arr1, arr2)
  arr1.zip(arr2).flatten
end

p interleave([1, 2, 3], ['a', 'b', 'c']) == [1, 'a', 2, 'b', 3, 'c']