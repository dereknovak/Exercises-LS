name = 'Roger'

puts name.downcase! == 'RoGeR'.downcase   # I used this before seeing hint
puts name == 'DAVE'.downcase

# or

puts name.casecmp?('RoGeR')   # 'casecmp' returns 0 or 1, 'casecmp?' returns a boolean
puts name.casecmp?('DAVE')