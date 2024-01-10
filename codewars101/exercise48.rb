=begin

# WHERE IS MY PARENT!?

***** P
I: A string
O: A string with letters sorted, cap first and lower second

***** D
- A hash to represent the parent and all their children

***** A
- Create a hash with the parent as the key and the children as the values
- Determine how many children each parent has
- Push families to a new string
  - Start with parent, then push however many kids they have
  - alphabetical order

DEFINE find_children
- INIT reunited string
- TALLY lowercase letters
  - assign to family_count
- ITERATE thru family_count
  - PUSH to reunited
    - uppercased key will go first
    - PUSH the kids next, x amount of times
- RETURN reunited
=end

def find_children(str)
  family_count = str.downcase.chars.sort.tally

  family_count.each_with_object('') do |(k, v), reunited|
    reunited << k.upcase
    (v - 1).times { reunited << k }
  end
end

p find_children("abBA") == "AaBb"
p find_children("AaaaaZazzz") == "AaaaaaZzzz"
p find_children("CbcBcbaA") == "AaBbbCcc"
p find_children("xXfuUuuF") == "FfUuuuXx"
p find_children("") == "" 