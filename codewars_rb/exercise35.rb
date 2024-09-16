=begin

# MEXICAN WAVE

***** P
I: a string
O: An array of the input strings, creating a mexican wave

- If multiple words, then the spaces are skipped.
- If an empty strings, then an empty array is returned

***** E
'two words'
[Two words, tWo words, twO words, two Words......]

***** D
- An array for the input string words
- An array for the mexican wave

***** A
- INIT mexican_wave
- LOOP
  - Lowercase the string
  - Split str into individual chars
  - Uppercase the current index
    - skip if not a letter
  - Rejoin and push to mexican_wave
- RETURN mexican wave
=end

def wave(str)
  str.length.times.with_object([]) do |idx, mexican_wave|
    next unless str[idx] =~ /[a-z]/i
    chars = str.downcase.chars
    chars[idx].upcase!
    mexican_wave << chars.join
  end
end

p wave("hello") == ["Hello", "hEllo", "heLlo", "helLo", "hellO"]
p wave("codewars") == ["Codewars", "cOdewars", "coDewars", "codEwars", "codeWars", "codewArs", "codewaRs", "codewarS"]
p wave("") == []
p wave("two words") == ["Two words", "tWo words", "twO words", "two Words", "two wOrds", "two woRds", "two worDs", "two wordS"]
p wave(" gap ") == [" Gap ", " gAp ", " gaP "] 