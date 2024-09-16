=begin

# COUNTING DUPLICATES

***** P
I: A string
O: An integer, rep the number of repeated chars

- If more than once, the counter goes up
- Case insensitive

***** E
aabBcde => 2
a appears 2
b appears 2

***** D

***** A
DEFINE duplicate_count (str)
- TALLY up the chars in str
- COUNT number of times chars is greater than 1
END
=end

def duplicate_count(str)
  str.downcase.chars.tally.count { |_, v| v > 1 }
end

p duplicate_count("") == 0
p duplicate_count("abcde") == 0
p duplicate_count("abcdeaa") == 1
p duplicate_count("abcdeaB") == 2
p duplicate_count("Indivisibilities") == 2 