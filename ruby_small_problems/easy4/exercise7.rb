=begin
************** P **************
I: A string of integers
O: The integers in integer syntax
>>Requirements<<
- CANNOT USE TO_I or INTEGER()
- Do not worry about leading + or -
- Should analyze the string of characters
>>Questions?<<
1. Can I reference the ASCII?
2. What about leading 0s?
3. 
>>Mental Model<<
- Create a hash to compare strings with integers
- Use a case statement to compare string with integer
{ '0' => 0, '1' => 1....9 }

************** E **************
string_to_integer('4321') == 4321
string_to_integer('570') == 570
>>Edge Cases<<

************** D **************
A hash for each string/integer pair
************** A **************
- DEFINE string_to_integer(integer_str)
  - CREATE integers hash
  - CREATE sum
  - CREATE multiplier = 1
  - ITERATE thru reverse of integer_str(char)
    - sum = sum + char key in integers
    - multipler = multiplier * 10
  - RETURN sum
************** C **************
=end

def string_to_integer(integer_str)
  integer_hash = { '0' => 0, '1' => 1, '2' => 2, '3' => 3, '4' => 4,
                   '5' => 5, '6' => 6, '7' => 7, '8' => 8, '9' => 9 }
  sum = 0
  multiplier = 1

  integer_str.reverse.each_char do |char|
    sum += integer_hash[char] * multiplier
    multiplier *= 10
  end

  sum
end

p string_to_integer('4321') == 4321
p string_to_integer('570') == 570

