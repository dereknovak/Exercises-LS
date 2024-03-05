=begin

***** P
I: A string, rep an encrypted name
O: A string, rep the name solved

- Uses Rot13
  - Shifts letter by 13 places
  - A..M
    - Add 13
  - N..Z
    - Sub 13

***** E
Nqn Ybirynpr

***** D
- An array for letters A..M

***** A
- Create an array of letters A-M
- Convert str to an arry of chars
- Iterate thru chars
  - Return the char if not a letter
  - If A..M
    - Convert to num, add 13, then convert back
  - Else
    - Convert to num, sub 13, then convert back
- Rejoin the chars
=end

def encrypt_rot13(name)
  decoded = name.chars.map do |char|
              case char
              when /[a-m]/i then (char.ord + 13).chr
              when /[m-z]/i then (char.ord - 13).chr
              else char
              end
            end
  decoded.join
end

p encrypt_rot13('Nqn Ybirynpr')