=begin

# SCRAMBLIES

***** P
I: 2 strings
O: a boolean, rep if part of str 1 can be rearranged to create str 2

- Only lowercase
- no special chars or digits

***** E
('rkqodlw', 'world') => true
RkqODLW => WORLD

'katas', 'steak') => false
KATaS => no E

***** D
- 

***** A
- ITERATE thru str2
  - IF str1 includes the current char, delete it from str1
  - OTHERWISE return false
RETURN true
=end

def scramble(str1, str2)
  str2.each_char do |char|
    if str1.include?(char)
      str1.delete(char)
    else
      return false
    end
  end

  true
end

p scramble('rkqodlw', 'world') == true
p scramble('cedewaraaossoqqyt', 'codewars') == true
p scramble('katas', 'steak') == false
p scramble('rkqodlw','world') == true
p scramble('cedewaraaossoqqyt','codewars') == true
p scramble('katas','steak') == false
p scramble('scriptjava','javascript') == true
p scramble('scriptingjava','javascript') == true 