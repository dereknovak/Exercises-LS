=begin
************** P **************
I: An array of strings
O: The same array with vowels removed
>>Requirements<<
- Delete vowels from inputted array
>>Questions?<<
1. Should I return the same string?
2. 
3. 
>>Mental Model<<

************** E **************

>>Edge Cases<<

************** D **************

************** A **************
DEFINE remove_vowels (arr)
- arr
************** C **************
=end

VOWELS = 'AEIOUaeiou'

def remove_vowels(strings)
  strings.map { |string| string.delete(VOWELS) }
end

p remove_vowels(%w(abcdefghijklmnopqrstuvwxyz)) == %w(bcdfghjklmnpqrstvwxyz)
p remove_vowels(%w(green YELLOW black white)) == %w(grn YLLW blck wht)
p remove_vowels(%w(ABC AEIOU XYZ)) == ['BC', '', 'XYZ']