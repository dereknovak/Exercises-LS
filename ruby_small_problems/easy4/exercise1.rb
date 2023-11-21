=begin
************** P **************
I: 2 strings
O: A new string
>>Requirements<<
Explicit:
- Define a method `short_long_short`
- Determine the length of input strings
- Concatenate strings together
  - Concat is Short Long Short
- Strings will be different lengths
Implicit:
- If empty string, just returns other stirng

>>Questions?<<
1. Do I have to preserve case?
2. 
3. 
>>Mental Model<<
Get the string sizes, sort the strings, concatenate together, then return the
new string
************** E **************
short_long_short('abc', 'defgh') == "abcdefghabc"
short_long_short('abcde', 'fgh') == "fghabcdefgh"
short_long_short('', 'xyz') == "xyz"
>>Edge Cases<<

************** D **************
Array, to sort strings
************** A **************
Create array object to reference both strings, assign to `sort_array`
Sort the array small to big
  - sort_by
Concatenate elements S - L - S


************** C **************
=end

def short_long_short(str1, str2)
  sort_array = [str1, str2].sort_by { |str| str.size }
  sort_array[0] + sort_array[1] + sort_array[0]
end

p short_long_short('abc', 'defgh') == "abcdefghabc"
p short_long_short('abcde', 'fgh') == "fghabcdefgh"
p short_long_short('', 'xyz') == "xyz"