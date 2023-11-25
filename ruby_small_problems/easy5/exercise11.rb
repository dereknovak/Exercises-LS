=begin
************** P **************
I: An integer
O: An array of integers, with each element being a sub integer of integer
>>Requirements<<
- 
>>Questions?<<
1. 
2. 
3. 
>>Mental Model<<
- Use modulo for each integer (10)
************** E **************
puts digit_list(12345) == [1, 2, 3, 4, 5]     # => true
puts digit_list(7) == [7]                     # => true
puts digit_list(375290) == [3, 7, 5, 2, 9, 0] # => true
puts digit_list(444) == [4, 4, 4]             # => true
>>Edge Cases<<

************** D **************
Array, to house all digits
************** A **************
DEFINE digit_list (num)
- INIT digits = []
- LOOP
  - Push modulus of num into digits AND divide number to get rid of a digit
    - divmod?
  - break if digits num == 1
- RETURN digits
************** C **************
=end

def digit_list(num)
  digits = []

  loop do
    digits << num % 10
    num /= 10
    break if num == 0
  end

  digits.reverse
end



# This felt like cheating...

# def digit_list(num)
#   num.digits.reverse
# end

puts digit_list(12345) == [1, 2, 3, 4, 5]     # => true
puts digit_list(7) == [7]                     # => true
puts digit_list(375290) == [3, 7, 5, 2, 9, 0] # => true
puts digit_list(444) == [4, 4, 4]             # => true