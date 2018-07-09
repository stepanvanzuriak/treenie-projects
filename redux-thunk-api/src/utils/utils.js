/**
 * Divide array by chunks
 *
 * @param {array} array  Array to divide
 * @param {number} size  Chunk size
 * @returns {array}
 */
export const chunks = (array = [], size = 0) => {
  const result = []
  let tmpArray = []
  let count = 0

  size = size || 0
  array = array || []

  if (size === 0) {
    return array
  }

  array.forEach(element => {
    count++
    tmpArray.push(element)

    if (count === size) {
      result.push(tmpArray)
      count = 0
      tmpArray = []
    }
  })

  if (count !== 0) {
    result.push(tmpArray)
  }

  return result
}
