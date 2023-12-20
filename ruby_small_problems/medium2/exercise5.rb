=begin

***** P
I: 3 integers, representing the side lengths a triangle
O: A symnol, representing the kind of triangle

- If not a triangle, the symbol :invalid will output
  - sum of 2 shortest sides should be longer than 3rd
- Types of triangles:
  - equilateral
    - All 3 sides are of equal length
  - isosceles
    - 2 sides are the same, 1 is different
  - scalene
    - All 3 sides are different

IDEAS:
- sort sides by length
- validate first
- Use a hash for kinds of triangles X
- Use case statement for kinds

***** E
triangle(3, 3, 3) == :equilateral
triangle(3, 3, 1.5) == :isosceles
triangle(3, 4, 5) == :scalene
triangle(0, 3, 3) == :invalid
triangle(3, 1, 1) == :invalid

***** D

- An array, for sorting sides

***** A
DEFINE triangle (s1, s2, s3)
  - Sort nums from small => big
    - assign to short, mid, long
  - Validate that it's a triangle
  - Case statement to decide which kind of triangle
END

=end

def is_a_triangle?(s1, s2, s3)
  [s1, s2].sum > s3
end

def triangle(s1, s2, s3)  
  short, mid, long = [s1, s2, s3].sort
  return :invalid if is_a_triangle?(short, mid, long) == false

  if short == mid && short == long
    :equilateral
  elsif short == mid || short == long || mid == long
    :isosceles
  else
    :scalene
  end 
end

p triangle(3, 3, 3) == :equilateral
p triangle(3, 3, 1.5) == :isosceles
p triangle(3, 4, 5) == :scalene
p triangle(0, 3, 3) == :invalid
p triangle(3, 1, 1) == :invalid