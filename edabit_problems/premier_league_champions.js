// Create a function that takes an array of football clubs with properties: name, wins, loss, draws, scored, conceded, and returns the team name with the highest number of points. If two teams have the same number of points, return the team with the largest goal difference.

// Input is an array of teams.

// How to Calculate Points and Goal Difference
// team = { name: "Manchester United", wins: 30, loss: 3, draws: 5, scored: 88, conceded: 20 }

// Total Points = (3 * wins) + (0 * loss) + (1 * draws) = (3 * 30) + (0 * 3) + (5 * 1) = 95 points
// Goal Difference = scored - conceded = 88 - 20 = 68

// champions([
//   {
//     name: "Manchester United",
//     wins: 30,
//     loss: 3,
//     draws: 5,
//     scored: 88,
//     conceded: 20,
//   },
//   {
//     name: "Arsenal",
//     wins: 24,
//     loss: 6,
//     draws: 8,
//     scored: 98,
//     conceded: 29,
//   },
//   {
//     name: "Chelsea",
//     wins: 22,
//     loss: 8,
//     draws: 8,
//     scored: 98,
//     conceded: 29,
//   },
//   ])
// ➞ "Manchester United"

/* 

PROBLEM
I: An array of teams, nested objects
O: A string, representing the team name with highest points or largest goal distance if tied

name
wins
loss
draws
scored:
conceded:

Formulas
// Total Points = (3 * wins) + (0 * loss) + (1 * draws) = (3 * 30) + (0 * 3) + (5 * 1) = 95 points
// Goal Difference = scored - conceded = 88 - 20 = 68

- Might have a 0 number
- All numbers are 0 <
- Will always be at least 2 teams
- Don't worry about including loss
- There will always be a winner

EXAMPLE
  {
    name: "Manchester United",
    wins: 30,
    loss: 3,
    draws: 5,
    scored: 88,
    conceded: 20,
  }
  95
 {
    name: "Arsenal",
    wins: 24,
    loss: 6,
    draws: 8,
    scored: 98,
    conceded: 29,
  },
72 + 0 + 8 = 80
  {
    name: "Chelsea",
    wins: 22,
    loss: 8,
    draws: 8,
    scored: 98,
    conceded: 29,
  },
66 + 8 74

DATA STRUCTURE
- Remap the given array to different objects with name, points, and goalDifference
- An array of all the highest points teams

ALGORITHM
1. Transform the given array to an object with name, points, and goalDifference
    - Use map
        - Initialize an object with name, point = 0, goalDifference = 0
        - Iterate through the currentObject (for in)
            - Use switch statement
                - If win then (number * 3) add to points
                - If draw then (number * 1) add to points
                - If scored then add to goal difference
                - If conceded then subtract from goalDifference
        - Return the currentObject
2. Find the team(s) with the highest points
    - Initialize a highestPoints array to include the team(s) with highest points
    - Sort the transformed array with highest points at beginning
    - Push the first element of sorted array to the highestPoints array
    - Compare the rest of the elements to the first index of highestPoints (for loop, start with idx 1)
        - If the points match, push it to the array
        - If they do not, break from loop
3. If the highest point teams includes just 1, return the team name
4. If there are multiple, return the team with the highest goalDifference
    - Sort the highestPoints array by the goal difference, largest first
    - Return the first element of the sorted array

*/

function champions(teams) {
  const scores = teams.map(team => {
    return {
      name: team.name,
      points: getPoints(team),
      goalDifference: getGoalDifference(team)
    };
  });

  const highestPoints = [];
  scores.sort((a, b) => b.points - a.points);
  highestPoints.push(scores[0]);

  for (let i = 1; i < scores.length; i++) {
    if (highestPoints[0].points === scores[i].points) {
      highestPoints.push(scores[i]);
    } else {
      break;
    }
  }

  if (highestPoints.length === 1) return highestPoints[0].name;
  return highestPoints.sort((a, b) => b.goalDifference - a.goalDifference)[0].name;
}

const getPoints = team => (team.wins * 3) + (team.loss * 0) + (team.draws * 1);
const getGoalDifference = team => team.scored - team.conceded;

// TEST CASES

console.log(champions([
  {
    name: "Manchester United",
    wins: 30,
    loss: 3,
    draws: 5,
    scored: 88,
    conceded: 20,
  },
  {
    name: "Arsenal",
    wins: 24,
    loss: 6,
    draws: 8,
    scored: 98,
    conceded: 29,
  },
  {
    name: "Chelsea",
    wins: 22,
    loss: 8,
    draws: 8,
    scored: 98,
    conceded: 29,
  },
  ]) === "Manchester United");

console.log(champions([
  {
    name: "Manchester United",
    wins: 30,
    loss: 3,
    draws: 5,
    scored: 88,
    conceded: 20,
  },
  {
    name: "Arsenal",
    wins: 24,
    loss: 6,
    draws: 8,
    scored: 98,
    conceded: 29,
  },
  {
    name: "Chelsea",
    wins: 100,
    loss: 8,
    draws: 1,
    scored: 98,
    conceded: 29,
  },
]) === "Chelsea");

console.log(champions([
  {
    name: "Manchester United",
    wins: 30,
    loss: 3,
    draws: 5,
    scored: 88,
    conceded: 20,
  },
  {
    name: "Arsenal",
    wins: 30,
    loss: 3,
    draws: 5,
    scored: 98,
    conceded: 29,
  }
]) === 'Arsenal');