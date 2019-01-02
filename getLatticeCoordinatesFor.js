var getNthTriangularNumber = require('triangular-numbers/getNthTriangularNumber')
var getTriangularRootIndex = require('triangular-numbers/getTriangularRootIndex')
var isTriangular = require('triangular-numbers/isTriangular')

module.exports = function (number) {
  var level

  if (number === 0) {
    return [0, 0]
  }

  if (isTriangular( number / 8 )) {
    level = getTriangularRootIndex( number / 8 )
    return [
      level,
      -level
    ]
  }

  level = (
    number === 0
      ? 0
      : (
        getTriangularRootIndex(
          Math.floor( number / 8 )
        ) + 1
      )
  )

  var base = getNthTriangularNumber( level - 1 ) * 8

  var extra = number - base

  var quartile = Math.floor( extra / ( level * 2 ) )

  switch (quartile) {
    case 0:
      return [ level, (extra - level) ]
    case 1:
      return [ level - (extra - level * 2), level ]
    case 2:
      return [ -level, level - (extra - level * 4) ]
    case 3:
      return [ (extra - level * 6) - level , -level ]
  }
}
