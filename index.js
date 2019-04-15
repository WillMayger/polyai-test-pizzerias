
function generateArray(n, fill = () => 0) {
  return new Array(n)
    .fill(fill());
}

function generateMatrix(n) {
  return generateArray(n, () => generateArray(n));
}

function getHighestNumber(matrix) {
  return Math.max.apply(Math, matrix.flat());
}

// loops over matrix, and provides all variables to one callback
function matrixLooper(matrix, callback) {
  return matrix
    .map(
      (first, firstIndex) => (
        first.map(
          (second, secondIndex) => callback(
            firstIndex + 1,
            secondIndex + 1,
            second,
            first,
          ),
        )
      ),
    );
}

function calcCityPizzerias(n, m) {
  let cityMatrix = generateMatrix(n);
  let count = 0;

  // x = x coordinate
  // y = y coordinate
  // r = delivery distance
  return cityPizzerias = (x, y, r) => {
    cityMatrix = matrixLooper(
      cityMatrix,
      (indexY, indexX, block) => {
        // for loop cross checks the distance from pizzeria
        // according to the r parameter
        for (let i = 0; i <= n; i++) {
          // if r param is within the distance of this y row
          const onRow =
            indexY + i === y
            || indexY - i === y;

          // if the x value is within the distance of r
          const inRBlocks =
            indexX >= x - (r-i)
            && indexX <= x + (r-i);

          // if statement combining booleans
          if (onRow && inRBlocks) {

            // if true, add one to that block and return.
            return block + 1;
          }
        }

        // return without changing
        return block;
      },
    );
    // increment counter by one (m value)
    count++;

    // if count has reached m return final value otherwise return closure to be run again.
    return m === count
      ? [getHighestNumber(cityMatrix), cityMatrix]
      : cityPizzerias;
  };
}

// n = size of city squared
// m = number of pizzerias in the city
function calculateMostPizzerias(n, m) {
  if (typeof m === 'undefined' || !m) {
    throw new Error('No m value provided');
  }

  return calcCityPizzerias(n, m);
}

module.exports = {
  generateArray,
  generateMatrix,
  getHighestNumber,
  matrixLooper,
  calcCityPizzerias,
  calculateMostPizzerias,
};
