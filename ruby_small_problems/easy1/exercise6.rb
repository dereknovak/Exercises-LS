=begin

PEDAC Template
==============

(Understand the) Problem
------------------------

-  Inputs: A positive integer
-  Output: A right triangle, made of *, that has all sides == input

---

**Problem Domain:**

- Right triangle must have all sides == input
- Hypotenuse must range from lower left to upper right
- 
---

**Implicit Requirements:**

- PRINT, do not return
- first iteration does not print anything
---

**Clarifying Questions:**

1.
2.
3.

---

**Mental Model:**
- Will need to use an ITERATOR
- May use #rjust
- Each iteration adds another *
- Iteration stops after * count == input
- Need to initize a string and concatenate * onto it
---

Examples / Test Cases / Edge Cases
----------------------------------

**Examples:**

triangle(5)

    *
   **
  ***
 ****
*****

triangle(9)

        *
       **
      ***
     ****
    *****
   ******
  *******
 ********
*********

---

_Your Test Cases:_

-  Example 3
  -  Inputs:
  -  Output:

---

_Your Edge Cases:_

-  Example 4
  -  Inputs:
  -  Output:

---

Data Structure
--------------
Define method `triangle` with one paramter, triangle_size
triangle_size times ITERATE
  print astric * iteration -- justify right

---

Algorithm
---------
define `triangle` (triangle_size)
triangle_size.times ITERATE
  print ('*' * iteration).rjust


Code
----

=end

def triangle(triangle_size)
  triangle_size.times { |i| puts ('*' * (i + 1)).rjust(triangle_size) }
end

triangle(5)
triangle(9)
