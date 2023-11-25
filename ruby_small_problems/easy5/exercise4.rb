=begin
************** P **************
I: A string
O: A string with all words swapping the first and last characters
>>Requirements<<
- Swap the first and last characters of every word in string
- The string will containing only words and spaces
- The string will always contain at least 1 word
* Case should not be changed
>>Questions?<<
1. Am I returning a new string?
2. 
3. 
>>Mental Model<<
- Split words into substrings
- Remove and return characters using pop or shift
- 
************** E **************
swap('Oh what a wonderful day it is') == 'hO thaw a londerfuw yad ti si'
swap('Abcde') == 'ebcdA'
swap('a') == 'a'
>>Edge Cases<<

************** D **************
An array containing word substrings
************** A **************
DEFINE swap (str)
- INIT str_arr = substrings
- ITERATE str_arr (word)
  - INIT word_arr = characters
  - Remove last char and prepend
  - Remove first char and append
  - Rejoin chars
- Rejoin words
************** C **************
=end

def swap(str)
  str_arr = str.split.map do |word|
              word[0], word[-1] = word[-1], word[0]
              word
            end
  str_arr.join(' ')
end

p swap('Oh what a wonderful day it is') == 'hO thaw a londerfuw yad ti si'
p swap('Abcde') == 'ebcdA'
p swap('a') == 'a'