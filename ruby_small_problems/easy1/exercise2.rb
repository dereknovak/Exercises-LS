=begin

PEDAC Template
==============

(Understand the) Problem
------------------------

-  Inputs: Integer (+,-, or 0)
-  Output: Boolean. True if odd, false if not

---

**Problem Domain:**

- Define method `is_odd?`
- Cannot use `#odd?` or `#even?`
- Returns `true` if integer is odd
- Returns 'false' if integer is even
- Don't have to worry about integer validation
- RETURNS, does not print
---

**Implicit Requirements:**


---

**Clarifying Questions:**

1.
2.
3.

---

**Mental Model:**

- Use math to determine if a value is even or odd
- Will have to use floats
- Will have to use modulo for remainders

---

Examples / Test Cases / Edge Cases
----------------------------------

**Examples:**

-  Example 1
  -  Inputs: 2
  -  Output: false
-  Example 2
  -  Inputs: 5
  -  Output: true
   Example 3
  - Inputs: 0
  - Outputs: false

---

_Your Test Cases:_

-  Example 3
  -  Inputs: -17
  -  Output: true

---

_Your Edge Cases:_

-  Example 4
  -  Inputs:
  -  Output:

---

Data Structure
--------------
- define method `is_odd?` with 1 parameter (int)
- int divided by 2 has remainder > 0

---

Algorithm
---------
- define `is_odd?` (int)
- int / 2.0 remainder > 0

Code
----

=end

def is_odd?(int)
  int % 2 > 0
end

puts is_odd?(2)    # => false
puts is_odd?(5)    # => true
puts is_odd?(-17)  # => true
puts is_odd?(-8)   # => false
puts is_odd?(0)    # => false
puts is_odd?(7)    # => true