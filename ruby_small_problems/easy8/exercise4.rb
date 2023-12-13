=begin
************** P **************
I: A string
O: An array consisting of all palindromes within the string
>>Requirements<<
- Case/char sensitive
- Every palindrome should be present
  - racecar
    - racecar, aceca, cec
* Even starting with special char counts
- Duplicate palendromes should appear multiple times
- Use substrings method from previous exercise
>>Questions?<<
1. 
2. 
3. 
>>Mental Model<<

************** E **************

>>Edge Cases<<

************** D **************
Array, to contain substrings
************** A **************
DEFINE palindromes (str)
- Call substrings on str
  - Keep only the substrings that read the same for/bac
    - keep_if

************** C **************
=end

require 'pry'

def leading_substrings(str)
  substrings = []
  range = 1

  until range > str.size
    substrings << str[0, range]
    range += 1
  end

  substrings
end

def substrings(string)
  results = []
  (0...string.size).each do |start_index|
    this_substring = string[start_index..-1]
    results.concat(leading_substrings(this_substring))
  end
  results
end

def palindrome?(str)
  str == str.reverse && str.size > 1
end

def palindromes(str)
 substrings(str).select { |substring| palindrome?(substring) }
end

str = 'abcd'
p palindromes(str) == []
p palindromes('madam') == ['madam', 'ada']
p palindromes('hello-madam-did-madam-goodbye') == [
   'll', '-madam-', '-madam-did-madam-', 'madam', 'madam-did-madam', 'ada',
   'adam-did-mada', 'dam-did-mad', 'am-did-ma', 'm-did-m', '-did-', 'did',
   '-madam-', 'madam', 'ada', 'oo'
 ]
p palindromes('knitting cassettes') == [
  'nittin', 'itti', 'tt', 'ss', 'settes', 'ette', 'tt'
]