=begin

# THE HASHTAG GENERATOR

***** P
I: A string
O: 2 options
- A boolean, if no letters or if over 140  chars
- A string, with a # prepending it, each word capitalized, and no spaces

***** E
Do We have A Hashtag => #DoWeHaveAHagtag

***** D
- An array, representing separated words

***** A
- Divide str into individual words
- Remove empty elements ('', ' ')
- Change all words to capitalized format
- Join together
- Prepend a #
- Return false if new str is longer than 140 chars

DEF generateHashtag (str)
- INIT words = str split at all spaces
- RETURN false if words is empty
- SELECT only elements that contain letters
- TRANSFORM each word to be capitalized
- JOIN elements of array into a string
  - assign to hashtag
- PREPEND '#' onto hashtag
- RETURN false if hashtag length > 140
- RETURN hashtag
END
=end

def generateHashtag(str)
  hashtag = '#' + str.split.map(&:capitalize).join
  return false if hashtag.length > 140 || str.split.empty?
  hashtag
end

p generateHashtag("") == false
p generateHashtag(" " * 200) == false
p generateHashtag("Do We have A Hashtag") == "#DoWeHaveAHashtag"
p generateHashtag("Codewars") == "#Codewars"
p generateHashtag("Codewars Is Nice") ==  "#CodewarsIsNice"
p generateHashtag("Codewars is nice") == "#CodewarsIsNice"
p generateHashtag("code" + " " * 140 + "wars") == "#CodeWars"
p generateHashtag("Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo oooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat") == false
p generateHashtag("a" * 139) == "#A" + "a" * 138
p generateHashtag("a" * 140) == false