=begin

NOT-EVEN SUBSTRINGS

***** P
I: A string of integers
O: An int, rep the number of odd-numbered substrings that can be formed

* If a number appears twice, it wil be used twice
* Digits are kept in order

IDEAS:
- Iterate thru each possible substring
- Analyze all substrings for odd numbers

***** E
p solve("1341") == 7
p solve("1357") == 10
p solve("13471") == 12
p solve("134721") == 13
p solve("1347231") == 20
p solve("13472315") == 28 

***** D
- An array, containing all possible substrings

***** A
DEFINE solve (str)
- INIT nums
- INIT total_range = str size
- ITERATE thru str
  - INIT range = 1
  - LOOP
    - PUSH str with range to substrs (integer form)
    - Incremenet range by 1
    - break out of loop if range equals total range
  - END
  - Decrement total_range by 1
- Count number of odd integers in substrs
END
=end

def solve(str)
  nums = []
  total_range = str.size

  str.size.times do |idx|
    1.upto(total_range) { |range| nums << str[idx, range].to_i }
    total_range -= 1
  end

  nums.count(&:odd?)
end

p solve("1341") == 7
p solve("1357") == 10
p solve("13471") == 12
p solve("134721") == 13
p solve("1347231") == 20
p solve("13472315") == 28 