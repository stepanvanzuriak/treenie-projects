/**
 * Divide array by chunks
 *
 * @param {array} array  Array to divide
 * @param {number} size  Chunk size
 * @returns {array}
 */
export const chunks = (array, size) => {
  const result = []
  let tmpArray = []
  let count = 0

  array.forEach(element => {
    count++
    tmpArray.push(element)

    if (count === size) {
      result.push(tmpArray)
      count = 0
      tmpArray = []
    }
  })

  return result
}
