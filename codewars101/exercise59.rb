=begin

# WHICH ARE IN?

***** P
I: 2 arrays of strings
O: A new array, rep the first array sorted by strings that are substrings of 2nd array

- If not a substring in 2nd array, will not be returned
- inputs must not be mutated
- output array should not have duplicates

***** E
arp, live, strong
lively, alive, harp, sharp, armstrong

LIVEly, hARP, armSTRONG
arp, live, strong

***** D
- Both inputs and outputs are arrays

***** A
- Determine which strings in arr1 are substrings in arr2
  - Iterate thru arr1
    - Do any of the words in arr2 include the subarray?
    - If so, return that value
- Remove repeated substrings
- Sort the strings alphabetically
=end

def in_array(arr1, arr2)
  arr1.select { |str| arr2.any? { |word| word.include?(str) } }.uniq.sort
end

p in_array(['arp', 'live', 'strong'], ['lively', 'alive', 'harp', 'sharp', 'armstrong'])