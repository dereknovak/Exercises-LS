=begin

LONGEST VOWEL CHAIN

***** P
I: A string
O: An int, rep the longest string on consecutive vowels

- Vowels are aeiou
- string will have only alphabetic chars and no spaces

***** E
p solve("codewarriors") == 2
p solve("suoidea") == 3
p solve("iuuvgheaae") == 4
p solve("ultrarevolutionariees") == 3
p solve("strengthlessnesses") == 1
p solve("cuboideonavicuare") == 2
p solve("chrononhotonthuooaos") == 5
p solve("iiihoovaeaaaoougjyaw") == 8

***** D

***** A
INIT const VOWELS

DEFINE solve (str)
- INIT consec_vowels
- INIT counter to 0
- ITERATE thru str
  - IF a vowel
    - Increment counter by 1
  - IF a cons
    - PUSH counter to consec_vowels
    - RESET counter to 0
- RETURN consec_vowels max number
END

=end

VOWELS = 'aeiou'

def solve(str)
  consec_vowels = []
  counter = 0

  str.each_char do |char|
    if VOWELS.include?(char)
      counter += 1
    else
      consec_vowels << counter
      counter = 0
    end
  end
  consec_vowels << counter

  consec_vowels.max
end

p solve("codewarriors") == 2
p solve("suoidea") == 3
p solve("iuuvgheaae") == 4
p solve("ultrarevolutionariees") == 3
p solve("strengthlessnesses") == 1
p solve("cuboideonavicuare") == 2
p solve("chrononhotonthuooaos") == 5
p solve("iiihoovaeaaaoougjyaw") == 8