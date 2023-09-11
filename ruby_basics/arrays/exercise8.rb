arr = ['Dave', 7, 'Miranda', 3, 'Jason', 11]

dave = arr[0..1]
miranda = arr[2..3]
jason = arr[4..5]

family = Array.new
family.push(dave, miranda, jason)

p family
