/* 

5:05 // 5:46

PROBLEM
I: A number, representing the number of total switches/repetitions
O: An array, representing the lights that are on after n repetitions

- Each pass is a new consecutive number
    - pass 1 is 1s
    - pass 2 is 2s
    - pass 3 is 3s
    - ...
- n will represent both the amount of passes and the length of the switches
- Will always receive one int arg
- If 0, return an empty array
- Only positive values
- 

EXAMPLE
5 => [1, 4]
[x, x, x, x, x] 0
[o, o, o, o, o] 1
[o, x, o, x, o] 2
[o, x, x, x, o] 3
[o, x, x, o, o] 4
[o, x, x, o, x] 5
1 and 4 are on

DATA STRUCTURE
- An array for all the switches
    - Iterate through the switches to turn on and off
    - Use true for on, false for off

switches = [o, x, x, o, x]
count = 5
onSwitches = [1, 4]

APPLICATION
switchBoard = [o, x, o, x, o]
startIdx = 1
count = 2

ALGORITHM
1. Validate the input
    - If number is 0, return []
2. Create an array of switches, all positioned false
    - Use createSwitchBoard HELPER
3. Iterate through the switches, switching them on and off
    - Use a for loop (startIdx = 0; startIdx < switchBoard length)
        - Use switchLights HELPER
4. Return the switch numbers that are true
    - Use and return onSwitches HELPER
    - 

HELPERS
createSwitchBoard(totalSwitches)
- Initialize switchBoard to []
- Use a for loop (count = 1, count <= totalSwitches)
    - push false to switchBoard
- Return switchBoard

switchLights(switchBoard, startIdx)
- Initialize count to startIdx + 1
- Use a for loop (i = startIdx, i < switchboard length, i + count)
    - Switch the current switchboard index
        - Reassign current switchboard index to switch HELPER

switch(light)
- if light
    - return false
- Otherwise
    - return true

onSwitches(switchBoard)
- Initialize result to []
- Iterate through switchBoard (forEach with index)
    - If current element is true
        - Push the index + 1 to result
- Return result
*/

function lightsOn(totalSwitches) {
  if (totalSwitches === 0) return [];

  const switchBoard = createSwitchBoard(totalSwitches);
  for (let startIdx = 0; startIdx < totalSwitches; startIdx++) {
    switchLights(switchBoard, startIdx);
  }

  return onSwitches(switchBoard);
}

function onSwitches(switchBoard) {
  const result = [];
  switchBoard.forEach((status, index) => {
    if (status) result.push(index + 1);
  });

  return result;
}

function switchLights(switchBoard, startIdx) {
  let count = startIdx + 1;
  for (let i = startIdx; i < switchBoard.length; i += count) {
    let currentStatus = switchBoard[i];
    switchBoard[i] = flipSwitch(currentStatus);
  }
}

function createSwitchBoard(totalSwitches) {
  const switchBoard = [];
  for (let count = 1; count <= totalSwitches; count++) {
    switchBoard.push(false);
  }

  return switchBoard;
}

const flipSwitch = light => !light;

// Happy Path
console.log(lightsOn(5)); // [1, 4]
console.log(lightsOn(3)); // [1]
console.log(lightsOn(0)); // []

// Additional Test Case

console.log(lightsOn(100));