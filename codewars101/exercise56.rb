=begin

# FIND THE NEXUS OF THE CODEWARS UNIVERSE

***** P
I: A hash, rep the rank/honor
O: An integer, rep The rank that is the closest, or the lowest if multiple

- key => rank
- value => honor

***** E
{1 => 10, 2 => 6, 3 => 4, 5 => 1}
3 is the closest

***** D
- A hash, for the rank/honor
- A hash, with the distance between numbers

***** A
- init proximity array
- push the proximity and rank into proximity array
- return the first iteration of the smallest proximity
=end

def nexus(hash)
  proximity = []
  hash.each { |rank, honor| proximity << [(rank - honor).abs, rank] }
  proximity.sort.first.last
end

p nexus({1 => 3, 3 => 3, 5 => 1}) == 3
p nexus({1 => 10, 2 => 6, 3 => 4, 5 => 1}) == 3
p nexus({1 => 10, 2 => 3, 3 => 4, 5 => 1}) == 2 