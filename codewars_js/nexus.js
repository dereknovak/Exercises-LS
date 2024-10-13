/* 

1:24 // 1:58

PROBLEM
I: An object, with keys being rank and values being honor for users
O: A number, representing the rank whose rank is closest to honor

- Object provided
    - Contain ranks (not necessarily in order or consecutive)
    - Each user's rank is associated with their honor
    - We need to find the rank closest to the honor
        - If there are multiple closest, return the lowest rank (number value)
- Will always receive an object arg
- If object is empty, return null
- Always have number keys and number values
- Can mutate object
- No negative ranks
- No 0 rank
- No negative honor
- honor could be 0

EXAMPLE
{1 => 3, 3 => 3, 5 => 1} // 3 
Rank 1: 3 honor => 2 away
Rank 3: 3 honor => 0 away
Rank 5: 1 honor => 4 away
return 3

DATA STRUCTURE
- Use an object
    - Key: Possible nexuses
    - Value: Ranks that have that nexus
- Value will be an array of ranks
    - Sort from lowest - highest rank
    - Return the lowest rank 

{1: 3, 3: 3, 5: 1, 6: 6}
nexuses = {2: [1], 0: [3, 6], 4: [5]}
k: 1
v: 3
distance = 2
k: 3
v: 3
distance = 0
Object.keys = ['2', '0', '4']
sort => ['0', '2', '4']
return first element of 0 value => 3

APPLICATION
{1: 1, 5: 5, 3: 3}
tally = {O: [1, 5, 3]}
lowestNexus = '0'
nexi = ['0']
tally['0'][0]

ALGORITHM
1. Validate the input
    - If the object is empty, return {}
        - Object keys length === 0
2. Create an object with groups of similiar nexi
    - Use tallyNexi HELPER (tally)
3. Find the lowest nexus in object
    - Use getLowestNexus HELPER (lowestNexus)
4. Return the first element of that nexi's value
    - Access lowestNexus in tally, return first element

HELPERS
getLowestNexus(tally)
- Get the keys of tally (nexi)
- Sort nexi from lowest to highest
    - Convert to number
    - a - b
- Return the first element of nexi

tallyNexi(users)
- Initialize tally to {}
- Iterate through users (for in)
    - Capture the key, converted to a number (rank)
    - Capture the value (honor)
    - Initialize nexus to absolute value of rank - honor
    - If nexus is a a property of tally
        - Push the rank to its value
    - Otherwise
        - Create a property for tally
            - Key: nexus
            - Value: [rank]
- Return tally
*/

function nexus(users) {
  if (!Object.keys(users).length) return null;

  const tally = tallyNexi(users);
  const lowestNexus = getLowestNexus(tally);

  return tally[lowestNexus][0];
}

function getLowestNexus(tally) {
  const nexi = Object.keys(tally).sort((a, b) => Number(a) - Number(b));
  return nexi[0];
}

function tallyNexi(users) {
  const tally = {};
  for (let user in users) {
    const rank = Number(user);
    const honor = users[user];
    const score = String(Math.abs(rank - honor));

    if (tally[score]) {
      tally[score].push(rank);
    } else {
      tally[score] = [rank];
    }
  }

  return tally;
}

// TEST CASES

console.log(nexus({1: 3, 3: 3, 5: 1}) === 3);
console.log(nexus({1: 3, 3: 3, 5: 1, 6: 6}) === 3);
console.log(nexus({1: 3, 3: 6, 5: 1}) === 1);
console.log(nexus({1: 3, 3: 3, 5: 5}) === 3);
console.log(nexus({1: 1, 5: 5, 3: 3}) === 1);
console.log(nexus({1: 0, 3: 4, 5: 1}) === 1);
console.log(nexus({}) === null);

// ADDITIONAL TEST CASES

console.log(nexus({1: 10, 2: 6, 3: 4, 5: 1}) === 3);
console.log(nexus({1: 10, 2: 3, 3: 4, 5: 1}) === 2);