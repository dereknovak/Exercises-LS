=begin
************** P **************
I: Integer (year)
O: Boolean
>>Requirements<<
- Return whether year is a leap year (true/false)
  - Leap years are divisible by 4, unless also divisible by 400
- All years are greater than 0

>>Questions?<<
1. 
2. 
3. 
>>Mental Model<<
Input a year, check whether its divisible by 4 and 400, use if statement to 
return boolean
************** E **************
leap_year?(2016) == true
leap_year?(2015) == false
leap_year?(2100) == false
leap_year?(2400) == true
leap_year?(240000) == true
leap_year?(240001) == false
leap_year?(2000) == true
leap_year?(1900) == false
leap_year?(1752) == true
leap_year?(1700) == false
leap_year?(1) == false
leap_year?(100) == false
leap_year?(400) == true
>>Edge Cases<<

************** D **************

************** A **************
- Define `leap_year?`
- IF year is divisible by 4 AND not divisible by 400
  - Return true
Otherwise
  - Return false

************** C **************
=end

def leap_year?(year)
  if year % 400 == 0
    true
  elsif year % 100 == 0
    false
  else
    year % 4 == 0
  end
end

p leap_year?(2016) == true
p leap_year?(2015) == false
p leap_year?(2100) == false
p leap_year?(2400) == true
p leap_year?(240000) == true
p leap_year?(240001) == false
p leap_year?(2000) == true
p leap_year?(1900) == false
p leap_year?(1752) == true
p leap_year?(1700) == false
p leap_year?(1) == false
p leap_year?(100) == false
p leap_year?(400) == true