=begin

# SHERLOCK ON POCKETS

I: pockets hash and 'allowed items'
O: An array of name-keys, or nil

***** P
- If no suspects, then nil
- If a suspect has something that is not allowed, they will be added to the array

***** E
pockets = { bob: [1],   tom: [2, 5],   jane: [7] } 
Allowsed: 1, 7
Suspects: :tom

***** D
- An array for the allowed numbers
- An array for the suspects

***** A
- INIT suspects
- ITERATE thru each suspect's values
  - If an item is not in the allowed_items value, PUSH they're name (key) to suspects
- RETURN nil if suspects is empty
- RETURN suspects
=end

pockets = { bob: [1], tom: [2, 5], jane: [7] }

def find_suspects(pockets, allowed_nums)
  suspects = pockets.each_with_object([]) do |(k, v), suspects|
               next if v == nil
               v.each { |num| suspects << k unless allowed_nums.include?(num) }
             end

  suspects.empty? ? nil : suspects.uniq
end

p find_suspects(pockets, [1, 2]) == [:tom, :jane]
p find_suspects(pockets, [1, 7, 5, 2]) == nil
p find_suspects(pockets, []) == [:bob, :tom, :jane]
p find_suspects(pockets, [7]) == [:bob, :tom] 