status = ['awake', 'tired'].sample

action = "Be productive!" if status == "awake"
action = "Go to sleep!" if status == "tired"

puts action