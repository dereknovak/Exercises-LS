=begin

# FIND THE MISSING LETTER

***** P
I: An array of letters
O: A string, rep the missing letter (with approp case)

- Input is always valid
- Length will always be at least 2 elements

***** E
- a b c d f  => e
- O Q R S  => P

***** D
- An array, for the letters

***** A
- Create an array of letters from beginning to end of input
- Subtract input from letters
- Return the element
=end

def find_missing_letter(arr)
  ((arr.first..arr.last).to_a - arr).first
end

p find_missing_letter(['a', 'b', 'c', 'd', 'f'])