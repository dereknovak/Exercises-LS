=begin
************** P **************
I: Integer (year)
O: String (century)
>>Requirements<<
Explicit:
- String should have the correct `th` afterwards
- 
Implicit
- Should account for any year (1 - xxxxxx)
- Do not have to worry about 0
>>Questions?<<
1. 
2. 
3. 
>>Mental Model<<
Examples
- 1st
- 2nd
- 3rd
- 4-10th
- 11th
- 12th
- 13th
Divide year by 100, round up to nearest integer
Create constant that includes all string endings (st nd rd th)
************** E **************
century(2000) == '20th'
century(2001) == '21st'
century(1965) == '20th'
century(256) == '3rd'
century(5) == '1st'
century(10103) == '102nd'
century(1052) == '11th'
century(1127) == '12th'
century(11201) == '113th'
>>Edge Cases<<

************** D **************
Hash, for keeping string endings

************** A **************
- Create an array `str_endings` to reference all possible endings
  - ['st', 'nd', 'rd', 'th']
- Divide number by 100, round up to nearest integer
  - `get_century` helper method
  - Convert to string
- Concatenate appropriate ending
  - `append_string` helper method
  - Ends with 1 - st
  - Ends with 2 - nd
  - Ends with 3 = rd
  - Ends with 4 - 9 or 0 - th
  - EXCEPTIONS (11, 12, 13)
************** C **************
=end

def get_century(year)
  (year / 100.0).ceil
end

def get_suffix(century)
  return 'th' if [11, 12, 13].include?(century % 100)
  last_digit = century % 10

  case last_digit
  when 1 then 'st'
  when 2 then 'nd'
  when 3 then 'rd'
  else        'th'
  end
end

def century(year)
  century = get_century(year)
  suffix = get_suffix(century)
  century.to_s + suffix
end

p century(2000) == '20th'
p century(2001) == '21st'
p century(1965) == '20th'
p century(256) == '3rd'
p century(5) == '1st'
p century(10103) == '102nd'
p century(1052) == '11th'
p century(1127) == '12th'
p century(11201) == '113th'