import moment from 'moment'

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

/**
 * Formating function for books from api
 *
 * @param {object} book Book to format
 * @returns {object} Formated book
 */
export const formatBook = book => ({
  ...book,
  Description: book.Description.substr(0, 100),
  Excerpt: book.Excerpt.substr(0, 150),
  PublishDate: moment(book.PublishDate).format('L')
})
