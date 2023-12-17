=begin

***** P
I: An odd integer, representing the number of lines the diamnond will be
O: A diamond, created using *

- Input integer will always be odd
- Diamond is 4-pointed
* Each line of the diamon is an odd amount of *
* The total vertical lines create a palindrome
  - 1: 1
  - 2: 3
  - 3: 5
  - 4: 3
  - 5: 1

MM: n = 5
1:   *
2:  ***
3: *****
4:  ***
5:   *

- n always equals the longest line
- each line moving outward adds one space to beginning
  - line 2 has one space
  - line 1 has 2 spaces

***** D
- A hash, to keep track of *

***** A
DEFINE diamond (iterations)
- INIT lines hash
  - key for iterations == * x iterations (stirng)
  - Add a new key with correct * and spaces, both directions
  - Stop iterating when * == 1
- OUTPUT values

=end

def add_line!(lines, current_line, counter, asterisk_size)
  lines[current_line] = "#{' ' * counter}#{'*' * asterisk_size}"
end

def diamond(iterations)
  lines = {}
  asterisk_size = iterations
  current_line = iterations
  counter = 0
  lines[asterisk_size] = '*' * asterisk_size
  
  (iterations / 2).times do
    asterisk_size -= 2
    current_line -= 1
    counter += 1

    add_line!(lines, current_line, counter, asterisk_size)
    add_line!(lines, current_line * (2 * counter), counter, asterisk_size)
  end

  lines.keys.sort.each { |k| puts lines[k] }
end

diamond(7)
diamond(15)
diamond(25)