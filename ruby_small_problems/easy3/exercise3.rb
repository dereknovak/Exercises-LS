=begin
************** P **************
I: A string
O: Number of characters in string (no spaces)
>>Requirements<<
Write a program
Count and return number of characters in string
String can be multiple words, Do not count spaces
Output using String interpolation
>>Questions?<<
1. 
2. 
3. 
>>Mental Model<<
Get input from user
Split into an array, then rejoin, then count the size
Output to user
************** E **************
Please write word or multiple words: walk
There are 4 characters in "walk".
Please write word or multiple words: walk, don't run
There are 13 characters in "walk, don't run".
>>Edge Cases<<

************** D **************

************** A **************
Get string input
chars = string split join size count
String interp
************** C **************
=end

puts "Please write word or multiple words:"
string = gets.chomp

chars = string.split.join.size

puts "There are #{chars} characters in \"#{string}\"."
