s = 'abc def ghi,jkl mno pqr,stu vwx yz'
puts s.split.inspect              
puts s.split(',').inspect
puts s.split(',', 2).inspect

# Prints [ "abc", "def" "ghi,jkl", "mno", "pqr,stu", "vwx", "yz"]
# Prints ["abc def ghi", "jkl mno pqr", "stu vwx yz"]
# Prints ["abc def ghi", "jkl mno pqr,stu vwx yz"]