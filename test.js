const getLatticeCoordinatesFor = require('./getLatticeCoordinatesFor')
const getSpiralIndexForCoordinates = require('./getSpiralIndexForCoordinates')
const indexFile = require('./')

const numbersAndTheirCoordinates = [
  [0, [0, 0]],
  [1, [1, 0]],
  [2, [1, 1]],
  [3, [0, 1]],
  [4, [-1, 1]],
  [5, [-1, 0]],
  [6, [-1, -1]],
  [7, [0, -1]],
  [8, [1, -1]],
  [9, [2, -1]],
  [10, [2, 0]],
  [11, [2, 1]],
  [12, [2, 2]],
  [13, [1, 2]],
  [14, [0, 2]],
  [15, [-1, 2]],
  [16, [-2, 2]],
  [17, [-2, 1]],
  [18, [-2, 0]],
  [19, [-2, -1]],
  [20, [-2, -2]],
  [21, [-1, -2]],
  [22, [0, -2]],
  [23, [1, -2]],
  [24, [2, -2]],
  [25, [3, -2]],
  [26, [3, -1]],
  [27, [3, 0]],
  [28, [3, 1]],
  [29, [3, 2]],
  [30, [3, 3]],
  [31, [2, 3]],
  [32, [1, 3]],
  [33, [0, 3]],
]

module.exports = [
  ...numbersAndTheirCoordinates
    .map(([index, coordinates]) => ({
      description: `getLatticeCoordinatesFor(${index}) === [${coordinates}]`,
      test: () => getLatticeCoordinatesFor(index),
      shouldEqual: coordinates,
    })),
  ...numbersAndTheirCoordinates
    .map(([index, coordinates]) => ({
      description:  `getSpiralIndexForCoordinates([${coordinates}]) === ${index}`,
      test: () => getSpiralIndexForCoordinates(coordinates),
      shouldEqual: index,
    })),
  {
    description: 'index exports getLatticeCoordinatesFor',
    test: () => indexFile.getLatticeCoordinatesFor,
    shouldEqual: getLatticeCoordinatesFor,
  },
  {
    description: 'index exports getSpiralIndexForCoordinates',
    test: () => indexFile.getSpiralIndexForCoordinates,
    shouldEqual: getSpiralIndexForCoordinates,
  },
]
