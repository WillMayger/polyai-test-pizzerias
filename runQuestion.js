const {
  calculateMostPizzerias,
} = require('./index');

const [outcome, matrix] = calculateMostPizzerias(5, 2)(3, 3, 2)(1, 1, 2);

console.log('Calculating blocks with shared pizzerias...');
console.log('Using the following sequence of inputs: [5, 2], [3, 3, 2], [1, 1, 2]');
console.log(`Outcome: ${outcome}`);
console.log('Matrix (from top-left, instead of bottom-left):');
console.log(matrix);