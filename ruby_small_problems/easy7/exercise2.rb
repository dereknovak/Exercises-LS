=begin
************** P **************
I: A string of characters
O: A hash, representing lowercase, uppercase, and neither counter
>>Requirements<<
- Hash has 3 k/v pairs
  - lowercase: #
  - uppercase: #
  - neither: #
    * Includes anything else, including spaces
- 
>>Questions?<<
1. 
2. 
3. 
>>Mental Model<<
Use range for characters (a-z, A-Z)
************** E **************
letter_case_count('abCdef 123') == { lowercase: 5, uppercase: 1, neither: 4 }
letter_case_count('AbCd +Ef') == { lowercase: 3, uppercase: 3, neither: 2 }
letter_case_count('123') == { lowercase: 0, uppercase: 0, neither: 3 }
letter_case_count('') == { lowercase: 0, uppercase: 0, neither: 0 }
>>Edge Cases<<

************** D **************
- A string input, filled with chars
- A hash output
************** A **************
DEFINE letter_case_count (str)
- INIT char_details
  - Must set up hash
- ITERATE thru str
  - if (a-z) includes?
    - increase lowercase
  - if (A-Z) includes?
    - increase uppercase
  - Otherwise increase neither
- RETURN char_details
************** C **************
=end

def letter_case_count(str)
  char_details = { lowercase: 0, uppercase: 0, neither: 0 }

  str.each_char do |char|
    if ('a'..'z').include?(char)
      char_details[:lowercase] += 1
    elsif ('A'..'Z').include?(char)
      char_details[:uppercase] += 1
    else
      char_details[:neither] += 1
    end
  end

  char_details
end

p letter_case_count('abCdef 123') == { lowercase: 5, uppercase: 1, neither: 4 }
p letter_case_count('AbCd +Ef') == { lowercase: 3, uppercase: 3, neither: 2 }
p letter_case_count('123') == { lowercase: 0, uppercase: 0, neither: 3 }
p letter_case_count('') == { lowercase: 0, uppercase: 0, neither: 0 }