=begin
************** P **************
I: A string
O: An integer representing the sum of the ASCII values of all chars
>>Requirements<<
- Get ascii of each character and sum together
- Can use `ord` to determine ascii value
* If no string, returns 0
>>Questions?<<
1. Does the space count as a character?
2. 
3. 
>>Mental Model<<
- Use `ord` to get the value
- Iterate through all chars and sum each `ord`

************** E **************
ascii_value('Four score') == 984
ascii_value('Launch School') == 1251
ascii_value('a') == 97
ascii_value('') == 0
>>Edge Cases<<

************** D **************
Iterating through string
************** A **************
DEFINE ascii_value method (str)
- INIT ascii_sum
- ITERATE str
  - ascii_sum = ascii + str value
- RETURN ascii_sum
************** C **************
=end

def ascii_value(str)
  ascii_sum = 0
  str.each_char { |char| ascii_sum += char.ord }
  ascii_sum
end

p ascii_value('Four score') == 984
p ascii_value('Launch School') == 1251
p ascii_value('a') == 97
p ascii_value('') == 0