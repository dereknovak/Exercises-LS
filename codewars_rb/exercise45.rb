=begin

# ALPHABETIZED

***** P
I: A string
O: A new string with whitespace/punct removed and chars in alph order

- Case insensitive
- No spaces/special chars are included in return
- Returned chars keep their case
- If no chars, return an empty string

***** E
The Holy Bible => BbeehHilloTy

***** D

***** A
DEFINE alphabetized (str)
- Split str into chars
- Delete everything except letters
- Sort letters alphabetically
- Rejoin letters
END
=end

def alphabetized(str)
  str.chars.select { |char| char =~ /[a-z]/i }.sort_by(&:downcase).join
end

p alphabetized("") == ""
p alphabetized(" ") == ""
p alphabetized(" a") == "a"
p alphabetized("a ") == "a"
p alphabetized(" a ") == "a"
p alphabetized("A b B a") == "AabB"
p alphabetized(" a b c d e f g h i j k l m n o p q r s t u v w x y z A B C D E F G H I J K L M N O P Q R S T U V W X Y Z") == "aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ"