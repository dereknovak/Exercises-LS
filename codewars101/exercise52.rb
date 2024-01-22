=begin

# BOUCNING BALLS

***** P
I: 3 integers
- h (height of drop)
- bounce (how high it bounces)
- window (between the 2)

FOR A VALID SCENARIO
- h > 0
- 0 < bounce  < h
- h < window

- If condition is not met, return -1
- Ball will bounce its number compared to h each iteration

***** E
30, .75, 1.5 => 21

30 * .75 => 22.5
22.5 * .75 => 16.875
12.65625
9.4
7.1
5.3
4.0
3.0
2.25
1.6
1.2-------

Each drop = 2 passes
1 extra pass on the first drop

***** D

***** A
- Check if its a valid input
  - return -1 if not
- Initialize window_pass
- Add 1 pass
- Loop until h is less than window
  - Update height of bounce
  - Pass + 2
- Return window_pass
=end

def valid_input?(h, bounce, window)
  h > 0 &&
  0 < bounce &&
  bounce < 1 &&
  window < h
end

def bouncingBall(h, bounce, window)
  return -1 unless valid_input?(h, bounce, window)
  
  window_pass = 1
  loop do
    h *= bounce
    break if h <= window
    window_pass += 2
  end

  window_pass
end

p bouncingBall(3, 0.66, 1.5) == 3
p bouncingBall(30, 0.66, 1.5) == 15
p bouncingBall(30, 0.75, 1.5) == 21
p bouncingBall(30, 0.4, 10) == 3
p bouncingBall(40, 1, 10) == -1
p bouncingBall(-5, 0.66, 1.5) == -1
p bouncingBall(1, 0.66, 0.66) == 1
p bouncingBall(1, 0.66, 1) == -1