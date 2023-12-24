=begin

REPEATED SUBSTRING

***** P
I: A string
O: An array with 2 elements:
1: The minimum substring
2: The maximum number of the substring

- Analyze the string and find the smallest repeated substring
  - substring * iterations should equal the string
- If no substrings, should return the entire string

IDEAS:
- Only have to worry about the first element. If that doesn't get
multiplied, then the whole string will be returned, anyways


***** E
p f("ababab") == ["ab", 3]
p f("abcde") == ["abcde", 1] 

***** D
- An array for substrings

***** A
DEFINE f (str)
- INIT substr
- LOOP
  - PUSH str char to substr 
  - IF substr * iteration number equals str
    - RETURN substr and iteration number
  - BREAK out of loop if str size is met
- RETURN str and 1 
END

=end

def f(str)
  substr = ''
  str.size.times do |i|
    substr << str[i]
    1.upto(str.size) { |mult| return [substr, mult] if substr * mult == str }
  end
end

p f("ababab") == ["ab", 3]
p f("abcde") == ["abcde", 1]
p f("a")