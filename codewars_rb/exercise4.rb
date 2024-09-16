=begin

ALPHABET SYMMETRY

***** P
I: An array of strings
O: An array of int, rep number of symetrical characters

* Will always be 3 elements
- Symmetrical chars
  - a is index 1
  - b is index 2
  - ...
- Case does not matter

***** E
p solve(["abode","ABc","xyzD"]) == [4,3,1]
p solve(["abide","ABc","xyz"]) == [4,3,0]
p solve(["IAMDEFANDJKL","thedefgh","xyzDEFghijabc"])== [6,5,7]
p solve(["encode","abc","xyzD","ABmD"]) == [1, 3, 1, 3] 

***** D
- An array for input
- An array for output

***** A
INIT characters const

DEFINE solve (arr)
- INIT symmetrical_chars arr
- ITERATE thru arr
  - INIT counter to 0
  - ITERATE thru each char
    - If char matches the correct index
      - Increment count by 1
  - Push counter to symmetrical_chars
- RETURN symmetrical_chars
END

=end

ALPHABET = ('a'..'z').to_a

def solve(arr)
  symmetrical_chars = []

  arr.each do |word|
    counter = 0
    word.each_char.with_index do |char, i|
      counter += 1 if ALPHABET[i] == char.downcase
    end

    symmetrical_chars << counter
  end

  symmetrical_chars
end

p solve(["abode","ABc","xyzD"]) == [4,3,1]
p solve(["abide","ABc","xyz"]) == [4,3,0]
p solve(["IAMDEFANDJKL","thedefgh","xyzDEFghijabc"])== [6,5,7]
p solve(["encode","abc","xyzD","ABmD"]) == [1, 3, 1, 3] 