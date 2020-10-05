function countOccurrences(vehicles) {
  results = {};
  vehicles.forEach(vehicle => {
    results[vehicle] = results[vehicle] || 0
    results[vehicle] += 1
  });
  return results
}
const vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
'motorcycle', 'motorcycle', 'car', 'truck'];

console.log(countOccurrences(vehicles));

// console output
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2