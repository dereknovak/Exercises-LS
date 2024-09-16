# COUNT AND GROUP CHARACTER OCCURRENCES IN A STRING

def get_char_count(str)
  down_str = str.downcase.chars
  char_count = down_str.group_by { |char| down_str.count(char) unless char =~ /[^a-z0-9]/i }
  char_count.each_value { |v| v.sort!.uniq! }
  char_count.delete(nil)
  char_count
end

p get_char_count("Mississippi") == {4=>["i", "s"], 2=>["p"], 1=>["m"]}
p get_char_count("Hello. Hello? HELLO!!") == {6=>["l"], 3=>["e", "h", "o"]}
p get_char_count("aaa...bb...c!") == {3=>["a"], 2=>["b"], 1=>["c"]}
p get_char_count("aaabbbccc") == {3=>["a", "b", "c"]}
p get_char_count("abc123") == {1=>["1", "2", "3", "a", "b", "c"]} 