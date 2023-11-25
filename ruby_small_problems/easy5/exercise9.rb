=begin
************** P **************
I: A string
O: A new string with all repeated characters collapsed into 1 char
>>Requirements<<
- CANNOT use squeeze
- Collapse repeated chars into a single char
>>Questions?<<
1. 
2. 
3. 
>>Mental Model<<
- Create a new string and push each char one at a time into it
  - Check if previous push was the current char
************** E **************
crunch('ddaaiillyy ddoouubbllee') == 'daily double'
crunch('4444abcabccba') == '4abcabcba'
crunch('ggggggggggggggg') == 'g'
crunch('a') == 'a'
crunch('') == ''
>>Edge Cases<<

************** D **************
Strings
************** A **************
DEFINE crunch (str)
- INIT new_str
- ITERATE through all str chars
  - Push chars to new_str unless the last is the same element
- RETURN
************** C **************
=end

def crunch(str)
  new_str = ''
  str.each_char { |char| new_str << char unless new_str[-1] == char }
  new_str
end

p crunch('ddaaiillyy ddoouubbllee') == 'daily double'
p crunch('4444abcabccba') == '4abcabcba'
p crunch('ggggggggggggggg') == 'g'
p crunch('a') == 'a'
p crunch('') == ''