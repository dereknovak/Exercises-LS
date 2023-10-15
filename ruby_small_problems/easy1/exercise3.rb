=begin

PEDAC Template
==============

(Understand the) Problem
------------------------

-  Inputs: A positive integer
-  Output: A string of 1s and 0s.

---

**Problem Domain:**

- Inputted value is a positive integer
- 1s and 0s must alternate
- Returned value must start with 1
- Length of returned string must match inputted value
- 
---

**Implicit Requirements:**

- Will have to initialize a string
- Will have to use concatenation to add 1s and 0s to string
---

**Clarifying Questions:**

1.
2.
3.

---

**Mental Model:**

- Initialize a new string to push the 1s and 0s into
- Must use a loop, most likely the `times` loop bc we can start at 1
- Within loop, push values to new string
  - If even iteration push a 1
  - If odd iteration push a 0
- Print out the new string
---

Examples / Test Cases / Edge Cases
----------------------------------

**Examples:**

puts stringy(6) == '101010'
puts stringy(9) == '101010101'
puts stringy(4) == '1010'
puts stringy(7) == '1010101'

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

Define method `stringy` with 1 parameter (int)
initialize new_string
int times perform LOOP
  If iteration is even, push 1 to new_string
  If iteration is odd, push 0 to new_string
END LOOP
print new_string
---

Algorithm
---------

Define `stringy` (int)
new_string = new
int times LOOP
  if iteration is even?
    push 1 to new_string
  else
    push 0 to new_string
  end
new_string
`
Code
----

=end

def stringy(int)
  new_string = ''
  int.times { |i| new_string.concat(i.even? ? '1' : '0') }
  new_string
end

puts stringy(6) == '101010'
puts stringy(9) == '101010101'
puts stringy(4) == '1010'
puts stringy(7) == '1010101'

=begin

On line 1, method call stringy is defined, with int as a parameter. On line 2,
method local variable new_string is initialized, referencing an empty string
object. On line 3, the #times method is called on method local variable int,
and is passed a block with parameter i, that will repeat as many times as the
value of int indicates. Within the block, the method #concat is called on
new_string, which uses a ternary operator to concatenate either string objects
'1' or '0' depending on whether the loop iteration, referenced by block local
variable i, is even or odd, respectively. Because #times begins with iteration
0, the sequence will always begin with an even iteration and alternate back and
forth until the value of int's iteration is met. After iteration is complete,
new_string, now referencing a series of 1's and 0's that's length matches the
value of int, is returned.

=end