=begin

PEDAC Template
==============

(Understand the) Problem
------------------------

-  Inputs: A string
-  Output: The string wrapped in a box
+-----+
|     |
| Str |
|     |
+-----+


---

**Problem Domain:**

- PRINTS the string inside the box, centered
- If string is empty, just prints the box.
- The input will always fit in terminal window

---

**Implicit Requirements:**

- Upper and lower edges of banner need to grow with string size
---

**Clarifying Questions:**

1.
2.
3.

---

**Mental Model:**
- Will likely use string interpolation
- Upper and lower edges of box need to 

---

Examples / Test Cases / Edge Cases
----------------------------------

**Examples:**

print_in_box('To boldly go where no one has gone before.')
+--------------------------------------------+
|                                            |
| To boldly go where no one has gone before. |
|                                            |
+--------------------------------------------+

print_in_box('')
+--+
|  |
|  |
|  |
+--+

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

---

Algorithm
---------

Code
----

=end

def print_in_box(str)
  dashes = ''
  spaces = ''
  str.size.times { dashes << '-' }
  str.size.times { spaces << ' ' }

  puts "+-#{dashes}-+"
  puts "| #{spaces} |"
  puts "| #{str} |"
  puts "| #{spaces} |"
  puts "+-#{dashes}-+"
end

print_in_box('To boldly go where no one has gone before.')