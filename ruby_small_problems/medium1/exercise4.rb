=begin
***** P
I: An integer, representing total number of switches
O: An array, representing which lights are on
- n represents both the total number of switches and the amount of rounds
- Each round increments which lights are switched
  - 1: 1, 2, 3
  - 2: 2, 4, 6
  - 3: 3, 6, 9
  ...
* Lights start off as off
* Light 1 will always be on
* Light n will always be off
* Seems like n will always create the same light pattern
  - [1, 4, 9]

MM: for 5 lights
1: [1, 2, 3, 4, 5]
2: [1, X, 3, X, 5]
3: [1, X, X, X, 5]
4: [1, X, X, 4, 5]
5: [1, X, X, 4, X]

Useful methods?
- index number
- Create a light switch method (true/false)

***** E
- 1: [1]
- 2: [1, X]
- 3: [1]
- 5: [1, 4]
- 10: [1, 4, 9]

***** D
- An array for the lights

***** A
DEF switch (switch)
- if on then off

DEF light_switch (n)
- INIT light_arr
  - 1..n
- INIT status to false
- LOOP (upto)
  - Switch lights on/off
  - 




=end