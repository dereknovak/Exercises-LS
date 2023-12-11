def leading_substrings(str)
  substrings = []
  range = 1

  until range > str.size
    substrings << str[0, range]
    range += 1
  end

  substrings
end

p leading_substrings('abc') == ['a', 'ab', 'abc']
p leading_substrings('a') == ['a']
p leading_substrings('xyzzy') == ['x', 'xy', 'xyz', 'xyzz', 'xyzzy']