const assert = require('assert');
const {
  generateArray,
  generateMatrix,
  getHighestNumber,
  matrixLooper,
  calcCityPizzerias,
  calculateMostPizzerias,
} = require('../index');

describe('generateArray', function() {
  it('Should return an array with the length of 5', function() {
    const newArray = generateArray(5);
    assert
      .equal(newArray.length, 5);
  });

  it('Should fill an array with the number 0', function() {
    const newArray = generateArray(5);
    assert
      .equal(newArray.join(''), '00000');
  });

  it('Should fill an array with the number 5', function() {
    const newArray = generateArray(5, () => (5));
    assert
      .equal(newArray.join(''), '55555');
  });
});

describe('generateMatrix', function() {
  it('Should return a nested array', function() {
    const newMatrix = generateMatrix(1);
    assert
      .equal(Array.isArray(newMatrix[0]), true);
  });

  it('Should have a length of 2 * 2', function() {
    const newMatrix = generateMatrix(2);
    assert
      .equal(newMatrix.flat().length, 2 * 2);
  });
});

describe('getHighestNumber', function() {
  it('Should return 9', function() {
    const newMatrix = [
      [1, 2, 3, 4],
      [0, 1, 9, 8],
    ];
  
    assert
      .equal(getHighestNumber(newMatrix), 9);
  });
});

describe('matrixLooper', function() {
  it('Should loop over a matrix and return the correct values', function() {
    const newMatrix = matrixLooper(
      [
        [1, 2, 3, 4],
        [1, 2, 3, 4],
      ],
      (indexY, indexX, val) => {
        return val + 1;
      },
    );

    assert
      .equal(newMatrix[0][0], 2);

    assert
      .equal(newMatrix[1][3], 5);

    assert
      .equal(newMatrix[0].join(''), '2345');

    assert
      .equal(newMatrix[1].join(''), '2345');
  });
});


describe('calcCityPizzerias', function() {
  it('Should return 2 for the example values', function() {
    const [citySolution] = calcCityPizzerias(5, 2)(3, 3, 2)(1, 1, 2);
    assert
      .equal(citySolution, 2);
  });

  it('Should return 1 for the values provided', function() {
    const [citySolution] = calcCityPizzerias(5, 1)(3, 3, 2);
    assert
      .equal(citySolution, 1);
  });
});

describe('calculateMostPizzerias', function() {
  it('Should return 0 if no m is available', function() {
    try {
      calculateMostPizzerias(5)(3, 3, 2)(1, 1, 2);
    } catch (e) {
      assert
      .equal(e.message, 'No m value provided');
    }
  });

  it('Should return 2 for the example values', function() {
    const [citySolution] = calculateMostPizzerias(5, 2)(3, 3, 2)(1, 1, 2);
    assert
      .equal(citySolution, 2);
  });

  it('Should return 1 for the values provided', function() {
    const [citySolution] = calculateMostPizzerias(5, 1)(3, 3, 2);
    assert
      .equal(citySolution, 1);
  });

  it('Should return 2 for the example values', function() {
    const [citySolution] = calculateMostPizzerias(10, 2)(3, 3, 2)(1, 1, 2);
    assert
      .equal(citySolution, 2);
  });

  it('Should return 1 for the example values', function() {
    const [citySolution] = calculateMostPizzerias(10, 2)(3, 3, 2)(9, 9, 2);
    assert
      .equal(citySolution, 1);
  });
});