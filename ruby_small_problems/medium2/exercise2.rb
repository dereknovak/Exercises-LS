=begin

***** P
I: A string, to check against the blocks
O: A boolean, whether the string passes/fails

- Letters are divided into groups of 2
  - Can only use one letter from the block
- Each block can only be used once

B:O   X:K   D:Q   C:P   N:A
G:T   R:E   F:S   J:W   H:U
V:I   L:Y   Z:M

***** E
block_word?('BATCH') == true
block_word?('BUTCH') == false
block_word?('jest') == true

***** D
- A hash, containing each block
- Arrays containing the letters

***** A
DEFINE block_word? (str)
- INIT blocks
- INIT blocks_used
- Divide str into uppercase characters
- ITERATE chars
  - Add block num of char to blocks_used
  - If block_used has the block, return false
- RETURN true
END

=end

def block_word?(str)
  blocks = { 1 =>  %w(B O), 2 =>  %w(X K), 3  => %w(D Q), 4 => %w(C P),  5 => %w(N A),
             6 =>  %w(G T), 7 =>  %w(R E), 8  => %w(F S), 9 => %w(J W), 10 => %w(H U),
             11 => %w(V I), 12 => %w(L Y), 13 => %w(Z M) }
  blocks_used = []

  str.upcase.each_char do |char|
    block = blocks.find { |_, v| v.include?(char) }.first
    return false if blocks_used.include?(block)
    blocks_used << block
  end

  true
end

p block_word?('BATCH') == true
p block_word?('BUTCH') == false
p block_word?('jest') == true

# *****

BLOCKS = %w(BO XK DQ CP NA GT RE FS JW HU VI LY ZM)

def block_word?(str)
  up_string = str.upcase
  BLOCKS.none? { |block| up_string.count(block) >= 2 }
end

p block_word?('BATCH') == true
p block_word?('BUTCH') == false
p block_word?('jest') == true