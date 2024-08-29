/* 

ALGORITHM:
- Group all similar values togethers
    - obj
- Iterate thru nested groups
    - output name and their count

*/

function countOccurrences(vehicles) {
  const groups = {};

  vehicles.forEach(vehicle => {
    if (Object.keys(groups).includes(vehicle)) {
      groups[vehicle] += 1;
    } else {
      groups[vehicle] = 1;
    }
  });

  logOccurrences(groups);
}

function logOccurrences(groups) {
  for (let vehicle in groups) {
    console.log(`${vehicle} => ${groups[vehicle]}`);
  }
}

const vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
  'motorcycle', 'suv', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);

// console output
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2
// suv => 1