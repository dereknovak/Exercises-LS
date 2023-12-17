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
 - [1, 4, 9, 16...]

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
- A hash for on/off per light
***** A

DEF switch (switch)
- if on then off
DEF light_switch (n)
- INIT light hash
 - 1..n make k/v to false
- INIT lights
 - keys
- INIT status to false
- LOOP (upto)
 - Switch lights on/off if multiple of n
- RETURN lights that are on

=end

def switch(value)
 value ? false : true
end
def multiple?(num1, num2)
 num1 % num2 == 0
end

def light_switch(n)
 lights = {}
 (1..n).each { |i| lights[i] = false }
 1.upto(n) { |i| lights.each { |k, v| lights[k] = switch(v) if multiple?(k, i) } }
 lights.keys.select { |k| lights[k] }
end
p light_switch(55)