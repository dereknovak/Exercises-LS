=begin

RETURN SUBSTRING INSTANCE COUNT

***** P
I:
- A string
- A string, representing the substring the method will search
O: An integer, rep the number of times the substr is found in str

***** E
p solution('abcdeb','b') == 2
p solution('abcdeb', 'a') == 1
p solution('abbc', 'bb') == 1 

***** D

***** A
DEFINE solution (str, substr)
  - Count number of times substr is in str
END
=end

def solution(str, substr)
  str.scan(substr).size
end

p solution('abcdeb','b') == 2
p solution('abcdeb', 'a') == 1
p solution('abbc', 'bb') == 1 