=begin
************** P **************
I: string
O: boolean: true if palendrome, false if not
>>Requirements<<
Return a boolean for palendromes
Sensitive to: letters, numbers, punctuation, and spaces
RETURN boolean
>>Questions?<<
1. 
2. 
3. 
>>Mental Model<<

************** E **************
palindrome?('madam') == true
palindrome?('Madam') == false          # (case matters)
palindrome?("madam i'm adam") == false # (all characters matter)
palindrome?('356653') == true
>>Edge Cases<<

************** D **************

************** A **************
DEFINE `palindrome?` (str)
  str == str.reverse
end
************** C **************
=end

def palindrome?(str)
  str == str.reverse
end

puts palindrome?('madam') == true
puts palindrome?('Madam') == false          # (case matters)
puts palindrome?("madam i'm adam") == false # (all characters matter)
puts palindrome?('356653') == true

=begin

From lines 1 - 3, the `palindrome?` method is defined with 1 parameter, `str`.
Within the method, a conditional statement is employed that checks whether the
returned value from the `reverse` method's call on `str` is equal to the value
of `str` itself. If evaluated as `true`, the boolean object `true` is returned;
otherwise, `false` is returned.

=end