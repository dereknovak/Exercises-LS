/* 

1:01 // 1:28

PROBLEM
I: A string
O: A boolean, representing if the string can be made using the letter blocks

- Letter blocks can only be used once
- Each block has 2 letters
- If each block is only used once, return true
- Don't have to use all of the blocks
- If string is longer than 13 chars, return false
- Will always receive a string arg
- If empty, return null
- Case insenstive ****
- Only letters

EXAMPLE
Blocks:
B:O   X:K   D:Q   C:P   N:A
G:T   R:E   F:S   J:W   H:U
V:I   L:Y   Z:M

'BATCH'
B:O / N:A / G:T / C:P / H:U
true

'BUTCH'
B:O / H:U / G:T / C:P / H:U
false

DATA STRUCTURE
- An object to keep track of block usage
    - Each time a letter from a block is used, increment that block by 1
- An array of each letter group
    - ['bo', 'xk', 'dq'...]
    - These become keys
    - Check if any of the values are greater than 1

'BuTcH'
['bo', 'xk', 'dq', 'cp', 'na', 'gt', 're', 'fs', 'jw', 'hu', 'vi', 'ly', 'zm']
blocksUsed = [bo, hu, gt, cp]
hu is included, return false
B => b
u => u
T => t
c => c
H => h

APPLICATION
'BaTcH'
blocks = ['bo', 'xk', 'dq', 'cp', 'na', 'gt', 're', 'fs', 'jw', 'hu', 'vi', 'ly', 'zm']
blocksUsed = [bo, na, gt, cp, hu]
letter = t

ALGORITHM
1. Validate the input
    - If string is empty, return null
2. Create an array of blocks
    - ['bo', 'xk', 'dq', 'cp', 'na', 'gt', 're', 'fs', 'jw', 'hu', 'vi', 'ly', 'zm']
3. Determine if any blocks are used more than once
    - Use noRepeatingBlocks HELPER
4. If none are used more than once, return true

HELPERS
noRepeatingBlocks(string)
- Initialize the blocks
- Initialize blocksUsed to []
- Iterate through each char of string (for loop)
    - Initialize letter to string at current index, lowercased
    - Find the block that includes the letter (block)
        - Use find
    - If blocksUsed includes block
        - Return false
    - Otherwise
        - Push block to blocksUsed
- Return true
*/

function isBlockWord(word) {
  if (!word.length) return null;
  return noRepeatingBlocks(word);
}

function noRepeatingBlocks(word) {
  const blocks = ['bo', 'xk', 'dq', 'cp', 'na', 'gt', 're', 'fs', 'jw', 'hu', 'vi', 'ly', 'zm'];
  const blocksUsed = [];
  
  for (let i = 0; i < word.length; i++) {
    let letter = word[i].toLowerCase();
    let block = blocks.find(group => group.includes(letter));

    if (blocksUsed.includes(block)) {
      return false;
    } else {
      blocksUsed.push(block);
    }
  }

  return true;
}

// TEST CASES

// Happy Path
console.log(isBlockWord('BATCH') === true);
console.log(isBlockWord('BUTCH') === false);
console.log(isBlockWord('jest') === true);

// Different case
console.log(isBlockWord('BaTcH') === true);
console.log(isBlockWord('BuTcH') === false);

// Repeated Letters
console.log(isBlockWord('BATTCH') === false);

// Longer than 13
console.log(isBlockWord('bxdcngrfjhvlzb') === false);

// Empty
console.log(isBlockWord('') === null);
