=begin

# WHO LIKES IT?

***** P
I: An array of strings
O: A string, rep the person who likes the post and potential others

- If empty, "no one likes this"
- If one, 'Peter likes this'
- If 2, 'Peter and John like this'
- If 3 or more, 'Peter, John, and # others like this'

IDEAS:
- case statement
- keep track of likes

***** E

***** D
- An array, for the people who like the post

***** A
- Determine how many people like the post
  - assign to likes
- Return based on likes amount
  - 0 - none
  - 1 - likes thsi
  - 2 - person and person like this
  - 2 > - person, person, and # more like this
=end

def likes(names)
  likes = names.size

  case likes
  when 0 then "no one likes this"
  when 1 then "#{names[0]} likes this"
  when 2 then "#{names[0]} and #{names[1]} like this"
  when 3 then "#{names[0]}, #{names[1]} and #{names[2]} like this"
  else        "#{names[0]}, #{names[1]} and #{likes - 2} others like this"
  end
end