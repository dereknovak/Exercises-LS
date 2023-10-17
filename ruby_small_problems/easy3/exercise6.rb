=begin
************** P **************
I: 2 truthy values
O: true if 1 is truthy. false otherwise
>>Requirements<<
Write a method
Only true if 1 is true.
  AKA if both are true, false. if neither are true, false
should return the boolean object `true` or `false`
>>Questions?<<
1. 
2. 
3. 
>>Mental Model<<
IF true, false || false, true
  return `true`
************** E **************
xor?(5.even?, 4.even?) == true
xor?(5.odd?, 4.odd?) == true
xor?(5.odd?, 4.even?) == false
xor?(5.even?, 4.odd?) == false
>>Edge Cases<<

************** D **************

************** A **************

************** C **************
=end

def xor?(input1, input2)
  if input1
    input2 ? false : true
  else
    input2 ? true : false
  end
end

puts xor?(5.even?, 4.even?) == true
puts xor?(5.odd?, 4.odd?) == true
puts xor?(5.odd?, 4.even?) == false
puts xor?(5.even?, 4.odd?) == false