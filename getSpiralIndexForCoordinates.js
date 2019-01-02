var getNthTriangularNumber = require('triangular-numbers/getNthTriangularNumber')

module.exports = function (coordinates) {
  var x = coordinates[0]
  var y = coordinates[1]
  var level = Math.max(Math.abs(x), Math.abs(y))

  if (x === 0 && y === 0) {
      return 0
  }

  var base = getNthTriangularNumber(level - 1) * 8

  if (x > Math.abs(y) || (x === y && x > 0)) {
    return base + level + y
  } else if ((y > Math.abs(x) || y === -x) && y > 0) {
    return base + (level * 4) - (level) - x
  } else if (x < y || x === y && x < 0) {
    return base + (level * 5) - y
  } else if (y < x || -y === x && y < 0) {
    return base + (level * 7) + x
  }
}
