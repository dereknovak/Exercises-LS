/* 
This took me 1.25 hours

PROBLEM
I: A 2D array with numbers
O: An array of strings, representing directions to exit

- 0 => carparking spaces
- 1 => staircases
    - Use to go down a level
    - There will only be one staircase per level
- 2 => Starting position
- EXIT => bottom right of ground floor
- Must return the QUICKEST route
- If combining directions, add together

EXAMPLE
  [2, 0, 0, 1, 0],
  [0, 0, 0, 1, 0],
  [0, 0, 0, 0, 0]

  3 => 2
      - R3
  2 => 1

  [2, 0, 0, 1, 0],
  [0, 1, 0, 0, 0],
  [0, 0, 0, 0, 0]

DATA STRUCTURE
- Use array to track indexes

- Find starting position
- At this position, check left and right until 1 is found, then count spaces
- Repeat until last row
- Find distance to last index

ALGORITHM
1. Find the currentPosition
    - Initialize startingPosition
    - Begin for loop (length of garage, row)
        - Begin for loop (length of row, col)
            - If grid r/c === 2
                - reassign startingPosition to [row, col]
2. Capture path to the ground level
    - Initialize GROUND_LEVEL_IDX to garage length - 1
    - Initialize exitPath to an empty array
    
    - Start a while loop (currentPosition row !== GROUND_LEVEL_IDX)
          - Initialize currentLevel to garage at currentPosition row
          - Find position of 1
              - indexOf 1 at the currentLevel
              - Assign to stairsLocation
          - Initialize direction to
              - If stairsLocation is greater than currentPosition col
                  - R
              - Otherwise
                  - L
          - Find absolute value of currentPosition col - stairsLocation
              - Assign to distance
          - Push Direction + String(Distance) to exitPath

          - Increment currentPosition row + 1
          - Reassign currentPosition col to stairsLocation

          - Initialize downwardTravel to 1
          - Start a while loop (current position in garage at current r/c === 1)
              - Increment downwardTravel by 1
              - Increment currentPosition row by 1
          - Push D + String(dowardTravel) to exitPath 
3. Capture Path to the exit
    - Initialize finalStretch to last row of garage, slice from the current col
    - If its length is greater than 1 (not on corner)
        - Push R + the length of finalStretch - 1 to exitPath
4. Return the exitPath

*/

function parkingExit(garage) {
  const ROW = 0;
  const COL = 1;
  const GROUND_LEVEL_IDX = garage.length - 1;
  const exitPath = [];

  const currentPosition = [];
  let spotFound = false;

  for (let r = 0; r < garage.length; r++) {
    for (let c = 0; c < garage[r].length; c++) {
      if (garage[r][c] === 2) {
        currentPosition.push(r, c);
        spotFound = true;
        break;
      }
    }

    if (spotFound) break;
  }

  while (currentPosition[ROW] !== GROUND_LEVEL_IDX) {
    let currentLevel = garage[currentPosition[ROW]];
    let stairsLocation = currentLevel.indexOf(1);

    let direction = stairsLocation > currentPosition[COL] ? 'R' : 'L';
    let distance = Math.abs(stairsLocation - currentPosition[COL]);

    exitPath.push(direction + String(distance));
    currentPosition[ROW] += 1;
    currentPosition[COL] = stairsLocation;

    let downwardTravel = 1;
    while (garage[currentPosition[ROW]][currentPosition[COL]] === 1) {
      downwardTravel += 1;
      currentPosition[ROW] += 1;
    }

    exitPath.push(`D${downwardTravel}`);
  }

  const finalStretch = garage[currentPosition[ROW]].slice(currentPosition[COL]);

  if (finalStretch.length > 1) {
    exitPath.push(`R${finalStretch.length - 1}`);
  }

  return exitPath;
}

// TEST CASES

console.log(parkingExit([
  [1, 0, 0, 0, 2],
  [0, 0, 0, 0, 0]
]));
// ["L4", "D1", "R4"]

console.log(parkingExit([
  [2, 0, 0, 1, 0],
  [0, 0, 0, 1, 0],
  [0, 0, 0, 0, 0]
]));
// ["R3", "D2", "R1"]

console.log(parkingExit([
  [0, 0, 0, 0, 2]
]));
// []

console.log(parkingExit([
  [2, 0, 0, 1, 0],
  [0, 1, 0, 0, 0],
  [0, 0, 0, 0, 0]
]));
// ["R3", "D1", "L2", "D1", "R3"]

console.log(parkingExit([
  [0, 0, 0, 1, 0],
  [0, 1, 0, 0, 0],
  [0, 2, 0, 0, 0]
]));
// ["R3"]
