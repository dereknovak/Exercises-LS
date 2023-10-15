=begin

PEDAC Template
==============

(Understand the) Problem
------------------------

-  Inputs: 2
          - Positive integer (salary)
          - Boolean (true = bonus, false = no bonus)
-  Output:- Positive integer or 0

---

**Problem Domain:**

- Define a method, `#caluclate_bonus`
- true = bonus
- false = no bonus
- bonus is salary / 2
- Salary must be a positive integer
---

**Implicit Requirements:**

- RETURNS, does not print

---

**Clarifying Questions:**

1. Do I need to validate either input?
2.
3.

---

**Mental Model:**

- Divide the salary by 2 IF second argument is `true`

---

Examples / Test Cases / Edge Cases
----------------------------------

**Examples:**

puts calculate_bonus(2800, true) == 1400
puts calculate_bonus(1000, false) == 0
puts calculate_bonus(50000, true) == 25000

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
define method `calculate_bonus` with 2 parameters, salary and bonus_boolean
If bonus_boolean is true
  Salary / 2

---

Algorithm
---------
define calculate_bonus (salary, bonus_boolean)
IF bonus_boolean
  salary / 2

Code
----

=end

def calculate_bonus(salary, bonus)
  bonus ? (salary / 2.0) : 0
end

puts calculate_bonus(2800, true) == 1400
puts calculate_bonus(1000, false) == 0
puts calculate_bonus(50000, true) == 25000

=begin

On line 1, the method call #calculate_bonus is defined with 2 parameters:
salary, which references a positive integer, and bonus, which references a
boolean. This method employs a ternary operator, which returns half of the
value of salary if bonus references the boolean object true; otherwise, it
will return the integer '0', indicating no bonus has been given. Here, a float
is used to ensure that integers not divisible by 2 will return the appropriate
float.

=end