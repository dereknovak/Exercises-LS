=begin

PEDAC Template
==============

(Understand the) Problem
------------------------

-  Inputs:
          - A string, to be repeated
          - An integer, indicate # of repetitions
-  Output:
          - Inputted string repeated x times

---

**Problem Domain:**

- Definte a new method, `repeat`
- Takes 2 arguments in parameter
- Inputted string should be printed
- Inputted integer is the number of repetitions
- The method should PRINT the result
---

**Implicit Requirements:**

- The output should appear on separate lines
---

**Clarifying Questions:**

1.
2.
3.

---

**Mental Model:**

Create a loop that prints the string passed in as an argument. The number of
iterations will be indicated by the integer passed in as an argument.

---

Examples / Test Cases / Edge Cases
----------------------------------

**Examples:**

-  Example 1
  -  Inputs: repeat('Hello', 3)
  -  Output: Hello
             Hello
             Hello
-  Example 2
  -  Inputs: repeat('Goodbye', 4)
  -  Output: Goodbye
             Goodbye
             Goodbye

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
- Definite method, taking 2 arguments as parameter (str, iterations)
- Perform iteration x times
  - print str

---

Algorithm
---------
- define `repeat` (str, iterations)
LOOP START
- iterations times print str
LOOP END

Code
----

=end

def repeat(str, iterations)
  iterations.times { puts str }
end

repeat('Hello', 3)